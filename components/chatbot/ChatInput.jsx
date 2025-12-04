"use client";

import { useState, useRef } from "react";

export default function ChatInput({ value, onChange, onSend, onKeyDown, disabled }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef(null);

  const emojis = [
    "😀", "😁", "😂", "🤣", "😅", "😊",
    "😍", "😎", "🤔", "😭", "😡", "👍",
    "🙏", "🔥"
  ];

  const handleEmojiSelect = (emoji) => {
    onChange(value + emoji);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Attached file:", file);

    // You can add this file to chat later if needed
  };

  return (
    <div className="relative w-full border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2">

      {/* EMOJI PICKER (MERGED INSIDE THIS FILE) */}
      {showEmoji && (
        <div className="absolute bottom-14 left-2 w-64 bg-white rounded-xl shadow-xl border p-3 z-50">

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowEmoji(false)}
              className="text-gray-500 hover:text-black"
            >
              ✖
            </button>
          </div>

          {/* Emoji Grid */}
          <div className="grid grid-cols-6 gap-2 mt-2">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                className="text-2xl p-1 hover:bg-gray-100 rounded-lg"
                onClick={() => handleEmojiSelect(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Emoji Button */}
      <button
        className="text-2xl p-1 hover:bg-gray-100 rounded-lg transition"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        😊
      </button>

      {/* Attachment Button */}
      <button
        className="text-2xl p-1 hover:bg-gray-100 rounded-lg transition"
        onClick={() => fileInputRef.current.click()}
      >
        📎
      </button>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* Input Box */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Reply here..."
        disabled={disabled}
        className="flex-1 rounded-full px-4 py-2 border border-gray-300 bg-[#F7FBFF] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Send Button */}
      <button
        onClick={onSend}
        disabled={disabled}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4FC3F7] hover:bg-[#29B6F6] transition text-white disabled:opacity-40"
      >
        ➤
      </button>
    </div>
  );
}
