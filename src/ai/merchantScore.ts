export function calculateHealthScore(merchant: any) {
  const disputeRatio = merchant.total_disputes / merchant.total_orders
  const refundRate = merchant.refunds / merchant.total_orders
  const fraudTrend = merchant.fraud_flags / merchant.total_orders

  let score = 100 - (disputeRatio * 50 + refundRate * 30 + fraudTrend * 20)
  return Math.max(0, Math.round(score))
}
