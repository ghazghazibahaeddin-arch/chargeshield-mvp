export function calculateRisk(order: any) {
  let score = 0

  if (order.email.includes('test')) score += 30
  if (order.amount > 100) score += 20
  if (!order.hasTracking) score += 30

  return score
}
