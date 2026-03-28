// app/api/preDispute/route.ts
import { supabase } from '@/lib/supabase'

export async function checkPreDisputes() {
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  disputes?.forEach(async dispute => {
    if (dispute.riskScore > 80) {
      // إرسال إشعار Pre-Dispute
      console.log(`Alert: High-risk transaction for ${dispute.charge_id}`)

      // خيار Auto Refund جزئي
      await supabase
        .from('disputes')
        .update({ status: 'pre-refund' })
        .eq('id', dispute.id)
    }
  })
                 }
