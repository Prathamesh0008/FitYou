"use client";

import ChatContainer from "./ChatContainer";

export default function ChatPopup({ onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-[320px] md:w-[380px]">
      <div className="rounded-3xl bg-[#E9F4FF] shadow-2xl border border-[#C9E3FF] overflow-hidden">
        <ChatContainer onClose={onClose} />
      </div>
    </div>
  );
}
