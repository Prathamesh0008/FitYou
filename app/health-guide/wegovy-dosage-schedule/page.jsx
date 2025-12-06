



"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import link from "next/link";


export default function WegovyDosageSchedulePage() {
  // ------------------ REFS ------------------
  // const keyTakeawaysRef = useRef(null);
  // const dosageChartRef = useRef(null);
  // const missedDoseRef = useRef(null);
  // const tipsRef = useRef(null);
  // const weightLossRef = useRef(null);
  // const whatIsRef = useRef(null);
  // const doctorDecidesRef = useRef(null);
  // const sideEffectsRef = useRef(null);
  // const pauseDoseRef = useRef(null);
  const keyTakeawaysRef = useRef(null);
const dosageChartRef = useRef(null);
const missedDoseRef = useRef(null);
const tipsRef = useRef(null);
const weightLossRef = useRef(null);

const howWorkRef = useRef(null);
const doctorDecidesRef = useRef(null);
const sideEffectsRef = useRef(null);
const pauseDoseRef = useRef(null);  // For final thoughts
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



      {/* ------------------ HERO SECTION public\guide\wegovyDosageGuide.png------------------ */}
       <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
        

        {/* LEFT SIDE — IMAGE + CHART */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
            <Image
              src="/guide/wegovyDosageGuide.png" // ← replace with your image path
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
            Wegovy Dosage Guide for Beginners<br />
             Weekly Weight Loss Injection Plan
          </h1>

          {/* Sub-text */}
          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
             Learn the complete Wegovy dosage schedule for safe weight loss.
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            You explains weekly injections, results, side effects
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            & dosing tips for beginners in India.
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

        <li className="cursor-pointer underline" onClick={() => scrollToSection(keyTakeawaysRef)}>
          Key Takeaways
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageChartRef)}>
          Wegovy Dosage Schedule
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(missedDoseRef)}>
          Missed Dose
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(tipsRef)}>
          Wegovy Results & Tips
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(weightLossRef)}>
          Week-by-Week Progress
        </li>

      </ul>

      {/* RIGHT COLUMN */}
      <ul className="space-y-3">

        <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorkRef)}>
          How Wegovy Works
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(doctorDecidesRef)}>
          How Doctors Choose Your Dose
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(sideEffectsRef)}>
          Side Effects
        </li>

        <li className="cursor-pointer underline" onClick={() => scrollToSection(pauseDoseRef)}>
          Final Thoughts
        </li>

      </ul>

    </div>
  </div>
