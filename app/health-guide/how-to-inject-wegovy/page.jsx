//app\health-guide\how-to-inject-wegovy\page.jsx




"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import {useRouter} from "next/navigation";


export default function MounjaroDosageSchedule() {
  // ------------------ REFS ------------------
const introRef = useRef(null);
const howWorkRef = useRef(null);
const packRef = useRef(null);
const prepRef = useRef(null);
const penRef = useRef(null);
const stepRef = useRef(null);
const troubleRef = useRef(null);
const storageRef = useRef(null);
const tipsRef2 = useRef(null);
const advantageRef = useRef(null);
const router = useRouter();



 
   // Smooth scroll function
  const scrollToSection = (ref) => {
   if (!ref?.current) return;
 
   const yOffset = -80; // adjust this number (60–120 works best) 
   const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
 
   window.scrollTo({
     top: elementTop + yOffset,
     behavior: "smooth",
   });
 };
 
 
   return (
     <div className="bg-white font-laila pb-20 text-[18px]">
      <div className="max-w-6xl mx-auto px-4 pt-6 sticky top-0 bg-white z-50 py-3">
        <BackButton />
      </div>

 
       {/* ------------------ HERO SECTION ------------------ */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
 
         {/* LEFT SIDE — IMAGE + CHART */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide/Wegovy-injection-guide-updated.png" // ← replace with your image path
               alt="Mounjaro Dosage Chart"
               width={650}
               height={580}
               className="w-full h-auto object-contain"
             />
           </div>
         </div>
 
         {/* RIGHT SIDE — TEXT CONTENT */}
         <div className="flex flex-col justify-center">
 
           {/* Main heading */}
           <h1 className="
             text-[#102f6e]
             font-semibold
             leading-tight
             text-[34px]
             md:text-[42px]
           ">
             Wegovy Injection Guide:  <br />
              Proper Technique, Dosage & Safety Tip
           </h1>
 
           {/* Sub-text */}
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
              A slow-burning,
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             carved-in-clarity guide for beginners
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             beginning their Wegovy journey.

           </p>
 
         </div>
 
       </section>
 
 {/* ------------------ TABLE OF CONTENTS ------------------ */}
<section className="max-w-6xl mx-auto px-4 mb-12">
  <div className="bg-[#D8EEF3] rounded-2xl p-8">
    
    <h2 className="text-lg font-semibold text-[#0D4F8B] mb-4">In this article:</h2>

    <div className="grid md:grid-cols-2 gap-6 text-[#0D4F8B] text-[18px] leading-[1.8]">

      {/* LEFT COLUMN */}
      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(introRef)}>
          Introduction
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorkRef)}>
          What is Wegovy?
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(packRef)}>
          What Comes in a Wegovy Pack?
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(prepRef)}>
          Before You Inject
        </li>

      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(penRef)}>
          Understanding the Wegovy Pen
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(stepRef)}>
          Step–By–Step Injection Guide
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(troubleRef)}>
          Troubleshooting
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(storageRef)}>
          Storage Guide
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(tipsRef2)}>
          Comfort & Expert Tips
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(advantageRef)}>
          FitYou Advantage
        </li>

      </ul>

    </div>
  </div>
</section>


<div ref={introRef} className="max-w-4xl mx-auto px-4 mt-10 mb-10">

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    A calm, step-by-step guide for beginners starting their Wegovy journey.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Millions of people around the world look for a weight-loss medication that is steady, effective, and backed by strong science—not another short-lived promise. <strong>Wegovy</strong> stands out as one such advance: a once-weekly treatment that supports appetite control, improves fullness signals, and helps you build a healthier relationship with food and routine.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    But even the best medication for weight loss works best when used correctly, with guidance, consistency, and clear understanding.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    That’s where this guide helps—structured in simple, clear steps to give you confidence as you begin. You’ll learn how Wegovy works, how to take it safely, and how to make each weekly dose count toward steady and meaningful progress.
  </p>

