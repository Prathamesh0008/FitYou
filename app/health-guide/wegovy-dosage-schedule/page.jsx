"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";

export default function WegovyDosageSchedulePage() {
  // ------------------ REFS ------------------
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
  if (!ref?.current) return;

  const yOffset = -80; // adjust this number (60–120 works best)
  const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementTop + yOffset,
    behavior: "smooth",
  });
};


  return (
    <div className="bg-white font-laila pb-20">

      {/* ------------------ HERO SECTION ------------------ */}
       <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE — IMAGE + CHART */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
            <Image
              src="/guide/wegovy-dosage-schedule-new.jpg" // ← replace with your image path
              alt="Mounjaro Dosage Chart"
              width={650}
              height={520}
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
            Mounjaro dosage<br />
            chart for weight loss
          </h1>

          {/* Sub-text */}
          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
            If you are starting Mounjaro (Tirzepatide), chances are you are
            feeling hopeful and confused at the same time.
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            It’s easy to wonder, “Am I doing this right?”
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            We’re here to help you figure out just that.
          </p>

        </div>

      </section>

{/* ------------------ TABLE OF CONTENTS ------------------ */}
<section className="max-w-6xl mx-auto px-4 mb-12">
  <div className="bg-[#D8EEF3] rounded-2xl p-8">

    <h2 className="text-lg font-semibold text-[#0D4F8B] mb-4">In this article:</h2>

    <div className="grid md:grid-cols-2 gap-6 text-[#0D4F8B] text-[15px] leading-[1.8]">

      <ul className="space-y-2">

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(keyTakeawaysRef)}
        >
          Key takeaways
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(dosageChartRef)}
        >
          Dosage chart explained
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(missedDoseRef)}
        >
          What to do if you miss a dose?
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(tipsRef)}
        >
          Tips to make progress easier
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(weightLossRef)}
        >
          Progress timeline
        </li>

      </ul>

      <ul className="space-y-2">

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(whatIsRef)}
        >
          How does it work?
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(doctorDecidesRef)}
        >
          How experts decide your pace
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(sideEffectsRef)}
        >
          Managing challenges smoothly
        </li>

        <li
          className="cursor-pointer underline"
          onClick={() => scrollToSection(pauseDoseRef)}
        >
          When to pause or reduce pace?
        </li>

      </ul>

    </div>
  </div>
