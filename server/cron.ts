// server/cron.ts
import cron from 'node-cron'
import { checkPreDisputes } from '@/app/api/preDispute/route'
import { refundGumroad } from '@/app/api/autoRefund/route'

cron.schedule('0 * * * *', async () => {
  console.log('Running all automated jobs...')
  await checkPreDisputes()
  // مثال: معالجة جميع Refunds حسب بيانات Supabase
  // await refundGumroad(email, amount)
})
