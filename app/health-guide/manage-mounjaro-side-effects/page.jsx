//app\health-guide\manage-mounjaro-side-effects\page.jsx



"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import {useRouter} from "next/navigation";


export default function ManageMonjaroSideEffect() {
  // ------------------ REFS ------------------
const introRef = useRef(null);
const whatIsRef = useRef(null);
const dosageRef = useRef(null);
const whySideRef = useRef(null);
const commonSideRef = useRef(null);
const nauseaRef = useRef(null);
const digestiveRef = useRef(null);
const fatigueRef = useRef(null);
const dietRef = useRef(null);
const hydrationRef = useRef(null);
const durationRef = useRef(null);
const avoidRef = useRef(null);
const costRef = useRef(null);
const comparisonRef = useRef(null);
const maintainRef = useRef(null);
const mentalRef = useRef(null);
const supplementRef = useRef(null);
const expertRef = useRef(null);
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

 
       {/* ------------------ HERO SECTION  public\guide\Mounjaro-side-effect.png------------------ */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
 
         {/* LEFT SIDE — IMAGE + CHART */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide/Mounjaro-side-effect.png" // ← replace with your image path
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
             Mounjaro Side Effects and <br />
              Simple Tips to Manage Them
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

        <li className="cursor-pointer underline" onClick={() => scrollToSection(whatIsRef)}>
          What is Mounjaro?
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageRef)}>
          Understanding Mounjaro Dosage
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(whySideRef)}>
          Why Side Effects Happen
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(commonSideRef)}>
          Common Side Effects
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(nauseaRef)}>
          Managing Nausea
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(digestiveRef)}>
          Diarrhea, Constipation & Bloating
        </li>

      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(fatigueRef)}>
          Fatigue & Dizziness
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(dietRef)}>
          Diet Plan for Better Results
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(hydrationRef)}>
          Hydration & Gut Health
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(durationRef)}>
          How Long Side Effects Last
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(avoidRef)}>
          Who Should Avoid Mounjaro
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(costRef)}>
          Mounjaro Cost in India
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(finalRef)}>
          Final Thoughts
        </li>

      </ul>

    </div>
  </div>
</section>



