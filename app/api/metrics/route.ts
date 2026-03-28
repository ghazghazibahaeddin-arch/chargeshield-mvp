import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data: disputes } = await supabase.from('disputes').select('*')
  const { data: users } = await supabase.from('users').select('*')

  const totalRevenue = users.reduce((acc: any, u: any) => acc + (u.plan_price || 0), 0)
  const winRate = disputes.filter(d => d.status === 'won').length / disputes.length

  return Response.json({ totalRevenue, winRate })
}
