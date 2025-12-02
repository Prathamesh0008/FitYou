// components/chatbot/FloatingButton.jsx
"use client";

import { useState } from "react";
import ChatPopup from "./ChatPopup";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating bubble – can place globally in your main layout as well */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-26 right-6 z-40
          w-14 h-14 rounded-full
          bg-[#73AEB5]
          text-white text-2xl
          shadow-xl shadow-[#73AEB5]/40
          flex items-center justify-center
          hover:scale-105 active:scale-95
          transition-transform
        "
        aria-label="Open FitYou chat"
      >
        💬
      </button>

      {open && <ChatPopup onClose={() => setOpen(false)} />}
    </>
  );
}
