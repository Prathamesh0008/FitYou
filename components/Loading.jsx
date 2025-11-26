// app/loading.jsx
"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 dark:bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* 3-bar loading animation */}
        <div className="flex gap-2">
          <div className="w-2 h-7 rounded-full bg-sky-500 animate-bounce" />
          <div className="w-2 h-7 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.15s]" />
          <div className="w-2 h-7 rounded-full bg-purple-500 animate-bounce [animation-delay:0.3s]" />
        </div>

        {/* Subtle text + pulse dot */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Loading your Fityou experience…
          </p>
        </div>
      </div>
    </div>
  );
}
