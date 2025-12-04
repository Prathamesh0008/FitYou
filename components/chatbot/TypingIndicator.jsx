"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 mt-1 mb-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E0F3FF] text-[11px] text-[#00A3C7]">
        F
      </div>
      <div className="flex items-center rounded-2xl bg-white px-3 py-1 shadow-sm">
        <span className="flex space-x-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A3B3D4] animate-pulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#A3B3D4] animate-pulse delay-150" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#A3B3D4] animate-pulse delay-300" />
        </span>
      </div>
    </div>
  );
}
