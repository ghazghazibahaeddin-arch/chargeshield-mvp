import { supabase } from '@/lib/supabase'

// وظيفة إرسال تلقائي
async function submitDispute(dispute: any) {
  // مثال على Stripe API
  // تحتاج وضع secret keys في .env
  const stripeApiUrl = `https://api.stripe.com/v1/disputes/${dispute.charge_id}/submit`
  
  await fetch(stripeApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ evidence: dispute.ai_response }),
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const dispute = body.dispute

  await submitDispute(dispute)

  // تحديث حالة الـ dispute في DB
  await supabase.from('disputes').update({ status: 'submitted' }).eq('id', dispute.id)

  return Response.json({ ok: true })
    }