</section>






      {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">


        {/* ------------------ KEY TAKEAWAYS ------------------ */}
        <div ref={keyTakeawaysRef}>
          <h2 className="text-4xl  text-[#0D4F8B] mb-6">Key takeaways:(Quick Summary)</h2>

          <div className="bg-[#E6F2F7] p-6 rounded-xl mb-8 leading-[1.8] text-[#0D4F8B]">
            <ul className="list-disc pl-6 space-y-2 text-[18px]">
              <li>Wegovy is a once-weekly weight loss medication approved in India for people who are overweight or obese.</li>
              <li>It comes in five dose strengths: 0.25 mg, 0.5 mg, 1.0 mg, 1.7 mg, and 2.4 mg.</li>
              <li>Its active ingredient, Semaglutide, helps you eat less, feel full sooner, and improve metabolic balance.</li>
              <li>The dose is increased gradually to minimise side effects and ensure long-term weight loss success.</li>
            </ul>
          </div>

          <p className="text-[#375C7A] text-[18px] leading-[1.8] mb-4">
            Fit You follows a medically-guided dosing plan to help you lose weight safely and effectively.
          </p>
        </div>


        
<div ref={pauseDoseRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
   Wegovy Dosage for Weight Loss: Weekly Injection Guide for Beginners
  </h2>

  <p className="text-[16px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    If you’re exploring the best medicine to lose weight in India, you’ve likely heard of Wegovy, one of the most effective weight loss medications globally. At Fit You, we help people start their Wegovy journey with confidence by giving them a clear, medically-approved roadmap.
  </p>

  <p className="text-[18px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    This beginner-friendly guide explains how Wegovy works, how the dosage increases, what results to expect each week, and how to manage side effects while staying on track with your lose weight treatment.
  </p>

</div>



        {/* ------------------ HOW IT WORKS ------------------ */}
        <div ref={howWorkRef} className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6">
            What Is Wegovy? How Does It Help You Lose Weight?

          </h2>

          <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
            Wegovy (Semaglutide) is a once-weekly prescription weight loss injection developed by Novo Nordisk. It is clinically proven to help people reduce weight by targeting the body’s natural appetite and metabolic pathways.
          </p>

          <h3 className="text-[18px] font-semibold text-[#0D4F8B] mb-4">How Wegovy Works Inside Your Body</h3>

          <ul className="space-y-3 text-[18px] text-[#375C7A] leading-[1.7]">
            <li>Wegovy contains Semaglutide, a synthetic version of a human hormone called GLP-1, which helps regulate:</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Appetite</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Digestion</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Insulin response</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Cravings</li>
          </ul>
        </div>


        {/* ---------- GLP-1 Activation Benefits (FitYou Style) ---------- */}
<div className="max-w-4xl mx-auto px-4 mt-16">
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    How GLP-1 Activation Helps You Lose Weight
  </h2>

  <div className="  rounded-xl p-6 md:p-8">
    <p className="text-[#375C7A] text-[18px] md:text-[18px] leading-[1.8] mb-4">
      This GLP-1 activation leads to several weight-loss benefits:
    </p>

    <ul className="space-y-4 text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8]">
      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
        <span><strong>You feel full sooner:</strong> Wegovy signals the brain’s appetite centres, reducing overeating and cravings.</span>
      </li>

      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
        <span><strong>You eat fewer calories naturally:</strong> You don’t have to follow extreme diets or starve yourself.</span>
      </li>

      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
        <span><strong>Your digestion slows slightly:</strong> Food stays in your stomach longer, helping reduce hunger between meals.</span>
      </li>

      <li className="flex gap-3">
        <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
        <span><strong>Improved metabolic health:</strong> Helps stabilise insulin levels, supports people with prediabetes, and encourages fat burn.</span>
      </li>
    </ul>

    <p className="text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8] mt-6">
      Wegovy was officially approved in India in <strong>June 2025</strong> for chronic weight management, making it one of the best weight loss medications available today.
    </p>
  </div>
</div>



{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
  <Image
    src="/guide/Wegovy-dosage-schedule-updated.png" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>

{/* FitYou dosage roadmap */}

        <div className="max-w-4xl mx-auto px-4 mt-10">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] leading-tight mb-6">
    Why Does Wegovy Come in Multiple Doses?
  </h2>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    If Wegovy is so effective, why not start at the highest dose?
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    Because increasing the dose too fast can trigger <strong>intense side effects</strong> such as nausea or vomiting. The body needs time to adjust to each level of Semaglutide.
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    <strong>A slow and steady titration schedule ensures:</strong>
     <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Better long-term results</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Fewer side effects</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Higher treatment success</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Lower dropout rates</li>
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    This dosing method is the reason Wegovy is considered a <strong>safe and reliable drug to lose weight.</strong>

  </p>


</div>




        {/* ------------------ DOSAGE TABLE + MOBILE CARDS ------------------ */}
        <div ref={dosageChartRef} className="max-w-4xl mx-auto px-4 mt-16">

          <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6">
            Wegovy dosage schedule
          </h2>

          <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-4">
            Wegovy dosage increases gradually every 4 weeks to help your body adapt smoothly.
          </p>

          {/* DESKTOP TABLE */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full border-separate border-spacing-0">

              <thead>
                <tr className="bg-[#F2F7FA] text-[#0D4F8B]">
                  <th className="p-4">Dose</th>
                  <th className="p-4">Frequency</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Purpose</th>
                  <th className="p-4">What you will notice</th>
                </tr>
              </thead>

              <tbody className="text-[#375C7A]">
                <tr className="border-b">
                  <td className="p-4 bg-[#F9FCFE]">0.25 mg</td>
                  <td className="p-4 bg-[#F9FCFE]">Once weekly</td>
                  <td className="p-4 bg-[#F9FCFE]">Weeks 1–4</td>
                  <td className="p-4 bg-[#F9FCFE]">Introduction dose to help the body adapt</td>
                  <td className="p-4 bg-[#F9FCFE]">Appetite slowly decreases</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">0.5 mg</td>
                  <td className="p-4">Once weekly</td>
                  <td className="p-4">Weeks 5–8</td>
                  <td className="p-4">Builds tolerance and reduces side effects</td>
                  <td className="p-4">Hunger reduces, mild nausea improves</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 bg-[#F9FCFE]">1.0 mg</td>
                  <td className="p-4 bg-[#F9FCFE]">Once weekly</td>
                  <td className="p-4 bg-[#F9FCFE]">Weeks 9–12</td>
                  <td className="p-4 bg-[#F9FCFE]">Boosts fat-loss results</td>
                  <td className="p-4 bg-[#F9FCFE]">You feel full faster, calorie intake drops</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">1.7 mg</td>
                  <td className="p-4">Once weekly</td>
                  <td className="p-4">Weeks 13–16</td>
                  <td className="p-4">Common long-term maintenance dose</td>
                  <td className="p-4">Noticeable weight loss, better energy</td>
                </tr>

                <tr>
                  <td className="p-4 bg-[#F9FCFE]">2.4 mg</td>
                  <td className="p-4 bg-[#F9FCFE]">Once weekly</td>
                  <td className="p-4 bg-[#F9FCFE]">Week 17+</td>
                  <td className="p-4 bg-[#F9FCFE]">Maximum dose for enhanced results</td>
                  <td className="p-4 bg-[#F9FCFE]">Strong appetite control, improved progress</td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* MOBILE CARDS */}
          {/* ---------- MOBILE CARDS (AktiVE STYLE) ---------- */}
<div className="md:hidden space-y-6 mt-8">
  {[
    {
      dose: "0.25 mg",
      frequency: "Once weekly",
      duration: "Weeks 1–4",
      purpose: "Starting dose to help your body adjust to Wegovy",
      notice: "Your appetite begins to reduce",
    },
    {
      dose: "0.5 mg",
      frequency: "Once weekly",
      duration: "Weeks 5–8",
      purpose:
        "Helps build tolerance to side effects and minimises them",
      notice:
        "Mild side effects like nausea begin to settle. You crave less food",
    },
    {
      dose: "1.0 mg",
      frequency: "Once weekly",
      duration: "Weeks 9–12",
      purpose: "Supports weight loss progression",
      notice: "You feel full faster",
    },
    {
      dose: "1.7 mg",
      frequency: "Once weekly",
      duration: "Weeks 13–16",
      purpose: "Maintenance dose",
      notice: "Energy improves",
    },
    {
      dose: "2.4 mg",
      frequency: "Once weekly",
      duration: "Week 17+",
      purpose: "Higher dose for continued progress",
      notice: "Steady long-term results",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-[#F7FBFF] border border-[#DDEAF3] shadow-sm rounded-2xl p-6"
    >
      {/* DOSE */}
      <p className="text-[#0D4F8B] text-[14px] font-medium">Dose (mg/week)</p>
      <p className="text-[#0D4F8B] text-[20px] font-semibold mb-4">
        {item.dose}
      </p>

      {/* FREQUENCY */}
      <p className="text-[#0D4F8B] text-[14px] font-medium">Frequency</p>
      <p className="text-[#375C7A] mb-4">{item.frequency}</p>

      {/* DURATION */}
      <p className="text-[#0D4F8B] text-[14px] font-medium">Duration</p>
      <p className="text-[#375C7A] mb-4">{item.duration}</p>

      {/* PURPOSE */}
      <p className="text-[#0D4F8B] text-[14px] font-medium">Purpose</p>
      <p className="text-[#375C7A] mb-4 leading-[1.7]">{item.purpose}</p>

      {/* WHAT YOU'LL NOTICE */}
      <p className="text-[#0D4F8B] text-[14px] font-medium">
        What you will notice
      </p>
      <p className="text-[#375C7A] leading-[1.7]">{item.notice}</p>
    </div>
  ))}
</div>

        </div>

        <div>
          {/* NOTE BOX */}
  <div className="bg-[#FCEFE2] text-[#375C7A] px-6 py-5 rounded-xl mt-10 border border-[#F8DCC5]">
    <p className="font-semibold text-[#0D4F8B] mb-2">Fit You Tip</p>
    <p className="text-[16px] md:text-[17px] leading-[1.8]">
      Not everyone needs the 2.4 mg dose. Many people achieve significant results at <strong>1.7 mg</strong>, depending on tolerance and weight-loss goals.
    </p>
  </div>
</div>
        
     
        {/* ---------- FITYOU PROGRESSION LIST + NOTE BOX (AKTIVE STYLE) ---------- */}
<div ref={missedDoseRef} className="max-w-4xl mx-auto px-4 mt-12">

  {/* Heading */}
  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6 leading-tight">
    What to Expect Each Week on Wegovy
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Here’s what you can expect to see in the coming weeks when you follow the FitYou roadmap:
  </p>

  {/* WEEK PROGRESSION LIST */}
  <ul className="space-y-3 text-[16px] md:text-[17px] leading-[1.8] text-[#375C7A]">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 1–4: Adjustment Phase</strong> </span>
    </li>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li>Semaglutide enters your system gradually</li>
      <li>Appetite decreases</li>
      <li>Nausea may appear but is usually mild</li>
    </ul>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 5–8: Tolerance Phase</strong></span>
    </li>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li>Body becomes used to the medication</li>
      <li>Hunger is noticeably reduced</li>
      <li>Meal sizes naturally decrease</li>
    </ul>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 9–12: Acceleration Phase</strong> </span>
    </li>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li>Weight begins to reduce steadily</li>
      <li>You feel full faster</li>
      <li>Energy levels stabilise</li>
    </ul>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weeks 13–16: Active Weight Loss Phase</strong> </span>
    </li>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li>This is where many see visible results</li>
      <li>Cravings drop significantly</li>
      <li>Improved confidence and motivation</li>
    </ul>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Week 17 Onwards: Maintenance Phase</strong></span>
    </li>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li>Continued fat loss</li>
      <li>Easily sustained routine</li>
      <li>More control over eating habits</li>
      <li>Lifestyle improvements become long-term</li>
    </ul>
  </ul>

</div>

{/* How do experts decide which routine level is right for you? */}
<div ref={doctorDecidesRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6 leading-tight">
    How Doctors Decide Your Ideal Wegovy Dose
  </h2>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    Every person’s body responds differently to weight-loss medications. At Fit You, doctors customise the treatment based on:
  </p>

  <ul className="space-y-4 text-[17px] leading-[1.8] text-[#375C7A]">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Side effect tolerance</strong> – How your stomach and digestion respond to each dose.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Medical conditions</strong> – Kidney function, liver health, diabetes status, pregnancy status, etc.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Weight-loss goals</strong> – How much weight you wish to lose — and at what pace</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Blood sugar behaviour</strong> – Especially important for people with prediabetes or Type 2 diabetes</span>
    </li>
  </ul>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mt-8">
    The goal is to keep you on the <strong>lowest effective dose</strong> that delivers real results safely.
  </p>

</div>

{/* What to do if you miss a dose? */}
<div
  ref={missedDoseRef}
  className="max-w-4xl mx-auto px-4 mt-16"
>
  {/* Heading */}
  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-4 leading-tight">
   What To Do If You Miss a Wegovy Dose
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Mistakes happen — here’s what to do:
  </p>

  {/* OUTER LIGHT-BLUE CONTAINER */}
  <div className="bg-[#E8F4FA] p-6 md:p-4 rounded-1xl space-y-4">

    {/* CARD 1 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D8E6F1]">
      <p className="text-[#0D4F8B] font-semibold text-[17px] mb-5">
        If the next dose is within 48 hours:
      </p>

      <p className="text-[#375C7A] leading-[1.8]">
        <strong>
      → Skip the missed dose.
      </strong>
      </p>

      <p className="text-[#375C7A] leading-[1.8] mt-2">
        → Take your next scheduled injection normally.
      </p>

      <p className="text-[#375C7A] leading-[1.8] mt-2">
        <strong>
      → Never double the dose
      </strong>
      </p>

    </div>

  
    {/* CARD 2 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D8E6F1]">
      <p className="text-[#0D4F8B] font-semibold text-[17px] mb-5">
        More than 2 days (48 hours) away:
      </p>

      <p className="text-[#375C7A] leading-[1.8]">
        → Take the dose as soon as you remember.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D8E6F1]">
      <p className="text-[#0D4F8B] font-semibold text-[17px] mb-5">
        More than 2 weeks (14 days) have passed:
      </p>

      <p className="text-[#375C7A] leading-[1.8]">
       → Contact your Fit You clinician.
      </p>

      <p className="text-[#375C7A] leading-[1.8] ">
         → You may need to restart at a lower dose.
      </p>
    </div>

  </div>
</div>


{/* Managing side effects as your dose increases */}

<div ref={sideEffectsRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-4 leading-tight">
    Common Wegovy Side Effects & How to Manage Them
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Like any powerful weight loss medication, Wegovy may cause temporary digestive symptoms such as:
  </p>

  {/* CARD 1 */}
  <div className=" p-6 rounded-xl mb-4 leading-[1.8]">
    <p className="text-[#0D4F8B] font-semibold mb-2">Common side effects:</p>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Nausea </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Constipation </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Diarrhoea </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Bloating </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>vomiting </span>
    </li>
    </ul>
  </div>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    These effects are most common during <strong>dose increases</strong> and usually fade within days.
  </p>

  <div className=" p-6 rounded-xl leading-[1.8]">
    <p className="text-[#0D4F8B] font-semibold mb-2">Tips To Handle Side Effects Easily</p>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Eat small, light meals </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Avoid fried, spicy, or greasy foods </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Sip water throughout the day </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Walk or stretch after meals </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Pause dose increase if symptoms worsen </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Contact Fit You if vomiting persists</span>
    </li>
    </ul>
  </div>

  <div className=" p-6 rounded-xl leading-[1.8] mt-4">
    <p className="text-[#0D4F8B] font-semibold mb-2">Pro Tip: Track Your Progress Weekly</p>
    <ul className="list-disc pl-6 space-y-1 text-[#3e6381]">
      <p>Use a weight-loss tracking app or notebook to track:</p>
      <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Daily weight</span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Cravings</span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Hunger levels </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Energy levels </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Mood changes </span>
    </li>
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span>Side effects</span>
    </li>
    </ul>
  </div>


  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mt-6">
    This makes it easier for your doctor to optimise your treatment.
  </p>

</div>

{/* Tip to make progress easier */}

<div  ref={tipsRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6 leading-tight">
    Wegovy Results: Losing Weight at Your Own Pace
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Whether you lose weight quickly or gradually, both are normal. The goal is sustainable progress, not a crash diet. Wegovy is one of the <strong>best medicines to lose weight</strong> because it supports:
  </p>

  {/* Tips List */}
  <ul className="space-y-4 text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8]">

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Real fat loss
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Better appetite control
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Healthier habits
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Long-term maintenance
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]"></span>
      Fit You ensures that your Wegovy journey is safe, personalised, and medically supervised every step of the way
    </li>

  </ul>
</div>


{/* Pause or reduce your Wegovy dose */}

<div ref={pauseDoseRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
   Final Thoughts: Start Your Wegovy Journey with Fit You
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Wegovy is one of the most advanced <strong>drugs to lose weight</strong> available today. With the right dose schedule, expert support, and consistent habits, you can achieve significant results — safely and confidently.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    If you are ready for a medically-guided, effective <strong>weight reduce in 1 month</strong> plan or long-term fat-loss transformation, Fit You is here to support you at every step.
  </p>

</div>

<div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-2xl p-6 md:p-8 mt-6">
  
  {/* Heading */}
  <p className="text-[#0b3f70] font-semibold text-[18px] mb-3">
    Launched in India in June 2025
  </p>

  {/* Description */}
  <p className="text-[#0D4F8B] text-[18px] md:text-[18px] leading-[1.8] mb-6">
    Wegovy is available in India in the form of a pre-filled injection pen
    (FlexTouch). You can either self-inject it or take it with the help
    of a healthcare professional.
  </p>

  {/* Button */}
  <button
      onClick={() => router.push("/health-guide/how-to-inject-wegovy")}
      className="bg-[#A7CBD7] text-[#002074] font-semibold px-6 py-3 rounded-lg text-[18px] hover:bg-[#9CC5CD] transition"
    >

      Read more about Wegovy
    </button>

</div>


<FAQ
  items={[
    {
      question:
        "Is Wegovy the Best Wegovy Option for Long-Term Weight Loss?",
      answer:
        "Yes, Wegovy is widely considered the best Wegovy option for long-term medical weight loss because it directly targets appetite control and metabolism through GLP-1 hormone activation. Unlike crash diets or temporary fat burners, Wegovy supports sustainable fat loss by reducing hunger, improving insulin balance, and controlling cravings. Clinical studies show consistent weight reduction over 6–12 months when combined with lifestyle changes, making it one of the most reliable prescription weight loss treatments available today.",
    },
    {
      question: " How to Use Wegovy Safely for Beginners?",
      answer:
        "If you're learning how to use Wegovy, the key is to follow a gradual weekly injection schedule. You start at a low dose (0.25 mg weekly) to allow your body to adapt and reduce side effects. The dose increases every four weeks until you reach your maintenance level. Wegovy is injected once per week, on the same day each week, in the abdomen, thigh, or upper arm. Never change your dose without medical guidance.",
    },
    {
      question:
        "Can I Buy Wegovy Online in India Legally?",
      answer:
        "Yes, you can buy Wegovy online in India, but only through verified clinics and licensed pharmacies with a valid prescription. Avoid websites offering Wegovy without medical assessment, as counterfeit products carry major health risks. A proper process includes an online consultation, medical screening, dose selection, and supervised follow-ups. This ensures safe treatment, correct storage, and genuine medication delivery—especially important for injection-based therapies like Wegovy.",
    },
    {
      question:
        " Where Can I Find Trusted Wegovy Online Consultations?",
      answer:
        "You can access Wegovy online through certified weight-loss clinics that offer digital consultations with doctors. These platforms assess your BMI, medical history, blood sugar levels, and lifestyle before prescribing Wegovy. Online Wegovy programs also include dose guidance, side-effect management, and progress tracking. This approach is ideal for people who prefer privacy, convenience, and structured medical supervision without frequent in-clinic visits.",
    },
    {
      question:
        " How Long Does It Take to See Results Using the Best Wegovy Plan?",
      answer:
        "With the best Wegovy plan, most people begin noticing reduced appetite within the first 2–4 weeks. Visible weight loss often starts between weeks 8–12 as the dose increases. By 4–6 months, many users lose 10–15% of their body weight with proper diet and lifestyle support. Results vary based on starting weight, metabolic health, and adherence, but Wegovy delivers steady, sustainable fat loss rather than rapid water-weight drops.",
    },
    {
      question:
        " What Is the Right Way to Store Wegovy After You Buy Wegovy Online?",
      answer:
        "After you buy Wegovy online, proper storage is essential to maintain effectiveness. Unused pens should be stored in the refrigerator between 2°C–8°C. Once in use, Wegovy can be kept at room temperature (below 30°C) for up to 28 days. Never freeze the medication or expose it to direct sunlight. Always inspect the liquid—it should be clear and colorless before injection.",
    },
    {
      question:
        "Are There Any Risks When Using Wegovy Without Medical Guidance?",
      answer:
        "Yes, using Wegovy without medical supervision can be risky. Without proper dose titration, users may experience severe nausea, dehydration, electrolyte imbalance, or blood sugar fluctuations. People with thyroid disorders, pancreatitis history, kidney disease, or pregnancy must avoid Wegovy. This is why even if you access Wegovy online, it should always be paired with doctor monitoring, lab tracking, and structured follow-up care.",
    },
    {
      question:
        "How to Use Wegovy Along With Diet for Faster Results?",
      answer:
        "Understanding how to use Wegovy with the right diet significantly improves results. Wegovy works best with high-protein meals, fibre-rich foods, controlled portions, and reduced sugar intake. Avoid greasy and heavily processed foods, especially during dose increases. Since Wegovy naturally lowers appetite, forcing large meals can trigger nausea. Staying hydrated and eating smaller meals helps maximise fat loss while minimising digestive side effects.",
    },
    {
      question:
        "Is Buying Wegovy Online Safe for First-Time Users?",
      answer:
        "Yes, buying Wegovy online is safe for first-time users only when done through verified medical platforms. A legitimate service will require medical history, blood reports, BMI assessment, and doctor approval before prescribing the injection. You should also receive training on how to inject properly, manage side effects, and escalate doses safely. Avoid open marketplace sellers or social media ads offering Wegovy without prescription checks.",
    },
    {
      question:
        " Who Should Avoid Using Even the Best Wegovy for Weight Loss?",
      answer:
        "Even the best Wegovy is not suitable for everyone. Pregnant or breastfeeding women, people with thyroid cancer history, severe gastrointestinal diseases, pancreatitis, or advanced kidney disease should avoid it. Those with eating disorders or underweight individuals should also not use Wegovy. A full medical screening is essential before starting. This protects you from serious complications and ensures Wegovy is both safe and effective for your body.",
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