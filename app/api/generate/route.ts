import { openai } from '@/lib/openai'

export async function POST(req: Request) {
  const body = await req.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: `
Write a strong chargeback dispute.

Reason: ${body.reason}
Amount: ${body.amount}
`,
      },
    ],
  })

  return Response.json({
    text: completion.choices[0].message.content,
  })
}
