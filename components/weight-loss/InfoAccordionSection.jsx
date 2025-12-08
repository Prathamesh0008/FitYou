// components/weight-loss/InfoAccordionSection.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

/* Hook to animate each time on scroll */
function useInViewWatcher(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); 
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function InfoAccordionSection() {
  return (
    <section className="bg-[#FFD9B3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-4">

          <InfoCard
            Icon={GeneIcon}
            title="Might be your genes"
            top="Up to 80% of weight issues may be influenced by genetics."
            bottom="Our treatment helps you feel full, so you naturally eat less."
          />

          <InfoCard
            Icon={BurgerIcon}
            title="Most diets fail due to hunger"
            top="The average diet for women lasts only 4 weeks, for men 6 weeks¹."
            bottom="Our personalised meal plans help you to eat healthy, not to starve yourself and fail."
          />

          <InfoCard
            Icon={CapIcon}
            title="Our treatment works"
            top="Studies² have proven the effectiveness of medication for weight loss."
            bottom="Just one injection every week can curb your cravings and reduce calorie intake."
          />

          <InfoCard
            Icon={SupportIcon}
            title="Simple steps, full support"
            top="Many people struggle with weight loss due to a lack of motivation."
            bottom="Our team of experts is here to guide and support you every step of the way."
          />

        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function InfoCard({ Icon, title, top, bottom }) {
  const [ref, inView] = useInViewWatcher(0.25);
  const [showArrow, setShowArrow] = useState(true);

  // Disable arrow AFTER animation ends
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShowArrow(false), 700);
      return () => clearTimeout(timer);
    } else {
      setShowArrow(true);
    }
  }, [inView]);

  return (
    <div className="flex flex-col">

      {/* Title + Icon */}
      <div className="h-40 flex flex-col items-center justify-center text-center">
        <Icon />
        <h3 className="text-[#0A2A66] mt-4 font-extrabold text-2xl leading-tight">
          {title}
        </h3>
      </div>

      {/* TOP BOX */}
      <div className="bg-[#E6F4FF] text-[#0A2A66] rounded-[20px] px-6 py-6 text-[1.05rem] leading-relaxed">
        {top}
      </div>

      {/* ORIGINAL GAP — DO NOT REMOVE */}
      <div className="h-1.5 relative">

        {/* ARROW placed INSIDE the gap without increasing height */}
        {showArrow && (
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 top-[-18px]
              transition-all duration-700
              ${inView ? "opacity-0 translate-y-2" : "opacity-100 -translate-y-1"}
            `}
          >
            <DownArrow />
          </div>
        )}

      </div>

      {/* BOTTOM BOX */}
      <div
        ref={ref}
        className={`
          bg-[#FFF6E8] text-[#0A2A66] rounded-[20px] px-6 py-6 text-[1.05rem] leading-relaxed
          transition-all duration-700 ease-out transform-gpu
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        `}
      >
        {bottom}
      </div>

    </div>
  );
}

/* ICONS */
function GeneIcon() {
  return (
    <svg className="w-10 h-10 opacity-80" viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="10" r="3" stroke="#fff" strokeWidth="2" />
      <circle cx="28" cy="10" r="3" stroke="#fff" strokeWidth="2" />
      <circle cx="14" cy="26" r="3" stroke="#fff" strokeWidth="2" />
      <circle cx="30" cy="26" r="3" stroke="#fff" strokeWidth="2" />
      <line x1="12" y1="12" x2="26" y2="24" stroke="#fff" strokeWidth="2" />
      <line x1="12" y1="24" x2="28" y2="12" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg className="w-10 h-10 opacity-80" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="12" stroke="#fff" strokeWidth="2" />
      <rect x="12" y="17" width="16" height="3" rx="1.5" stroke="#fff" strokeWidth="2" />
      <rect x="13" y="23" width="14" height="3" rx="1.5" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg className="w-10 h-10 opacity-80" viewBox="0 0 40 40" fill="none">
      <path d="M8 15L20 10L32 15L20 20L8 15Z" stroke="#fff" strokeWidth="2" />
      <path d="M13 18V23C13 25 16 27 20 27C24 27 27 25 27 23V18" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-10 h-10 opacity-80" viewBox="0 0 40 40" fill="none">
      <path d="M10 26H16L21 21L25 23L30 18" stroke="#fff" strokeWidth="2" />
      <circle cx="11" cy="15" r="2" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

/* ARROW COMPONENT */
function DownArrow() {
  return (
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-[#0A2A66]/20">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9L12 15L18 9"
          stroke="#0A2A66"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}