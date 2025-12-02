"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ArticlePage({ params }) {
  const slug = params.slug;

  // ------------------ REFS (SAFE) ------------------
  const keyTakeawaysRef = useRef(null);
  const dosageChartRef = useRef(null);
  const missedDoseRef = useRef(null);
  const tipsRef = useRef(null);
  const weightLossRef = useRef(null);
  const whatIsRef = useRef(null);
  const doctorDecidesRef = useRef(null);
  const sideEffectsRef = useRef(null);
  const pauseDoseRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white font-laila pb-20">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-12 grid md:grid-cols-2 gap-10">
        
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border shadow-sm">
          <Image
            src="/guide/wegovy-dosage-schedule-new.jpg"
            alt="Guide image"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D4F8B] leading-tight mb-4">
            Wegovy Dosage Guide for Weight Balance
          </h1>

          <p className="text-[#375C7A] text-[15px] leading-[1.7] mb-4">
            Planning to follow a structured routine but confused about where to begin?
          </p>

          <p className="text-[#375C7A] text-[15px] leading-[1.7]">
            Here’s a complete step-by-step breakdown to help you understand everything clearly.
          </p>
        </div>
      </section>



      {/* ------------------ TABLE OF CONTENTS BOX ------------------ */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-[#D8EEF3] rounded-2xl p-8">

          <h2 className="text-lg font-semibold text-[#0D4F8B] mb-4">
            In this article:
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-[#0D4F8B] text-[15px] leading-[1.8]">

            {/* LEFT LIST */}
            <ul className="space-y-2">
              <li className="cursor-pointer underline" onClick={() => scrollToSection(keyTakeawaysRef)}>Key takeaways</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageChartRef)}>Dosage chart explained</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(missedDoseRef)}>What to do if you miss a dose?</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(tipsRef)}>Tips to make progress easier</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(weightLossRef)}>Progress timeline</li>
            </ul>

            {/* RIGHT LIST */}
            <ul className="space-y-2">
              <li className="cursor-pointer underline" onClick={() => scrollToSection(whatIsRef)}>How does it work?</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(doctorDecidesRef)}>How experts decide your pace</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(sideEffectsRef)}>Managing challenges smoothly</li>
              <li className="cursor-pointer underline" onClick={() => scrollToSection(pauseDoseRef)}>When to pause or reduce pace?</li>
            </ul>

          </div>
        </div>
      </section>



      {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">


        {/* ---------- KEY TAKEAWAYS ---------- */}
 {/* ---------- KEY TAKEAWAYS (FITYOU VERSION, FULL WIDTH) ---------- */}
<div 
  ref={keyTakeawaysRef} 
  className="w-full px-4 md:px-8 lg:px-12"
>
  <h2 className="text-3xl font-bold text-[#0D4F8B] mb-6">
    Key takeaways:
  </h2>

  <div className="bg-[#E6F2F7] p-6 rounded-xl mb-8 leading-[1.8] text-[#0D4F8B]">
    <ul className="list-disc pl-6 space-y-2 text-[15px]">
      <li>Your appetite rhythm changes gradually, not overnight — consistency is the key driver.</li>
      <li>Small routine improvements (sleep, hydration, eating timing) create the biggest long-term impact.</li>
      <li>Progress is smoother when you increase habits slowly instead of forcing rapid changes.</li>
    </ul>
  </div>

  <p className="text-[#375C7A] text-[15px] leading-[1.8] mb-4">
    Your body adapts to healthy routines in stages. Understanding this natural pace 
    helps reduce frustration and builds confidence as you move forward.
  </p>

  <p className="text-[#375C7A] text-[15px] leading-[1.8] mb-4">
    Trying to rush your progress — whether through strict dieting, skipping meals, or 
    pushing too hard — often leads to energy crashes, stronger cravings, and burnout.
  </p>

  <p className="text-[#375C7A] text-[15px] leading-[1.8]">
    This guide will help you understand how FitYou's behavioural roadmap stabilises 
    hunger cues, strengthens daily habits, and shows you when it’s the right time to 
    adjust your routine — slowly, safely, and sustainably.
  </p>
</div>




        {/* ---------- DOSAGE CHART ---------- */}
        <div ref={dosageChartRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">Dosage chart explained</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            Step-by-step breakdown of how your schedule progresses.
          </p>
        </div>


        {/* ---------- MISSED DOSE ---------- */}
        <div ref={missedDoseRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">What if you miss a dose?</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            What actions to avoid and what steps to follow next.
          </p>
        </div>


        {/* ---------- TIPS ---------- */}
        <div ref={tipsRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">Tips for easier progress</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            Helpful habits to support your journey.
          </p>
        </div>


        {/* ---------- WEIGHT LOSS TIMELINE ---------- */}
        <div ref={weightLossRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">Progress timeline</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            What changes you may notice week by week.
          </p>
        </div>


        {/* ---------- WHAT IS GLP-1 ---------- */}
        <div ref={whatIsRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">How does the process work?</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            A simple breakdown of how your body adapts over time.
          </p>
        </div>


        {/* ---------- DOCTOR DECISION ---------- */}
        <div ref={doctorDecidesRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">How experts decide your pace</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            Understanding how your routine is structured.
          </p>
        </div>


        {/* ---------- MANAGING SIDE EFFECTS ---------- */}
        <div ref={sideEffectsRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">Managing challenges smoothly</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            What to do when adjustments feel difficult.
          </p>
        </div>


        {/* ---------- PAUSE SECTION ---------- */}
        <div ref={pauseDoseRef}>
          <h2 className="text-2xl font-bold text-[#0D4F8B] mb-4">When should you pause or slow down?</h2>
          <p className="text-[#375C7A] leading-[1.7]">
            Understanding when your body needs more time.
          </p>
        </div>

      </section>
    </div>
  );
}
