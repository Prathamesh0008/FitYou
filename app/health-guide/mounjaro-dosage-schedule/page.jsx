"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";


export default function MounjaroDosageSchedule() {
  // ------------------ REFS ------------------
const introRef = useRef(null);
const howWorkRef = useRef(null);
const penRef = useRef(null);
const prepRef = useRef(null);
const siteRef = useRef(null);
const stepRef = useRef(null);
const tipsRef2 = useRef(null);
const sideRef = useRef(null);
const troubleRef = useRef(null);
const storageRef = useRef(null);
const fastRef = useRef(null);
const indiaRef = useRef(null);
const advantageRef = useRef(null);
const finalRef = useRef(null);


 
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
      <div className="max-w-6xl mx-auto px-4 pt-6">
  <BackButton />
</div>

 
       {/* ------------------ HERO SECTION ------------------ */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
 
         {/* LEFT SIDE — IMAGE + CHART */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide/MASTERING-THE-MOUNJARO-INJECTION.jpg" // ← replace with your image path
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
              MASTERING THE MOUNJARO INJECTION:<br />
              EXPERT TIPS FOR A SMOOTH AND EFFECTIVE EXPERIENCE 
           </h1>
 
           {/* Sub-text */}
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
              Your complete, professional roadmap
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             for using Mounjaro injections safely, 
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             confidently, and successfully.

           </p>
 
         </div>
 
       </section>
 
 {/* ------------------ TABLE OF CONTENTS ------------------ */}
<section className="max-w-6xl mx-auto px-4 mb-12">
  <div className="bg-[#D8EEF3] rounded-2xl p-8">
    
    <h2 className="text-lg font-semibold text-[#0D4F8B] mb-4">In this article:</h2>

    <div className="grid md:grid-cols-2 gap-6 text-[#0D4F8B] text-[18px] leading-[1.8]">

      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(introRef)}>
          Introduction
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorkRef)}>
          How Mounjaro Works
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(penRef)}>
          Injection Pen Guide
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(prepRef)}>
          Before You Inject
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(siteRef)}>
          Injection Sites
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(stepRef)}>
          Step-by-Step Injection Guide
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(tipsRef2)}>
          Expert Tips
        </li>

      </ul>

      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(sideRef)}>
          Side Effects
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(troubleRef)}>
          Troubleshooting
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(storageRef)}>
          Storage Guide
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(fastRef)}>
          Weight Loss Speed
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(indiaRef)}>
          Why It Works in India
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(advantageRef)}>
          FitYou Advantage
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(finalRef)}>
          Final Thoughts
        </li>

      </ul>

    </div>
  </div>