</div>


<div ref={howWorkRef} className="max-w-4xl mx-auto px-4 mt-16">

  {/* ------------------ WHAT IS WEGOVY ------------------ */}
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    What Is Wegovy? A Deep Understanding
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Wegovy isn’t just another weight-loss medication. It is the result of decades of scientific research by Novo Nordisk, designed around a naturally occurring hormone called <strong>GLP-1</strong>. This hormone plays an essential role in appetite control, fullness, digestion, and metabolic balance.
  </p>

  {/* ------------------ WHAT WEGOVY DOES INSIDE YOU ------------------ */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
    What Wegovy Actually Does Inside You
  </h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Think of it as gently turning down your body’s internal hunger dial:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Your brain receives earlier fullness signals</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Hunger softens throughout the day</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Cravings reduce significantly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Food digests slower, helping you stay satisfied</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Insulin response improves, supporting long-term fat burning</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    This combination makes Wegovy not only a medication for weight loss, but also one of the most effective GLP-1–based treatments approved globally.
  </p>

  {/* ------------------ INDIA CONTEXT ------------------ */}
  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    In India, Wegovy was introduced in June 2025 and is now a preferred option for people seeking:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> A safe, medically guided weight-loss treatment</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> A sustainable, long-term solution</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Better metabolic and appetite control</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Support in reducing future cardiovascular risks</li>
  </ul>

  {/* ------------------ WHAT COMES IN WEGOVY PACK ------------------ */}
  <h3  ref={packRef} className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
    What Comes in a Wegovy Pack?
  </h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Each Wegovy box is designed for simplicity and safety:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> 1 pre-filled Wegovy FlexTouch pen</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> 4 NovoFine Plus disposable needles</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Instruction manual</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Just one pen, one injection per week — a simple routine that supports sustained progress.
  </p>

  {/* ------------------ BEFORE YOU INJECT ------------------ */}
  <h3 ref={prepRef} className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
    Before You Inject: The Mindset & The Method
  </h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    The first injection may feel new, but preparation builds confidence and ensures a smoother experience.
  </p>

  <ul className="space-y-4 text-[#375C7A] text-[18px] leading-[1.8]">

    <li>
      <span className="font-semibold text-[#0D4F8B]">1. Wash your hands</span>
      <p className="mt-1">Create a clean and calm environment before you begin.</p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">2. Verify your dose</span>
      <p className="mt-1">Always check the pen label to ensure you are taking the prescribed mg.</p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">3. Arrange your tools</span>
      <p className="mt-1">Keep everything within reach:</p>

      <ul className="ml-6 mt-1 space-y-2">
        <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Pen</li>
        <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> New sterile needle</li>
        <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Alcohol swab</li>
        <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Sharps container</li>
      </ul>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">4. Perform a flow check (for new pens)</span>
      <p className="mt-1">
        This ensures the medication flows correctly and the pen is ready for injection.
      </p>
    </li>

  </ul>

</div>



 
 
 
 
       {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/How-to-inject-wegovy-updated.png" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

 <div className="max-w-4xl mx-auto px-4 mt-16">

  {/* ------------------ UNDERSTANDING THE WEGOVY PEN ------------------ */}
  <h2 ref={penRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Understanding the Wegovy Pen: The Tool You Must Master
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    The Wegovy FlexTouch pen is designed so even first-time users can administer their dose with confidence. 
    It requires very little physical force, helping reduce hand strain and ensuring accurate delivery every week.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Key parts of the Wegovy pen:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Pen cap – protects the medication</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Dose selector – sets your prescribed weekly dose</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Dose counter – displays the exact amount to be injected</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Medication window – shows solution clarity</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Needle attachment point – connects to a sterile needle</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Once you understand the pen’s structure, the injection process becomes much easier and more consistent.
  </p>


  {/* ------------------ STEP-BY-STEP INJECTION GUIDE ------------------ */}
  <h2 ref={stepRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    The Step-By-Step Wegovy Injection Guide
  </h2>

  {/* STEP 1 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 1 — Attach a Fresh Needle</h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-3">
    This step ensures your injection is clean, safe, and precise.
  </p>

  <p className="text-[#375C7A] text-[18px] mb-3">How to do it:</p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Remove the pen cap</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Check the solution — it must be clear</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Verify expiry date</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Remove needle paper seal</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Press the needle straight onto the pen</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Twist until secure</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    A new needle ensures minimal discomfort, accurate dosing, and reduced risk of infection. 
    Never reuse needles — they become dull and unsafe after one use.
  </p>


  {/* STEP 2 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 2 — Flow Check & Dose Setting</h3>

  <p className="text-[#375C7A] text-[18px] mb-2"><strong>Flow check (for new pens):</strong></p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] mb-4 leading-[1.8]">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Turn the selector to the flow symbol</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Hold the pen upright</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Press the dose button</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Look for a small droplet at the needle tip</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] mb-3">
    This confirms the pen is functioning correctly.
  </p>

  <p className="text-[#375C7A] text-[18px] mb-2"><strong>Set your exact dose:</strong></p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    Turn the selector until the prescribed number aligns with the dose pointer.  
    Only the displayed number matters — ignore the clicking sounds.
  </p>


  {/* STEP 3 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 3 — Choose Your Injection Site</h3>

  <p className="text-[#375C7A] text-[18px] mb-4">Recommended areas:</p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] mb-4 leading-[1.8]">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Abdomen — avoid the 5 cm area around the belly button</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Thighs — upper front or outer thigh</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Upper arms — outer area (best if someone assists)</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] mb-8">
    Rotate injection locations weekly to avoid irritation.  
    Using the same area is fine — avoid the same exact spot.
  </p>


  {/* STEP 4 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 4 — Injecting Wegovy</h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Many beginners feel nervous, but the process is quick and becomes easier over time.
  </p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Insert the needle straight into the skin</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Ensure the dose counter is visible</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Press and hold the dose button firmly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Wait until the counter returns to “0”</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] mb-4">
    Keep holding the button while counting slowly to six.  
    This ensures the full medication dose is delivered correctly.
  </p>

  <p className="text-[#375C7A] text-[18px] mb-8">
    Removing the pen too soon may result in an incomplete dose.
  </p>


  {/* STEP 5 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 5 — After the Injection</h3>

  <ul className="space-y-2 text-[#375C7A] text-[18px] mb-8 leading-[1.8]">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Apply light pressure if needed</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Do not rub the area</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> A small drop of medication at the needle tip is normal</li>
  </ul>


  {/* STEP 6 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">STEP 6 — Dispose of the Needle Safely</h3>

  <ul className="space-y-2 text-[#375C7A] text-[18px] mb-8 leading-[1.8]">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Do not recap the inner needle cover</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Place the needle into the outer cap carefully</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Twist off and dispose in a sharps container</li>
  </ul>


  {/* TROUBLESHOOTING */}
  <h2 ref={troubleRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Blocked Needle? How to Troubleshoot
  </h2>

  <p className="text-[#375C7A] text-[18px] mb-4">
    If the dose counter does not return to “0,” the medication was not fully delivered.
  </p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] mb-8 leading-[1.8]">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Replace the needle</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Perform a flow check</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Reset your dose</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Inject again</li>
  </ul>


  {/* STORAGE */}
  <h3 ref={storageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How to Store Wegovy Correctly
  </h3>

  <p className="text-[#375C7A] text-[18px] mb-3">Unopened pens:</p>
  <ul className="ml-2 space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Keep refrigerated at 2°C–8°C</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Never freeze</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] mb-3">In-use pens:</p>
  <ul className="ml-2 space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> May be stored below 30°C for up to 6 weeks</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Avoid direct sunlight and heat</li>
  </ul>


  {/* COMFORT TECHNIQUES */}
  <h3 ref={tipsRef2} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Making Wegovy Feel Easier: FitYou Comfort Techniques
  </h3>

  <ul className="space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Eat a light meal before injecting</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Stay hydrated throughout the day</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Avoid heavy, oily foods immediately after</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Take short walks to ease nausea</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Use slow breathing if feeling anxious</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Track your weekly experience in a journal</li>
  </ul>


  {/* FINAL SECTION */}
  <h3 ref={advantageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Wegovy + FitYou: A Partnership for Transformation
  </h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Each weekly injection is a step toward better health. With proper technique, steady dosing, and professional support, Wegovy becomes one of the most effective tools for long-term weight management.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    FitYou ensures safe use, personalised adjustments, ongoing guidance, and emotional support throughout your journey.
  </p>

</div>


<div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-2xl p-6 md:p-8 mt-6">
  
  {/* Heading */}
  <p className="text-[#0b3f70] font-semibold text-[18px] mb-3">
    Launched in India in June 2025
  </p>

  {/* Description */}
  <p className="text-[#0D4F8B] text-[18px] md:text-[18px] leading-[1.8] mb-6">
   Wegovy is available in India in the form of pre-filled injection pen (FlexTouch). You can either self-inject it or take it with the help of a healthcare professional.
  </p>

  {/* Button */}

  <button
      onClick={() => router.push("/health-guide/manage-wegovy-side-effects")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Read more about Wegovy
    </button>

</div>

 
 <FAQ
  items={[
    {
      question: "Is Wegovy really the best option for medical weight loss?",
      answer:
        "Yes, many doctors consider Wegovy one of the most effective medically supervised weight-loss options available today. It works through the GLP-1 hormone pathway, helping reduce hunger, regulate cravings, and improve metabolic balance. Unlike short-term fat burners or crash-diet medications, Wegovy supports long-term fat reduction. When combined with healthy eating, movement, and medical guidance, it produces sustainable results rather than temporary changes on the scale.",
    },
    {
      question: "How do I use Wegovy safely for the first time?",
      answer:
        "If you're using Wegovy for the first time, start with the lowest dose prescribed by your doctor (usually 0.25 mg weekly). Inject on the same day each week in the abdomen, thigh, or upper arm. Always use a new needle, perform a flow check on new pens, and hold the injection for six seconds to ensure full delivery. Never increase your dose quickly—slow titration helps prevent digestive side effects.",
    },
    {
      question: "Can I buy Wegovy online safely in India?",
      answer:
        "Yes, Wegovy can be purchased safely online in India only through licensed pharmacies or medical clinics that require a valid prescription. Safe providers include doctor consultation, medical screening, dose planning, and cold-chain delivery. Avoid websites offering Wegovy without prescription—these often sell counterfeit products. Always confirm doctor support, authenticity, and proper storage before purchasing.",
    },
    {
      question: "Is an online Wegovy consultation as reliable as an in-clinic visit?",
      answer:
        "Yes, certified platforms provide reliable Wegovy online consultations using structured medical evaluation. Doctors review your BMI, medical history, blood sugar levels, lifestyle, and weight-loss goals before prescribing. You also receive dose guidance, side-effect monitoring, and follow-up reviews. Online care offers privacy, convenience, and regular digital support—while maintaining complete medical safety.",
    },
    {
      question: "How long does it take to see results with the best Wegovy program?",
      answer:
        "Most people notice appetite control within 2–3 weeks. Visible weight loss usually begins around weeks 8–12 as doses increase. Many users lose 10–15% of their body weight within 4–6 months when paired with healthy nutrition and activity. Results vary by metabolism and consistency, but Wegovy focuses on gradual, sustainable fat loss—not rapid or extreme drops.",
    },
    {
      question: "What should I check before buying Wegovy online?",
      answer:
        "Before buying Wegovy online, ensure the provider offers doctor consultation, prescription verification, proper dosage planning, and temperature-controlled delivery. Ask whether follow-ups and side-effect support are included. Avoid sellers offering unrealistic discounts or 'no-prescription' medication—these are strong signs of counterfeit Wegovy, which can be dangerous when injected.",
    },
    {
      question: "How should I use Wegovy with diet for faster fat loss?",
      answer:
        "Using Wegovy alongside the right diet can significantly improve results. Focus on high-protein meals, fibre-rich vegetables, and balanced healthy fats. Avoid overly oily, spicy, or sugary foods during dose escalation to reduce nausea. Eat slowly, stay hydrated, and practice portion control—Wegovy naturally reduces appetite, so overeating may cause discomfort during treatment.",
    },
    {
      question: "Is the best Wegovy dose the same for everyone?",
      answer:
        "No, the ideal Wegovy dose varies from person to person. Some achieve strong results at 1.0 mg or 1.7 mg, while others may benefit from the full 2.4 mg maintenance dose. The best dose depends on tolerance, metabolic response, and medical history. Doctors aim to keep you on the lowest effective dose that provides steady progress without significant side effects.",
    },
    {
      question: "Are there extra risks when using Wegovy bought online?",
      answer:
        "Yes, using Wegovy purchased online without medical supervision increases risks. Incorrect dosing, poor injection technique, dehydration, and sudden drops in blood sugar may occur. People with thyroid conditions, kidney disease, pancreatitis history, or pregnancy should not use Wegovy without strict doctor clearance. This is why trusted online programs must include licensed medical oversight.",
    },
    {
      question: "Who should avoid using Wegovy for weight loss?",
      answer:
        "Wegovy is not suitable for everyone. It should be avoided by pregnant or breastfeeding women, people with a history of thyroid cancer, severe gastric conditions, pancreatitis, advanced kidney disease, or eating disorders. Individuals who are underweight should not use it. A full medical evaluation ensures Wegovy is both effective and safe for your unique health needs.",
    },
  ]}
/>

 
 {/* ------------------------------------------------------------- */}
 {/* ------------------ CTA BUTTONS ------------------------------ */}
 {/* ------------------------------------------------------------- */}
 
 <div className="max-w-xl mx-auto text-center mt-20 space-y-4">
   <button 
   onClick={()=>router.push("/program")}
   className="w-full bg-[#A7CBD7] hover:bg-[#a5d7e7] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[18px]">
     View programme
   </button>
 
   <button className="w-full bg-[#FFF7EB] border border-[#F4C892] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[18px]">
     Do I qualify?
   </button>
 </div>
 
 {/* ------------------------------------------------------------- */}
 {/* ------------------ ABOUT THE AUTHOR -------------------------- */}
 {/* ------------------------------------------------------------- */}
 
 <div className="max-w-4xl mx-auto bg-[#FFF9F2] border border-[#F5E3C8] rounded-2xl p-8 mt-16">
   <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
     About the author:
   </h3>
 
   <p className="text-[#0D4F8B] font-semibold">
     Gauri Ghatnekar-Desai
   </p>
 
   <p className="text-[#375C7A] text-[18px] leading-[1.7] mt-1">
     holds a PG Diploma in Emergency Medical Services from Symbiosis Institute of Health Sciences, Pune.
     As a professional healthcare writer, she creates simple, accurate, detail-oriented content for health organisations, healthcare providers, and patients.
   </p>
 
   <p className="text-[#375C7A] text-[18px] leading-[1.7] mt-2">
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
 
 {/* <div className="max-w-4xl mx-auto px-4 mt-16 pb-16">
   <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
     References:
   </h3>
 
   <ul className="space-y-6 text-[18px] leading-[1.7] text-[#375C7A]">
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
 </div> */}
 
 
       </section>
     </div>
   );
 }