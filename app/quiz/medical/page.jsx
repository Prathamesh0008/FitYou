//FitYou\app\quiz\medical\page.jsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function MedicalConsultationIntro() {
  const params = useSearchParams();
  const router = useRouter();

  const weight = params.get("weight");
  const height = params.get("height");

  const goToResult = () => {
    router.push(`/quiz/result?weight=${weight}&height=${height}`);
  };

  return (
    <div className="min-h-screen bg-white text-[#0D2451] font-laila">

      {/* 🔵 LIGHT BLUE HEADER STRIP EXACTLY LIKE AKTIVE */}
      <div className="w-full bg-[#F2F8FD] py-10">
        <div className="max-w-xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-semibold text-[#0D4F8B] text-left">
            Medical consultation
          </h1>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="max-w-xl mx-auto px-6 pt-10 pb-24 text-center">


        {/* DOCTOR CARD SAME EXACT WIDTH AS BUTTON */}
        <div className="w-full bg-[#D7EDF4] rounded-2xl p-6 flex items-center gap-5 shadow-sm">
          <img
            src="/doctor/doctor.png"
            alt="Doctor"
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />

          <div className="text-sm leading-relaxed text-left">
            <p>
              Answer the medical questions in this online consultation and
              I&apos;ll assess if treatment is safe for you to use. It&apos;s free.
            </p>

            <p className="mt-2 font-semibold">FitYou Medical Team</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-10 text-sm text-[#3E5678] leading-relaxed">
          This consultation is a set of online questions about your health and
          lifestyle. It takes a few minutes and it’s free.
        </p>

        {/* I’M READY BUTTON - SAME WIDTH AS DOCTOR BOX */}
        <button
          onClick={goToResult}
          className="mt-10 w-full bg-[#8DB9C9] hover:bg-[#7AA7B8]
                     text-white font-semibold py-3 rounded-md text-sm transition"
        >
          I'm ready
        </button>

        {/* LOGIN LINK */}
        <p className="mt-6 text-xs text-[#3E5678]">
          Already have a personalised plan?{" "}
          <span className="underline cursor-pointer">Login with your mobile number</span>
        </p>

        {/* FOOTER */}
        <p className="mt-16 text-[10px] text-[#8CA0C0]">
          This consultation does not replace an in-person medical evaluation.
        </p>
      </div>
    </div>
  );
}
