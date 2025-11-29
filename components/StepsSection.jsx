"use client";

import Image from "next/image";
import Link from "next/link";

export default function StepsSection() {
  return (
    <section className="w-full bg-[#F7FAFC] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] font-semibold text-[#1A365D] leading-snug">
          Ready to start losing weight and feeling fit?
        </h2>
        <p className="text-[28px] text-[#1A365D] mt-1">
          Take your first step now:
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-40">
              <Image
                src="/step1.jpg" // update with your path
                alt="Step 1"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFD9B3] text-[#1A365D] font-bold mt-4">
              1
            </div>
            <p className="mt-3 text-[#1A365D] leading-relaxed">
              Answer a few medical questions to see if our treatment is safe for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-40">
              <Image
                src="/step2.jpg" // update with your path
                alt="Step 2"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFD9B3] text-[#1A365D] font-bold mt-4">
              2
            </div>
            <p className="mt-3 text-[#1A365D] leading-relaxed">
              Based on your results, we create a personalised programme for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-56 h-40">
              <Image
                src="/step3.jpg" // update with your path
                alt="Step 3"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFD9B3] text-[#1A365D] font-bold mt-4">
              3
            </div>
            <p className="mt-3 text-[#1A365D] leading-relaxed">
              If approved by the doctor, you receive your injections’ first month supply in a few days.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <Link
            href="/consultation"
            className="bg-[#A7C3CE] text-[#1A365D] px-8 py-3 rounded-md text-lg font-medium"
          >
            Start consultation
          </Link>

          <Link
            href="/programme"
            className="border border-[#FFCC99] text-[#1A365D] px-8 py-3 rounded-md text-lg font-medium"
          >
            View our programme
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-[#4A5568] mt-6 text-[16px]">
          Your first step towards better health, more energy, and boosting your self-esteem.
        </p>
      </div>
    </section>
  );
}
