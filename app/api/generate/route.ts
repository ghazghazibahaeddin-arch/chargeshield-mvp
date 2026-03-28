import { openai } from '@/lib/openai'

export async function POST(req: Request) {
  const { reason, amount } = await req.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: `
Write a professional chargeback dispute response.

Reason: ${reason}
Amount: ${amount}

Make it strong and persuasive.
`,
      },
    ],
  })

  return Response.json({
    text: completion.choices[0].message.content,
  })
}
