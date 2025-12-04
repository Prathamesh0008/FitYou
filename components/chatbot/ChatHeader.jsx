"use client";

export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-[#00B7D3] text-white px-4 pt-3 pb-4 rounded-t-3xl">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[16px] font-semibold">FitYou</h2>
          <p className="text-[15px] opacity-95"></p>
          <p className="mt-1 text-[11px] opacity-90">
        
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-full px-2 py-1 text-[16px] hover:bg-white/20"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex h-6 w-8 items-center justify-center rounded-full bg-[#F1F8FF] text-[13px] font-semibold text-[#00A3C7]">
          F
        </div>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold"></p>
          <p className="text-[15px] text-[#E4F7FF]">
        
          </p>
        </div>
      </div>
    </div>
  );
}
