"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";

export default function ArticlePage({ params }) {
  const slug = params.slug;

  // ------------------ REFS (SAFE) ------------------
const whatIsRef = useRef(null);
const progressRoadmapRef = useRef(null);
const dosageScheduleRef = useRef(null);
const weeklyProgressRef = useRef(null);
const faqRef = useRef(null);
const authorRef = useRef(null);
const referencesRef = useRef(null);

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

<li className="cursor-pointer underline" onClick={() => scrollToSection(whatIsRef)}>What is FitYou? How does it work?</li>

<li className="cursor-pointer underline" onClick={() => scrollToSection(progressRoadmapRef)}>FitYou progress roadmap</li>

<li className="cursor-pointer underline" onClick={() => scrollToSection(dosageScheduleRef)}>FitYou dosage schedule</li>

            </ul>

            {/* RIGHT LIST */}
            <ul className="space-y-2">
              <li className="cursor-pointer underline" onClick={() => scrollToSection(weeklyProgressRef)}>Weekly progression expectations</li>

<li className="cursor-pointer underline" onClick={() => scrollToSection(faqRef)}>FAQs</li>

<li className="cursor-pointer underline" onClick={() => scrollToSection(authorRef)}>About the author</li>

<li className="cursor-pointer underline" onClick={() => scrollToSection(referencesRef)}>References</li>

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
    This guide will help you understand how FitYous behavioural roadmap stabilises 
    hunger cues, strengthens daily habits, and shows you when it’s the right time to 
    adjust your routine — slowly, safely, and sustainably.
  </p>
</div>

{/* ---------- FITYOU EXPLANATION SECTION (AKTIVE STYLE) ---------- */}
<div  ref={whatIsRef} className="max-w-3xl mx-auto px-4 mt-12">

  {/* Heading */}
  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] mb-6 leading-tight">
    What is FitYou? How does it work?
  </h2>

  {/* Introduction Paragraph */}
  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    FitYou is a behaviour-driven weight-balance programme designed to help you
    regain control of your appetite, stabilise hunger patterns, and build
    routines that naturally support weight loss over time. Our method uses
    clinical lifestyle principles that work with your body — not against it.
  </p>

  {/* Subheading */}
  <h3 className="text-[18px] font-semibold text-[#0D4F8B] mb-4">
    What this means is:
  </h3>

  {/* Bullet Points */}
  <ul className="space-y-3 text-[16px] text-[#375C7A] leading-[1.7]">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      It helps reduce sudden hunger spikes so you feel satisfied with smaller portions.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      It slows down the rate at which your stomach empties — helping you stay full for longer.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      It improves control over emotional or habit-based eating patterns.
    </li>
  </ul>

  {/* Highlighted Box */}
  <div className="bg-[#D8EEF3] px-6 py-5 rounded-xl mt-8 mb-6 text-[16px] leading-[1.8] text-[#375C7A]">
    FitYou’s structured weekly roadmap is designed to match the natural pace of 
    your body. Instead of forcing strict diets or intense workouts, our approach 
    guides you through sustainable changes — making healthy weight loss easier 
    for people with busy lifestyles.
  </div>

  {/* Closing Paragraph */}
  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    Just like medical weight-management programmes, FitYou focuses on consistent 
    improvement rather than quick fixes. Youll receive lifestyle guidance, 
    progress tracking tools, and supportive coaching to help you stay on track 
    each week.
  </p>
</div>
    

