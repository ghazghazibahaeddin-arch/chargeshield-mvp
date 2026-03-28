import { supabase } from '@/lib/supabase'
import { calculateRisk } from '@/src/engine/risk'

export async function POST(req: Request) {
  const body = await req.json()

  const email = body.sale.email
  const amount = body.sale.price

  const riskScore = calculateRisk({
    email,
    amount,
    hasTracking: false
  })

  await supabase.from('disputes').insert({
    email,
    amount,
    riskScore,
    status: 'pending'
  })

  return Response.json({ ok: true })
}
