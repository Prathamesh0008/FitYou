// components/chatbot/MessageList.jsx
"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages, isLoading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto bg-[#F7FAFF] px-3 py-3 text-[13px]">
      {messages.map((msg, index) => {
        const prev = messages[index - 1];
        const showAvatar = !prev || prev.role !== msg.role;
        const showName = showAvatar && msg.role === "assistant";

        return (
          <MessageBubble
            key={msg.id}
            message={msg}
            showAvatar={showAvatar}
            showName={showName}
          />
        );
      })}

      {isLoading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
