export default function Stats({ stats }: any) {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div>Win Rate: {stats.winRate}%</div>
      <div>Recovered: ${stats.recovered}</div>
    </div>
  )
}
