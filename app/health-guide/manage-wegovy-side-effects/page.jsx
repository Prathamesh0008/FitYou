//app\health-guide\manage-wegovy-side-effects\page.jsx




"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import {useRouter} from "next/navigation";


export default function HowToManageWegovySideEffect() {
  // ------------------ REFS ------------------
const introRef = useRef(null);
const howWorkRef = useRef(null);
const whySideEffectsRef = useRef(null);
const commonEffectsRef = useRef(null);
const nauseaRef = useRef(null);
const fatigueRef = useRef(null);
const dietRef = useRef(null);
const hydrationRef = useRef(null);
const trackRef = useRef(null);
const resultsRef = useRef(null);
const avoidRef = useRef(null);
const compareRef = useRef(null);
const keepOffRef = useRef(null);
const mindsetRef = useRef(null);
const supplementsRef = useRef(null);
const fitYouRef = useRef(null);
const finalRef = useRef(null);
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
 
         {/* LEFT SIDE — IMAGE + CHART 
         
         
         
         */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide/wegovy-sideeffects.png" // ← replace with your image path
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
             Simple Ways to Handle <br />
              Wegovy Side Effects
           </h1>
 
           {/* Sub-text */}
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
               Struggling with Wegovy side effects? 
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             Discover safe, simple solutions, expert guidance
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             & proven weight loss strategies with FitYou.

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
        <li className="cursor-pointer underline" onClick={() => scrollToSection(introRef)}>Introduction</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorkRef)}>Understanding Wegovy</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(whySideEffectsRef)}>Why Side Effects Happen</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(commonEffectsRef)}>Common Wegovy Side Effects</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(nauseaRef)}>Handling Nausea & Digestive Issues</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(fatigueRef)}>Managing Fatigue & Dizziness</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(keepOffRef)}>Keeping Weight Off After Stopping</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(supplementsRef)}>Safe Supplements</li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">
        <li className="cursor-pointer underline" onClick={() => scrollToSection(dietRef)}>Diet Support Tips</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(hydrationRef)}>Hydration & Gut Health</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(trackRef)}>Tracking Your Progress</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(resultsRef)}>How Fast Results Come</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(avoidRef)}>Who Should Avoid Wegovy</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(compareRef)}>Wegovy vs Other Medications</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(mindsetRef)}>Mindset for Weight Loss</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(fitYouRef)}>FitYou Expert Advice</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(finalRef)}>Conclusion</li>
      </ul>

    </div>
  </div>
</section>




