"use client";

import { useState } from "react";
import Image from "next/image";
import ChatPopup from "./ChatPopup";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-transparent shadow-xl"
          aria-label="Open FitYou chat"
        >
          <div className="h-16 w-16 rounded-full bg-[#E0F3FF] shadow-lg flex items-center justify-center">
            <Image
              src="/chat5.png"
              alt="Chat with us"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
        </button>
      )}

      {open && <ChatPopup onClose={() => setOpen(false)} />}
    </>
  );
}
