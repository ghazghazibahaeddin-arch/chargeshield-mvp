export default function Dashboard({ user }) {
  return (
    <div className="p-6 space-y-4">

      <div className="bg-green-900 p-6 rounded-xl">
        <h2 className="text-xl font-bold">Money Saved</h2>
        <p>${user.money_saved}</p>
      </div>

      <div className="bg-yellow-900 p-6 rounded-xl">
        <h2>Risk Level</h2>
        <p>{user.risk_level}</p>
      </div>

      <div className="bg-red-900 p-6 rounded-xl">
        <h2>Refund Rate</h2>
        <p>{user.refund_rate}%</p>
      </div>

    </div>
  )
}