<div className="max-w-4xl mx-auto px-4 mt-16">

  {/* INTRODUCTION */}
  <h2 ref={introRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Introduction: Why Understanding Mounjaro Side Effects Is Essential
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Medical weight loss has transformed how people approach obesity and stubborn fat.
    One breakthrough gaining global attention is <strong>Mounjaro</strong>, a powerful
    once-weekly injectable treatment originally designed for diabetes and now widely
    used for effective weight reduction.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Mounjaro helps suppress appetite, reduce cravings, and accelerate fat loss — but,
    like all medical treatments, it can cause side effects. Many users experience
    digestive discomfort, fatigue, dizziness, or appetite changes during the early stages.
    Without the right guidance, these effects may feel overwhelming.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    At FitYou, we believe successful transformation comes from education and preparation.
    This guide helps you understand Mounjaro clearly and safely.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">In this guide, you will learn:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> What Mounjaro is and how it works</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> The most common Mounjaro side effects</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> The correct approach to Mounjaro dosage</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Daily tips to manage side effects safely</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Diet, hydration & lifestyle strategies</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Important details about cost & long-term use</li>
  </ul>


  {/* WHAT IS MOUNJARO */}
  <h2 ref={whatIsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    What Is Mounjaro and Why Is It Used for Weight Loss?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Mounjaro is a once-weekly injectable medication that activates two powerful hormones:
    <strong> GLP-1</strong> and <strong>GIP</strong>. These hormones control hunger, digestion,
    insulin release, and how your body stores fat. This dual-hormone action makes
    <strong> Mounjaro for weight loss</strong> more effective than many older treatments.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">How Mounjaro Helps You Lose Weight:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Reduces hunger signals to the brain</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Slows stomach emptying so you stay full longer</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Improves blood sugar control</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Reduces cravings & emotional eating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Encourages steady fat loss instead of muscle loss</li>
  </ul>


  {/* DOSAGE SECTION */}
  <h2 ref={dosageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Understanding Mounjaro Dosage: Why Slow Progress Is Safer
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Correct dosage is crucial for both effectiveness and safety. Mounjaro is introduced
    gradually to allow your body to adapt and minimize side effects.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Typical Mounjaro Dosage Progression:</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> <strong>Starting dose:</strong> Low dose to reduce side effects</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> <strong>Maintenance dose:</strong> Increased slowly every 4 weeks</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B]">›</span> <strong>Maximum dose:</strong> Used only if tolerated well</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Rushing dose increases often leads to stronger nausea, vomiting, or digestive issues.
    Slow progress is safer — and far more comfortable.
  </p>


  {/* WHY SIDE EFFECTS HAPPEN */}
  <h2 ref={whySideRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Why Mounjaro Side Effects Happen
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Understanding the cause of side effects makes them less alarming. Most symptoms occur
    because Mounjaro changes how your body processes food and regulates appetite.
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Digestion slows down</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Appetite drops rapidly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Blood sugar levels stabilize</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Food intake reduces suddenly</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8]">
    Your body is essentially relearning how to eat and process food. Most early side
    effects are not signs of danger — they are signs of adjustment.
  </p>

</div>


       {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) public\guide\HowtoManageMounjarosideeffectUpdated.png---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/HowtoManageMounjarosideeffectUpdated.png" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>


<div className="max-w-4xl mx-auto px-4 mt-16">

  {/* MAIN HEADING */}
  <h2 ref={commonSideRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Most Common Mounjaro Side Effects
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Here are the most frequently reported Mounjaro side effects:
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Nausea – Common during early weeks</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Vomiting – Often due to overeating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Diarrhea – Digestive adjustment response</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Constipation – From low fiber and low water</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Bloating & gas – Due to slower digestion</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Fatigue – Caused by calorie reduction</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Dizziness – From dehydration or low sugar</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Acid reflux – Food remaining longer in stomach</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Loss of appetite – Expected therapeutic effect</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Most people experience mild to moderate symptoms that improve within a few weeks.
  </p>


  {/* NAUSEA MANAGEMENT */}
  <h2 ref={nauseaRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-4">
    Simple Tips to Manage Nausea and Vomiting
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Nausea is the most common concern with Mounjaro — but it is also the easiest to manage.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Daily Tips for Nausea Relief
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat small meals every 3–4 hours</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid oily, fried, or spicy foods</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Drink ginger tea or lemon water</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat slowly and chew thoroughly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid lying down immediately after eating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Stop eating as soon as you feel full</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Best Foods During Early Treatment
  </p>

  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Oats</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Rice</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Yogurt</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Bananas</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Soups & boiled vegetables</li>
  </ul>


  {/* DIARRHEA / CONSTIPATION / BLOATING */}
  <h2 ref={digestiveRef} className="text-[28px] md:text-[32px] text-[#0D4F8B] leading-tight mb-4">
    How to Handle Diarrhea, Constipation & Bloating
  </h2>

  {/* DIARRHEA */}
  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">For Diarrhea</p>
  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Stay hydrated with electrolyte water</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid dairy and fatty foods briefly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Use probiotics for gut balance</li>
  </ul>

  {/* CONSTIPATION */}
  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">For Constipation</p>
  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Add fiber from vegetables & seeds</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Drink 3–4 liters of water daily</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Take light walks to stimulate digestion</li>
  </ul>

  {/* BLOATING */}
  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">For Bloating</p>
  <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat slowly</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid fizzy drinks</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Limit artificial sweeteners</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8]">
    Gut balance is essential for long-term success on Mounjaro for weight loss.
  </p>

</div>



{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) public\guide\what-are-effectOf-Mounjaro.png---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide/what-are-effectOf-Mounjaro.png" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>

 <div className="max-w-4xl mx-auto px-4 mt-16">

  {/* FATIGUE SECTION */}
  <h2 ref={fatigueRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Managing Fatigue, Weakness & Dizziness on Mounjaro
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Fatigue happens because calorie intake drops quickly. This is normal — and manageable.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
    Recovery Strategies
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Increase hydration</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Add electrolytes</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat moderate healthy carbohydrates</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Sleep 7–9 hours</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid extreme workouts initially</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Once your body adapts, energy levels usually return to normal — or even improve.
  </p>


  {/* DIET SECTION */}
  <h2 ref={dietRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Diet Plan to Reduce Mounjaro Side Effects & Boost Results
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Your diet determines how smoothly Mounjaro works.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Ideal Meal Structure</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Breakfast:</strong> Protein + fiber</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Lunch:</strong> Vegetables + lean protein</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Snack:</strong> Nuts, yogurt, fruit</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Dinner:</strong> Light protein + cooked vegetables</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Golden Diet Rules</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Prioritize protein</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid liquid calories</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Keep sugar low</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eat slowly and mindfully</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    With the right diet, Mounjaro results become faster and more sustainable.
  </p>


  {/* HYDRATION + GUT HEALTH */}
  <h2 ref={hydrationRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Hydration & Gut Health While Using Mounjaro
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Hydration is often overlooked, but it plays a key role in controlling Mounjaro side effects.
  </p>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Benefits of Proper Hydration</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-6">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Reduces nausea</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Prevents constipation</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Minimizes dizziness</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Improves fat burning</li>
  </ul>

  <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Gut Health Tips</p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Use natural probiotics</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Include prebiotic fiber</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid excess alcohol & processed foods</li>
  </ul>


  {/* DURATION OF SIDE EFFECTS */}
  <h2 ref={durationRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    How Long Do Mounjaro Side Effects Last?
  </h2>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Week 1–2:</strong> Strongest side effects</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>Week 3–4:</strong> Body adjustment</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> <strong>After 1–2 months:</strong> Most symptoms fade</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    If severe symptoms last longer than two months, medical review is essential.
  </p>


  {/* WHO SHOULD AVOID */}
  <h2 ref={avoidRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Who Should Avoid Mounjaro or Use It With Caution?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Avoid or use under strict medical supervision if you have:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Thyroid cancer history</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Severe gastrointestinal disease</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Eating disorders</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Pregnancy or breastfeeding</li>
  </ul>


  {/* COST SECTION */}
  <h2 ref={costRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Mounjaro Cost in India & Affordability Factors
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Mounjaro cost varies widely depending on:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Dosage strength</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Monthly requirement</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Import availability</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Pharmacy location</li>
  </ul>


  {/* COMPARISON */}
  <h2 ref={comparisonRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Mounjaro for Weight Loss vs Other Injections
  </h2>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Stronger appetite control</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Acts on two hormones, not one</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Faster fat-loss results</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Similar or slightly higher side-effect rates</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Higher cost than older options</li>
  </ul>


  {/* MAINTAINING WEIGHT LOSS */}
  <h2 ref={maintainRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Can You Maintain Weight Loss After Stopping Mounjaro?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
    Yes — but only with proper habits. You must:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Maintain protein intake</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Stay physically active</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Avoid emotional eating</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Continue tracking weight</li>
  </ul>


  {/* MENTAL & EMOTIONAL EFFECTS */}
  <h2  ref={mentalRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Mental & Emotional Effects of Rapid Weight Loss
  </h2>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Mood changes</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Body image shifts</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Emotional eating fear</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Motivation swings</li>
  </ul>


  {/* SUPPLEMENTS */}
  <h2 ref={supplementRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Safe Supplements to Support Mounjaro Treatment
  </h2>

  <ul className="space-y-3 text-[#375C7A] text-[18px] leading-[1.7] mb-12">
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Magnesium (fatigue & cramps)</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Omega-3 (metabolism & inflammation)</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Probiotics (gut health)</li>
    <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Electrolytes (dizziness control)</li>
  </ul>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    Always consult your doctor before combining supplements.
  </p>


  {/* FITYOU EXPERT ADVICE */}
  <h2 ref={expertRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    FitYou’s Expert Advice on Safe & Sustainable Mounjaro Use
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    At FitYou, we focus on medical monitoring, side-effect prevention, nutrition planning,
    and long-term behavior change. Our goal is not just rapid fat loss — it is lifelong
    health stability.
  </p>


  {/* CONCLUSION */}
  <h2 ref={finalRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Conclusion: Is Mounjaro Worth It for Weight Loss?
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-6">
    Mounjaro is one of the most powerful tools available today for medical weight loss.
    But power requires responsibility. Side effects, when understood and managed properly,
    become temporary challenges instead of roadblocks.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-12">
    The combination of correct dosage, smart nutrition, daily hydration, emotional control,
    and medical supervision turns Mounjaro into a safe and effective long-term solution for
    sustainable transformation.
  </p>

</div>


<div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-2xl p-6 md:p-8 mt-6">
  
  {/* Heading */}
  <p className="text-[#0b3f70] font-semibold text-[18px] mb-3">
    Launched in India in June 2025
  </p>

  {/* Description */}
  <p className="text-[#0D4F8B] text-[18px] md:text-[18px] leading-[1.8] mb-6">
    Get your Mounjaro injection for weight loss at Aktive, and lose upto 21% of your body weight in 16 months. No restrictive diets. No intense workout schedules.
Just pure weight loss, right from the comfort of your home.
  </p>

  {/* Button app\program\page.jsx*/}

  <button
      onClick={() => router.push("/program/page")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Check if you are eligible for mounjaro
    </button>

</div>

 
 <FAQ
  items={[
    {
      question: "What is Mounjaro used for in weight loss?",
      answer:
        "Mounjaro is used for medical weight loss by controlling hunger hormones, slowing digestion, and reducing calorie intake. At FitYou, we guide patients in India, UAE, and the UK to use Mounjaro safely for fat loss—not crash dieting. It helps people feel full faster, control cravings, and achieve steady, doctor-supervised weight reduction with proper nutrition and lifestyle support."
    },
    {
      question: "What are the most common Mounjaro side effects?",
      answer:
        "The most common Mounjaro side effects include nausea, vomiting, diarrhea, constipation, fatigue, dizziness, and appetite loss. At FitYou clinics in India, UAE, and the UK, we see that these effects are usually mild and temporary. Most clients improve within a few weeks when dosage, hydration, and diet are properly managed under medical supervision."
    },
    {
      question: "How long do Mounjaro side effects last?",
      answer:
        "Mounjaro side effects usually last between two and six weeks. This is the natural adjustment phase as the body adapts to slower digestion and reduced appetite. FitYou specialists closely monitor patients during this period in India, UAE, and the UK to ensure symptoms stay mild and resolve safely through proper dosage control, hydration, and nutrition support."
    },
    {
      question: "What is the correct starting Mounjaro dosage?",
      answer:
        "The correct starting Mounjaro dosage is always the lowest weekly dose, increased gradually every four weeks. This slow titration reduces side effects and improves long-term tolerance. At FitYou, we personalize dosage plans for patients in India, UAE, and the UK based on age, weight, medical history, and metabolic health to ensure safe and effective results."
    },
    {
      question: "How fast does Mounjaro help you lose weight?",
      answer:
        "Most people notice reduced appetite within 1–2 weeks of starting Mounjaro. Visible weight loss often begins within the first month. At FitYou, our patients across India, UAE, and the UK typically see steady fat loss over 3–6 months when Mounjaro is combined with structured nutrition, hydration, and lifestyle guidance."
    },
    {
      question: "Can you regain weight after stopping Mounjaro?",
      answer:
        "Yes, weight regain can happen after stopping Mounjaro if healthy habits are not maintained. FitYou focuses on long-term behavior change—protein-focused diets, active routines, and portion control—so patients in India, UAE, and the UK can maintain results even after discontinuing the medication."
    },
    {
      question: "Who should not take Mounjaro?",
      answer:
        "Mounjaro should be avoided by individuals with a history of thyroid cancer, severe gastrointestinal disease, eating disorders, or those who are pregnant or breastfeeding. At FitYou, every patient in India, UAE, and the UK undergoes thorough medical screening to ensure Mounjaro is prescribed only when safe and medically suitable."
    },
    {
      question: "Can Mounjaro be combined with other weight loss medicines?",
      answer:
        "Mounjaro should not be combined with other weight loss medications unless strictly approved by a doctor. Combining treatments increases the risk of nausea, dehydration, dizziness, and heart complications. At FitYou, we use Mounjaro as a standalone therapy with nutrition and activity support for patients in India, UAE, and the UK for maximum safety."
    },
    {
      question: "What is the average Mounjaro cost in India, UAE, and the UK?",
      answer:
        "Mounjaro cost varies depending on dosage, country, and supply. Higher doses cost more, and import availability influences pricing. At FitYou, we provide transparent cost guidance and ensure all patients receive only verified, authentic medication through trusted medical suppliers in India, UAE, and the UK."
    },
    {
      question: "Is Mounjaro safe for long-term use?",
      answer:
        "Yes, Mounjaro is considered safe for long-term use when monitored correctly. At FitYou, we follow strict medical protocols in India, UAE, and the UK, including regular check-ups, nutrition planning, and side-effect tracking. Long-term safety depends on correct dosage, proper hydration, balanced nutrition, and consistent medical follow-up."
    }
  ]}
/>


 
 {/* ------------------------------------------------------------- */}
 {/* ------------------ CTA BUTTONS ------------------------------ */}
 {/* ------------------------------------------------------------- */}
 
 <div className="max-w-xl mx-auto text-center mt-20 space-y-4">
   <button 
   onClick={()=>router.push("/program")}
   className="w-full bg-[#A7CBD7] hover:bg-[#a5d7e7] ntext-[#0D4F8B] font-semibold py-3 rounded-lg text-[18px]">
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