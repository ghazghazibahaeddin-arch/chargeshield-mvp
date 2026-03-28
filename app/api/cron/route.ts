import { supabase } from '@/lib/supabase'
import { decisionEngine } from '@/src/engine/decision'

export async function GET() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  for (const dispute of disputes || []) {
    const result = decisionEngine(dispute)

    await supabase.from('disputes').update({
      decision: result.action,
      money_impact: result.impact,
      status: 'processed'
    }).eq('id', dispute.id)

    // تحديث المستخدم
    await supabase.rpc('update_user_money', {
      user_id_input: dispute.user_id,
      amount_input: result.impact
    })
  }

  return Response.json({ ok: true })
}
