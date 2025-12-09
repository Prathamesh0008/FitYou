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
const whatRef = useRef(null);
const howRef = useRef(null);
const weightRef = useRef(null);
const dosageRef = useRef(null);
const sideEffectsRef = useRef(null);
const costRef = useRef(null);
const whoRef = useRef(null);
const whyRef = useRef(null);
const conclusionRef = useRef(null);




 
   /// Smooth scroll function
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
    <div className=" top-[70px] z-40 bg-white border-b border-[#E4EEF2]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <BackButton label="Back" />
      </div>
    </div>



 
       {/* ------------------ HERO SECTION ------------------ */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
 
         {/* LEFT SIDE — IMAGE + CHART */}
         <div className="flex justify-center">
           <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
             <Image
               src="/guide2/2.1.jpg" // ← replace with your image path
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
             Mounjaro for Type 2 Diabetes:  <br />
               What It Is, How It Works, and Why It Matters
           </h1>
 
           {/* Sub-text */}
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
               Discover how Mounjaro helps manage Type 2 Diabetes. 
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
             Learn its benefits, dosage, side effects, weight-loss effects,
           </p>
 
           <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
              and safe ways to buy Mounjaro online with FitYou.

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

        <li className="cursor-pointer underline" onClick={() => scrollToSection(whatRef)}>
         What Is Mounjaro?
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(howRef)}>
         How Mounjaro Works
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(weightRef)}>
           Mounjaro for Weight Loss
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageRef)}>
           Mounjaro Dosage & Usage
        </li>

      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(sideEffectsRef)}>
           Side Effects & Safety
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(costRef)}>
           Mounjaro Cost & Online Buying Safety
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(whoRef)}>
           Who Should Use / Avoid Mounjaro
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(whyRef)}>
           Why Mounjaro Matters
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(conclusionRef)}>
          Conclusion
        </li>

      </ul>

    </div>
  </div>
</section>



<div ref={introRef} className="max-w-4xl mx-auto px-4 mt-10 mb-10">


  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
   Introduction: 
  </h2>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    Type 2 diabetes management has always been a balancing act keeping blood sugar in range while protecting energy, weight, and long-term heart and kidney health. In the last few years, Mounjaro (tirzepatide) has moved from “promising new drug” to one of the most talked-about tools in the diabetes toolkit because it targets blood sugar through a dual hormone pathway and often brings meaningful weight changes alongside improved glucose control. That combination is exactly why many people start their journey with searches like Buy Mounjaro, Mounjaro Online, or Best Mounjaro Online and why it’s important to separate what’s clinically established from what’s hype or risky shopping behavior.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-5">
    In this FitYou guide, you’ll get a clear, practical explanation of what Mounjaro is, how it works inside the body, what a typical Mounjaro dosage path looks like, what Mounjaro side effects are most common (and what signals need urgent care), how mounjaro cost tends to shape real-world access, and why this medication matters for the future of type 2 diabetes care. This is educational information not a replacement for a clinician’s personalized advice but it will equip you to have a sharper, better-informed conversation at your next appointment.
  </p>

</div>


