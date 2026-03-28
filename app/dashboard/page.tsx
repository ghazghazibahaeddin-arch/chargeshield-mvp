'use client'

import { useEffect, useState } from 'react'
import DisputeCard from '@/components/DisputeCard'

export default function Dashboard() {
  const [data, setData] = useState([])
  const [result, setResult] = useState('')

  useEffect(() => {
    fetch('/api/disputes')
      .then(res => res.json())
      .then(setData)
  }, [])

  const generate = async (d: any) => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify(d),
    })
    const json = await res.json()
    setResult(json.text)
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((d: any) => (
          <DisputeCard key={d.id} d={d} onGenerate={generate} />
        ))}
      </div>

      {result && (
        <div className="mt-6 bg-gray-900 p-4 rounded">
          <h2>AI Response</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
}