</section>





      {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">


        {/* ------------------ KEY TAKEAWAYS ------------------ */}
        <div ref={keyTakeawaysRef}>
          <h2 className="text-4xl  text-[#0D4F8B] mb-6">Key takeaways:</h2>

          <div className="bg-[#E6F2F7] p-6 rounded-xl mb-8 leading-[1.8] text-[#0D4F8B]">
            <ul className="list-disc pl-6 space-y-2 text-[15px]">
              <li>Your appetite rhythm changes gradually — consistency is the key driver.</li>
              <li>Small routine improvements (sleep, hydration, meal timing) create big long-term impact.</li>
              <li>Progress is smoother when habits increase slowly, not forcefully.</li>
            </ul>
          </div>

          <p className="text-[#375C7A] text-[15px] leading-[1.8] mb-4">
            Your body adapts to healthy routines in stages. Understanding this natural pace 
            helps reduce frustration and builds confidence.
          </p>
        </div>



        {/* ------------------ HOW IT WORKS ------------------ */}
        <div ref={whatIsRef} className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6">
            What is Wegovy? How does it work?
          </h2>

          <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
            Wegovy helps regulate appetite, reduce hunger spikes, and stabilise eating patterns.
            It works with your body to create slow, steady improvements.
          </p>

          <h3 className="text-[18px] font-semibold text-[#0D4F8B] mb-4">What this means is:</h3>

          <ul className="space-y-3 text-[16px] text-[#375C7A] leading-[1.7]">
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> It helps reduce sudden hunger spikes.</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> You stay full for longer due to slower stomach emptying.</li>
            <li className="flex gap-3"><span className="text-[#0D4F8B] text-xl">›</span> Better control over emotional or habit-based eating.</li>
          </ul>
        </div>

{/* FitYou dosage roadmap */}

        <div className="max-w-4xl mx-auto px-4 mt-10">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] leading-tight mb-6">
    FitYou dosage roadmap: A simple step-by-step guide to understanding your weekly routine
  </h2>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    You will begin your FitYou journey at the lightest and most comfortable level —
    a starting point designed to help your body adjust gently.
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    Each month, your routine becomes slightly more structured, allowing your appetite
    patterns to stabilise naturally without stressing your system.
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-4">
    This slow and steady change is intentional — it gives your body the time it needs
    to adapt smoothly instead of feeling overwhelmed.
  </p>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    As you move forward, your FitYou coach (or doctor, if medically supervised) will
    help decide when to maintain your pace or when it’s the right moment to shift into
    the next stage based on how you are feeling.
  </p>

  <p className="text-[17px] leading-[1.8] font-semibold text-[#0D4F8B]">
    Here’s the typical progress roadmap most FitYou members follow:
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
                  <td className="p-4 bg-[#F9FCFE]">Helps your body adjust calmly</td>
                  <td className="p-4 bg-[#F9FCFE]">Your appetite begins to reduce</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">0.5 mg</td>
                  <td className="p-4">Once weekly</td>
                  <td className="p-4">Weeks 5–8</td>
                  <td className="p-4">Builds tolerance</td>
                  <td className="p-4">Cravings reduce</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 bg-[#F9FCFE]">1.0 mg</td>
                  <td className="p-4 bg-[#F9FCFE]">Once weekly</td>
                  <td className="p-4 bg-[#F9FCFE]">Weeks 9–12</td>
                  <td className="p-4 bg-[#F9FCFE]">Supports weight loss progression</td>
                  <td className="p-4 bg-[#F9FCFE]">You feel full faster</td>
                </tr>

                <tr className="border-b">
                  <td className="p-4">1.7 mg</td>
                  <td className="p-4">Once weekly</td>
                  <td className="p-4">Weeks 13–16</td>
                  <td className="p-4">Maintenance dose</td>
                  <td className="p-4">Energy improves</td>
                </tr>

                <tr>
                  <td className="p-4 bg-[#F9FCFE]">2.4 mg</td>
                  <td className="p-4 bg-[#F9FCFE]">Once weekly</td>
                  <td className="p-4 bg-[#F9FCFE]">Week 17+</td>
                  <td className="p-4 bg-[#F9FCFE]">Higher dose for continued progress</td>
                  <td className="p-4 bg-[#F9FCFE]">Steady long-term results</td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* MOBILE CARDS */}
          <div className="md:hidden space-y-6 mt-6">
            {[
              { dose: "0.25 mg", duration: "Weeks 1–4", text: "Appetite decreases" },
              { dose: "0.5 mg", duration: "Weeks 5–8", text: "Cravings reduce" },
              { dose: "1.0 mg", duration: "Weeks 9–12", text: "You feel full faster" },
              { dose: "1.7 mg", duration: "Weeks 13–16", text: "Energy improves" },
              { dose: "2.4 mg", duration: "Week 17+", text: "Steady progress" },
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-xl shadow-sm bg-white">
                <p className="font-semibold text-[#0D4F8B]">{item.dose}</p>
                <p className="text-[#375C7A]">{item.duration}</p>
                <p className="text-[#375C7A] mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-12">
  <Image
    src="/guide/wegovy-dosage-header.png" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>


        
        {/* ---------- FITYOU PROGRESSION LIST + NOTE BOX (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mt-12">

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

{/* How do experts decide which routine level is right for you? */}
<div className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-6 leading-tight">
    How do experts decide which routine level is right for you?
  </h2>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mb-6">
    Your weight isn’t the only thing that determines how your FitYou pace progresses.
    To make sure your weekly routine feels comfortable and effective, our experts
    evaluate a few important areas:
  </p>

  <ul className="space-y-4 text-[17px] leading-[1.8] text-[#375C7A]">
    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>How your body is responding</strong> – Are you comfortable at the
      current level, or experiencing any discomfort?</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Your health background</strong> – Any existing medical conditions,
      medications, or past challenges with appetite or metabolism.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Your hunger and energy patterns</strong> – How your body responds
      throughout the day, especially during your early weeks.</span>
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      <span><strong>Your personal goals</strong> – What you want to achieve and how
      your body naturally adapts.</span>
    </li>
  </ul>

  <p className="text-[17px] leading-[1.8] text-[#375C7A] mt-8">
    The goal is to help you follow the <strong>most comfortable and effective pace</strong> —
    one that supports progress without overwhelming your body.
    Some people naturally settle into a slower routine long-term, and that’s completely okay.
    FitYou adapts to <strong>your body</strong>, not the other way around.
  </p>

</div>

{/* What to do if you miss a dose? */}

<div ref={missedDoseRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px]  text-[#0D4F8B] mb-4 leading-tight">
    What to do if you miss a dose?
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    If you ever miss your routine step, don’t worry — just follow these simple guidelines:
  </p>

  {/* CARD 1 */}
  <div className="bg-[#E6F2F7] p-6 rounded-xl mb-4">
    <p className="text-[#0D4F8B] font-semibold mb-2">
      If it’s been less than 2 days (48 hours):
    </p>
    <p className="text-[#375C7A] leading-[1.8]">
      Skip the missed step and continue with your next one on your usual day.
      Avoid doubling up — your routine works best when taken steadily.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-[#E6F2F7] p-6 rounded-xl mb-4">
    <p className="text-[#0D4F8B] font-semibold mb-2">
      If more than 2 days (48 hours) have passed:
    </p>
    <p className="text-[#375C7A] leading-[1.8]">
      Take the missed step as soon as you remember and then return to your normal schedule.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-[#E6F2F7] p-6 rounded-xl">
    <p className="text-[#0D4F8B] font-semibold mb-2">
      If more than 2 weeks (14 days) have passed:
    </p>
    <p className="text-[#375C7A] leading-[1.8]">
      Wait for your next planned day, or check in with your coach/doctor before restarting.
      They’ll guide you on whether you should continue or adjust your pace.
    </p>
  </div>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mt-6">
    If you ever need to shift your weekly routine, ensure there’s at least a two-day gap 
    between steps to maintain consistency.
  </p>

</div>

{/* Managing side effects as your dose increases */}

<div ref={sideEffectsRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] mb-4 leading-tight">
    Managing side effects as your dose increases
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    As your routine progresses, your body adjusts to changes in appetite, digestion, 
    and fullness signals. Because of this natural adjustment, some people may 
    experience mild side effects during the early weeks or when their dose increases.
  </p>

  {/* CARD 1 */}
  <div className="bg-[#E6F2F7] p-6 rounded-xl mb-4 leading-[1.8]">
    <p className="text-[#0D4F8B] font-semibold mb-2">Common side effects:</p>
    <ul className="list-disc pl-6 space-y-1 text-[#375C7A]">
      <li>Nausea</li>
      <li>Constipation</li>
      <li>Diarrhoea</li>
      <li>Mild vomiting</li>
    </ul>
  </div>

  <div className="bg-[#E6F2F7] p-6 rounded-xl leading-[1.8]">
    <p className="text-[#0D4F8B] font-semibold mb-2">Why this happens:</p>
    <p className="text-[#375C7A]">
      These effects happen because your body is adapting to new hunger cues 
      and gut-hormone activity. Most side effects are temporary and fade as your 
      system becomes more comfortable with the routine.
    </p>
  </div>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mt-6">
    If you ever feel unsure or uncomfortable, slowing the pace or taking a gentler 
    week can help. Your FitYou coach or healthcare professional can guide you on 
    the best adjustments.
  </p>

</div>

{/* Tip to make progress easier */}

<div ref={tipsRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] mb-6 leading-tight">
    Tips to make progress easier
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    Adjusting to a new routine can take a little time — especially when it influences 
    your hunger patterns, fullness signals, and daily habits. But with a few gentle 
    lifestyle adjustments, you can make the transition feel much smoother.
  </p>

  {/* Tips List */}
  <ul className="space-y-4 text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8]">

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Eat light meals and chew slowly during the first few days of adjusting your routine.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Stay hydrated throughout the day. Set gentle reminders if you tend to forget.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Take a short walk, do simple stretches, or try slow breathing to ease nausea or discomfort.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Avoid heavy, spicy, or very oily meals right after your routine check-in or dose day.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      Keep important contacts easily accessible in case you need guidance or reassurance.
    </li>

  </ul>
</div>


{/* Pause or reduce your Wegovy dose */}

<div ref={pauseDoseRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] mb-6 leading-tight">
    When to pause or reduce your Wegovy dose?
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    In certain situations, your doctor may recommend lowering your dose, delaying your next dose, 
    or pausing Wegovy temporarily to keep you safe and comfortable.
  </p>

  {/* LIST OF REASONS */}
  <ul className="space-y-4 text-[#375C7A] text-[16px] md:text-[17px] leading-[1.8]">

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you are experiencing severe nausea, vomiting, diarrhoea, or stomach pain.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you missed multiple doses of Wegovy and need to restart safely.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you are pregnant, planning to conceive, or think you might be pregnant.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If vomiting or diarrhoea has caused dehydration or weakness.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you are scheduled for a procedure that requires fasting or general anaesthesia.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you have medical conditions that affect your kidney or liver function.
    </li>

    <li className="flex gap-3">
      <span className="text-[#0D4F8B] text-xl mt-[2px]">›</span>
      If you are struggling to tolerate your current dose and need a slower escalation.
    </li>

  </ul>

  {/* FINAL NOTE */}
  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mt-6">
    If you’re ever unsure about a side effect, missed dose, or upcoming event like surgery, 
    fasting, or pregnancy — speak to your doctor before making any changes. 
    They will guide you on how to continue safely.
  </p>
</div>


{/* ---------- PRO TIP BOX ---------- */}
<div className="max-w-4xl mx-auto px-4 mt-2">
  <div className="bg-[#FCEFD9] border border-[#F5D8B5] px-6 py-5 rounded-xl">
    <p className="font-semibold text-[#0D4F8B] mb-2">Pro tip</p>
    <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#375C7A]">
      Use a diary or a tracking app to record your daily weight, mood, energy levels, 
      and any symptoms you experience. These records can help your doctor adjust your dose.
    </p>
  </div>
</div>


{/* ---------- WEIGHT LOSS AT YOUR DOSE SECTION ---------- */}
<div ref={weightLossRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] leading-tight mb-6">
    Weight loss at your dose, your pace
  </h2>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-4">
    Everyone experiences weight loss differently. Some people see visible changes at a 
    lower dose, while others may need a higher dose of Wegovy. What matters most is that 
    your body tolerates the dose safely and begins showing progress.
  </p>

  <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-6">
    With the right support and a little patience, you can see steady progress—often in 
    ways beyond just the numbers on the scale.
  </p>


  {/* ---------- INFO BOX ---------- */}
  <div className="bg-[#E9F4FB] border border-[#CFE6F5] px-6 py-6 rounded-xl">

    <p className="font-semibold text-[#0D4F8B] text-[17px] mb-3">
      Launched in India in June 2025
    </p>

    <p className="text-[16px] md:text-[17px] text-[#375C7A] leading-[1.8] mb-5">
      Wegovy is available in India in the form of a pre-filled injection pen (FlexTouch). 
      You can self-inject it, or take it with the help of a healthcare professional.
    </p>

    <button className="bg-[#0D4F8B] hover:bg-[#093866] text-white px-6 py-3 rounded-lg text-[15px] font-medium transition">
      Read more about Wegovy
    </button>
  </div>

</div>

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

<div className="max-w-4xl mx-auto px-4 mt-16 pb-16">
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
