import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function submitEvidence(disputeId: string) {
  await stripe.disputes.update(disputeId, {
    evidence: {
      customer_name: "Customer",
      product_description: "Digital product",
      uncategorized_text: "Customer received the product successfully."
    }
  })
}
