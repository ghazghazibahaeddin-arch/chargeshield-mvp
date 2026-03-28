'use client'

import { useEffect, useState } from 'react'

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
      <h1>Dashboard</h1>

      {data.map((d: any) => (
        <div key={d.id} style={{ border: '1px solid #ccc', padding: 10 }}>
          <p>{d.reason}</p>
          <p>${d.amount}</p>
          <button onClick={() => generate(d)}>Generate</button>
        </div>
      ))}

      {result && (
        <div>
          <h2>Generated Response</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
        }
