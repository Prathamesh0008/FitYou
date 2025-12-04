"use client";

import BrainTrickSection from "@/components/BrainTrickSection";
import HealthGuide from "@/components/HealthGuide";
import ScienceSection from "@/components/ScienceSection";
import Splash from "@/components/Splash";
import StepsSection from "@/components/StepsSection";
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
    <main className="min-h-screen relative overflow-hidden bg-[#F7FAFF] text-[#0D4F8B] font-laila">
      <Splash />
      <ScienceSection/>
      <BrainTrickSection/>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 md:flex-row md:items-center md:pt-20">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFD6F2] bg-[#E9F3FF] px-3 py-1 text-xs font-medium text-[#0D4F8B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
            Medically-aware weight management
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0D4F8B] sm:text-4xl md:text-5xl">
            Not just “weight loss.”
            <br />
            <span className="text-[#0D4F8B]">
              A safer way to start.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-[#375C7A]">
            Fityou starts with a simple health quiz to screen for basic risks,
            then unlocks structured weekly routines that are realistic and
            sustainable.
          </p>

          {/* Mini trust strip */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-[#60738C]">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm border border-[#D3E1F4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
              Risk-aware first, routine next
            </span>
            <span>• No false promises</span>
            <span>• No shortcuts</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/quiz"
              className="rounded-full bg-[#0D4F8B] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0A3E70]"
            >
              Start eligibility quiz
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-[#0D4F8B] underline-offset-4 hover:underline"
            >
              Explore the program →
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-xs sm:text-sm text-[#375C7A]">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0D4F8B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE – SNAPSHOT + VISUALS */}
        <div className="relative w-full md:w-1/2">
          {/* “Abstract person” / info pill */}
          <div className="mb-4 ml-auto flex max-w-xs items-center gap-3 rounded-3xl border border-[#D3E1F4] bg-white p-3 text-[11px] text-[#375C7A] shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0D4F8B] text-xs font-semibold text-white">
              FY
            </div>
            <div>
              <p className="font-semibold text-[#0D4F8B]">A safer first step</p>
              <p className="text-[10px]">
                Example profile: no emergencies flagged, cleared for light routines.
              </p>
            </div>
          </div>

          {/* MAIN SNAPSHOT CARD */}
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-5 shadow-xl border border-[#D3E1F4]">
            {/* floating top-right mini card */}
            <div className="absolute -top-8 right-4 hidden rounded-2xl border border-[#CBE9D5] bg-[#E7F6EC] px-3 py-2 text-[10px] text-[#255C3E] shadow-md md:flex">
              <div className="mr-2 h-7 w-7 rounded-xl bg-[#4CAF6A]" />
              <div>
                <p className="font-semibold">Safe to begin</p>
                <p className="text-[9px]">No red-flag symptoms reported.</p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#60738C]">
                  YOUR SNAPSHOT
                </p>
                <p className="text-sm font-semibold text-[#0D4F8B]">
                  Today&apos;s readiness
                </p>
              </div>
              <span className="rounded-full bg-[#E7F6EC] px-3 py-1 text-[11px] font-semibold text-[#255C3E]">
                Low risk
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                {
                  label: "BMI (approx.)",
                  value: "24.3",
                  status: "In range",
                  color: "text-[#2F7A4A]",
                },
                {
                  label: "Week target",
                  value: "4 / 7",
                  status: "Small, doable steps",
                  color: "text-[#0D4F8B]",
                },
                {
                  label: "Focus",
                  value: "Sleep",
                  status: "Late nights ↓",
                  color: "text-[#60738C]",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-3"
                >
                  <p className="text-[11px] text-[#60738C]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0D4F8B]">
                    {item.value}
                  </p>
                  <p className={`mt-1 text-[11px] ${item.color}`}>{item.status}</p>
                </div>
              ))}
            </div>

            {/* Mini “trend line” feel using bars */}
            <div className="mt-4 rounded-2xl border border-[#D3E1F4] bg-[#F4F7FC] p-3 text-[11px] text-[#375C7A]">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#0D4F8B]">Readiness trend (preview)</p>
                <p className="text-[10px] text-[#2F7A4A]">
                  Steady ↑
                </p>
              </div>
              <div className="mt-2 flex h-16 items-end gap-2">
                {readinessTrends.map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="relative h-12 w-full overflow-hidden rounded-full bg-[#D3E1F4]">
                      <div
                        style={{ height: `${item.value}%` }}
                        className="absolute bottom-0 left-0 w-full rounded-full bg-[#0D4F8B]"
                      />
                    </div>
                    <p className="mt-1 text-[9px] text-center text-[#60738C]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#0D4F8B] bg-[#0D4F8B] px-4 py-3 text-[11px] text-white">
              <p className="font-medium">
                “Start where you are. Not where you think you should be.”
              </p>
              <p className="mt-1 text-[10px] text-[#D3E1F4]">
                Fityou focuses first on risk-awareness and consistency.
              </p>
            </div>
          </div>

          {/* Illustrative “phone UI” preview under card */}
          <div className="mt-6 hidden max-w-md rounded-3xl border border-[#D3E1F4] bg-white p-4 text-[11px] text-[#375C7A] shadow-md md:block">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[#0D4F8B]">Today at a glance</p>
              <span className="rounded-full bg-[#0D4F8B] px-2 py-0.5 text-[10px] text-white">
                Demo
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#E9F3FF] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Sleep target
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">11:00 pm</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  Wind down 30 mins earlier
                </p>
              </div>
              <div className="rounded-xl bg-[#E7F6EC] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Movement
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">Light walk</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  15–20 mins, relaxed pace
                </p>
              </div>
              <div className="rounded-xl bg-[#F5ECFF] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Focus
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">Evening screen</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  30 mins no-scroll buffer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR PROGRAM WORKS SECTION */}
      <section className="relative overflow-hidden py-20 bg-white text-[#0D4F8B]">
        {/* WAVE BACKGROUND (soft Aktive-style) */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80 text-[#E9F3FF]">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-40"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,160L60,181.3C120,203,240,245,360,229.3C480,213,600,139,720,138.7C840,139,960,213,1080,234.7C1200,256,1320,224,1380,208L1440,192V0H0Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* TITLE */}
          <h2 className="text-3xl font-semibold leading-snug md:text-4xl">
            Simple, smart, and scientific.
            <br />
            Our weight management programme
            <br />
            works where others fail.
          </h2>

          {/* GRID */}
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              {/* ITEM 1 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#E9F3FF] text-2xl">
                  🍜
                </div>

                <div>
                  <div className="rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white text-[#0D4F8B]">
                    I love food too much to go on a diet
                  </div>

                  <p className="mt-2 text-xs italic text-[#375C7A]">
                    You can still enjoy the foods you love — you&apos;ll feel
                    satisfied after small amounts.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#E9F3FF] text-2xl">
                  📘
                </div>

                <div>
                  <div className="rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white text-[#0D4F8B]">
                    It’s too difficult to stay motivated
                  </div>

                  <p className="mt-2 text-xs italic text-[#375C7A]">
                    Our programme removes the mental pressure — the routine
                    guides you step-by-step.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#E9F3FF] text-2xl">
                  🧁
                </div>

                <div>
                  <div className="rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white text-[#0D4F8B]">
                    Why is this different from other weight programmes?
                  </div>

                  <p className="mt-2 text-xs italic text-[#375C7A]">
                    Because it is effective. Clinical evidence supports it, and
                    the weekly plan is built for real life.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-10">
              {/* ITEM 1 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#E9F3FF] text-2xl">
                  ⏱️
                </div>

                <div>
                  <div className="rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white text-[#0D4F8B]">
                    I don’t have time to exercise
                  </div>

                  <p className="mt-2 text-xs italic text-[#375C7A]">
                    Light walking 30 minutes a few times a week is enough to
                    begin.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#E9F3FF] text-2xl">
                  ⚖️
                </div>

                <div>
                  <div className="rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white text-[#0D4F8B]">
                    I’ve tried everything... nothing works
                  </div>

                  <p className="mt-2 text-xs italic text-[#375C7A]">
                    Our structured routine resets behaviours and metabolic
                    signals safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-7 pb-14">
  <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
    {/* LEFT SIDE */}
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

    {/* RIGHT SIDE */}
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

      {/* SAFE ZONE FIXED RESPONSIVE */}
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
</section>


      {/* CALCULATOR SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* BACKGROUND WAVE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9F3FF] to-white">
          <svg
            className="absolute top-0 w-full opacity-80"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#E9F3FF"
              fillOpacity="1"
              d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,74.7C840,53,960,75,1080,112C1200,149,1320,203,1380,229.3L1440,256V0H0Z"
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D4F8B] leading-snug">
              A proven result of{" "}
              <span className="font-extrabold">
                21% weight loss
              </span>{" "}
              in 16 months. Curious as to how much you could lose?
            </h2>

            <p className="mt-6 text-sm text-[#375C7A]">
              Take the quiz. It’s free.
            </p>

            <div className="mt-6 flex flex-col gap-4 w-full max-w-sm">
              <Link
                href="/quiz"
                className="w-full bg-[#0D4F8B] hover:bg-[#0A3E70] transition text-white font-semibold text-sm py-3 rounded-md text-center shadow-md"
              >
                Do I qualify for treatment?
              </Link>

              <Link
                href="/program"
                className="w-full border border-[#F7CFA0] bg-[#FFF4E6] hover:bg-[#FFE5C7] transition text-[#0D4F8B] font-semibold text-sm py-3 rounded-md text-center"
              >
                View our programme
              </Link>
            </div>
          </div>

          {/* RIGHT – CALCULATOR */}
          <div className="rounded-2xl p-8 shadow-xl bg-white border border-[#D3E1F4]">
            {/* WEIGHT DROPDOWN */}
            <div>
              <label className="text-sm font-medium text-[#0D4F8B]">
                Your current weight
              </label>
              <div className="flex mt-1 gap-2">
                <select
                  id="currentWeight"
                  className="w-full border border-[#D3E1F4] rounded-md py-2 px-3 
                  text-sm bg-white text-[#0D4F8B]"
                >
                  {Array.from({ length: 131 }).map((_, i) => (
                    <option key={i}>{`${70 + i} kg`}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* HEIGHT */}
            <div className="mt-4">
              <label className="text-sm font-medium text-[#0D4F8B]">
                Your height
              </label>

              <div className="flex gap-2 mt-1">
                <select
                  id="heightFeet"
                  className="w-1/2 border border-[#D3E1F4] rounded-md py-2 px-3 
                  text-sm bg-white text-[#0D4F8B]"
                >
                  {["4 ft", "5 ft", "6 ft", "7 ft"].map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>

                <select
                  id="heightInches"
                  className="w-1/2 border border-[#D3E1F4] rounded-md py-2 px-3 
                  text-sm bg-white text-[#0D4F8B]"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i}>{`${String(i).padStart(2, "0")} in`}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* CALCULATE */}
            <button
              onClick={() => {
                const weight = Number(
                  document
                    .getElementById("currentWeight")
                    .value.split(" ")[0]
                );
                const feet = Number(
                  document.getElementById("heightFeet").value.split(" ")[0]
                );
                const inch = Number(
                  document.getElementById("heightInches").value.split(" ")[0]
                );

                const heightCm = feet * 30.48 + inch * 2.54;
                if (!weight || !heightCm) return alert("Please fill all fields");

                const sixMonths = (weight * 0.88).toFixed(1);
                const sixteenMonths = (weight * 0.79).toFixed(1);

                document.getElementById("sixMonthsResult").innerText =
                  sixMonths;
                document.getElementById("sixteenMonthsResult").innerText =
                  sixteenMonths;
              }}
              className="mt-6 w-full bg-[#FFF4E6] border border-[#F7CFA0] 
              hover:bg-[#FFE5C7] transition text-[#0D4F8B] 
              font-semibold py-3 rounded-md text-sm"
            >
              Calculate
            </button>

            {/* RESULTS */}
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#0D4F8B]">
                  Your weight in 6 months:
                </span>
                <span
                  id="sixMonthsResult"
                  className="w-16 h-9 rounded-md border border-[#F7CFA0] 
                  flex items-center justify-center text-[#0D4F8B]"
                >
                  ?
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D4F8B]">
                  Your weight in 16 months:
                </span>
                <span
                  id="sixteenMonthsResult"
                  className="w-16 h-9 rounded-md border border-[#F7CFA0] 
                  flex items-center justify-center text-[#0D4F8B]"
                >
                  ?
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS + MINI “PROGRESS GRAPH” */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mt-5 bg-[#E9F3FF] border border-[#BFD6F2] p-6 md:p-8 shadow-sm text-[#375C7A]">
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

            {/* MINI PROGRESS GRAPH CARD */}
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
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
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
      <section className="relative overflow-hidden py-24">
        {/* WAVE BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9F3FF] to-white">
          <svg
            className="absolute top-0 w-full opacity-80"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#E9F3FF"
              d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,234.7C1120,256,1280,256,1360,256L1440,256V0H0Z"
            />
          </svg>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT – GRAPH (STATIC SVG) */}
          <div className="flex justify-center">
            <div className="relative">
              {/* SVG GRAPH */}
              <svg width="260" height="400" viewBox="0 0 260 380">
                {/* Soft background */}
                <rect
                  x="0"
                  y="0"
                  width="260"
                  height="380"
                  fill="white"
                  fillOpacity="0.9"
                />

                {/* Faded vertical lines */}
                <line
                  x1="90"
                  y1="40"
                  x2="90"
                  y2="340"
                  stroke="#E9F3FF"
                  strokeWidth="2"
                />
                <line
                  x1="170"
                  y1="40"
                  x2="170"
                  y2="340"
                  stroke="#E9F3FF"
                  strokeWidth="2"
                />

                {/* ORANGE CURVE */}
                <path
                  d="M20 80 C 80 140, 140 180, 220 240"
                  stroke="#F5C8A4"
                  strokeWidth="3"
                  fill="none"
                />

                {/* BLUE CURVE */}
                <path
                  d="M20 80 C 60 200, 120 260, 220 310"
                  stroke="#0D4F8B"
                  strokeWidth="4"
                  fill="none"
                />

                {/* Data points */}
                <circle cx="20" cy="80" r="5" fill="#0D4F8B" />
                <circle cx="120" cy="220" r="5" fill="#0D4F8B" />
                <circle cx="220" cy="310" r="5" fill="#0D4F8B" />

                {/* Bottom labels */}
                <text x="10" y="360" fontSize="12" fill="#60738C">
                  Day 1
                </text>
                <text x="95" y="360" fontSize="12" fill="#60738C">
                  Month 6
                </text>
                <text x="185" y="360" fontSize="12" fill="#60738C">
                  Month 16
                </text>
              </svg>

              {/* TOP LABEL */}
              <div className="absolute left-[75px] top-[115px] w-44 px-3 py-2 bg-[#0D4F8B] text-white text-xs font-bold rounded-md shadow-lg">
                10% body weight
                <br />
                in 6 months²
                <div className="absolute left-6 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-[#0D4F8B] border-l-transparent border-r-transparent" />
              </div>

              {/* BOTTOM LABEL */}
              <div className="absolute left-[90px] top-[260px] w-44 px-3 py-2 bg-[#0D4F8B] text-white text-xs font-bold rounded-md shadow-lg">
                21% body weight
                <br />
                in 16 months²
                <div className="absolute left-6 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-[#0D4F8B] border-l-transparent border-r-transparent" />
              </div>
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D4F8B] leading-snug">
              Clinical trials show that with
              <br />
              our approach, you lose
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 font-extrabold">
                  5 times more weight
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FBD1A2] -z-0 rounded-full" />
              </span>
              <br />
              than with diet &amp; exercise alone.
            </h2>

            <p className="mt-4 text-sm text-[#375C7A] max-w-md">
              Published clinical trial (2022): 2,539 adults over 72 weeks,
              comparing our programme vs placebo.
            </p>
          </div>
        </div>
      </section>
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
      <section className="mx-auto mt-5 max-w-6xl px-4 pb-20">
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
      </section>

      {/* MINI UI PREVIEWS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
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
      </section>

      {/* EVIDENCE */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
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
      </section>

      {/* SAFETY BOUNDARIES */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
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
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold md:text-3xl text-[#0D4F8B]">
          Ready to see if Fityou is a safe fit for you?
        </h2>


{steps.map((step, index) => (
  <div
    key={`how-steps-${index}`}
    className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-4 shadow-sm text-[#375C7A]"
       >
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
       {step.title}
        </p>
        <p className="mt-1 text-sm">{step.text}</p>
         </div>
         ))}

        <p className="mt-2 text-sm text-[#375C7A]">
          Start with the eligibility quiz — no pressure, just clarity.
        </p>

        <Link
          href="/quiz"
          className="mt-6 inline-block rounded-full bg-[#0D4F8B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0A3E70]"
        >
          Begin the free check →
        </Link>
      </section>
    </main>
  );
}
