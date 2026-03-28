export async function GET() {
  console.log("Running jobs...")
  return Response.json({ ok: true })
}
