import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data: users } = await supabase.from('users').select('plan, plan_price')

  const MRR = users?.reduce((acc, u) => acc + Number(u.plan_price || 0), 0) || 0
  const ARR = MRR * 12

  return new Response(JSON.stringify({ MRR, ARR, totalUsers: users?.length || 0 }))
}