<div ref={introRef} className="max-w-4xl mx-auto px-4 mt-16">

  {/* INTRO SECTION */}
  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    In today’s fast-paced world, more people than ever are looking for an effective weight-loss medication that truly works. From busy professionals to individuals managing obesity-related health concerns, the need for a reliable solution to support healthy weight reduction continues to grow. One of the most trusted options gaining worldwide recognition is <strong>Wegovy</strong> — a medically approved treatment for sustainable fat loss.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Like all medications used for weight management, Wegovy can cause certain side effects. While most are mild and temporary, they can feel uncomfortable without proper guidance. That’s why understanding how the medication works — and how to manage your symptoms — is essential for a smooth experience.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    At FitYou, we believe successful weight-loss treatment is about more than taking an injection. It’s about knowing your body, managing side effects responsibly, and following a structured plan that supports long-term progress.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    In this detailed guide, you will learn:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Why Wegovy causes side effects</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> The most common symptoms you may experience</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Proven ways to manage Wegovy side effects safely</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> How to maximise results while protecting your health</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> How to turn Wegovy into a long-term, sustainable weight-loss tool</li>
  </ul>


  {/* UNDERSTANDING WEGOVY */}
  <h2 ref={howWorkRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Understanding Wegovy as a Weight-Loss Medication
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Wegovy is a GLP-1 receptor agonist, a class of medications that mimic a natural hormone responsible for appetite control, digestion, and blood sugar regulation. This makes it one of the most effective modern treatments for weight management.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Unlike traditional appetite suppressants that offer short-term results, Wegovy works at a deeper hormonal level. This leads to:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Reduced appetite</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Improved control over cravings</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Slower digestion and longer fullness</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Steady, long-term fat loss rather than temporary changes</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    This is why many healthcare professionals consider Wegovy one of the most effective medications for people who have struggled with repeated dieting challenges.
  </p>


  {/* WHY SIDE EFFECTS HAPPEN */}
  <h2 ref={whySideEffectsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Why Side Effects Happen With Weight-Loss Medication
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    When you begin a powerful weight-loss medication like Wegovy, your digestive and hormonal systems start adjusting to the changes. This adaptation phase is the reason most side effects occur.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Here’s why side effects happen:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Slower stomach emptying</strong> — food stays in the stomach longer, causing nausea or bloating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Reduced appetite</strong> — your body needs time to adjust to smaller portions</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Blood sugar adjustments</strong> — may lead to temporary dizziness or fatigue</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Lower fluid intake</strong> — eating less can unintentionally reduce hydration</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    The reassuring news is that most people see these symptoms improve naturally within the first few weeks as the body adapts.
  </p>

</div>


 
       {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE)  ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/How-does-wegovy-work-updated.png" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>



 <div className="max-w-4xl mx-auto px-4 mt-16">

  {/* MOST COMMON SIDE EFFECTS */}
  <h2 ref={commonEffectsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Most Common Wegovy Side Effects You May Experience
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    When using a medication for weight loss, it’s important to understand which side effects are normal and which require medical attention. The most commonly reported Wegovy side effects include:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Nausea — the most frequent and typically dose-related</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Vomiting — often triggered by eating heavy or fatty meals</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Diarrhoea — part of the digestive system’s adjustment</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Constipation — due to reduced food intake and slower digestion</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Fatigue — your body adapting to lower calorie consumption</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Dizziness — often related to dehydration or low blood sugar</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Acid reflux — due to delayed stomach emptying</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span>Reduced appetite — an expected therapeutic effect</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    Recognising these symptoms early allows you to manage them properly and continue your weight-loss treatment without unnecessary interruption.
  </p>


  {/* HANDLING NAUSEA */}
  <h2 ref={nauseaRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-6">
    Simple Ways to Handle Nausea & Digestive Issues
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Nausea is the most common reason people consider stopping their weight-loss medication. Fortunately, it is also one of the easiest side effects to control.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Practical tips to reduce nausea:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-8">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat smaller meals every 3–4 hours</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid fried, oily, or spicy foods</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Drink ginger tea or lemon-infused water</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat slowly and chew thoroughly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid lying down immediately after meals</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Choose bland foods during dose adjustment</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Best foods to eat while on Wegovy:</p>

  <ul className="space-y-2 text-[#375C7A] text-[18px] leading-[1.8] mb-10 ml-2">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Oats</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Boiled rice</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Bananas</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Yogurt</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Paneer</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Steamed vegetables</li>
  </ul>


  {/* MANAGING FATIGUE */}
  <h2 ref={fatigueRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-6">
    Managing Fatigue, Dizziness & Weakness Safely
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Feeling tired or light-headed is common when starting any weight-loss medication, especially during the first few weeks.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">What helps:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Drink 2.5–3 litres of water daily</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Add electrolytes if dizziness continues</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Take short rests if you feel fatigued</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid heavy exercise during the first weeks</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Increase your protein intake to stabilise energy levels</li>
  </ul>


  {/* DIET SUPPORT */}
  <h2 ref={dietRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-6">
    Diet Adjustments That Support Medication-Based Weight Loss
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Diet is the foundation of effective weight-loss treatment. Even the best medication requires proper nutrition to work optimally.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Ideal daily structure:</p>

  <ul className="space-y-4 text-[#375C7A] text-[18px] leading-[1.8] mb-6 ml-2">
    <li><strong>Breakfast:</strong> High protein + fibre (eggs, oats, paneer)</li>
    <li><strong>Lunch:</strong> Vegetables + lean protein + healthy fats</li>
    <li><strong>Snack:</strong> Fruits, nuts, yogurt</li>
    <li><strong>Dinner:</strong> Light protein + cooked vegetables</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Key nutrition rules:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-10">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Prioritise protein to protect muscle</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Add fibre to prevent constipation</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Avoid sugary drinks or liquid calories</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Be consistent — extremeness is unnecessary</li>
  </ul>


  {/* HYDRATION & GUT HEALTH */}
  <h2 ref={hydrationRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-6">
    Hydration & Gut Health While Using Weight-Loss Medication
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Hydration is often underestimated but plays a major role in controlling side effects and supporting healthy digestion.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Why hydration matters:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Reduces nausea</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Prevents headaches</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Avoids constipation</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Supports fat metabolism</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Gut health tips:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Include probiotics regularly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Limit artificial sweeteners</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Maintain balanced fibre intake</li>
  </ul>

</div>


{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) c:\Users\AMD\Downloads\Wegovy Dosage for Weight Loss - JPG\wegovy-mild-sideeffects.png ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/wegovy-mild-sideeffects.png" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

 <div className="max-w-4xl mx-auto px-4 mt-16">

  {/* TRACKING PROGRESS */}
  <h2 ref={trackRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How to Track Progress Using a Weight Loss Diary
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    A weight loss diary isn’t just about numbers — it helps you understand your body, habits, and emotional patterns.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">What You Should Track:</p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-10">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Daily weight</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Water intake</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Energy levels</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Food quality</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Side effects</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Mood & sleep</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Research shows that people who maintain a diary are far more likely to lose weight — and keep it off long term.
  </p>


  {/* TIMELINE */}
  <h2 ref={resultsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How Fast Can You Expect Results?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Many users want fast results, but realistic timelines create sustainable transformations.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Wegovy Weight Loss Timeline:</p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Week 1–2: Appetite drops</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Week 3–4: Visible reduction within the first month</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> 3 months: Major fat loss phase</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> 6–12 months: Full-body transformation</li>
  </ul>


  {/* WHO SHOULD AVOID */}
  <h2 ref={avoidRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Who Should Avoid Wegovy or Use With Caution
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Despite its effectiveness, Wegovy is not suitable for everyone. Use caution or avoid completely if you have:
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Thyroid cancer history</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Severe gastrointestinal disease</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Eating disorders</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Pregnancy or breastfeeding</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Medical supervision is essential when using any strong weight-loss medication.
  </p>


  {/* WEGOVY VS OTHER DRUGS */}
  <h2 ref={compareRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Wegovy vs Other Weight Loss Medications
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Compared to older weight-loss drugs, Wegovy stands out because it:
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Controls hunger at the brain level</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Supports long-term fat loss</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Reduces emotional eating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Improves insulin sensitivity</li>
  </ul>


  {/* POST-WEGOVY RESULTS */}
  <h2 ref={keepOffRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Can You Keep Weight Off After Stopping Wegovy?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Yes — but only if your habits change. Wegovy is a tool, not a permanent dependency.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">To maintain results, continue:</p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Maintaining protein intake</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Staying physically active</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Avoiding ultra-processed foods</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Tracking weight and appetite weekly</li>
  </ul>


  {/* MINDSET SECTION */}
  <h2 ref={mindsetRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    The Role of Mindset in Medication-Based Weight Loss
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Sustainable weight loss is not just physical — it is emotional and behavioral. Even the best medication fails without the right mindset.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Success depends on:</p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Stress management</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Sleep discipline</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Emotional eating control</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Long-term consistency</li>
  </ul>


  {/* SAFE SUPPLEMENTS */}
  <h2 ref={supplementsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Safe Supplements to Support Wegovy Treatment
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Certain supplements may help reduce side effects and support metabolism.
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Magnesium — reduces cramps & fatigue</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Omega-3 — supports metabolism & heart health</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Probiotics — improves digestion & gut balance</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Electrolytes — prevent dizziness & dehydration</li>
  </ul>


  {/* FITYOU EXPERT ADVICE */}
  <h2 ref={fitYouRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    FitYou’s Expert Advice for Safe & Sustainable Weight Loss
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    At FitYou, we believe lasting transformation happens when medical science, nutrition, movement, and mental strength work together. Wegovy can unlock powerful fat loss — but expert support ensures it becomes a sustainable, healthy, long-term result.
  </p>


  {/* CONCLUSION */}
  <h2 ref={finalRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Conclusion: Is Wegovy the Right Weight Loss Medicine for You?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Wegovy is one of today’s most advanced weight-loss treatments — but it must be used correctly. Side effects such as nausea, digestion issues, and fatigue are common but manageable with the right strategy.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">For the best results, remember to:</p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Understand your body</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Follow a balanced diet</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Stay hydrated</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Track your progress</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> Maintain a strong mindset</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8]">
    When used responsibly, Wegovy becomes more than a weight-loss medication — it becomes your gateway to a long-term health transformation.
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
      onClick={() => router.push("/health-guide/wegovy-dosage-schedule")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Read more about Wegovy
    </button>
  

</div>


 
 <FAQ
  items={[
    {
      question: "What is Wegovy and how does it help with weight loss?",
      answer:
        "Wegovy is a prescription weight loss medication that mimics a natural hormone called GLP-1 to control hunger and appetite. It signals your brain that you are full, helping you eat less without constant cravings. Wegovy supports long-term fat loss by regulating appetite, slowing digestion, and improving insulin response. When combined with a healthy lifestyle, it becomes a highly effective tool for sustainable weight loss without starvation or crash dieting."
    },
    {
      question: "What are the most common side effects of Wegovy?",
      answer:
        "Common side effects include nausea, vomiting, diarrhea, constipation, fatigue, dizziness, and reduced appetite. These symptoms usually appear in the first few weeks while your body adjusts. Most effects are mild to moderate and improve with time. Eating smaller meals, staying hydrated, and avoiding oily or spicy foods can reduce discomfort. Severe or persistent side effects should always be discussed with a medical professional."
    },
    {
      question: "How long do Wegovy side effects usually last?",
      answer:
        "For most people, Wegovy side effects last 2 to 6 weeks. This adjustment period allows your digestive system and appetite hormones to adapt. Nausea and fatigue are usually the first symptoms but often decrease with consistent use. If side effects continue beyond six weeks or worsen, consult your doctor. Slower dose increases and proper meal timing can significantly improve comfort."
    },
    {
      question: "Can I stop Wegovy if the side effects feel unbearable?",
      answer:
        "Yes, you can stop Wegovy if side effects become difficult to manage, but this should always be done under medical supervision. Stopping suddenly without guidance may lead to appetite rebound and weight regain. Doctors may adjust your dose, extend your adjustment period, or provide supportive strategies. In many cases, small changes allow you to continue the treatment comfortably."
    },
    {
      question: "How fast can I expect to lose weight with Wegovy?",
      answer:
        "Weight loss varies per person, but most users notice reduced appetite within 1–2 weeks and visible fat loss within the first month. Clinical studies show major fat loss within 3 to 6 months of consistent use. Wegovy supports steady, sustainable weight loss rather than rapid crash dieting, making it ideal for long-term results."
    },
    {
      question: "Is Wegovy safe for long-term use?",
      answer:
        "Yes, Wegovy is considered safe for long-term use under medical supervision. Clinical trials confirm its safety for extended treatment. Many individuals use it for 6–12 months as part of a supervised program. Regular monitoring and lifestyle management ensure long-term effectiveness. Lasting success also requires healthy eating habits and physical activity."
    },
    {
      question: "Can I regain weight after stopping Wegovy?",
      answer:
        "Yes, weight regain is possible if healthy habits are not maintained. Wegovy helps control appetite, but hunger signals may return once treatment stops. Building long-term habits—such as eating balanced meals, staying active, and tracking progress—is essential to maintaining results. People who rely only on medication are more likely to regain weight, while those who develop habits maintain their success."
    },
    {
      question: "Who should avoid using Wegovy?",
      answer:
        "Wegovy is not suitable for people with a history of thyroid cancer, severe gastrointestinal diseases, pancreatitis, eating disorders, or those who are pregnant or breastfeeding. It may also be unsuitable for individuals with certain hormonal disorders or sensitivity to GLP-1 medications. A complete medical evaluation is required before starting Wegovy."
    },
    {
      question: "Can Wegovy be combined with other weight loss treatments?",
      answer:
        "Wegovy can be combined with diet, exercise, and behavioral therapy for better results. However, combining it with other weight loss medications should only be done under medical supervision. Mixing appetite suppressants or fat-burning drugs can increase risks like nausea, dizziness, dehydration, or heart issues. A structured single-medication plan is usually safer and more effective."
    },
    {
      question: "Is Wegovy a permanent solution for weight loss?",
      answer:
        "Wegovy is not a permanent cure, but it is a powerful tool for long-term weight control. It helps reset appetite patterns while you build healthier habits. Once these habits are established, many people maintain weight loss even after stopping the medication. Sustainable results come from balanced nutrition, physical activity, and consistent lifestyle changes."
    }
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