"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      {step === 1 && (
        <div className="text-center">
          <h1 className="text-2xl mb-4">Welcome to ChargeShield</h1>
          <p className="text-gray-400 mb-6">
            We help you stop losing money on Gumroad automatically.
          </p>
          <button onClick={() => setStep(2)} className="bg-green-600 px-6 py-2">
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center">
          <h1 className="text-xl mb-4">Connect your Gumroad</h1>
          <p className="text-gray-400 mb-6">
            Add your email used in Gumroad
          </p>
          <input className="p-2 text-black mb-4" placeholder="Email" />
          <button onClick={() => setStep(3)} className="bg-green-600 px-6 py-2">
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <h1 className="text-xl mb-4">You're Ready 🚀</h1>
          <button onClick={() => router.push('/dashboard')} className="bg-green-600 px-6 py-2">
            Go to Dashboard
          </button>
        </div>
      )}

    </div>
  )
      }
