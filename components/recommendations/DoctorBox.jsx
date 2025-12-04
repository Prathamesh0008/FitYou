//FitYou\components\recommendations\DoctorBox.jsx
"use client";

import { ChevronLeft, Info } from "lucide-react";
import Link from "next/link";

export default function DoctorBox() {
  return (
    <section className="w-full bg-[#E7F3FA] pb-4"> {/* Reduced bottom spacing */}
      <div className="max-w-6xl mx-auto px-6 pt-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between  mb-7 md:mb-12">
          <div className="flex items-center gap-2">
            <Link href="/quiz">
              <ChevronLeft size={22} className="text-[#0D4F8B]" />
            </Link>

            <h1 className="text-xl md:text-3xl font-semibold text-[#0D4F8B]">
              Your personalised plan
            </h1>
          </div>

          <button className="p-2 bg-white border border-[#C6D8EA] rounded-full">
            <Info size={18} className="text-[#0D4F8B]" />
          </button>
        </div>

        {/* WHITE DOCTOR CARD */}
        <div
          className="
            bg-white shadow-sm px-5 py-5 rounded-xl 
            flex items-center gap-4 md:gap-6
          "
        >
          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <img
              src="/doctor/doctor.png"
              className="w-20 h-20 md:w-22 md:h-22 rounded-full object-cover"
              alt="Doctor"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <p className="text-[#0D4F8B] text-[15px] leading-relaxed">
              I’ve reviewed your medical background and prepared a treatment plan that supports safe and steady weight loss.
            </p>

            <p className="mt-3 font-semibold text-[#0D4F8B] text-[15px]">
              Dr. Rajat Gusani
            </p>

            <p className="text-xs text-[#3E5678]">M.S (General Surgery), FMAS</p>
          </div>
        </div>

      </div>
    </section>
  );
}
