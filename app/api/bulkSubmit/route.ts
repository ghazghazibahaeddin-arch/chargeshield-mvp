import { supabase } from '@/lib/supabase'
import { submitDispute } from '../submit/route'

export async function POST(req: Request) {
  const body = await req.json()
  const disputeIds: string[] = body.disputeIds

  for (const id of disputeIds) {
    const { data } = await supabase.from('disputes').select('*').eq('id', id).single()
    await submitDispute(data)
  }

  return Response.json({ ok: true })
      }
