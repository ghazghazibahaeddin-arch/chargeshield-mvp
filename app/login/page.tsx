"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Login() {
  const [email, setEmail] = useState("")

  const login = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert("Check your email")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          className="p-2 text-black w-full mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={login} className="bg-green-600 px-4 py-2 w-full">
          Login
        </button>
      </div>

    </div>
  )
}
