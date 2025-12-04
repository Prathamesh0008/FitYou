// components/chatbot/ChatInput.jsx
"use client";

import { useState } from "react";

const EMOJIS = [
  "😀","😁","😂","🤣","😊","😍","😘","😄","😅","😉",
  "😎","🤩","😇","🙂","🙃","🤔","😌","🙌","👍","👏",
];

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
    setShowEmoji(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const fileMessage = {
        id: crypto.randomUUID(),
        role: "user",
        senderName: "You",
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        fileContent: reader.result,
        createdAt: new Date().toISOString(),
        isFile: true,
      };

      onSend(fileMessage);
    };

    reader.readAsDataURL(file);
  };

  const addEmoji = (emoji) => {
    setValue((prev) => prev + emoji);
  };

  return (
    <div className="relative border-t border-slate-200 bg-white px-3 py-2">
      {/* Emoji picker popup like Aktivé */}
      {showEmoji && (
        <div className="absolute bottom-14 left-3 z-30 w-60 max-h-56 overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-lg p-2 text-lg">
          <div className="grid grid-cols-6 gap-1">
            {EMOJIS.map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => addEmoji(e)}
                className="hover:bg-slate-100 rounded-lg p-1"
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-end gap-2">
        {/* Emoji icon */}
        <button
          type="button"
          onClick={() => setShowEmoji((s) => !s)}
          className="text-xl text-slate-400 hover:text-slate-600 pb-1"
          aria-label="Open emoji picker"
        >
          😊
        </button>

        {/* Attachment icon */}
        <div className="relative">
          <label
            htmlFor="chat-attachment"
            className="cursor-pointer text-lg text-slate-400 hover:text-slate-600 pb-1 flex items-center"
            aria-label="Upload attachment"
          >
            📎
          </label>
          <input
            id="chat-attachment"
            type="file"
            accept="image/*,.pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
        </div>

        {/* Text area */}
        <textarea
          rows={1}
          className="
            flex-1 resize-none text-sm
            border border-slate-200 rounded-2xl
            px-3 py-2
            focus:outline-none focus:ring-2 focus:ring-[#9DCFDA]/40 focus:border-[#9DCFDA]
          "
          placeholder="Reply here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Send button */}
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled}
          className="
            w-9 h-9 rounded-full
            bg-[#7EC8E3] text-white
            flex items-center justify-center
            text-lg
            shadow-md shadow-[#7EC8E3]/40
            disabled:opacity-60 disabled:cursor-not-allowed
            hover:scale-105 active:scale-95
            transition-transform
          "
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
