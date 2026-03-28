export async function GET() {
  console.log("Running background jobs...")

  // مثال: تحديث حالات disputes
  return Response.json({ ok: true })
}
