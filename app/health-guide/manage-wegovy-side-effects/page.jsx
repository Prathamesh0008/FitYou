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
const whatIsRef = useRef(null);
const viralRef = useRef(null);
const controversyRef = useRef(null);
const howWorksRef = useRef(null);
const dosageRef = useRef(null);
const sideEffectsRef = useRef(null);
const costRef = useRef(null);
const buyingOnlineRef = useRef(null);
const whoUseRef = useRef(null);
const futureRef = useRef(null);
const conclusionRef = useRef(null);





 
   // Smooth scroll function
const scrollToSection = (ref) => {
  if (!ref?.current) return;

  const headerOffset = 140; // height of navbar + sticky back bar (adjust if needed)
  const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementTop - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
 
 
   return (
     <div className="bg-white font-laila pb-20 text-[18px]">
      {/* Sticky back button BELOW navbar */}
          <div className="sticky top-[70px] z-40 bg-white border-b border-[#E4EEF2]">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <BackButton label="Back" />
            </div>
          </div>

 
       {/* ------------------ HERO SECTION ------------------ */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
 
         {/* LEFT SIDE — IMAGE + CHART 
         
         
         
         */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide2/4.1.jpg" // ← replace with your image path
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
             
             leading-tight
             text-[34px]
             md:text-[42px]
           ">
             Why Mounjaro Is Making Headlines —  <br />
             From Diabetes Treatment to a Controversial Weight-Loss Revolution
           </h1>
 
           {/* Sub-text */}
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
               Discover why Mounjaro is trending—from diabetes treatment
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
              to dramatic weight-loss results. Learn its benefits, dosage, 
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             side effects, cost & how to buy safely online.

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
        <li className="cursor-pointer underline" onClick={() => scrollToSection(whatIsRef)}>1. What Is Mounjaro?</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(viralRef)}>2. Viral Weight-Loss Phenomenon</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(controversyRef)}>3. Controversy & Ethical Issues</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorksRef)}>4. How Mounjaro Works</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageRef)}>5. Dosage & Safe Usage</li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">
        <li className="cursor-pointer underline" onClick={() => scrollToSection(sideEffectsRef)}>6. Side Effects</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(costRef)}>7. Mounjaro Cost</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(buyingOnlineRef)}>8. Buying Mounjaro Online</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(whoUseRef)}>9. Who Should Use / Avoid It</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(futureRef)}>10. The Future of Mounjaro</li>
        <li className="cursor-pointer underline" onClick={() => scrollToSection(conclusionRef)}>Conclusion</li>
      </ul>

    </div>
  </div>
</section>




<div ref={introRef} className="max-w-4xl mx-auto px-4 mt-16">

  {/* INTRO SECTION */}
  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Mounjaro (tirzepatide) has become one of the most talked-about medications of the last decade. Originally developed and FDA-approved for Type 2 Diabetes, it quickly rose to global fame for something far beyond glucose control its ability to trigger dramatic, rapid, and often life-changing weight loss. Searches like Buy Mounjaro, Mounjaro Online, and Best Mounjaro Online have surged as millions seek access to this groundbreaking drug.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    But why exactly is Mounjaro dominating the headlines? What makes it so different from other medications? Is it truly a miracle treatment or has its viral popularity overshadowed important safety, ethical, and medical considerations?
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    In this comprehensive FitYou guide, we break down everything you need to know, from how Mounjaro works to the heated controversy surrounding its rapidly growing off-label use.
  </p>

  {/* ------------------ 1) WHAT IS MOUNJARO? ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={whatIsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     What Is Mounjaro? A Breakthrough in Diabetes Care
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Mounjaro, known generically as tirzepatide, is a once-weekly injectable medication designed 
    to help people with Type 2 Diabetes improve their blood sugar control. Approved by the FDA in 2022, 
    it quickly stood out from other diabetes drugs because of its groundbreaking dual-hormone mechanism.
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Unlike earlier medications that stimulate just one receptor, Mounjaro activates two key metabolic 
    hormones—<strong>GIP</strong> and <strong>GLP-1</strong>—offering better glucose regulation, 
    improved insulin sensitivity, and significant appetite suppression.
  </p>

  {/* Highlight Box */}
  <div className="bg-[#E8F4FA] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
      Why Doctors Call It a Game-Changer
    </h3>

    <ul className="space-y-3 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>• Reduced A1C levels more effectively than Ozempic and Trulicity</li>
      <li>• Helped patients lose substantial weight while controlling glucose</li>
      <li>• Improved overall metabolic health</li>
    </ul>
  </div>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    For many, it represents a new era of diabetes treatment—one that not only stabilizes blood sugar 
    but also targets weight, one of the most important underlying causes.
  </p>