{/* ------------------ 1) WHAT IS MOUNJARO ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-16">

  <h2 ref={whatRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     What is Mounjaro (tirzepatide) and where does it fit in type 2 diabetes care?
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    Mounjaro is the brand name for tirzepatide, a prescription injectable medication approved to 
    improve glycemic control in adults with type 2 diabetes as an adjunct to diet and exercise. 
    The U.S. FDA approved Mounjaro for this purpose in May 2022, and major regulators such as the 
    European Medicines Agency similarly describe it for adults with insufficiently controlled type 2 
    diabetes (alone or with other diabetes medicines, depending on the clinical situation).
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    What makes Mounjaro stand out is its mechanism: it is designed as a “dual agonist” (it activates 
    two hormone receptors rather than one). In day-to-day terms, that can translate into stronger 
    glucose lowering for many patients and, for a large subset, noticeable reductions in appetite 
    and body weight effects that are often top-of-mind for people searching Mounjaro for weight loss 
    even though Mounjaro’s core diabetes approval is about glycemic control.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A]">
    FitYou’s practical takeaway here: Mounjaro is not a “lifestyle shortcut,” but it can be a highly 
    effective medical support when paired with consistent nutrition, movement, and monitoring 
    especially when previous regimens are not delivering target A1C or are hard to tolerate.
  </p>

</div>

{/* ------------------ 2) HOW MOUNJARO WORKS ------------------ */}
<div ref={howRef} className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     How Mounjaro works (in plain language): the dual-hormone edge
  </h2>

  {/* 2.1 GLP-1 + GIP approach */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
    2.1 The GLP-1 + GIP approach (what “dual agonist” really means)
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    Mounjaro is built to activate both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent 
    insulinotropic polypeptide) pathways two gut-derived hormones that help regulate blood sugar after meals. 
    When these pathways are engaged, the body generally responds by:
  </p>

  <ul className="space-y-2 text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    <li>increasing insulin secretion when glucose is elevated (helping bring post-meal glucose down),</li>
    <li>reducing glucagon effects (which can otherwise push blood sugar up),</li>
    <li>slowing gastric emptying (food moves more slowly through the stomach, smoothing the glucose rise after eating),</li>
    <li>supporting reduced appetite for many users (a major driver of weight change in clinical studies).</li>
  </ul>

  {/* 2.2 Outcomes */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
    2.2 What this means in outcomes: glucose control and weight trends
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    The strongest evidence for Mounjaro’s real-world impact comes from the SURPASS clinical trial 
    program and related peer-reviewed work comparing tirzepatide against other established therapies. 
    In SURPASS-2 (and related trials), tirzepatide produced strong A1C reductions and clinically 
    meaningful weight loss compared with comparator treatments, with high proportions of participants 
    reaching common A1C targets in the trial setting.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A]">
    For readers, the key point isn’t just “it works” it’s why it can matter: better A1C control 
    generally reduces the long-term risk of diabetes-related complications (eye, kidney, nerve, and 
    vascular damage) when paired with consistent overall care. That’s the “why it matters” behind the hype.
  </p>

