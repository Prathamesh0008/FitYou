"use client";

export default function MessageBubble({ sender, text, time }) {
  const isUser = sender === "user";

  if (isUser) {
    return (
      <div className="flex justify-end mb-2">
        <div className="flex items-end gap-2">
          <div className="max-w-[70%] rounded-3xl rounded-br-md bg-[#00B7D3] px-4 py-2 text-white text-[13px] leading-relaxed shadow-md">
            <p className="whitespace-pre-line">{text}</p>
            {time && (
              <p className="mt-1 text-[10px] text-blue-100/90 text-right">
                {time}
              </p>
            )}
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0F3FF] text-[12px] font-semibold text-[#00A3C7]">
            Y
          </div>
        </div>
      </div>
    );
  }

  // bot bubble
  return (
    <div className="flex justify-start mb-2">
      <div className="flex items-start gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0F3FF] text-[12px] font-semibold text-[#00A3C7]">
          F
        </div>
        <div>
          <p className="text-[11px] text-[#6C7A96] mb-1">FitYou Assistant</p>
          <div className="max-w-[80%] rounded-3xl rounded-bl-md bg-white px-4 py-2 text-[#2A3553] text-[13px] leading-relaxed shadow-sm">
            <p className="whitespace-pre-line">{text}</p>
            {time && (
              <p className="mt-1 text-[10px] text-gray-400">{time}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
