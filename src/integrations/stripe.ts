export function normalizeStripeDispute(d: any) {
  return {
    id: d.id,
    amount: d.amount / 100,
    reason: d.reason,
  }
}