</div>

{/* ------------------ 2) MOUNJARO VIRAL WEIGHT LOSS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={viralRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     How Mounjaro Went Viral: The Weight-Loss Phenomenon
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Though Mounjaro was designed for diabetes, it was its weight-loss potential that propelled it into 
    mainstream attention. Social media platforms like TikTok, Instagram, and YouTube exploded with 
    transformations—some losing 40, 60, even 100+ pounds.
  </p>

  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      This led to skyrocketing search trends for:
    </p>
    <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>• Mounjaro for weight loss</li>
      <li>• How to buy Mounjaro without prescription</li>
      <li>• Best Mounjaro Online pharmacies</li>
    </ul>
  </div>

  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
    Why the Weight Loss Is So Dramatic
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Mounjaro slows digestion, suppresses appetite, and rebalances hunger hormones. Patients feel 
    full longer and naturally consume fewer calories. Clinical trials found that tirzepatide often 
    enables twice as much weight loss as traditional GLP-1 drugs like Ozempic.
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    No wonder celebrities, influencers, and everyday people alike have fueled the global buzz.
  </p>

</div>

{/* ------------------ 3) CONTROVERSY & ETHICS ------------------ */}
<div ref={controversyRef} className="max-w-4xl mx-auto px-4 mt-20 mb-10">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     The Controversy: Shortages, Off-Label Use & Ethical Debates
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    While the results are impressive, the explosive popularity has created major challenges.
  </p>

  {/* ---- Shortages ---- */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    Prescription Shortages
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    As demand surged, pharmacies struggled to keep up. Many diabetes patients reported difficulty 
    refilling prescriptions—sparking frustration and raising ethical questions about access.
  </p>

  {/* ---- Off-label ---- */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    Off-Label Prescriptions
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Doctors can legally prescribe Mounjaro for weight loss, even though it was created for diabetes. 
    But high demand for cosmetic weight loss has blurred the line between medical necessity and 
    general consumer use.
  </p>

  {/* ---- Online Pharmacy Issues ---- */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    The Online Pharmacy Problem
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-2">
    People searching for cheap Mounjaro or “Mounjaro online” often encounter:
  </p>

  <ul className="space-y-2 text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    <li>• Counterfeit products</li>
    <li>• Unsafe formulations</li>
    <li>• Websites selling without prescriptions</li>
  </ul>

  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-2">FitYou’s stance:</p>
    <p className="text-[17px] text-[#375C7A] leading-[1.7] ">
      FitYou strongly advises caution when buying online—safety and authenticity must always 
      come first.
    </p>
  </div>

</div>
</div>


 
       {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE)  ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide2/4.2.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>



 {/* ------------------ 4) HOW MOUNJARO WORKS ------------------ */}
<div ref={howWorksRef} className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     How Mounjaro Works: The Dual-Hormone Advantage
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Understanding Mounjaro requires looking at the hormones behind it.
  </p>

  {/* GLP-1 */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    GLP-1 Mechanism
  </h3>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-6">
    <li>• Stimulates insulin production</li>
    <li>• Reduces glucose released from the liver</li>
    <li>• Slows stomach emptying</li>
  </ul>

  {/* GIP */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    GIP Mechanism
  </h3>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-6">
    <li>• Enhances insulin release</li>
    <li>• Improves fat metabolism</li>
    <li>• Further reduces appetite</li>
  </ul>

  {/* Why Dual Matters */}
  <div className="bg-[#E8F4FA] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
      Why Combining the Two Is Revolutionary
    </h3>

    <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A]">
      <li>• Superior glycemic control</li>
      <li>• Greater hunger suppression</li>
      <li>• More significant weight loss</li>
      <li>• A metabolic “reset” for many patients</li>
    </ul>
  </div>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    This is what sets Mounjaro apart and why researchers believe it may shape the future of metabolic medicine.
  </p>

</div>


{/* ------------------ 5) MOUNJARO DOSAGE ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={dosageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro Dosage: How to Use It Safely
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Mounjaro comes in several dosage levels, and it must be increased gradually to minimize side effects.
  </p>

  {/* Dosage Schedule */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0D4F8B] mb-4">
    Standard Mounjaro Dosage Schedule
  </h3>

  <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A] mb-6">
    <li>• Start: 2.5 mg once weekly (for tolerance)</li>
    <li>• Increase: 5 mg after 4 weeks</li>
    <li>• Adjust: 7.5 mg, 10 mg, 12.5 mg, or 15 mg based on goals</li>
  </ul>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    Patients should never increase dosage without medical supervision.
  </p>

  {/* Injection Instructions */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0D4F8B] mb-4">
    Injection Instructions
  </h3>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    Mounjaro is injected subcutaneously (under the skin) in the:
  </p>

  <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A] mb-6">
    <li>• Abdomen</li>
    <li>• Thigh</li>
    <li>• Upper arm</li>
  </ul>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    Rotate injection sites to prevent irritation.  
    Missed doses should be handled as directed by a healthcare provider—<strong>never doubled.</strong>
  </p>

</div>


{/* ------------------ 6) MOUNJARO SIDE EFFECTS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={sideEffectsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro Side Effects: Mild to Serious Risks
  </h2>

  {/* Common Side Effects */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    Common Side Effects
  </h3>

  <p className="text-[17px] text-[#375C7A] leading-[1.8] mb-4">
    Most occur due to slowed digestion:
  </p>

  <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A] mb-6">
    <li>• Nausea</li>
    <li>• Vomiting</li>
    <li>• Constipation</li>
    <li>• Diarrhea</li>
    <li>• Loss of appetite</li>
    <li>• Fatigue</li>
  </ul>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    Symptoms often decrease as the body adjusts to the dosage.
  </p>

  {/* Serious Risks */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    Serious Side Effects
  </h3>

  <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A] mb-4">
    <li>• Pancreatitis</li>
    <li>• Thyroid tumors</li>
    <li>• Gallbladder disease</li>
    <li>• Severe allergic reactions</li>
  </ul>

  <p className="text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Patients with a history of thyroid cancer or pancreatitis should avoid it unless a specialist approves.
  </p>

  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold mb-2">FitYou Recommendation:</p>
    <p className="text-[17px] text-[#375C7A] leading-[1.7]">
      Regular monitoring and immediate medical attention for severe symptoms.
    </p>
  </div>

</div>


{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE)  ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide2/4.3.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

{/* ------------------ 7) MOUNJARO COST ------------------ */}
<div ref={costRef} className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro Cost: Why Is It So Expensive?
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Mounjaro is one of the most costly diabetes medications available today.
  </p>

  {/* Cost Box */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <h3 className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Average Mounjaro Cost (Before Insurance)</h3>
    <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A]">
      <li>• $900 to $1,200 per month</li>
    </ul>
    <p className="text-[17px] leading-[1.7] text-[#375C7A] mt-3">
      Prices vary by pharmacy, insurance plan, availability, and dosage.
    </p>
  </div>

  {/* Insurance Coverage */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    Insurance Coverage
  </h3>
  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Most insurance companies cover Mounjaro for diabetes. However, many do not cover it for weight loss, 
    leading consumers to search for affordable Mounjaro online.
  </p>

  {/* High Demand Impact */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    Why the High Demand Increases Prices
  </h3>
  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    Shortages and viral popularity have boosted prices dramatically. Patients without insurance often 
    look for discounted alternatives, which can lead to risky purchases from unverified online sources.
  </p>

</div>


{/* ------------------ 8) BUYING MOUNJARO ONLINE ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={buyingOnlineRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Buying Mounjaro Online: What You Need to Know
  </h2>

  {/* Why People Buy Online */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-3">
    Why People Turn to Online Pharmacies
  </h3>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-6">
    <li>• Cost savings</li>
    <li>• Convenience</li>
    <li>• Local shortages</li>
    <li>• Privacy</li>
  </ul>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    However, not all online pharmacies are safe.
  </p>

  {/* How to Find the Best Online Source */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    How to Find the Best Mounjaro Online
  </h3>

  <p className="text-[17px] text-[#375C7A] leading-[1.8] mb-3">
    Look for:
  </p>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-6">
    <li>• Licensed pharmacies</li>
    <li>• Prescription requirement</li>
    <li>• Verified certification (e.g., NABP or LegitScript)</li>
    <li>• Cold-chain shipping capabilities (temperature-controlled medication handling)</li>
  </ul>

  <p className="text-[17px] text-[#375C7A] leading-[1.8] mb-3">
    Avoid websites offering:
  </p>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-8">
    <li>• No prescription needed</li>
    <li>• Extremely low prices</li>
    <li>• Unknown brands</li>
    <li>• Overseas shipping without verification</li>
  </ul>

  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-2">FitYou’s safety advice:</p>
    <p className="text-[17px] text-[#375C7A] leading-[1.7]">
      Always purchase Mounjaro through legitimate, regulated channels to ensure safety and authenticity.
    </p>
  </div>

</div>


{/* ------------------ 9) WHO SHOULD USE MOUNJARO ------------------ */}
<div ref={whoUseRef} className="max-w-4xl mx-auto px-4 mt-20 mb-10">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Who Should Use Mounjaro — and Who Should Avoid It
  </h2>

  {/* Ideal Candidates */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    Ideal Candidates
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-3">
    Mounjaro may be suitable for:
  </p>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-8">
    <li>• Adults with Type 2 Diabetes needing better glucose control</li>
    <li>• Individuals with obesity under a doctor’s guidance</li>
    <li>• Patients who have tried other medications without success</li>
  </ul>

  {/* Not Suitable For */}
  <h3 className="text-[20px] md:text-[22px] text-[#0D4F8B] font-semibold mb-4">
    Not Suitable For
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-3">
    Avoid Mounjaro if you have:
  </p>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-6">
    <li>• Personal or family history of medullary thyroid carcinoma</li>
    <li>• MEN2 syndrome</li>
    <li>• Severe gastrointestinal issues</li>
    <li>• Pregnancy or breastfeeding</li>
  </ul>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    Consultation with a healthcare provider is essential before starting Mounjaro.
  </p>

</div>








{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) c:\Users\AMD\Downloads\Wegovy Dosage for Weight Loss - JPG\wegovy-mild-sideeffects.png ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide2/4.4.jpeg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

{/* ------------------ 10) THE FUTURE OF MOUNJARO ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={futureRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     The Future of Mounjaro: More Than Just a Trend
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Mounjaro is not just a momentary headline—it represents the future of metabolic medicine.
  </p>

  {/* Upcoming FDA Approvals */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0D4F8B] mb-4">
    Upcoming FDA Approvals
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-4">
    Tirzepatide is anticipated to receive approval specifically for obesity soon, which may:
  </p>

  <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A] mb-6">
    <li>• Reduce ethical concerns</li>
    <li>• Expand insurance coverage</li>
    <li>• Normalize weight-loss treatment</li>
  </ul>

  {/* Research Areas */}
  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0D4F8B] mb-4">
    Researchers Are Studying Mounjaro’s Potential in:
  </h3>

  <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7] mb-8">
    <li>• Cardiovascular health</li>
    <li>• Fatty liver disease</li>
    <li>• Metabolic syndrome</li>
    <li>• Blood pressure reduction</li>
  </ul>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    Experts predict that Mounjaro and similar dual-agonist medications will redefine how we treat 
    obesity and diabetes in the coming decades.
  </p>

</div>


{/* ------------------ FINAL CONCLUSION ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20 mb-20">

  <h2 ref={conclusionRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Conclusion: The Real Story Behind the Mounjaro Hype
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Mounjaro is far more than a social-media trend—it is a revolutionary advancement in diabetes care 
    with transformative weight-loss potential. While the excitement is understandable, it’s crucial 
    to approach it with accurate information, medical guidance, and awareness of risks.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    Whether someone is considering Mounjaro for diabetes management or medically supervised 
    weight loss, they must understand:
  </p>

  <ul className="space-y-3 text-[17px] text-[#375C7A] leading-[1.7] mb-8">
    <li>• Proper Mounjaro dosage</li>
    <li>• Potential side effects</li>
    <li>• The true cost of treatment</li>
    <li>• The risks of buying Mounjaro online without verification</li>
  </ul>

  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold mb-3">
      FitYou’s commitment:
    </p>
    <p className="text-[17px] text-[#375C7A] leading-[1.7]">
      FitYou supports an informed, science-backed approach to health—not hype-driven decisions. 
      As research evolves, Mounjaro may continue shaping the future of chronic disease treatment, 
      but safe use, education, and professional guidance must always come first.
    </p>
  </div>

</div>




<div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-2xl p-6 md:p-8 mt-6">
  
  {/* Heading */}
  <p className="text-[#0b3f70] font-semibold text-[18px] mb-3">
    Launched in India in June 2025
  </p>

  {/* Description */}
  <p className="text-[#0D4F8B] text-[18px] md:text-[18px] leading-[1.8] mb-6">
    Mounjaro for weight loss: Now available at Aktive
If you are looking for a safe, effective, and sustainable weight loss with Mounjaro, your search ends at Aktive’s weight loss programme.

Get your Mounjaro injection for weight loss at Aktive, and lose upto 21% of your body weight in 16 months. No restrictive diets. No intense workout schedules.

Just pure weight loss, right from the comfort of your home.
  </p>

  {/* Button */}

  <button
      onClick={() => router.push("program/page")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Check if you are eligible for mounjaro
    </button>


</div>


 
 <FAQ
  items={[
    {
      question: "Why is Mounjaro making headlines right now?",
      answer:
        "Mounjaro is making global headlines because it offers groundbreaking results for both Type 2 Diabetes and significant weight loss. Its dual-hormone mechanism has shown greater effectiveness than older medications like Ozempic, leading to rapid transformations widely shared online. This has sparked enormous public interest, increased demand, and even occasional shortages. Many people are searching for ways to Buy Mounjaro or find Mounjaro Online due to its impressive results. These trends have created a mix of excitement and controversy, especially as more people use it for weight loss rather than diabetes management."
    },
    {
      question: "Is Mounjaro safe and effective for weight loss?",
      answer:
        "Mounjaro is FDA-approved for Type 2 Diabetes but has been shown in clinical trials to produce substantial weight-loss results, sometimes exceeding 20% of body weight. While effective, it is considered safe only when prescribed and monitored by a healthcare professional. Off-label Mounjaro for weight loss has grown in popularity, but it still carries risks such as gastrointestinal side effects, gallbladder issues, and rare pancreatitis. Patients should never try to Buy Mounjaro without medical guidance. Proper Mounjaro dosage and follow-up appointments are essential for both safety and long-term success."
    },
    {
      question: " What are the most common Mounjaro side effects?",
      answer:
        "Mounjaro side effects are similar to other hormone-based injectable medications. The most frequently reported include nausea, vomiting, constipation, diarrhea, reduced appetite, and stomach discomfort. These symptoms often appear during the early dosage stages or after a dose increase. Most users experience improvement as their body adjusts. More serious side effects, while rare, can include pancreatitis, gallbladder disease, and thyroid-related issues. Anyone experiencing severe abdominal pain, allergic reactions, or persistent vomiting should seek medical help immediately. Always discuss risks and benefits with your doctor before starting Mounjaro."
    },
    {
      question: " How does Mounjaro work for diabetes and weight loss?",
      answer:
        "Mounjaro works by activating two metabolic hormone receptors—GLP-1 and GIP. This dual action improves insulin sensitivity, reduces blood sugar levels, slows digestion, and decreases appetite. For diabetes patients, this results in steady glucose control. For individuals seeking weight loss, it significantly reduces hunger and helps regulate metabolic processes. This combination has made Mounjaro one of the most effective medications available. Many users describe feeling full quickly and consuming fewer calories effortlessly. Its unique mechanism is exactly why searches for Mounjaro Online and “how to Buy Mounjaro” are skyrocketing."
    },
    {
      question: "What is the proper Mounjaro dosage schedule?",
      answer:
        "Mounjaro dosage starts at 2.5 mg once weekly, which is used to help the body adjust rather than provide full therapeutic results. After four weeks, most patients increase to 5 mg. Depending on medical goals and tolerance, dosages may rise to 7.5 mg, 10 mg, 12.5 mg, or 15 mg. Your doctor decides the correct dose based on blood sugar levels, weight-loss response, and side effects. Never adjust your dose without medical supervision. Proper dosage progression minimizes Mounjaro side effects and ensures the safest and most effective outcome."
    },
    {
      question: "Why is Mounjaro so expensive, and what does it cost?",
      answer:
        "Mounjaro cost varies widely, typically ranging from $900 to $1,200 per month without insurance. The price is influenced by high demand, manufacturing complexity, market shortages, and its status as a newer medication. Insurance often covers it for diabetes treatment but may not cover Mounjaro for weight loss, leading many to search for cheaper alternatives or Mounjaro Online. While cost-saving programs exist, patients should avoid suspiciously low-priced websites, as they may sell counterfeit medication. Always choose verified, licensed pharmacies for safe purchasing."
    },
    {
      question: "Can I buy Mounjaro online safely?",
      answer:
        "Yes, you can safely Buy Mounjaro Online—but only through verified telehealth providers, licensed digital pharmacies, and legitimate prescription services. Safe platforms always require a valid medical consultation and prescription. Beware of websites offering Mounjaro without a prescription or at unusually low prices, as these are common sources of counterfeit or unsafe products. Look for indicators like U.S. licensing, secure payment systems, and clear storage/shipping procedures. When in doubt, consult your healthcare provider. Safety and authenticity should always come before convenience or cost savings."
    },
    {
      question: "Is Mounjaro better than Ozempic for weight loss?",
      answer:
        "Many clinical studies suggest that Mounjaro offers stronger weight-loss results than Ozempic. This is due to its dual activation of both GLP-1 and GIP receptors, whereas Ozempic only targets GLP-1. Patients on Mounjaro have reported greater appetite suppression, more consistent weight reduction, and improved metabolic markers. However, individual results vary, and some may respond better to one medication over the other. Both treatments require medical supervision to adjust dosage and manage side effects. Users should never compare medications solely based on online trends—professional guidance is essential."
    },
    {
      question: " Why is Mounjaro controversial?",
      answer:
        "Mounjaro’s controversy largely stems from its rapid popularity and off-label use for weight loss. As demand surged, shortages affected diabetes patients who rely on it for essential glucose control. Additionally, the rise of unregulated online sellers has increased risks of counterfeit products. Ethical debates continue about whether weight-loss users should have equal access to the medication. There's also concern over long-term effects, dependence, and societal pressure around weight. Despite its benefits, Mounjaro should always be used responsibly under medical guidance to avoid misuse or health complications."
    },
    {
      question: "Who should not take Mounjaro?",
      answer:
        "Mounjaro is not recommended for individuals with Type 1 Diabetes, severe gastrointestinal diseases, a history of pancreatitis, or those with personal or family history of medullary thyroid carcinoma or MEN2 syndrome. Pregnant or breastfeeding individuals should also avoid it unless advised otherwise by a specialist. Anyone with significant medical conditions must undergo evaluation before beginning treatment. While many are eager to Buy Mounjaro or find it online, it is essential to prioritize safety and medical screening. Not every patient is a safe candidate for this medication."
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