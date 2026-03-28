import { openai } from '@/lib/openai'

export async function generateDispute(data: any) {
  const prompt = `
You are a legal expert in chargebacks.

Reason: ${data.reason}
Amount: ${data.amount}

Write a strong dispute with structured evidence.
`

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  })

  return res.choices[0].message.content
}
