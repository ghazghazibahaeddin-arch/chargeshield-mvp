export function decide(dispute: any) {
  const risk = dispute.riskScore || 50
  const probability = 0.7 - risk / 100

  if (probability < 0.5) {
    return 'refund'
  }

  return 'submit'
}
