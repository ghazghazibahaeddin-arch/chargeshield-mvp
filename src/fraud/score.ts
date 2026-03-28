export function fraudScore(order: any) {
  let score = 0

  if (order.country !== order.card_country) score += 30
  if (order.email.includes("temp")) score += 20
  if (order.amount > 500) score += 10

  if (score > 50) return "HIGH"
  if (score > 20) return "MEDIUM"

  return "LOW"
}
