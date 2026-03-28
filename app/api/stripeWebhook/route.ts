import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return new Response('Webhook error', { status: 400 })
  }

  // 📌 عند وصول dispute
  if (event.type === 'charge.dispute.created') {
    const dispute = event.data.object as any

    await supabase.from('disputes').insert({
      charge_id: dispute.charge,
      amount: dispute.amount / 100,
      status: 'pending',
      reason: dispute.reason,
      riskScore: 80
    })
  }

  return new Response('ok')
      }
