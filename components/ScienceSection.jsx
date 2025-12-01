"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScienceSection() {
  return (
    <section className="bg-[#F7FAFF] py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT COLUMN — FIXED HEIGHT, PERFECT ALIGNMENT */}
        <div className="flex flex-col justify-between h-full">

          {/* TOP IMAGES ROW (DESKTOP ONLY) */}
          <div className="hidden md:flex gap-4 h-[350px]">
            {/* Image 1 */}
            <div className="w-1/2 h-full rounded-2xl overflow-hidden">
              <Image
                src="/sciencesection/boxgirl.png"
                alt="FitYou user"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="w-1/2 h-full rounded-2xl overflow-hidden">
              <Image
                src="/sciencesection/doctor-section.png"
                alt="Doctor"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* MOBILE ONLY IMAGE */}
          <div className="md:hidden w-full h-[350px] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/sciencesection/boxgirl.png"
              alt="FitYou mobile"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* GRAPH */}
          {/* GRAPH — show ONLY on desktop */}
<div className="hidden md:block bg-white border border-[#E2EAF3] shadow-sm rounded-3xl p-6 mt-4">
  {/* <p className="text-sm font-semibold text-[#0D4F8B] mb-2">Your weight</p> */}

  <div className="w-full h-[340px] p-1">
    <Image
      src="/sciencesection/graph-section.png"
      alt="Graph"
      width={800}
      height={600}
      className="object-cover w-full h-full"
    />
  </div>
</div>

        </div>

        {/* RIGHT COLUMN — CENTERED MIDDLE, SAME HEIGHT */}
        <div className="flex flex-col justify-center h-full">

          <h2 className="text-[44px] md:text-[56px] font-bold leading-tight text-[#0D4F8B]">
            Let science help<br />
            you lose weight,<br />
            and keep it off
          </h2>

          <p className="mt-5 text-[#375C7A] text-base leading-relaxed max-w-md">
            Did you know you can lose up to <strong>21% body weight</strong> in 16 months,
            without feeling hungry, counting calories or going to the gym?
          </p>

          <p className="mt-6 text-base font-semibold text-[#0D4F8B]">
            Our Simple, Smart & Science-Backed Plan:
          </p>

          <ul className="mt-4 space-y-4 text-[#375C7A] text-base leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-lg leading-none">💉</span>
              Take one injection every week to reduce your food cravings
            </li>

            <li className="flex items-start gap-2">
              <span className="text-lg leading-none">⏱️</span>
              Easy-to-follow exercise plans to help you create a healthy lifestyle
            </li>

            <li className="flex items-start gap-2">
              <span className="text-lg leading-none">🩺</span>
              Support from our partner weight-loss specialists and nutritionists
            </li>
          </ul>

          <Link
            href="/program"
            className="mt-10 bg-[#8CB7C6] hover:bg-[#7AA5B6] text-white 
            font-semibold text-base px-8 py-3 rounded-xl transition w-full md:w-fit text-center"
          >
            View our programme
          </Link>
        </div>
      </div>
    </section>
  );
}
