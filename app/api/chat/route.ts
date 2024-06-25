import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  baseURL: 'http://127.0.0.1:5000/v1',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, setTopic, setTone, setTemperature } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `Please generate a ${setTopic} topiced joke with a ${setTone} tone. Make it ${setTemperature}. Take a deep breath and let your mind wander. The stage is yours.`,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
