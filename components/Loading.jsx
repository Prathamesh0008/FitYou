"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center 
      bg-white/60 dark:bg-black/40 backdrop-blur-sm z-[999]">

      <div className="flex flex-col items-center gap-4">

        {/* Enhanced 3-bar bouncing loader */}
        <div className="flex gap-2 items-end">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>

        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Loading…
        </p>
      </div>
    </div>
  );
}
