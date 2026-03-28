'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [data, setData] = useState([])
  const [stats, setStats] = useState({})

  useEffect(() => {
    fetch('/api/disputes')
      .then(res => res.json())
      .then(d => {
        setData(d)

        const total = d.length
        const won = d.filter((x:any)=>x.status==='won').length

        setStats({
          winRate: total ? (won/total)*100 : 0,
          recovered: d.reduce((a:any,x:any)=>a+x.amount,0)
        })
      })
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Win Rate: {stats.winRate}%</p>
      <p>Recovered: ${stats.recovered}</p>

      {data.map((d:any)=>(
        <div key={d.id}>
          {d.reason} - ${d.amount}
        </div>
      ))}
    </div>
  )
}
