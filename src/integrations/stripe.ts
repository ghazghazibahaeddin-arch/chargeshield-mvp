import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' })

export async function getDisputes() {
  const disputes = await stripe.disputes.list({ limit: 100 })
  return disputes.data
}
