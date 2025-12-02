"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function SuccessModal({ open }) {
  const [show, setShow] = useState(open);

  // Trigger enter animation whenever "open" becomes true
  useEffect(() => {
    if (open) {
      setShow(true);

      // Optional: success sound
      const audio = new Audio("/success.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }, [open]);

  // After animation delay, fade out smoothly
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setShow(false);
    }, 1000); // Fade out before redirect

    return () => clearTimeout(timer);
  }, [open]);

  if (!show) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 animate-fadeBg" />

      {/* SUCCESS POPUP */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className={`
            bg-white 
            rounded-[18px] 
            shadow-[0_4px_30px_rgba(0,0,0,0.12)]
            w-full max-w-[380px]
            p-10 
            flex flex-col items-center
            ${open ? "animate-fadeScale" : "animate-fadeOut"}
          `}
        >
          <CheckCircle
            size={70}
            className="text-green-500 mb-4 animate-pop"
          />

          <h2 className="text-[24px] font-semibold text-[#0D4F8B] text-center">
            Login Successful
          </h2>

          <p className="text-[14px] text-[#4d4d4d] text-center mt-2">
            Redirecting you to your dashboard…
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.4s ease-out forwards;
        }

        @keyframes fadeScale {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-fadeScale {
          animation: fadeScale 0.35s ease-out forwards;
        }

        @keyframes fadeOut {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0; }
        }
        .animate-fadeOut {
          animation: fadeOut 0.4s ease-out forwards;
        }

        @keyframes fadeBg {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeBg {
          animation: fadeBg 0.4s ease-out forwards;
        }
      `}
      </style>
    </>
  );
}
