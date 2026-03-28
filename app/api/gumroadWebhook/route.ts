import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const body = await req.json()

  const email = body.sale.email
  const price = body.sale.price

  let plan = 'starter'

  if (price >= 299) plan = 'growth'
  if (price >= 799) plan = 'scale'

  await supabase.from('users').upsert({
    email,
    plan,
  })

  return Response.json({ ok: true })
}
