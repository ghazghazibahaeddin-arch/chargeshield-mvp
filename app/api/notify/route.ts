import { sendEmail } from '@/lib/email'

export async function sendAlert(email: string, amount: number) {
  await sendEmail(
    email,
    "Refund Triggered",
    `We refunded a risky customer and saved you $${amount}`
  )
}
