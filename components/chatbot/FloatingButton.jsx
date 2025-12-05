// components/chatbot/FloatingButton.jsx
"use client";

import { useState } from "react";
import Image from "next/image";               // ✅ added
import ChatPopup from "./ChatPopup";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-5 right-6 z-40
          w-14 h-14 rounded-full
          bg-[#73AEB5]
          shadow-xl shadow-[#73AEB5]/40
          flex items-center justify-center
          hover:scale-105 active:scale-95
          transition-transform
        "
        aria-label="Open FitYou chat"
      >
        {/* ⭐ Replace emoji with your logo */}
       <Image
  src="/chat-icon/chaticon.jpg"
  alt="Chat Icon"
  fill
  className="rounded-full object-cover"
/>

      </button>

      {open && <ChatPopup onClose={() => setOpen(false)} />}
    </>
  );
}
