import { supabase } from "@/lib/supabase"

export default async function Dashboard() {

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="p-6 text-white">
        Please login first
      </div>
    )
  }

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", user.email)
    .single()

  return (
    <div className="p-6 text-white space-y-4">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="bg-green-900 p-4 rounded-xl">
        Money Saved: ${data?.money_saved || 0}
      </div>

      <div className="bg-yellow-900 p-4 rounded-xl">
        Risk Level: {data?.risk_level}
      </div>

      <div className="bg-red-900 p-4 rounded-xl">
        Refund Rate: {data?.refund_rate}%
      </div>

    </div>
  )
}
