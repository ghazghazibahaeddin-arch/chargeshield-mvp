export async function POST(req: Request) {
  const body = await req.json()

  if (body.sale) {
    const email = body.sale.email

    // هنا تحفظ المستخدم
    console.log("User paid:", email)
  }

  return Response.json({ ok: true })
}
