export function decisionEngine(dispute: any) {
  const risk = dispute.riskScore || 50

  if (risk > 80) {
    return {
      action: 'refund',
      impact: -dispute.amount
    }
  }

  if (risk > 50) {
    return {
      action: 'review',
      impact: 0
    }
  }

  return {
    action: 'keep',
    impact: dispute.amount
  }
}
