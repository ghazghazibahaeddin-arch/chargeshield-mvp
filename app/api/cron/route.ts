import { supabase } from '@/lib/supabase'
import { submitDispute } from './submit'

export async function GET() {
  const { data } = await supabase.from('disputes').select('*').eq('status', 'pending')
  
  for (const d of data) {
    if (d.auto_submit_enabled) {
      await submitDispute(d)
    }
  }

  return Response.json({ ok: true })
}
