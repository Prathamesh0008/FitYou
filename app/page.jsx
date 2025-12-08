"use client";

import BrainTrickSection from "@/components/BrainTrickSection";
import ClinicalGraphSection from "@/components/ClinicalGraphSection";
import DisclaimerAndSources from "@/components/DisclaimerAndSources";
import HealthGuide from "@/components/HealthGuide";
import HeroSnapshotSection from "@/components/hero/HeroSnapshotSection";
import NewsSection from "@/components/NewsSection";
import WhyQualify from "@/components/recommendations/WhyQualify";
import ScienceSection from "@/components/ScienceSection";
// import Splash from "@/components/Splash";
import StepsSection from "@/components/StepsSection";
import WeightLossCalculator from "@/components/WeightLossCalculator";
import WhyItWorks from "@/components/WhyItWorks";
import Link from "next/link";

const benefits = [
  "Screened for medical risks before you start",
  "Structured routines designed by experts",
  "Progress built around small, consistent wins",
  "No fad diets, no extreme workouts",
];

const steps = [
  {
    title: "1. Quick health quiz",
    text: "We check basics like age, BMI, medical conditions, and medications to understand your risk profile.",
  },
  {
    title: "2. Eligibility & guidance",
    text: "If you’re eligible, Fityou recommends a safe, structured plan. If not, we guide you to safer next steps.",
  },
  {
    title: "3. Routines you can actually follow",
    text: "Simple, sustainable actions instead of overwhelming schedules you can’t maintain.",
  },
];

const highlights = [
  "Evidence-informed approach to weight management",
  "Clear boundaries on who should not start without a doctor",
  "Habit tracking and structured weekly focus",
  "Designed to complement, not replace, professional care",
];

const testimonials = [
  {
    name: "Aarav, 31",
    text: "Fityou helped me stop chasing crash diets and stick to routines that fit my actual life.",
  },
  {
    name: "Nisha, 28",
    text: "I liked that I had to clear a health screen first. It felt responsible, not just “lose weight fast” marketing.",
  },
  {
    name: "Rahul, 37",
    text: "The weekly structure made it easy to know what to focus on instead of trying everything at once.",
  },
];

