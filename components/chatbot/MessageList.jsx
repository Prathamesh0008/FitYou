"use client";

import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  if (!messages || messages.length === 0) {
    return (
      <p className="text-center text-[12px] text-gray-400 mt-6">
        Start a conversation with FitYou Assistant.
      </p>
    );
  }

  return (
    <div>
      {messages.map((m, index) => (
        <MessageBubble
          key={m.id || `${index}-${m.time}-${Math.random()}`}
          sender={m.sender}
          text={m.text}
          time={m.time}
        />
      ))}
    </div>
  );
}
