export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">

      <h1 className="text-4xl font-bold mb-4">
        Stop Losing Money on Gumroad
      </h1>

      <p className="text-gray-400 mb-6">
        Automatically detect risky buyers and protect your revenue.
      </p>

      <div className="flex gap-4">
        <a href="https://radhiayt.gumroad.com/l/bcnma" className="bg-green-600 px-6 py-3 rounded-xl">
          Start $99
        </a>

        <a href="/dashboard" className="bg-gray-800 px-6 py-3 rounded-xl">
          Dashboard
        </a>
      </div>

      <div className="mt-10 text-gray-400">
        <p>✔ Reduce refunds</p>
        <p>✔ Detect fraud</p>
        <p>✔ Save money automatically</p>
      </div>

    </div>
  )
}
