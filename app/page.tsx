'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useMemo, useState } from 'react';

export default function Home() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');

  const nowLabel = useMemo(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;
    return `${displayHour}:${minutes} ${suffix}`;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#7B3AED] px-4 py-6 font-sans">
      {/* 기기 프레임 */}
      <div className="relative w-full max-w-xs rounded-[40px] bg-white/20 p-3 shadow-2xl">
        <div className="flex h-[640px] w-full flex-col rounded-[32px] bg-[#9155FF]">
          {/* 상단 상태바 / 헤더 */}
          <div className="flex flex-col gap-2 rounded-t-[32px] bg-[#9155FF] px-5 pt-6 pb-4 text-white">
            <div className="flex items-center justify-between">
              <button
                aria-label="back"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm"
              >
                ‹
              </button>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold">Michael tony</span>
                <span className="text-[10px] text-white/80">
                  +43 123-456-7890
                </span>
              </div>
              <button
                aria-label="notifications"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[12px]"
              >
                🔔
              </button>
            </div>
          </div>

          {/* 채팅 영역 */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#F5E9FF] px-4 py-4">
            {messages.length === 0 ? (
              <div className="mt-10 text-center text-xs text-zinc-500">
                메시지를 입력해서 대화를 시작해 보세요.
              </div>
            ) : (
              messages.map(message => {
                const isUser = message.role === 'user';
                return (
                  <div
                    key={message.id}
                    className={`flex w-full items-end gap-2 ${
                      isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {/* 아바타 */}
                    {!isUser && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                        <span className="text-[11px] font-semibold text-[#9155FF]">
                          AI
                        </span>
                      </div>
                    )}

                    {/* 말풍선 + 시간 */}
                    <div
                      className={`max-w-[70%] rounded-3xl px-4 py-2 text-[11px] leading-relaxed ${
                        isUser
                          ? 'rounded-br-sm bg-[#7B3AED] text-white'
                          : 'rounded-bl-sm bg-white text-[#4B4B4B] shadow-sm'
                      }`}
                    >
                      {message.parts.map((part, index) =>
                        part.type === 'text' ? (
                          <span key={index} className="whitespace-pre-wrap">
                            {part.text}
                          </span>
                        ) : null,
                      )}
                      <div
                        className={`mt-1 text-[9px] ${
                          isUser ? 'text-white/70' : 'text-zinc-400'
                        }`}
                      >
                        {nowLabel}
                      </div>
                    </div>

                    {isUser && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                        <span className="text-[11px] font-semibold text-[#7B3AED]">
                          You
                        </span>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {status === 'submitted' && (
              <div className="flex w-full items-end gap-2 justify-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-[11px] font-semibold text-[#9155FF]">
                    AI
                  </span>
                </div>
                <div className="max-w-[70%] rounded-3xl rounded-bl-sm bg-white px-4 py-2 text-[11px] text-[#4B4B4B] shadow-sm">
                  생각 중...
                  <div className="mt-1 text-[9px] text-zinc-400">{nowLabel}</div>
                </div>
              </div>
            )}
          </div>

          {/* 입력 영역 */}
          <form
            onSubmit={e => {
              e.preventDefault();
              if (input.trim() && status === 'ready') {
                sendMessage({ text: input });
                setInput('');
              }
            }}
            className="flex items-center gap-2 rounded-b-[32px] bg-[#9155FF] px-4 pb-5 pt-3"
          >
            <div className="flex-1 rounded-full bg-white/15 px-4 py-2 text-[11px] text-white/90 placeholder:text-white/60">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={status !== 'ready'}
                placeholder="Type message here..."
                className="w-full bg-transparent text-[11px] text-white placeholder:text-white/60 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'ready' || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#7B3AED] shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              aria-label="send message"
            >
              ✈
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