</div>



   {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
       <section className="max-w-4xl mx-auto px-4 space-y-20">

 
 {/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-11">
   <Image
     src="/guide2/2.2.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>



 {/* ------------------ 3) MOUNJARO FOR WEIGHT LOSS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={weightRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro for weight loss: separating a real effect from the marketing noise
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    A lot of attention around Mounjaro comes from weight outcomes—so naturally, the phrase 
    <strong> “Mounjaro for weight loss”</strong> shows up everywhere. In clinical comparisons, 
    tirzepatide has been associated with larger average weight reductions than some single-hormone 
    GLP-1 options at the tested doses, which helps explain why patients and clinicians explore it 
    as part of broader metabolic care plans.
  </p>

  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 space-y-4 mb-6">
    <p className="text-[#0D4F8B] font-semibold">At the same time, it’s important to keep boundaries clear:</p>

    <ul className="space-y-3 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>
        <strong>Mounjaro’s primary diabetes role</strong> is improving glycemic control in adults 
        with type 2 diabetes (as an adjunct to diet and exercise).
      </li>
      <li>
        For weight management without diabetes, tirzepatide is marketed under a different brand 
        (in the U.S.) with a separate regulatory pathway and indication.
      </li>
    </ul>
  </div>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    <strong>FitYou’s honest framing:</strong>  
    If your main goal is weight reduction, Mounjaro may still appear in your options depending on 
    your diagnosis and your clinician’s judgment—but the safest path is always matching the 
    medication to the approved indication and your individual medical profile.
  </p>

</div>

{/* ------------------ 4) MOUNJARO DOSAGE ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={dosageRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro dosage: how the dosing ladder works (and why it’s structured this way)
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Because Mounjaro is typically started at a low dose and stepped up gradually, the 
    “Mounjaro dosage” conversation is less about a single number and more about a controlled 
    ramp designed to balance benefit with tolerability.
  </p>

  {/* ---- 4.1 Standard Titration ---- */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
     The standard titration pattern (what most patients will recognize)
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    FDA prescribing guidance describes a typical starting dose of 
    <strong> 2.5 mg once weekly</strong>, with gradual increases (usually in 2.5 mg steps) 
    to higher maintenance doses depending on response and tolerance. Labeled higher strengths 
    include <strong>5 mg, 10 mg, and 15 mg once weekly</strong> in the diabetes program.
  </p>

  {/* ---- 4.2 Why Slow Build Matters ---- */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B] mb-4">
     Why the slow build matters (a practical explanation)
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Most people tolerate Mounjaro best when increases happen after the body has adjusted to 
    the previous dose. The same mechanisms that improve glucose and reduce appetite 
    (slower gastric emptying and stronger gut hormone signaling) can also trigger short-term 
    digestive symptoms if the dose is raised too quickly.
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    In other words: the “dose ladder” is part of the <strong>safety and comfort design</strong>, 
    not just a technical formality.
  </p>

  {/* ---- 4.3 Day-to-Day Usage ---- */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
     How usage looks day-to-day (without turning this into a medical prescription)
  </h3>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    Mounjaro is administered as a weekly subcutaneous injection using the supplied pen device. 
    Consistent weekly timing and rotating injection sites are common habits to limit irritation 
    and keep the routine sustainable.  
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mt-4">
    The exact plan—starting dose, escalation pace, and maintenance level—should always be 
    individualized by a clinician based on A1C goals, side-effect tolerance, concurrent 
    medications, and overall health profile.
  </p>

</div>


{/* ------------------ 5) MOUNJARO SIDE EFFECTS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={sideEffectsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro side effects: what’s common, what’s uncommon, and what truly needs help
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Any medication that meaningfully changes metabolism can also produce side effects—especially 
    early in treatment or after a dose increase. The most frequently reported Mounjaro side effects 
    are gastrointestinal: nausea, vomiting, diarrhea, and constipation. These arise from the drug’s 
    gut-centered mechanism and are among the most common reasons people may need slower titration 
    or supportive adjustments (smaller meals, hydration, gentler foods).
  </p>

  {/* Common Effects */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Common side effects include:</p>
    <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>• Nausea</li>
      <li>• Vomiting</li>
      <li>• Diarrhea</li>
      <li>• Constipation</li>
    </ul>
  </div>

  {/* Serious Risks */}
  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6 mb-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      Less common but important safety considerations:
    </p>

    <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>• Caution around pancreatitis risk</li>
      <li>• Potential allergic reactions</li>
      <li>• Rare but serious complications described in prescribing information</li>
    </ul>
  </div>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    The safest rule: if symptoms are <strong>severe, sudden, or worsening</strong> especially if 
    abdominal pain is involved—treat it as a medical issue that requires prompt professional evaluation, 
    not something to “wait out.”
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mt-4">
    <strong>FitYou’s bottom line:</strong>  
    Side effects are often manageable with pacing and support, but pushing through red-flag symptoms 
    is not the right approach.
  </p>

</div>


{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide2/2.3.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>


 {/* ------------------ 6) MOUNJARO COST & ONLINE SAFETY ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={costRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Mounjaro cost (and why “Best Mounjaro Online” is a risky phrase to chase)
  </h2>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Cost is one of the biggest real-world determinants of whether Mounjaro remains a sustainable 
    long-term treatment. Pricing is highly variable because the out-of-pocket amount depends on 
    where you live, your insurance coverage (if any), the pharmacy, and eligibility for manufacturer 
    or patient-support programs. Lilly’s pricing information emphasizes that what people pay can 
    differ widely from the list price because insurance design and individual plan rules drive the 
    final cost.
  </p>

  <p className="text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    Independent consumer health resources commonly report that without insurance, monthly costs can 
    fall into the four-figure range for many patients, while actual paid amounts may be lower when 
    coverage or assistance applies.
  </p>

  {/* Highlight Box */}
  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6 mb-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-4">
      A note on “Best Mounjaro Online” and “Mounjaro Online”
    </p>

    <p className="text-[17px] text-[#375C7A] leading-[1.7]">
      The safest interpretation of these searches is: 
      <strong> “the best path to a legitimate prescription and verified dispensing channel,” </strong> 
      not “the cheapest site that will ship without proper oversight.”
      <br /><br />
      Counterfeit or improperly stored injectable medications are a real risk in unregulated online 
      marketplaces. The safer route is always a clinician-led plan—often including legitimate telehealth 
      pathways where legally available—paired with dispensing through licensed pharmacies.
      <br /><br />
      This isn’t about scolding; it’s about protecting your health and your money.
    </p>
  </div>

</div>


{/* ------------------ 7) WHO BENEFITS MOST ------------------ */}
<div ref={whoRef}   className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
   Who benefits most (and when Mounjaro may not be the right fit)
  </h2>

  {/* 7.1 The clearest-fit profiles */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
     The clearest-fit profiles
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-4">
    Mounjaro tends to be most compelling for adults with type 2 diabetes who:
  </p>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    <li>• are not meeting A1C targets despite lifestyle measures and existing therapy,</li>
    <li>• need a therapy that can address both glucose and (often) weight together,</li>
    <li>• prefer a once-weekly injection schedule rather than daily dosing.</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-8">
    Regulatory labeling frames Mounjaro as a treatment for adults with insufficiently controlled 
    type 2 diabetes, used alongside diet and exercise and, in many cases, alongside other diabetes 
    medicines as clinically appropriate.
  </p>

  {/* 7.2 When it may be less appropriate */}
  <h3 className="text-[24px] md:text-[26px] text-[#0D4F8B]  mb-4">
     When it may be less appropriate (why the “is Mounjaro right for me?” question is valid)
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Because Mounjaro is not a one-size-fits-all solution, the decision should factor in broader 
    health context—other medications, kidney function considerations, gastrointestinal history, 
    and personal risk factors that shift the risk–benefit balance.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A]">
    The medication labeling and professional references provide the guardrails clinicians use to 
    match the therapy to the patient’s profile.
  </p>

</div>

{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
 <div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
   <Image
     src="/guide2/2.4.jpg" 
     alt="Wegovy dosage schedule header"
     width={1200}
     height={400}
     className="w-full h-auto object-contain"
   />
 </div>



 {/* ------------------ 8) WHY MOUNJARO MATTERS ------------------ */}
<div ref={whyRef} className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
     Why Mounjaro matters (beyond the headlines): a practical shift in diabetes management
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    What makes Mounjaro important is not just that it improves numbers on a lab report—it’s that it 
    can reshape what “manageable diabetes” looks like for many people. When a therapy improves A1C 
    more effectively and also supports meaningful weight change, it can reduce the need for complex 
    medication layering, make lifestyle habits easier to maintain, and improve confidence that control 
    is achievable without constant glucose chasing.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    The SURPASS program and related clinical evidence are the backbone of this shift: they show that 
    a dual-hormone approach can deliver strong glycemic improvements alongside metabolic benefits 
    that matter in daily life.
  </p>

  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold mb-3">FitYou’s practical translation:</p>
    <p className="text-[17px] text-[#375C7A] leading-[1.7]">
      Mounjaro is one of the most consequential additions to the type 2 diabetes toolkit in recent 
      years — but it works best when the “drug plan” is aligned with the “life plan” 
      (sleep, food patterns, movement, stress management, and regular monitoring).
    </p>
  </div>

</div>

{/* ------------------ CONCLUSION ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20 mb-20">

  <h2 ref={conclusionRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] leading-tight mb-6">
    Conclusion: turning information into smart decisions (FitYou’s take)
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    If you’re exploring Mounjaro—whether you arrived here searching 
    <strong> Buy Mounjaro</strong>, <strong>Mounjaro Online</strong>, or 
    <strong> Mounjaro for weight loss</strong>—the most helpful next step is to convert curiosity 
    into a structured discussion with a qualified clinician:
  </p>

  <ul className="space-y-3 text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    <li>• What is your current A1C and trend?</li>
    <li>• What treatments have (or haven’t) worked—and why?</li>
    <li>• What outcomes matter most to you: glucose stability, weight, energy, fewer side effects?</li>
    <li>• And what’s the safest, most affordable path to consistent access where you live?</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    FitYou’s role is to make this landscape less confusing: Mounjaro is a well-studied, 
    FDA-approved option for adults with type 2 diabetes. It works through a dual-hormone 
    mechanism that can translate into strong glucose control and meaningful weight changes. 
    Real-world outcomes depend on correct dosing, realistic expectations about side effects, 
    and safe, legitimate access pathways — not the fastest or cheapest “online” route.
  </p>

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
      onClick={()=>router.push("/quiz")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Check if you are eligible for mounjaro
    </button>


</div>

 
 <FAQ
  items={[
    {
      question: "What is Mounjaro and how does it work?",
      answer:
        "Mounjaro (tirzepatide) is a prescription medication for adults with Type 2 Diabetes. It works by activating two hormone receptors GLP-1 and GIP that help regulate blood sugar, improve insulin sensitivity, and slow digestion. This dual action helps reduce A1C levels and often leads to weight loss. Mounjaro is taken once weekly via injection. It is not a substitute for healthy lifestyle habits but works best when combined with diet and exercise. Always use it under medical supervision, as dosing and treatment plans vary by patient.",
    },
    {
      question: " Is Mounjaro safe for weight loss?",
      answer:
        "Mounjaro is FDA-approved for Type 2 Diabetes, but many patients experience weight loss as a secondary effect due to reduced appetite and improved metabolism. While studies have shown significant weight reduction, safety depends on your health history, medications, and risk factors. Some people experience digestive side effects, especially during dose increases. Weight-loss-specific tirzepatide versions exist, but only a doctor can determine which is right for you. Never use Mounjaro for weight loss without medical guidance, as misuse can cause complications.",
    },
    {
      question: " What are the most common side effects of Mounjaro?",
      answer:
        "Common Mounjaro side effects include nausea, vomiting, diarrhea, constipation, decreased appetite, and indigestion. These typically occur during the first few weeks or after a dose increase. Most people find symptoms improve as the body adjusts. Drinking water, eating smaller meals, and avoiding heavy or greasy foods may help reduce discomfort. Although rare, serious side effects may include pancreatitis or severe allergic reactions. If severe abdominal pain, shortness of breath, or swelling occurs, seek immediate medical care. Always report unusual symptoms to your healthcare provider.",
    },
    {
      question: "How long does it take for Mounjaro to start working?",
      answer:
        "Many users begin noticing improved blood sugar levels within the first 1–2 weeks of starting Mounjaro. More significant changes in A1C typically appear after 8–12 weeks, depending on dosage and individual response. Weight loss may start gradually, often becoming more noticeable after the first month as doses increase. Because Mounjaro is taken weekly, consistent use is essential. Your healthcare provider may adjust your dose based on your blood sugar readings and side effects. Full treatment benefits may take several months, so patience and consistency are key.",
    },
    {
      question: " What is the standard Mounjaro dosage?",
      answer:
        "The typical starting dose of Mounjaro is 2.5 mg once weekly, used for initial tolerance rather than blood sugar control. After four weeks, the dose usually increases to 5 mg, with additional increases (7.5 mg, 10 mg, 12.5 mg, or 15 mg) depending on response and side effects. Your doctor determines the best dosage for your needs. Never adjust your dose without medical supervision, as increasing too quickly can amplify digestive symptoms. Always follow the injection schedule and instructions provided with your prescription.",
    },
    {
      question: "Can I buy Mounjaro online safely?",
      answer:
        "You can buy Mounjaro online, but only through licensed telehealth providers and verified pharmacies. Safe online platforms require a valid prescription and never advertise “no-prescription needed” offers. Avoid suspicious websites selling discounted or unlabeled products, as counterfeit injectable medications can be dangerous. Look for pharmacy verification badges and read reviews carefully. When in doubt, consult your doctor for guidance. Purchasing through proper medical channels ensures you receive authentic medication that’s stored, handled, and shipped safely.",
    },
    {
      question: "How much does Mounjaro cost?",
      answer:
        "Mounjaro’s cost varies widely depending on insurance coverage, pharmacy pricing, location, and eligibility for manufacturer savings programs. Without insurance, it can be expensive; with insurance, many patients pay significantly less. Manufacturer discounts may lower the cost for those who qualify. Telehealth services and pharmacies also vary in pricing, so comparing options can help. Never purchase extremely cheap Mounjaro online, as it may be counterfeit. To find the most affordable and legitimate options, consult your healthcare provider or verify licensed online pharmacies.",
    },
    {
      question: " Who should not use Mounjaro?",
      answer:
        "Mounjaro is not recommended for people with Type 1 Diabetes, children, or individuals with a personal or family history of certain thyroid cancers, such as medullary thyroid carcinoma. It may also be unsuitable for those with pancreatitis history or severe gastrointestinal issues. Pregnant or breastfeeding individuals should avoid Mounjaro unless specifically approved by a doctor. Always provide your full medical history to your healthcare provider before starting treatment. Your doctor will determine whether Mounjaro is safe and appropriate for your unique health situation.",
    },
    {
      question: "Can I use Mounjaro with other diabetes medications?",
      answer:
        "Mounjaro is often used alongside other diabetes medications like metformin, insulin, or SGLT2 inhibitors. However, combinations need careful monitoring because some medications especially insulin may increase the risk of low blood sugar when used together. Your doctor may adjust doses to prevent hypoglycemia. Never mix or stop medications without professional guidance. Your medical team will create a personalized treatment plan to ensure safe and effective blood sugar control while minimizing side effects or drug interactions.",
    },
    {
      question: " What happens if I miss a dose of Mounjaro?",
      answer:
        "If you miss a dose of Mounjaro, take it as soon as you remember as long as it’s within 4 days (96 hours) of your usual injection time. If more than 4 days have passed, skip the missed dose and take the next one at your regular time. Do not double-dose to catch up. Missing doses occasionally may slightly impact your blood sugar or weight-loss progress, but consistency is what matters most. If you frequently forget injections, speak with your provider about strategies or reminders that can help.",
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
 
   <button 
   onClick={()=>router.push("/quiz")}
   className="w-full bg-[#FFF7EB] border border-[#F4C892] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[18px]">
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