'use client'

import { useState } from 'react'
import { supabase } from '@/lib/auth'

export default function Login() {
  const [email, setEmail] = useState('')

  const login = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert('Check your email')
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  )
}
