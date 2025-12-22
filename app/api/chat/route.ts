import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, UIMessage } from 'ai';

// 스트리밍 응답 최대 지속 시간을 30초로 설정
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // 요청 본문에서 UIMessage 배열 추출
    const { messages }: { messages: UIMessage[] } = await req.json();

    // OpenAI 모델을 사용하여 스트리밍 텍스트 생성
    const result = streamText({
      model: openai('gpt-4o'),
      system: 'You are a helpful assistant.',
      messages: convertToModelMessages(messages),
    });

    // UI 메시지 스트림 응답으로 변환하여 반환
    return result.toUIMessageStreamResponse();
  } catch (error) {
    // 에러 발생 시 적절한 에러 응답 반환
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

