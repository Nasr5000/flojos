import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: messages.join('\n')
  })

  return Response.json({
    reply: response.output_text
  })
}
