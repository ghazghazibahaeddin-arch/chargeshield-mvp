import cron from 'node-cron'
import { sendAlert } from '@/app/api/notify/route'
import { supabase } from '@/lib/supabase'

// كل 10 دقائق (يمكنك تعديل التوقيت)
cron.schedule('*/10 * * * *', async () => {
  console.log('Running automated jobs...')
  
  const { data: disputes } = await supabase.from('disputes').select('*').eq('status', 'pending')

  disputes?.forEach(async dispute => {
    if (dispute.riskScore > 80) {
      await sendAlert(dispute.email, dispute.amount)
      // تحديث حالة النزاع
      await supabase.from('disputes').update({ status: 'alert-sent' }).eq('id', dispute.id)
    }
  })
})
