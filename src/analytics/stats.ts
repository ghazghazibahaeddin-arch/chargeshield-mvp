export function calculateStats(disputes: any[]) {
  const total = disputes.length
  const won = disputes.filter(d => d.status === 'won').length

  return {
    winRate: total ? (won / total) * 100 : 0,
    recovered: disputes.reduce((a, d) => a + d.amount, 0),
  }
}
