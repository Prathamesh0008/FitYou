"use client";

import Image from "next/image";
import Link from "next/link";

export default function StepsSection() {
  return (
    <section className="w-full bg-[#F7FAFC] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[38px] font-semibold text-[#1A365D] leading-tight">
          Ready to start losing weight and feeling fit?
        </h2>
        <p className="text-[26px] text-[#1A365D] mt-3">
          Take your first step now:
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {/* STEP BLOCK TEMPLATE */}
          {[
  {
    img: "/guide/how-it-work-img1.jpg",
    num: "1",
    text: "Answer a few medical questions to see if our treatment is safe for you."
  },
  {
    img: "/guide/how-it-work-img2.jpg",
    num: "2",
    text: "Based on your results, we create a personalised Aktive programme for you."
  },
  {
    img: "/guide/how-it-work-img3.jpg",
    num: "3",
    text:
      "If the doctor approves you for treatment, you will receive your injections’ first month’s supply in a few days."
  }
].map((step, i) => (
  <div key={i} className="flex flex-col items-center text-center">

    <div className="relative w-[260px] h-[170px] rounded-xl overflow-hidden shadow-sm">
      <Image
        src={step.img}
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute  bottom-[8px] left-3 w-12 h-12 bg-[#FFD4AC] 
      rounded-full flex items-center justify-center text-[#1A365D] 
      font-bold text-[2rem] shadow-md">
        {step.num}
      </div>
    </div>

    <p className="mt-4 text-[#1A365D] text-[15px] leading-relaxed max-w-[230px]">
      {step.text}
    </p>

  </div>
))}
        </div>

        {/* BUTTONS */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <Link
            href="/quiz"
            className="bg-[#A7C3CE] text-[#1A365D] px-10 py-3 rounded-lg text-[17px] font-medium shadow-sm hover:bg-[#9FBEC9] transition"
          >
            Start consultation
          </Link>

          <Link
            href="/program"
            className="border border-[#FFCC99] bg-[#FFF6EB] text-[#1A365D] px-10 py-3 rounded-lg text-[17px] font-medium hover:bg-[#FFEBD7] transition"
          >
            View our programme
          </Link>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-[#4A5568] mt-6 text-[15px] leading-relaxed">
          Your first step towards better health, more energy, and boosting your self-esteem.
        </p>
      </div>
    </section>
  );
}
