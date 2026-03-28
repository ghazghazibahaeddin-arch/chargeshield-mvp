export function canGenerate(plan: string) {
  if (plan === 'free') return false
  return true
}

export function maxDisputes(plan: string) {
  if (plan === 'starter') return 20
  if (plan === 'growth') return 100
  if (plan === 'scale') return 1000
  return 5
}
