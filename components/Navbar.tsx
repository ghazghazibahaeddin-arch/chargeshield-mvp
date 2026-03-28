export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <h1 className="text-xl font-bold">ChargeShield</h1>
      <div className="flex gap-4">
        <a href="/dashboard">Dashboard</a>
        <a href="/pricing">Pricing</a>
      </div>
    </div>
  )
}
