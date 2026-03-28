import { supabase } from '@/lib/supabase'
import { decide } from '@/src/automation/decision'
import { submitEvidence } from '../submit/route'
import { refundPayment } from '../submit/route'

export async function GET() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  for (const dispute of disputes || []) {
    const action = decide(dispute)

    if (action === 'refund') {
      await refundPayment(dispute.charge_id)
      await supabase.from('disputes').update({
        status: 'refunded'
      }).eq('id', dispute.id)
    }

    if (action === 'submit') {
      await submitEvidence(dispute.charge_id)
      await supabase.from('disputes').update({
        status: 'submitted'
      }).eq('id', dispute.id)
    }
  }

  return Response.json({ ok: true })
}import { supabase } from '@/lib/supabase'
import { decide } from '@/src/automation/decision'
import { submitEvidence } from '../submit/route'
import { refundPayment } from '../submit/route'

export async function GET() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  for (const dispute of disputes || []) {
    const action = decide(dispute)

    if (action === 'refund') {
      await refundPayment(dispute.charge_id)
      await supabase.from('disputes').update({
        status: 'refunded'
      }).eq('id', dispute.id)
    }

    if (action === 'submit') {
      await submitEvidence(dispute.charge_id)
      await supabase.from('disputes').update({
        status: 'submitted'
      }).eq('id', dispute.id)
    }
  }

  return Response.json({ ok: true })
    }