const readinessTrends = [
  { label: "W1", value: 40 },
  { label: "W2", value: 55 },
  { label: "W3", value: 65 },
  { label: "W4", value: 78 },
  { label: "W5", value: 88 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden  text-[#0D4F8B] font-laila">
      {/* <Splash /> */}
      <ScienceSection/>
      <BrainTrickSection/>
    <ClinicalGraphSection/>
      {/* HERO */}
         <HeroSnapshotSection
        benefits={[
          "Better clarity on your weekly routine",
          "Risk-aware starting point",
          "Designed for sustainability"
        ]}
        readinessTrends={[
          { label: "Mon", value: 40 },
          { label: "Tue", value: 60 },
          { label: "Wed", value: 70 },
          { label: "Thr", value: 80 },
          { label: "Fri", value: 90 },
          { label: "Sat", value: 100 },
        
        ]}
      />

      {/* WHY OUR PROGRAM WORKS SECTION */}
     

      {/* HOW IT WORKS */}
      {/* <section className="mx-auto max-w-6xl px-4 py-7 pb-14">
  <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
  
    <div>
      <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
        How Fityou works
      </h2>
      <p className="mt-2 text-sm text-[#375C7A]">
        Fityou is designed more like an onboarding process than a challenge — with health screening built in.
      </p>

      <div className="mt-5 space-y-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-4 shadow-sm text-[#375C7A]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
              {step.title}
            </p>
            <p className="mt-1 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </div>

    
    <div className="rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] p-5 text-sm text-[#375C7A] shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
        WHO IT’S FOR
      </p>
      <p className="mt-2">
        Fityou is for adults who want structured, safe improvement — not extreme transformations.
      </p>

      <ul className="mt-4 space-y-2 text-xs">
        <li>✓ You want more structure, not noise</li>
        <li>✓ You’re okay with small, consistent steps</li>
        <li>✓ You’re willing to answer basic health questions</li>
      </ul>

      
      <div className="mt-4 flex items-center gap-4 flex-wrap sm:flex-nowrap">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0">
          <div className="absolute inset-0 rounded-full border-4 border-[#4CAF6A]" />
          <div className="absolute inset-3 rounded-full border-4 border-[#0D4F8B]" />
          <div className="absolute inset-5 sm:inset-6 rounded-full bg-white text-[9px] sm:text-[10px] font-semibold text-[#255C3E] flex items-center justify-center shadow-sm">
            Safe
            <br />
            zone
          </div>
        </div>

        <p className="text-[11px] text-[#60738C] flex-1 min-w-[180px]">
          The aim is not perfection — it's to keep you in a safe, sustainable zone where routines are realistic and risks are acknowledged early.
        </p>
      </div>

      <p className="mt-4 text-[11px] text-[#60738C]">
        Fityou does not replace medical advice.
      </p>
    </div>
  </div>
</section> */}
<WhyQualify/>


      {/* CALCULATOR SECTION */}
      
      <WeightLossCalculator/>
      <NewsSection/>

      {/* PROGRAM HIGHLIGHTS + MINI “PROGRESS GRAPH” */}
      {/* <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mt-5 bg-[#F7FAFF] p-6 md:p-8 shadow-sm text-[#375C7A]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
                What the Fityou program focuses on
              </h2>
              <p className="mt-2 max-w-xl text-sm">
                Instead of chasing everything at once, we stack small,
                high-impact behaviours.
              </p>
            </div>

            <Link
              href="/program"
              className="rounded-full border border-[#BFD6F2] bg-white px-4 py-2 text-xs font-medium text-[#0D4F8B] hover:bg-[#F4F7FC]"
            >
              View sample week plan →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-[1.5fr,1fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="flex gap-3 rounded-2xl bg-white border border-[#BFD6F2] p-4 text-xs text-[#375C7A]"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0D4F8B]" />
                  <p>{h}</p>
                </div>
              ))}
            </div>

           
            <div className="rounded-2xl border border-[#D3E1F4] bg-white p-4 text-xs text-[#375C7A] shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#60738C]">
                PROGRESS PREVIEW
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">Consistency curve</p>
              <p className="mt-1 text-[11px] text-[#60738C]">
                Example of how a steady, low-pressure routine can build up over
                a few weeks.
              </p>

              <div className="mt-3 flex h-24 items-end gap-2">
                {readinessTrends.map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="relative h-16 w-full overflow-hidden rounded-xl bg-[#E9F3FF]">
                      <div
                        style={{ height: `${item.value}%` }}
                        className="absolute bottom-0 left-0 w-full rounded-xl bg-[#0D4F8B]"
                      />
                    </div>
                    <p className="mt-1 text-[10px] text-center text-[#60738C]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-[10px] text-[#60738C]">
                This is illustrative — your actual pattern depends on your
                inputs, context, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <WhyItWorks/>

      {/* TESTIMONIALS */}
      <section className="mt-5 mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
              Built for real lives, not perfect ones
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#375C7A]">
              Fityou is built for consistency, not perfection.
            </p>
          </div>

          <Link
            href="/pricing"
            className="text-xs font-medium text-[#0D4F8B] hover:underline"
          >
            Check pricing →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] p-4 shadow-sm text-[#375C7A]"
            >
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-[#0D4F8B] opacity-15 blur-sm" />
              <p>“{t.text}”</p>
              <p className="mt-3 text-xs font-semibold text-[#60738C]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MEDICAL AWARENESS MATTERS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] p-6 shadow-sm text-[#375C7A] md:p-10">
          <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
            Why medical awareness matters before starting any weight program
          </h2>

          <p className="mt-3 max-w-3xl text-sm">
            Many people begin weight journeys without knowing their risk zones.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Hidden medical flags",
                text: "Dizziness, chest tightness, rapid weight change, etc.",
              },
              {
                title: "Medication conflicts",
                text: "Some meds affect appetite, weight, and energy.",
              },
              {
                title: "Mental strain",
                text: "Crash-diet cycles hurt long-term stability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-[#BFD6F2] p-5 text-sm text-[#375C7A]"
              >
                <h3 className="font-semibold text-[#0D4F8B]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#60738C]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL TRIALS SECTION */}
     
      <StepsSection/>

      {/* WHAT FITYOU IS NOT */}
      {/* <section className="mx-auto max-w-6xl px-4 mt-2 pb-20">
        <div className="bg-[#E9F3FF] border border-[#BFD6F2] p-8 shadow-sm text-[#375C7A] md:p-10">
          <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
            What Fityou is{" "}
            <span className="text-[#0D4F8B]">not</span>
          </h2>

          <ul className="mt-4 space-y-3 text-sm">
            <li>✘ Not medical treatment</li>
            <li>✘ Not extreme dieting</li>
            <li>✘ Not guaranteed rapid weight loss</li>
            <li>✘ Not medication or supplements</li>
            <li>✘ Not ignoring your medical context</li>
            <li>✘ Not pushing beyond safe limits</li>
          </ul>

          <p className="mt-4 text-xs text-[#60738C]">
            Fityou complements professional care — not replaces it.
          </p>
        </div>
      </section> */}

      <HealthGuide/>
      

      {/* WEEKLY STRUCTURE */}
      {/* <section className="mx-auto mt-5 max-w-6xl px-4 pb-20">
        <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
          Your weekly structure inside Fityou
        </h2>

        <p className="mt-2 max-w-xl text-sm text-[#375C7A]">
          Each weekday has a clear, manageable purpose.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            {
              day: "Mon",
              focus: "Sleep reset",
              color: "bg-[#EEF0FF]",
            },
            {
              day: "Tue",
              focus: "Light movement",
              color: "bg-[#E9F3FF]",
            },
            {
              day: "Wed",
              focus: "Meal rhythm",
              color: "bg-[#E7F6EC]",
            },
            {
              day: "Thu",
              focus: "Evening structure",
              color: "bg-[#FFF8E5]",
            },
            {
              day: "Fri",
              focus: "Check-in & reflection",
              color: "bg-[#FFF4E6]",
            },
            {
              day: "Sat",
              focus: "Recovery routine",
              color: "bg-[#F3F5F9]",
            },
            {
              day: "Sun",
              focus: "Prep + reset",
              color: "bg-[#F5ECFF]",
            },
          ].map((w) => (
            <div
              key={w.day}
              className={`rounded-2xl border border-[#BFD6F2] p-4 text-xs ${w.color}`}
            >
              <p className="font-semibold text-[#0D4F8B]">
                {w.day}
              </p>
              <p className="mt-1 text-[#375C7A]">
                {w.focus}
              </p>
            </div>
          ))}
        </div>
      </section> */}
      

      {/* MINI UI PREVIEWS */}
      {/* <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Daily readiness",
              text: "Risk indicators based on quiz inputs.",
            },
            {
              title: "Weekly targets",
              text: "Simple, maintainable actions.",
            },
            {
              title: "Behaviour tracking",
              text: "Track sleep, steps, timing, routine patterns.",
            },
          ].map((box) => (
            <div
              key={box.title}
              className="rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] p-6 text-sm text-[#375C7A] shadow-sm"
            >
              <h3 className="font-semibold text-[#0D4F8B]">
                {box.title}
              </h3>
              <p className="mt-2 text-xs text-[#60738C]">
                {box.text}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* EVIDENCE */}
      {/* <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] p-8 text-[#375C7A] shadow-sm">
          <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
            The approach is guided by behavioural science
          </h2>

          <p className="mt-2 max-w-xl text-sm">
            Fityou follows principles from habit formation, circadian rhythm,
            and appetite research.
          </p>

          <ul className="mt-4 space-y-2 text-xs text-[#60738C]">
            <li>• Tiny habits &amp; low-friction behavior change</li>
            <li>• Consistency over intensity</li>
            <li>• Sleep &amp; circadian alignment</li>
            <li>• Reflective check-ins, not guilt cycles</li>
          </ul>
        </div>
      </section> */}

      
      {/* <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-[#F5A8A8] bg-[#FFECEC] p-8 text-[#375C7A] shadow-sm">
          <h2 className="text-xl font-semibold md:text-2xl text-[#B52121]">
            Safety boundaries: when Fityou is not recommended
          </h2>

          <ul className="mt-4 space-y-2 text-sm">
            <li>• Pregnancy or immediate postpartum recovery</li>
            <li>• Eating disorders or disordered patterns</li>
            <li>• Medical emergencies or heart issues</li>
            <li>• BMI below medically recommended threshold</li>
            <li>• Chest pain, fainting, dizziness</li>
            <li>• Doctor-advised restrictions</li>
          </ul>

          <p className="mt-4 text-xs text-[#60738C]">
            The quiz screens for these and recommends medical guidance.
          </p>
        </div>
      </section> */}

      
      {/* <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold md:text-3xl text-[#0D4F8B]">
          Ready to see if Fityou is a safe fit for you?
        </h2>

        <p className="mt-2 text-sm text-[#375C7A]">
          Start with the eligibility quiz — no pressure, just clarity.
        </p>

        <Link
          href="/quiz"
          className="mt-6 inline-block rounded-full bg-[#0D4F8B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0A3E70]"
        >
          Begin the free check →
        </Link>
      </section> */}
      <DisclaimerAndSources/>
    </main>
  );
}
