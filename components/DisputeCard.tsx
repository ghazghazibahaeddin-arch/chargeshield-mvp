export default function DisputeCard({ d, onGenerate }: any) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-800">
      <h2 className="font-bold text-lg">{d.reason}</h2>
      <p className="text-gray-400">${d.amount}</p>
      <p className="text-sm">Risk: {d.risk}</p>
      <p className="text-sm">Cause: {d.cause}</p>

      <button
        onClick={() => onGenerate(d)}
        className="mt-2 bg-green-500 px-3 py-1 rounded"
      >
        Generate
      </button>
    </div>
  )
}
