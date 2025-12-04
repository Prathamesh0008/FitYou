"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import boxImage from "@/public/how/box.png";
import StepsSection from "@/components/StepsSection";

export default function HowItWorksPage() {
  const bluePillsRef = useRef([]);
  const peachPillsRef = useRef([]);

  useEffect(() => {
    const items = [...bluePillsRef.current, ...peachPillsRef.current].filter(
      Boolean
    );
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const index = Number(el.dataset.index || "0");
          el.style.transitionDelay = `${index * 0.12}s`;

          if (entry.isIntersecting) {
            el.classList.add("how-is-visible");
          } else {
            el.classList.remove("how-is-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="max-w-[1180px] mx-auto px-4  pb-32 text-[#103b7a]">
        {/* SECTION 1 – Hero */}
        <section className="flex items-center mt-10 mb-20 max-lg:flex-col max-lg:text-center">

  {/* Left block */}
  <div className="w-[40%] max-lg:w-full">
    <h1 className="text-[69px] leading-tight font-semibold text-[#103b7a] mb-8 max-md:text-[52px]">
      How our
      <br />
      service
      <br />
      works
    </h1>

    <p className="text-[18px] leading-relaxed mb-8 max-w-[480px]">
      The essentials on how to start losing weight
      <br />
      with our scientifically proven treatment.
    </p>

    <button
      type="button"
      className="inline-block bg-[#85b7c4] text-[#07324e] rounded-md px-20 py-4 text-[18px] font-semibold hover:brightness-105 transition"
    >
      Start consultation
    </button>
  </div>

  {/* Right block — now only ONE IMAGE */}
  <div className="w-[40%] max-lg:w-full flex justify-start max-lg:justify-center mt-4 lg:mt-0">
    <div className="max-w-[560px] w-full">
      <Image
        src="/how/box.png"   // ⭐ your single combined PNG
        alt="How Fityou service works illustration"
        width={560}
        height={560}
        className="w-full h-auto"
        priority
      />
    </div>
  </div>

</section>

        {/* SECTION 2 – your steps component */}
        <StepsSection />

        {/* SECTION 3 – Achieving your goals + 3 blue pills */}
        <section className="mb-20">
  <h2 className="text-[40px] font-semibold text-center mb-6">
    Achieving your goals is as
    <br />
    easy as 1–2–3
  </h2>
  <p className="text-2xl font-semibold text-center mb-10">
    What do you need to do?
  </p>

  <div className="space-y-4">

    {/* ITEM 1 */}
    <div
      className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-5 flex items-center gap-5 text-[16px] leading-relaxed bg-[#d9f0f4]"
      ref={(el) => (bluePillsRef.current[0] = el)}
      data-index={0}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
        {/* Professional Injection Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#103b7a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 4 5 5" />
          <path d="m17 2 3 3" />
          <path d="M12 7 3 16l5 5 9-9" />
          <path d="M16 11 9 4 4 9" />
        </svg>
      </div>
      <p>
        Take one injection weekly. It will reduce your appetite; you will eat
        less without feeling hungry.
      </p>
    </div>

    {/* ITEM 2 */}
    <div
      className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-5 flex items-center gap-5 text-[16px] leading-relaxed bg-[#d9f0f4]"
      ref={(el) => (bluePillsRef.current[1] = el)}
      data-index={1}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
        {/* Professional Clock Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#103b7a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <p>
        Eat sensibly. No need to count calories. Our meal plans can help.
      </p>
    </div>

    {/* ITEM 3 */}
    <div
      className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-5 flex items-center gap-5 text-[16px] leading-relaxed bg-[#d9f0f4]"
      ref={(el) => (bluePillsRef.current[2] = el)}
      data-index={2}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
        {/* Professional Dumbbell Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#103b7a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 6.5 9 9m6 6 2.5 2.5" />
          <path d="M21 21l-2.5-2.5m0 0L15 15m-6-6L4.5 4.5M4.5 4.5 3 3" />
        </svg>
      </div>
      <p>
        Be active. No gym visits. Our fitness plan helps with light exercise,
        3 times a week.
      </p>
    </div>
  </div>
</section>


        {/* SECTION 4 – How to start? + 3 peach pills */}
        <section className="mb-20">
          <h2 className="text-[32px] font-semibold text-center mb-8">
            How to start?
          </h2>

          <div
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-5 text-[16px] leading-relaxed bg-[#ffd4aa]"
            ref={(el) => (peachPillsRef.current[0] = el)}
            data-index={0}
          >
            <p>
              Medical consultation: answer the medical questions to see if our
              treatment is safe for you.
            </p>
          </div>

          <div
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-5 text-[16px] leading-relaxed bg-[#ffd4aa]"
            ref={(el) => (peachPillsRef.current[1] = el)}
            data-index={1}
          >
            <p>
              Based on your results, we create a personalised Fityou programme
              for you.
            </p>
          </div>

          <div
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-5 text-[16px] leading-relaxed bg-[#ffd4aa]"
            ref={(el) => (peachPillsRef.current[2] = el)}
            data-index={2}
          >
            <p>
              If our doctors approve you for treatment, you will receive your
              injections’ first month&apos;s supply in a few days.
            </p>
          </div>

          <div className="text-center mt-10">
            <button className="how-btn-primary bg-[#85b7c4] text-[#07324e] rounded-md px-18 py-4 text-[18px] font-semibold hover:brightness-105 transition">
              Start consultation
            </button>
            <p className="mt-4 text-[16px]">See if you qualify. It&apos;s free.</p>
          </div>
        </section>
      </main>

      {/* Page-specific global styles for animation only */}
      <style jsx global>{`
        .how-pill-anim {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .how-pill-anim.how-is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}