{/* ---------- FITYOU DOSAGE CHART SECTION (FINAL RESPONSIVE VERSION) ---------- */}
<div ref={dosageChartRef} className="max-w-4xl mx-auto px-4 mt-16">

  {/* Title */}
  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] leading-tight mb-6">
    FitYou progress roadmap: A step-by-step guide to understanding the weekly routine
  </h2>

  {/* Description */}
  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-4">
    You will begin your FitYou routine at an easy, beginner-friendly pace designed to
    stabilise your hunger patterns.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-4">
    Each month, your routine becomes slightly more structured — helping your body
    adapt slowly and naturally.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-4">
    This gradual transition ensures your appetite lowers steadily while preventing
    discomfort or sudden lifestyle shocks.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-8">
    Below is a typical progress roadmap most FitYou members follow:
  </p>

  {/* Subtitle */}
  <h3 className="text-[26px] md:text-[28px] font-semibold text-[#0D4F8B] mb-4">
    FitYou weekly progress schedule
  </h3>

  {/* ---------------- DESKTOP TABLE ---------------- */}
  <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
    <table className="min-w-full border-separate border-spacing-0 text-left text-[#0D4F8B]">

      {/* Table Header */}
      <thead>
        <tr className="bg-[#F2F7FA]">
          <th className="p-4 font-semibold text-[15px] border-b">Phase</th>
          <th className="p-4 font-semibold text-[15px] border-b">Frequency</th>
          <th className="p-4 font-semibold text-[15px] border-b">Duration</th>
          <th className="p-4 font-semibold text-[15px] border-b">Purpose</th>
          <th className="p-4 font-semibold text-[15px] border-b">What you will notice</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-[15px]">

        <tr className="border-b">
          <td className="p-4 bg-[#F9FCFE]">Phase 1</td>
          <td className="p-4 bg-[#F9FCFE]">Daily basics</td>
          <td className="p-4 bg-[#F9FCFE]">Weeks 1–4</td>
          <td className="p-4 bg-[#F9FCFE]">Helps stabilise hunger and reduce random cravings</td>
          <td className="p-4 bg-[#F9FCFE]">You begin to feel slightly more controlled and less “snacky”</td>
        </tr>

        <tr className="border-b">
          <td className="p-4">Phase 2</td>
          <td className="p-4">Weekly habit tracking</td>
          <td className="p-4">Weeks 5–8</td>
          <td className="p-4">Builds tolerance to hunger changes and improves food discipline</td>
          <td className="p-4">You feel fuller on smaller meals; emotional eating reduces</td>
        </tr>

        <tr className="border-b">
          <td className="p-4 bg-[#F9FCFE]">Phase 3</td>
          <td className="p-4 bg-[#F9FCFE]">Behaviour reinforcement</td>
          <td className="p-4 bg-[#F9FCFE]">Weeks 9–12</td>
          <td className="p-4 bg-[#F9FCFE]">Supports consistent weekly weight changes</td>
          <td className="p-4 bg-[#F9FCFE]">
            Appetite significantly reduces; you start losing weight steadily
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-4">Phase 4</td>
          <td className="p-4">Routine strengthening</td>
          <td className="p-4">Weeks 13–16</td>
          <td className="p-4">Sets your long-term pace for sustainable results</td>
          <td className="p-4">Energy improves, cravings decrease, and control increases</td>
        </tr>

        <tr>
          <td className="p-4 bg-[#F9FCFE]">Phase 5</td>
          <td className="p-4 bg-[#F9FCFE]">Maintenance stage</td>
          <td className="p-4 bg-[#F9FCFE]">Week 17 onwards</td>
          <td className="p-4 bg-[#F9FCFE]">Helps maintain weight loss and lifestyle balance</td>
          <td className="p-4 bg-[#F9FCFE]">
            You feel more in control, more energetic, and naturally maintain your weight
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  {/* ---------------- MOBILE CARDS ---------------- */}
  <div className="md:hidden space-y-6 mt-6">

    {[
      {
        phase: "Phase 1",
        freq: "Daily basics",
        duration: "Weeks 1–4",
        purpose: "Helps stabilise hunger and reduce cravings",
        notice: "You begin feeling more in control",
      },
      {
        phase: "Phase 2",
        freq: "Weekly habit tracking",
        duration: "Weeks 5–8",
        purpose: "Improves tolerance and routine strength",
        notice: "Cravings reduce, meals feel more satisfying",
      },
      {
        phase: "Phase 3",
        freq: "Behaviour reinforcement",
        duration: "Weeks 9–12",
        purpose: "Supports weekly weight progress",
        notice: "You start losing weight steadily",
      },
      {
        phase: "Phase 4",
        freq: "Routine strengthening",
        duration: "Weeks 13–16",
        purpose: "Improves discipline and long-term consistency",
        notice: "Energy improves, hunger stabilises",
      },
      {
        phase: "Phase 5",
        freq: "Maintenance stage",
        duration: "Week 17 onwards",
        purpose: "Helps maintain long-term results",
        notice: "You maintain weight naturally and feel in control",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4"
      >
        <div>
          <p className="text-[#375C7A] text-[13px]">Phase</p>
          <p className="text-[#0D4F8B] font-semibold">{item.phase}</p>
        </div>

        <div>
          <p className="text-[#375C7A] text-[13px]">Frequency</p>
          <p className="text-[#0D4F8B] font-semibold">{item.freq}</p>
        </div>

        <div>
          <p className="text-[#375C7A] text-[13px]">Duration</p>
          <p className="text-[#0D4F8B] font-semibold">{item.duration}</p>
        </div>

        <div>
          <p className="text-[#375C7A] text-[13px]">Purpose</p>
          <p className="text-[#0D4F8B]">{item.purpose}</p>
        </div>

        <div>
          <p className="text-[#375C7A] text-[13px]">What youll notice</p>
          <p className="text-[#0D4F8B]">{item.notice}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* ---------- FITYOU COLOUR STRIP DOSAGE SCHEDULE (AFTER TABLE) ---------- */}
<div ref={dosageScheduleRef} className="max-w-4xl mx-auto px-4 mt-12">
  {/* Top pill heading */}
  <div className="flex justify-center mb-6">
    <div className="bg-[#004A7A] text-white px-8 py-3 rounded-full text-[18px] font-semibold text-center">
      FitYou dosage schedule
    </div>
  </div>

  <div className="space-y-4">
    {[
      {
        mg: "0.25 mg",
        weeks: "1 – 4",
        bg: "#C4F5EE",
        weekBg: "#24B6AF",
        image: "/guide/fityou-pen-0-25.png",
      },
      {
        mg: "0.5 mg",
        weeks: "5 – 8",
        bg: "#F8B9CD",
        weekBg: "#923457",
        image: "/guide/fityou-pen-0-5.png",
      },
      {
        mg: "1.0 mg",
        weeks: "9 – 12",
        bg: "#E3B16F",
        weekBg: "#A96B21",
        image: "/guide/fityou-pen-1-0.png",
      },
      {
        mg: "1.7 mg",
        weeks: "13 – 16",
        bg: "#7AC0DA",
        weekBg: "#16628E",
        image: "/guide/fityou-pen-1-7.png",
      },
      {
        mg: "2.4 mg",
        weeks: "17+",
        bg: "#8E9BAB",
        weekBg: "#404C5A",
        image: "/guide/fityou-pen-2-4.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:items-center gap-3"
      >
        {/* Left coloured strip */}
        <div className="flex-1 rounded-full sm:rounded-[999px] overflow-hidden">
          <div
            className="flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4"
            style={{ backgroundColor: item.bg }}
          >
            {/* Pen image */}
            <div className="flex-shrink-0 w-[150px] sm:w-[210px]">
              <Image
                src={item.image}
                alt={item.mg}
                width={210}
                height={48}
                className="w-full h-auto"
              />
            </div>

            {/* mg text */}
            <div className="ml-auto text-right text-[#0D4F8B] font-semibold text-[20px] sm:text-[28px]">
              {item.mg}
            </div>
          </div>
        </div>

        {/* Week pill */}
        <div className="sm:self-stretch sm:flex sm:items-center">
          <div
            className="inline-block rounded-[18px] sm:rounded-[22px] px-4 sm:px-5 py-2 sm:py-3 text-white text-center shadow-sm min-w-[90px]"
            style={{ backgroundColor: item.weekBg }}
          >
            <p className="text-[13px] sm:text-[14px] font-medium leading-tight">
              Week
            </p>
            <p className="text-[18px] sm:text-[20px] font-semibold leading-tight">
              {item.weeks}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


{/* ---------- FITYOU PROGRESSION LIST + NOTE BOX (AKTIVE STYLE) ---------- */}
<div ref={weeklyProgressRef} className="max-w-4xl mx-auto px-4 mt-12">

  {/* Heading */}
  <p className="text-[16px] md:text-[17px] leading-[1.8] font-semibold text-[#0D4F8B] mb-4">
    Please note that your weekly experience may vary based on your lifestyle and consistency.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Here’s what you can expect to see in the coming weeks when you follow the FitYou roadmap:
  </p>

  {/* WEEK PROGRESSION LIST */}
  <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.8] text-[#375C7A]">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 1–4:</strong> Your appetite patterns begin stabilising and random cravings reduce.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 5–8:</strong> You start feeling full on smaller portions and eating becomes more controlled.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 9–12:</strong> Noticeable improvements in hunger, reduced calorie intake, and early weight changes.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 13–16:</strong> Steady weight balance continues. Energy improves and overeating reduces.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Week 17 onwards:</strong> You enter the ease-maintenance stage where habits feel natural and stable.</span>
    </li>
  </ul>

  {/* NOTE BOX */}
  <div className="bg-[#FCEFE2] text-[#375C7A] px-6 py-5 rounded-xl mt-10 border border-[#F8DCC5]">
    <p className="font-semibold text-[#0D4F8B] mb-2">Note:</p>
    <p className="text-[16px] md:text-[17px] leading-[1.8]">
      Every individual adapts at a different pace. Some people progress faster while others
      may need extra time to feel comfortable with routine changes. Your FitYou plan adjusts
      based on your feedback, weekly progress, and comfort level — ensuring healthy, steady
      growth without stress.
    </p>
  </div>
</div>

<div ref={faqRef}>
<FAQ
  items={[
    {
      question:
        "Can I increase my Wegovy dose faster if I'm not experiencing any side effects?",
      answer:
        "Even if you feel completely fine, don’t skip ahead. Each 4-week stage is designed to help your body’s GLP-1 receptors adapt slowly and safely. Rushing doses can trigger sudden side effects or reduce how well the treatment works later.",
    },
    {
      question: "Will I regain weight if I stop Wegovy after reaching my goal?",
      answer:
        "Some regain is possible if old habits return, but maintaining a structured routine helps stabilise your progress.",
    },
    {
      question:
        "Can my doctor customize my dose schedule differently from the standard plan?",
      answer:
        "Yes. Doctors often adjust the plan based on your tolerance, goals, and how your body responds.",
    },
    {
      question:
        "What if I feel nothing after the first few doses of Wegovy?",
      answer:
        "Some people respond slowly. It's normal — effects increase gradually as dose increases.",
    },
    {
      question:
        "Why do side effects come back each time I increase the dose?",
      answer:
        "Each dose level needs new adaptation. Symptoms usually settle within a few days.",
    },
    {
      question:
        "I'm losing weight well on 1.0 mg. Do I still need to increase to higher doses?",
      answer:
        "Not always. Some patients stay on lower doses long term if progress is steady and safe.",
    },
  ]}
  />
  </div>

{/* ------------------------------------------------------------- */}
{/* ------------------ CTA BUTTONS ------------------------------ */}
{/* ------------------------------------------------------------- */}

<div className="max-w-xl mx-auto text-center mt-20 space-y-4">
  <button className="w-full bg-[#A7CBD7] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[17px]">
    View programme
  </button>

  <button className="w-full bg-[#FFF7EB] border border-[#F4C892] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[17px]">
    Do I qualify?
  </button>
</div>

{/* ------------------------------------------------------------- */}
{/* ------------------ ABOUT THE AUTHOR -------------------------- */}
{/* ------------------------------------------------------------- */}

<div ref={authorRef} className="max-w-4xl mx-auto bg-[#FFF9F2] border border-[#F5E3C8] rounded-2xl p-8 mt-16">
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
    About the author:
  </h3>

  <p className="text-[#0D4F8B] font-semibold">
    Gauri Ghatnekar-Desai
  </p>

  <p className="text-[#375C7A] text-[15px] leading-[1.7] mt-1">
    holds a PG Diploma in Emergency Medical Services from Symbiosis Institute of Health Sciences, Pune.
    As a professional healthcare writer, she creates simple, accurate, detail-oriented content for health organisations, healthcare providers, and patients.
  </p>

  <p className="text-[#375C7A] text-[15px] leading-[1.7] mt-2">
    Beyond the desk, she enjoys reading, travelling, and adventure sports.
  </p>

  {/* Dates */}
  <div className="flex flex-col md:flex-row gap-4 text-[#375C7A] text-[14px] mt-5">
    <div className="flex items-center gap-2">
      <span>📅</span>
      <span>
        Update date <strong>November, 17 2025</strong>
      </span>
    </div>

    <div className="flex items-center gap-2">
      <span>📝</span>
      <span>
        Publish date <strong>November, 17 2025</strong>
      </span>
    </div>
  </div>
</div>

{/* ------------------------------------------------------------- */}
{/* ------------------ REFERENCES SECTION ------------------------ */}
{/* ------------------------------------------------------------- */}

<div ref={referencesRef} className="max-w-4xl mx-auto px-4 mt-16 pb-16">
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
    References:
  </h3>

  <ul className="space-y-6 text-[15px] leading-[1.7] text-[#375C7A]">
    <li>
      <strong>[1]</strong> Kommu, S., & Whitfield, P. (2024, February 11). Semaglutide. 
      StatPearls - NCBI Bookshelf. 
      <a 
        href="https://www.ncbi.nlm.nih.gov/books/NBK603723/"
        target="_blank"
        className="text-[#0D4F8B] underline"
      >
        https://www.ncbi.nlm.nih.gov/books/NBK603723/
      </a>
    </li>

    <li>
      <strong>[2]</strong> Moiz, A., Levett, J. Y., Filion, K. B., Peri, K., Reynier, P., & Eisenberg, M. J. (2024). 
      Long-Term Efficacy and Safety of Once-Weekly semaglutide for weight loss in patients without Diabetes:  
      A Systematic Review and Meta-Analysis of Randomized Controlled Trials.  
      <i>The American Journal of Cardiology</i>, 222, 121–130.  
      <a 
        href="https://doi.org/10.1016/j.amjcard.2024.04.041"
        target="_blank"
        className="text-[#0D4F8B] underline"
      >
        https://doi.org/10.1016/j.amjcard.2024.04.041
      </a>
    </li>
  </ul>
</div>


      </section>
    </div>
  );
}