</section>


 
 
 
 
       {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 <div className="max-w-4xl mx-auto px-4 mt-16">
 
   <div ref={introRef}>
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Introduction: Why Mounjaro Is Transforming the Weight Loss World
  </h2>
</div>

 
   <p className="text-[16px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
     If you’re searching for a science-backed, medically approved <strong>weight loss medication</strong>, one name dominates global conversations today <strong>— Mounjaro Injection</strong>. With its dual-hormone mechanism and unmatched fat-loss results, it has quickly become one of the <strong></strong>, especially for people who have struggled with traditional diets, exercise routines, and older treatments.

   </p>
 
   <p className="text-[18px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
     But like any powerful therapy, using Mounjaro the right way matters.
 Whether you are a first-time user or simply want to refine your technique, this expert FitYou guide will help you <strong>master the Mounjaro injection,</strong> reduce side effects, inject confidently, and experience a smoother, more effective weight-loss journey.

   </p>

   <p className="text-[16px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
     This article covers everything: <strong>dose guidance, technique, injection site rotation, safety checks, storage rules, pain-reduction tricks, troubleshooting, and doctor-level insights.</strong>

   </p>
 
 </div>
 
 
 
         {/* ------------------ HOW IT WORKS ------------------ */}
         <div className="max-w-3xl mx-auto">
           <div ref={howWorkRef}>
  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6">
    What Is Mounjaro? Why Are People Calling It the Future of Weight Loss?
  </h2>
</div>

 
           <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
             Mounjaro Injection (Tirzepatide), developed by Eli Lilly, is a breakthrough in medication and weight loss. Unlike older GLP-1 medications (like Semaglutide), Mounjaro activates two hormones simultaneously:
           </p>
 
           <h3 className="text-[18px] font-semibold text-[#0D4F8B] mb-4">✔ GLP-1 (appetite regulation, digestion, insulin control)</h3>
           <h3 className="text-[18px] font-semibold text-[#0D4F8B] mb-4">✔ GIP (enhanced fat burning, improved energy balance, better blood sugar control)</h3>
 
           <ul className="space-y-4 text-[16px] md:text-[18px] text-[#375C7A] leading-[1.7]">

  {/* INTRO */}
  <li>
    This dual-pathway design makes it one of the <strong>best to lose weight</strong> medications globally.
  </li>

  {/* SECTION TITLE */}
  <li className="text-[#0D4F8B] font-semibold text-[18px] md:text-[20px] mt-2">
    How Mounjaro Helps You Lose Weight
  </li>

  {/* BULLET BENEFITS */}
  {[
    "Reduces appetite significantly",
    "Keeps you full for longer periods",
    "Improves insulin response",
    "Slows down stomach emptying",
    "Reduces cravings for sweets & carbs",
    "Encourages fat-burning efficiency",
    "Helps stabilise metabolic rates",
  ].map((text, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="text-[#0D4F8B] text-xl leading-none mt-[4px]">›</span>
      <span className="flex-1">{text}</span>
    </li>
  ))}

  {/* FOLLOW-UP STATEMENT */}
  <li>
    Many users report deeper, more consistent fat loss compared to other <strong>weight medication treatments</strong>.
  </li>

  <li>Because of these results, Mounjaro is increasingly recognised as:</li>

  {/* RECOGNITION LIST */}
  {[
    <>A top <strong>drug to lose weight</strong></>,
    <>A powerful tool in <strong>lose weight treatment</strong> programs</>,
    <>One of the most effective <strong>medication for lose weight</strong> solutions</>,
    "A leading medicine for weight loss in India",
    <>A highly in-demand option for people wanting to <strong>weight reduce in 1 month</strong></>,
  ].map((text, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="text-[#0D4F8B] text-xl leading-none mt-[4px]">›</span>
      <span className="flex-1">{text}</span>
    </li>
  ))}

  {/* FINAL STATEMENT */}
  <li>
    FitYou ensures every user gets personalised, safe, and medically guided support throughout their journey.
  </li>

</ul>

         </div>
 
 
         {/* ---------- GLP-1 Activation Benefits (FitYou Style) ---------- */}
 <div ref={penRef} className="max-w-4xl mx-auto px-4 mt-16">
   <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Understanding Mounjaro Injection Pens: A Beginner-Friendly Tool
   </h2>
 
   <div className="  rounded-xl p-6 md:p-8">
     <p className="text-[#375C7A] text-[18px] md:text-[18px] leading-[1.8] mb-4">
       One of the biggest advantages of the <strong>Mounjaro injection</strong> is that the pen is designed to be extremely easy to use. You do not need clinical expertise — just proper instructions and a little practice.
     </p>
     <p className="text-[#375C7A] text-[18px] md:text-[18px] leading-[1.8] mb-4">
       <strong>Each Mounjaro Pen Is:</strong> 
     </p>
 
     <ul className="space-y-4 text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8]">
       <li className="flex gap-3">
         <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
         <span>Pre-filled</span>
       </li>
 
       <li className="flex gap-3">
         <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
         <span>Single-dose</span>
       </li>
 
       <li className="flex gap-3">
         <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
         <span>Auto-injecting</span>
       </li>
 
       <li className="flex gap-3">
         <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
         <span>Designed to minimise pain</span>
       </li>

       <li className="flex gap-3">
         <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
         <span>Disposable after one use</span>
       </li>
     </ul>
 
     <p className="text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8] mt-6">
       This means <strong>no dose measurement, no attaching needles,</strong> and <strong>no previous injection experience required</strong>.
     </p>

   </div>
 </div>


 <div ref={siteRef} className="max-w-4xl mx-auto px-4 mt-16">
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Before You Inject: Preparing for a Safe and Smooth Experience
  </h2>

  <div  className="rounded-xl p-6 md:p-8">
    <p className="text-[#375C7A] text-[18px] md:text-[18px] leading-[1.8] mb-4">
      Preparation is the foundation of a successful injection. Follow these essential steps recommended by FitYou clinicians:
    </p>

    {/* ---- STEP 1 ---- */}
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
      1. Wash Your Hands Thoroughly
    </h3>
    <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
      Maintain hygiene before handling any weight loss medication.
    </p>

    {/* ---- STEP 2 ---- */}
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
      2. Check Your Pen Label
    </h3>
    <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
      Make sure your pen matches your prescribed dose.
    </p>

    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      Mounjaro Injection currently comes in:
    </p>

    <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 2.5 mg
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 5 mg
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 7.5 mg
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 10 mg
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 12.5 mg
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> 15 mg
      </li>
    </ul>

    <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
      Your doctor will guide your dose schedule based on how your body responds.
    </p>

    {/* ---- STEP 3 ---- */}
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
      3. Inspect the Pen Before Use
    </h3>
    <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-4">
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> Ensure there is no visible damage
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> Check expiration date
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> Ensure the window shows a clear, colorless solution
      </li>
    </ul>

    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      Do not use the pen if:
    </p>

    <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8]">
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> The liquid is cloudy
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> There are particles
      </li>
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span> The pen appears cracked or leaking
      </li>
    </ul>


     {/* ------------------ STEP 4 ------------------ */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3 mt-5">
    4. Choose a Comfortable Injection Environment
  </h3>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Find a clean, calm space where you can focus without distractions.
    Many people prefer injecting:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> In front of a mirror
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Sitting down for stability
    </li>
  </ul>
  </div>
</div>


<div ref={siteRef} className="max-w-4xl mx-auto px-4 mt-16">


  {/* ------------------ Choosing Injection Site ------------------ */}
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight ">
    Choosing Your Injection Site: The Key to Comfort
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Mounjaro injections are given subcutaneously — meaning into the fatty layer under the skin.
  </p>

  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">Recommended Injection Areas</h3>

  <ul className="space-y-4 text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      <span><strong>Stomach (Abdomen)</strong> — Avoid the 2-inch area directly around the belly button.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      <span><strong>Upper Thighs</strong> — Front or outer thigh, great for beginners.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      <span><strong>Upper Arms</strong> — Best if someone else is injecting you.</span>
    </li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mt-4 mb-2">
    Important:
  </p>
  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Rotate your injection site weekly. Injecting in the same area is okay, but avoid the exact same spot to prevent irritation.
  </p>

  {/* ------------------ Step-by-Step Guide ------------------ */}
  <h2 ref={stepRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Step-by-Step: How to Inject Mounjaro Like an Expert
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Here is the complete FitYou-approved injection method for a smooth and painless experience.
  </p>

  {/* STEP 1 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
    STEP 1: Clean the Area
  </h3>
  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Use an alcohol swab to disinfect the injection site.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Let it dry completely — injecting into a wet area can sting.
    </li>
  </ul>

  {/* STEP 2 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
    STEP 2: Remove the Pen Cap
  </h3>
  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Pull off the cap straight — never twist.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Once the cap is removed, inject within 5 minutes for accuracy and sterility.
    </li>
  </ul>

  {/* STEP 3 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
    STEP 3: Position the Pen on Your Skin
  </h3>
  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Hold the pen firmly at a 90-degree angle.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Press it against the skin until you hear a click.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> The click means the injection has started.
    </li>
  </ul>

  {/* STEP 4 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
    STEP 4: Hold Steady and Wait
  </h3>
  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Keep the pen in place for 10 seconds after the click.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> This ensures the full dose is delivered.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Avoid moving, lifting, or adjusting the pen during this time.
    </li>
  </ul>

  {/* STEP 5 */}
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-2">
    STEP 5: Remove the Pen and Discard It
  </h3>
  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Lift the pen straight out.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Dispose of it in a sharps container.
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl">›</span> Do not reuse a pen — it’s single-use only.
    </li>
  </ul>

</div>

{/* ----------  IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/Mounjaro-Works4.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>




<div className="max-w-4xl mx-auto px-4 mt-16">

  {/* ------------------ EXPERT TIPS ------------------ */}
  <h2  ref={tipsRef2} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Expert Tips for a More Comfortable Mounjaro Injection (FitYou Secrets)
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    These tips significantly improve your injection experience:
  </p>

  <ul className="space-y-5 text-[#375C7A] text-[18px] leading-[1.8] mb-10">

    <li>
      <span className="font-semibold text-[#0D4F8B]">1. Inject at room temperature</span>
      <p className="mt-1">
        Cold medication can cause discomfort. Allow the pen to warm for 10–15 minutes naturally (do not heat it).
      </p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">2. Relax your muscles before injecting</span>
      <p className="mt-1">
        Tense skin = more pain. Relaxed skin absorbs the needle smoother.
      </p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">3. Rotate injection sites regularly</span>
      <p className="mt-1">
        This prevents bruising and skin thickening.
      </p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">4. Avoid injecting near scars, moles, or irritated skin</span>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">5. Do not massage the area after injecting</span>
      <p className="mt-1">A gentle touch is fine, but avoid rubbing or pressing aggressively.</p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">6. Time your injection wisely</span>
      <p className="mt-2">Most users prefer:</p>

      <ul className="ml-6 mt-1 space-y-2">
        <li className="flex gap-3">
          <span className="text-[#0D4F8B] text-xl">›</span> Morning before breakfast
        </li>
        <li className="flex gap-3">
          <span className="text-[#0D4F8B] text-xl">›</span> Evening before shower
        </li>
      </ul>

      <p className="mt-2">Choose a time you can stick to consistently.</p>
    </li>

    <li>
      <span className="font-semibold text-[#0D4F8B]">7. Stay hydrated to reduce side effects</span>
      <p className="mt-1">
        Mounjaro can slow stomach emptying; water helps balance digestion.
      </p>
    </li>

  </ul>

  {/* ------------------ SIDE EFFECTS ------------------ */}
  <h2 ref={sideRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Common Side Effects — And How to Manage Them Like a Pro
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Like all medications for weight loss, Mounjaro can cause mild, temporary side effects — especially during dose escalation.
  </p>

  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">Most Common Side Effects</h3>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Nausea</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Bloating</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Constipation</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Diarrhea</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Fatigue</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Mild stomach discomfort</li>
  </ul>

  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">How to Reduce Discomfort</h3>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Eat smaller meals</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Avoid high-fat foods</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Sip water throughout the day</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Walk after meals</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Reduce caffeine temporarily</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Avoid lying down right after eating</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Most side effects fade as your body adjusts.
  </p>

  {/* ------------------ TROUBLESHOOTING ------------------ */}
  <h2 ref={troubleRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Troubleshooting Injection Issues
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    If your injection doesn’t feel normal, here’s what to do:
  </p>

  <ul className="space-y-4 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Pen didn’t click? <br />Apply more pressure or reposition slightly.
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Pen clicked but medication leaked? <br />You may have lifted the pen too soon.
      <p className="mt-1">Ensure a full 10-second hold next time.</p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Injection site turns red? <br />A mild reaction is normal — apply a cool compress if needed.
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Severe or unusual symptoms? <br />Contact FitYou’s medical support immediately.
    </li>
  </ul>

  {/* ------------------ STORAGE ------------------ */}
  <h2  ref={storageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How to Store Mounjaro Safely
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Proper storage protects the medication’s effectiveness.
  </p>

  <ul className="space-y-4 text-[#375C7A] text-[18px] leading-[1.8]">
    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Store unused pens in the refrigerator (2°C – 8°C). Never freeze.
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      After opening (single-use pen): This does not apply — each pen is disposed after use.
    </li>

    <li className="flex gap-3">
      <span className="text-[#375C7A] text-xl">✔</span>
      Protect from heat & sunlight. Keep pens in their original packaging until use.
    </li>
  </ul>

</div>

<div className="max-w-4xl mx-auto px-4 mt-16">


  {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/Mounjaro-Works2.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

  {/* ------------------ HOW FAST YOU CAN LOSE WEIGHT ------------------ */}
  <h2 ref={fastRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How Fast Can You Lose Weight on Mounjaro?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Many people ask:
  </p>

  <p className="text-[#0D4F8B] text-[20px] font-semibold leading-[1.8] mb-4">
    “Can I lose weight in 1 month using Mounjaro?”
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    The answer: Yes — many users experience visible changes in the first month, especially reduced cravings and smaller portion sizes.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    But deeper fat loss occurs during months <strong>2–4</strong>, when the dose increases and the body adapts.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Mounjaro is considered one of the best weight loss medications because:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> It targets appetite</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> It supports blood sugar control</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> It enhances fat metabolism</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> It maintains muscle mass during weight loss</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    With FitYou’s guidance, users often exceed traditional expectations.
  </p>

  {/* ------------------ WHY MOUNJARO IS BEST IN INDIA ------------------ */}
  <h2 ref={indiaRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Why Mounjaro Is Becoming the Best Medicine for Weight Loss in India
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    India faces a rising rate of metabolic disorders, obesity, and insulin resistance. Traditional diets and exercise plans often fail because they don’t target the hormonal imbalance behind hunger cycles.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Mounjaro changes this by improving:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Hunger control</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Satiety signals</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Blood sugar</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Fat-burning</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Craving suppression</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    This makes it stand out among all loss weight medicine options in India.
  </p>

  {/* ------------------ FITYOU ADVANTAGE ------------------ */}
  <h2  ref={advantageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    FitYou Advantage: Your Partner in a Safe Mounjaro Experience
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Starting a powerful weight loss treatment like Mounjaro shouldn’t feel overwhelming. At FitYou, we make sure every step is safe, informed, and personalised.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    FitYou offers:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Personalized dose guidance</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> 24×7 medical support</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Side-effect management tips</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Weight progress insights</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Lifestyle + diet coaching</li>
    <li className="flex gap-3"><span className="text-[#375C7A] text-xl">✔</span> Injection technique assistance</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Your weight-loss journey becomes smoother when you’re supported by experts.
  </p>

  {/* ------------------ FINAL THOUGHTS ------------------ */}
  <h2  ref={finalRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Final Thoughts: Mastering the Mounjaro Journey
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Using Mounjaro injection is not just about pressing a button — it’s about understanding your body, respecting the process, and learning the right technique to experience the best weight loss results possible.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    With proper injection technique, consistent routines, and medical support, Mounjaro becomes a powerful tool to transform your health, body, and confidence.
  </p>

  <p className="text-[#0D4F8B] text-[18px] font-semibold leading-[1.8]">
    At FitYou, you’re never alone. Your journey is ours — and together, we ensure it’s effective, safe, and life-changing.
  </p>

</div>



 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/Mounjaro-Works.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

 
 <FAQ
   items={[
     {
       question:
         "What is Mounjaro Injection and how does it help with weight loss?",
       answer:
         "Mounjaro Injection (Tirzepatide) is a breakthrough weight loss medication that activates two hormones—GLP-1 and GIP—to reduce appetite, improve metabolism, and help your body burn fat more efficiently. It slows digestion, lowers cravings, and supports long-term fat reduction. Because of its strong results, Mounjaro is considered one of the best medicines to lose weight, especially for people who have struggled with dieting. When used under medical supervision through FitYou, it becomes a safe and powerful tool for sustainable weight loss.",
     },
     {
       question: "How long does it take for Mounjaro Injection to start working?",
       answer:
         "Most people begin experiencing reduced hunger and fewer cravings within the first 1–2 weeks of using Mounjaro Injection. Significant weight loss typically starts to appear between 4–8 weeks, especially as the dose gradually increases. While results vary, many FitYou users report noticeable fat loss and better appetite control early on. Since Mounjaro is a powerful medication for weight loss, staying consistent and following the recommended dose schedule is important for achieving the best long-term results.",
     },
     {
       question:
         "Is Mounjaro the best medicine to lose weight compared to other treatments?",
       answer:
         "Many experts consider Mounjaro Injection one of the best medicines to lose weight because it targets two hormones instead of one. This dual action helps control appetite, smoothens digestion, and boosts fat-burning more effectively than older medications. Clinical studies show superior weight reduction compared to GLP-1-only treatments. For people seeking a strong, science-backed lose weight treatment, Mounjaro is one of the top options. FitYou doctors customise dosing to help you achieve maximum results safely.",
     },
     {
       question:
         " Can Mounjaro help me reduce weight in 1 month?",
       answer:
         "Yes, many people begin seeing changes within the first 4 weeks of using Mounjaro, especially improvements in appetite, cravings, and portion size. While dramatic fat loss may take longer, early weight changes are common. Since Mounjaro is a strong drug to lose weight, your progress depends on your dose, metabolism, and diet habits. FitYou provides expert guidance to help you see the best possible results within your first month and continue progressing safely.",
     },
     {
       question:
         " What is the proper way to inject Mounjaro safely?",
       answer:
         "Mounjaro comes in an easy-to-use auto-injection pen. To use it safely: clean the injection site, press the pen firmly against your skin, wait for the click, and hold for 10 seconds. Recommended injection areas include the stomach, thigh, or upper arm. Always rotate injection sites and dispose of the pen after a single use. Correct technique ensures the weight medication is absorbed properly, reducing side effects and improving overall results. FitYou clinicians offer guided support to help beginners inject confidently.",
     },
     {
       question:
         " What are the common side effects of Mounjaro Injection?",
       answer:
         "Common side effects include mild nausea, constipation, diarrhea, bloating, and reduced appetite—similar to other medication and weight loss treatments. These effects usually occur during dose increases and fade as your body adjusts. Eating smaller meals, staying hydrated, and avoiding fatty foods can help ease discomfort. Severe reactions are rare, but FitYou recommends contacting a healthcare expert if symptoms persist. Despite mild early side effects, Mounjaro remains one of the most effective loss weight medicine options available today.",
     },
     {
       question:
         " Who is a good candidate for Mounjaro weight loss treatment?",
       answer:
         "Mounjaro is suitable for adults who are overweight or obese and need a safe, medically guided way to lose weight. Ideal candidates include people who have tried multiple diets, struggle with appetite control, or need a therapy stronger than traditional weight medication options. Those with insulin resistance, prediabetes, or metabolic issues may benefit even more. FitYou doctors evaluate your health profile to ensure Mounjaro is the right medicine for weight loss in India for your condition.",
     },
     {
       question:
         "Can Mounjaro help people who have failed other weight loss methods?",
       answer:
         "Yes. Mounjaro is particularly effective for people who have struggled with diet, exercise, or older weight-loss medications. Because it targets both GLP-1 and GIP pathways, it helps reduce appetite, cravings, and fat storage more powerfully than single-hormone therapies. Many patients who failed previous medications for losing weight experience breakthrough results with Mounjaro. FitYou creates a personalised dosing plan to help you succeed—even if nothing has worked before.",
     },
     {
       question:
         " Is Mounjaro safe for long-term use?",
       answer:
         "When monitored by a healthcare professional, Mounjaro Injection is considered safe for long-term use. Most people continue therapy for several months to achieve deep and lasting results. Since it’s one of the best to lose weight treatment options, ongoing supervision is important to adjust doses, reduce side effects, and support healthy lifestyle habits. FitYou ensures long-term users receive continuous guidance, medical monitoring, and personalised support for safe, sustained progress.",
     },
     {
       question:
         " Do I need a prescription for Mounjaro in India?",
       answer:
         "Yes. Mounjaro is a prescription-only medicine for weight loss in India due to its strong hormonal effects and medical supervision requirements. It must be prescribed by a qualified healthcare provider after evaluating your weight, metabolic health, and treatment goals. FitYou simplifies this process by offering guided consultations, eligibility checks, and personalised treatment planning. Because Mounjaro is among the best weight loss medications, proper medical supervision ensures safe and effective results.",
     }
   ]}
 />
 
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
 