import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const body = await req.json()

  const email = body.sale.email
  const price = body.sale.price

  // تعيين الخطة حسب السعر
  let plan = 'starter'
  if (price >= 299) plan = 'growth'
  if (price >= 799) plan = 'scale'

  // حفظ أو تحديث المستخدم في Supabase
  await supabase.from('users').upsert({
    email,
    plan,
    plan_price: price
  })

  return Response.json({ ok: true })
}
