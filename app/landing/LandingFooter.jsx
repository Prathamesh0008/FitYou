// app/landing/LandingFooter.jsx
"use client";

import { ArrowUp } from "lucide-react";

const LandingFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F7FAFC] border-t border-[#E2E8F0] font-laila mt-0 relative">
      {/* Container with only the "Go to top" button */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative">
        
        {/* ================= "GO TO TOP" BUTTON (TOP RIGHT) ================= */}
        <button
          onClick={scrollToTop}
          className="absolute top-2 cursor-pointer right-0 flex flex-col items-center translate-y-[-50%]"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2B6CB0] border border-[#CBD5E0] shadow-sm">
            <ArrowUp className="w-4 h-4 text-white" />
          </div>
          <span className="text-[11px] text-[#1A365D] mt-1">To top</span>
        </button>

        {/* ================= MINIMAL FOOTER CONTENT ================= */}
        <div className="">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Fityou. Medical weight loss program.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Consult your doctor before starting any weight loss program
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default LandingFooter;