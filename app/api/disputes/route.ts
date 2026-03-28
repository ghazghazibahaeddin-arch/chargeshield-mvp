import { supabase } from '@/lib/supabase'
import { fraudScore } from '@/src/fraud/score'
import { analyze } from '@/src/ai/rootCause'

export async function GET() {
  const { data } = await supabase.from('disputes').select('*')

  const enriched = data.map((d: any) => ({
    ...d,
    risk: fraudScore(d),
    cause: analyze(d),
  }))

  return Response.json(enriched)
}
