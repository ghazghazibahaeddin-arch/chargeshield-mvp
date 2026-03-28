import { supabase } from '@/lib/supabase'

export async function runAutoRefund() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  for (const dispute of disputes || []) {
    if (dispute.riskScore > 80) {

      console.log(`Refund triggered for ${dispute.email}`)

      // تحديث الحالة فقط (لأن Gumroad API محدود)
      await supabase.from('disputes')
        .update({ status: 'refunded' })
        .eq('id', dispute.id)
    }
  }
}import { supabase } from '@/lib/supabase'

export async function runAutoRefund() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  for (const dispute of disputes || []) {
    if (dispute.riskScore > 80) {

      console.log(`Refund triggered for ${dispute.email}`)

      // تحديث الحالة فقط (لأن Gumroad API محدود)
      await supabase.from('disputes')
        .update({ status: 'refunded' })
        .eq('id', dispute.id)
    }
  }
}
