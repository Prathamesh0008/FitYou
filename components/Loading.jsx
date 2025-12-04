// app/loading.jsx
"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/60 dark:bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">

        {/* 3-bar FitYou color animation */}
        <div className="flex gap-2">
          <div className="w-2 h-7 rounded-full bg-[#0D4F8B] animate-bounce" />
          <div
            className="w-2 h-7 rounded-full bg-[#A7C3CE] animate-bounce [animation-delay:0.15s]"
          />
          <div
            className="w-2 h-7 rounded-full bg-[#FFD9B3] animate-bounce [animation-delay:0.3s]"
          />
        </div>

        {/* Subtle text + pulse dot */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#0D4F8B] animate-pulse" />
          <p className="text-sm text-[#1A365D] dark:text-slate-200">
            Loading your Fityou experience…
          </p>
        </div>
      </div>
    </div>
  );
}
