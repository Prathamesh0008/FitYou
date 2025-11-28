"use client";

import Splash from "@/components/Splash";
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
    <main className="min-h-screen transition-colors relative overflow-hidden">
      <Splash />

      {/* GLOBAL BACKGROUND ORBS / GRADIENTS */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/10" />
      <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/10" />
      <div className="hidden" />

      {/* HERO */}
      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 md:flex-row md:items-center md:pt-20">
        {/* Decorative hero background shape */}
        <div className="pointer-events-none absolute inset-y-6 right-0 -z-10 dark:bg-slate-900/70" />

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-medium text-light-primary dark:border-sky-900 dark:bg-sky-900/30 dark:text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
            Medically-aware weight management
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-light-primary sm:text-4xl md:text-5xl dark:text-slate-50">
            Not just “weight loss.”
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              A safer way to start.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-light-primary md:text-base dark:text-slate-300">
            Fityou starts with a simple health quiz to screen for basic risks,
            then unlocks structured weekly routines that are realistic and
            sustainable.
          </p>

          {/* Mini trust strip */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 shadow-sm dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Risk-aware first, routine next
            </span>
            <span>• No false promises</span>
            <span>• No shortcuts</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/quiz"
              className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Start eligibility quiz
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-200 dark:hover:text-slate-50"
            >
              Explore the program →
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-xs text-light-primary sm:text-sm dark:text-slate-300">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE – SNAPSHOT + VISUALS */}
        <div className="relative w-full md:w-1/2">
          {/* Light illustration block behind card */}
          <div />

          {/* “Abstract person” image / silhouette */}
          <div className="mb-4 ml-auto flex max-w-xs items-center gap-3 rounded-3xl border border-sky-100/70 bg-sky-50/70 p-3 text-[11px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-xs font-semibold text-white">
              FY
            </div>
            <div>
              <p className="font-semibold">A safer first step</p>
              <p className="text-[10px]">
                Example profile: no emergencies flagged, cleared for light routines.
              </p>
            </div>
          </div>

          {/* MAIN SNAPSHOT CARD */}
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-5 shadow-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900">
            {/* floating top-right mini card */}
            <div className="absolute -top-8 right-4 hidden rounded-2xl border border-emerald-100 bg-emerald-50/80 px-3 py-2 text-[10px] text-emerald-900 shadow-md shadow-emerald-200/50 md:flex dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100">
              <div className="mr-2 h-7 w-7 rounded-xl bg-gradient-to-tr from-emerald-400 to-sky-400" />
              <div>
                <p className="font-semibold">Safe to begin</p>
                <p className="text-[9px]">No red-flag symptoms reported.</p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                  YOUR SNAPSHOT
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Today&apos;s readiness
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                Low risk
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                {
                  label: "BMI (approx.)",
                  value: "24.3",
                  status: "In range",
                  color: "text-emerald-600 dark:text-emerald-300",
                },
                {
                  label: "Week target",
                  value: "4 / 7",
                  status: "Small, doable steps",
                  color: "text-sky-600 dark:text-sky-300",
                },
                {
                  label: "Focus",
                  value: "Sleep",
                  status: "Late nights ↓",
                  color: "text-slate-500 dark:text-slate-400",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#d9e9ff] border border-[#b2cffd] p-3 dark:bg-slate-800 dark:border-slate-700"
                >
                  <p className="text-[11px] text-slate-600 dark:text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {item.value}
                  </p>
                  <p className={`mt-1 text-[11px] ${item.color}`}>{item.status}</p>
                </div>
              ))}
            </div>

            {/* Mini animated “trend line” feel using bars */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Readiness trend (preview)</p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-300">
                  Steady ↑
                </p>
              </div>
              <div className="mt-2 flex h-16 items-end gap-2">
                {readinessTrends.map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="relative h-12 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800">
                      <div
                        style={{ height: `${item.value}%` }}
                        className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-sky-500 to-indigo-500"
                      />
                    </div>
                    <p className="mt-1 text-[9px] text-center text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 p-[1px]">
              <div className="rounded-[14px] bg-slate-900/90 px-4 py-3 text-[11px] text-slate-200">
                <p className="font-medium">
                  “Start where you are. Not where you think you should be.”
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Fityou focuses first on risk-awareness and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Illustrative “phone UI” preview under card */}
          <div className="mt-6 hidden max-w-md rounded-3xl border border-slate-200 bg-white/80 p-4 text-[11px] text-slate-700 shadow-md backdrop-blur-sm md:block dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Today at a glance</p>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-50 dark:bg-slate-100 dark:text-slate-900">
                Demo
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-sky-50 p-3 dark:bg-sky-950/40">
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Sleep target
                </p>
                <p className="mt-1 text-sm font-semibold">11:00 pm</p>
                <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                  Wind down 30 mins earlier
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Movement
                </p>
                <p className="mt-1 text-sm font-semibold">Light walk</p>
                <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                  15–20 mins, relaxed pace
                </p>
              </div>
              <div className="rounded-xl bg-violet-50 p-3 dark:bg-violet-950/40">
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm font-semibold">Evening screen</p>
                <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                  30 mins no-scroll buffer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR PROGRAM WORKS SECTION */}
      <section
        className="relative overflow-hidden py-20 transition-colors
        bg-white text-slate-900 
        dark:bg-[#0b1220] dark:text-white"
      >
        {/* WAVE BACKGROUND */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-90">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-40"
            preserveAspectRatio="none"
          >
            <path
              className="transition-colors"
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
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center
                  bg-sky-200/40 dark:bg-sky-900/40 text-2xl"
                >
                  🍜
                </div>

                <div>
                  <div
                    className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md 
                    bg-white text-sky-900 
                    dark:bg-slate-800 dark:text-sky-200"
                  >
                    I love food too much to go on a diet
                  </div>

                  <p
                    className="mt-2 text-xs italic 
                    text-slate-600 dark:text-slate-300"
                  >
                    You can still enjoy the foods you love — you&apos;ll feel
                    satisfied after small amounts.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center
                  bg-sky-200/40 dark:bg-sky-900/40 text-2xl"
                >
                  📘
                </div>

                <div>
                  <div
                    className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md 
                    bg-white text-sky-900 
                    dark:bg-slate-800 dark:text-sky-200"
                  >
                    It’s too difficult to stay motivated
                  </div>

                  <p
                    className="mt-2 text-xs italic 
                    text-slate-600 dark:text-slate-300"
                  >
                    Our programme removes the mental pressure — the routine
                    guides you step-by-step.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center
                  bg-sky-200/40 dark:bg-sky-900/40 text-2xl"
                >
                  🧁
                </div>

                <div>
                  <div
                    className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md 
                    bg-white text-sky-900 
                    dark:bg-slate-800 dark:text-sky-200"
                  >
                    Why is this different from other weight programmes?
                  </div>

                  <p
                    className="mt-2 text-xs italic 
                    text-slate-600 dark:text-slate-300"
                  >
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
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center
                  bg-sky-200/40 dark:bg-sky-900/40 text-2xl"
                >
                  ⏱️
                </div>

                <div>
                  <div
                    className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md 
                    bg-white text-sky-900 
                    dark:bg-slate-800 dark:text-sky-200"
                  >
                    I don’t have time to exercise
                  </div>

                  <p
                    className="mt-2 text-xs italic 
                    text-slate-600 dark:text-slate-300"
                  >
                    Light walking 30 minutes a few times a week is enough to
                    begin.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center
                  bg-sky-200/40 dark:bg-sky-900/40 text-2xl"
                >
                  ⚖️
                </div>

                <div>
                  <div
                    className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md 
                    bg-white text-sky-900 
                    dark:bg-slate-800 dark:text-sky-200"
                  >
                    I’ve tried everything... nothing works
                  </div>

                  <p
                    className="mt-2 text-xs italic 
                    text-slate-600 dark:text-slate-300"
                  >
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
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="text-xl font-semibold text-light-primary md:text-2xl dark:text-slate-50">
              How Fityou works
            </h2>
            <p className="mt-2 text-sm text-light-primary dark:text-slate-300">
              Fityou is designed more like an onboarding process than a
              challenge — with health screening built in.
            </p>

            <div className="mt-5 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl bg-[#d9e9ff] border border-[#b2cffd] p-4 shadow-sm text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHO IT'S FOR + MINI INFOGRAPHIC */}
          <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-5 text-sm text-slate-800 shadow-sm dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
              WHO IT’S FOR
            </p>
            <p className="mt-2">
              Fityou is for adults who want structured, safe improvement — not
              extreme transformations.
            </p>

            <ul className="mt-4 space-y-2 text-xs">
              <li>✓ You want more structure, not noise</li>
              <li>✓ You’re okay with small, consistent steps</li>
              <li>✓ You’re willing to answer basic health questions</li>
            </ul>

            {/* Simple “safe zone” ring graphic */}
            <div className="mt-4 flex items-center gap-4">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-400/70 dark:border-emerald-500/60" />
                <div className="absolute inset-3 rounded-full border-4 border-sky-400/60 dark:border-sky-500/60" />
                <div className="absolute inset-6 rounded-full bg-white/90 text-[10px] font-semibold text-emerald-700 flex items-center justify-center shadow-sm dark:bg-slate-900 dark:text-emerald-200">
                  Safe
                  <br />
                  zone
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                The aim is not perfection — it&apos;s to keep you in a safe,
                sustainable zone where routines are realistic and risks are
                acknowledged early.
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-600 dark:text-slate-400">
              Fityou does not replace medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* BACKGROUND WAVE */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
          <svg
            className="absolute top-0 w-full opacity-70 dark:opacity-30"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e9f3ff"
              fillOpacity="1"
              d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,74.7C840,53,960,75,1080,112C1200,149,1320,203,1380,229.3L1440,256V0H0Z"
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 dark:text-sky-200 leading-snug">
              A proven result of{" "}
              <span className="font-extrabold text-sky-900 dark:text-white">
                21% weight loss
              </span>{" "}
              in 16 months. Curious as to how much you could lose?
            </h2>

            <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
              Take the quiz. It’s free.
            </p>

            <div className="mt-6 flex flex-col gap-4 w-full max-w-sm">
              <Link
                href="/quiz"
                className="w-full bg-sky-600 hover:bg-sky-700 transition text-white font-semibold text-sm py-3 rounded-md text-center shadow-lg dark:shadow-none"
              >
                Do I qualify for treatment?
              </Link>

              <Link
                href="/program"
                className="w-full border border-orange-200 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/20 
                hover:bg-orange-100 dark:hover:bg-orange-900/30 transition text-sky-900 dark:text-orange-200 
                font-semibold text-sm py-3 rounded-md text-center"
              >
                View our programme
              </Link>
            </div>
          </div>

          {/* RIGHT – CALCULATOR */}
          <div className="rounded-2xl p-8 shadow-xl backdrop-blur-xl bg-white dark:bg-slate-900/50 border border-sky-100 dark:border-slate-700">
            {/* WEIGHT DROPDOWN */}
            <div>
              <label className="text-sm font-medium text-sky-900 dark:text-sky-200">
                Your current weight
              </label>
              <div className="flex mt-1 gap-2">
                <select
                  id="currentWeight"
                  className="w-full border border-slate-300 dark:border-slate-600 rounded-md py-2 px-3 
                  text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                >
                  {Array.from({ length: 131 }).map((_, i) => (
                    <option key={i}>{`${70 + i} kg`}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* HEIGHT */}
            <div className="mt-4">
              <label className="text-sm font-medium text-sky-900 dark:text-sky-200">
                Your height
              </label>

              <div className="flex gap-2 mt-1">
                <select
                  id="heightFeet"
                  className="w-1/2 border border-slate-300 dark:border-slate-600 rounded-md py-2 px-3 
                  text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                >
                  {["4 ft", "5 ft", "6 ft", "7 ft"].map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>

                <select
                  id="heightInches"
                  className="w-1/2 border border-slate-300 dark:border-slate-600 rounded-md py-2 px-3 
                  text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
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
              className="mt-6 w-full bg-orange-100 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-700 
              hover:bg-orange-200 dark:hover:bg-orange-900/60 transition text-sky-900 dark:text-orange-200 
              font-semibold py-3 rounded-md text-sm"
            >
              Calculate
            </button>

            {/* RESULTS */}
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-sky-900 dark:text-sky-200">
                  Your weight in 6 months:
                </span>
                <span
                  id="sixMonthsResult"
                  className="w-12 h-9 rounded-md border border-orange-200 dark:border-orange-700 
                  flex items-center justify-center text-sky-900 dark:text-orange-200"
                >
                  ?
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sky-900 dark:text-sky-200">
                  Your weight in 16 months:
                </span>
                <span
                  id="sixteenMonthsResult"
                  className="w-12 h-9 rounded-md border border-orange-200 dark:border-orange-700 
                  flex items-center justify-center text-sky-900 dark:text-orange-200"
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
        <div className="mt-5 bg-[#d9e9ff] border border-[#b2cffd] p-6 md:p-8 shadow-sm text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                What the Fityou program focuses on
              </h2>
              <p className="mt-2 max-w-xl text-sm">
                Instead of chasing everything at once, we stack small,
                high-impact behaviours.
              </p>
            </div>

            <Link
              href="/program"
              className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-200 dark:border-sky-900 dark:bg-slate-800 dark:text-sky-300 dark:hover:bg-slate-700"
            >
              View sample week plan →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-[1.5fr,1fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="flex gap-3 rounded-2xl bg-white/60 border border-[#b2cffd] p-4 text-xs text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                  <p>{h}</p>
                </div>
              ))}
            </div>

            {/* MINI PROGRESS GRAPH CARD */}
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                PROGRESS PREVIEW
              </p>
              <p className="mt-1 text-sm font-semibold">Consistency curve</p>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                Example of how a steady, low-pressure routine can build up over
                a few weeks.
              </p>

              <div className="mt-3 flex h-24 items-end gap-2">
                {readinessTrends.map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="relative h-16 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                      <div
                        style={{ height: `${item.value}%` }}
                        className="absolute bottom-0 left-0 w-full rounded-xl bg-gradient-to-t from-sky-500 to-emerald-400"
                      />
                    </div>
                    <p className="mt-1 text-[10px] text-center text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
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
            <h2 className="text-xl font-semibold md:text-2xl text-light-primary dark:text-slate-50">
              Built for real lives, not perfect ones
            </h2>
            <p className="mt-2 max-w-xl text-sm text-light-primary dark:text-slate-300">
              Fityou is built for consistency, not perfection.
            </p>
          </div>

          <Link
            href="/pricing"
            className="text-xs font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
          >
            Check pricing →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-4 shadow-sm text-slate-800 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 opacity-30 blur-sm" />
              <p>“{t.text}”</p>
              <p className="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MEDICAL AWARENESS MATTERS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-6 shadow-sm text-slate-800 md:p-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
          <h2 className="text-xl font-semibold md:text-2xl">
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
                className="rounded-2xl bg-white/60 border border-[#b2cffd] p-5 text-sm text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
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
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
          <svg
            className="absolute top-0 w-full opacity-70 dark:opacity-30"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e9f3ff"
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
                  fillOpacity="0.6"
                />

                {/* Faded vertical lines */}
                <line
                  x1="90"
                  y1="40"
                  x2="90"
                  y2="340"
                  stroke="#e8f0f8"
                  strokeWidth="2"
                />
                <line
                  x1="170"
                  y1="40"
                  x2="170"
                  y2="340"
                  stroke="#e8f0f8"
                  strokeWidth="2"
                />

                {/* ORANGE CURVE */}
                <path
                  d="M20 80 C 80 140, 140 180, 220 240"
                  stroke="#edc7a6"
                  strokeWidth="3"
                  fill="none"
                />

                {/* BLUE CURVE */}
                <path
                  d="M20 80 C 60 200, 120 260, 220 310"
                  stroke="#0d4f8b"
                  strokeWidth="4"
                  fill="none"
                />

                {/* Data points */}
                <circle cx="20" cy="80" r="5" fill="#0d4f8b" />
                <circle cx="120" cy="220" r="5" fill="#0d4f8b" />
                <circle cx="220" cy="310" r="5" fill="#0d4f8b" />

                {/* Bottom labels */}
                <text x="10" y="360" fontSize="12" fill="#60738c">
                  Day 1
                </text>
                <text x="95" y="360" fontSize="12" fill="#60738c">
                  Month 6
                </text>
                <text x="185" y="360" fontSize="12" fill="#60738c">
                  Month 16
                </text>
              </svg>

              {/* TOP LABEL */}
              <div className="absolute left-[75px] top-[115px] w-44 px-3 py-2 bg-[#0d4f8b] text-white text-xs font-bold rounded-md shadow-lg">
                10% body weight
                <br />
                in 6 months²
                <div className="absolute left-6 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-[#0d4f8b] border-l-transparent border-r-transparent" />
              </div>

              {/* BOTTOM LABEL */}
              <div className="absolute left-[90px] top-[260px] w-44 px-3 py-2 bg-[#0d4f8b] text-white text-xs font-bold rounded-md shadow-lg">
                21% body weight
                <br />
                in 16 months²
                <div className="absolute left-6 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-[#0d4f8b] border-l-transparent border-r-transparent" />
              </div>
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 dark:text-white leading-snug">
              Clinical trials show that with
              <br />
              our approach, you lose
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-sky-900 dark:text-white font-extrabold">
                  5 times more weight
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 dark:bg-orange-500/40 -z-0 rounded-full" />
              </span>
              <br />
              than with diet &amp; exercise alone.
            </h2>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Published clinical trial (2022): 2,539 adults over 72 weeks,
              comparing our programme vs placebo.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT FITYOU IS NOT */}
      <section className="mx-auto max-w-6xl px-4 mt-2 pb-20">
        <div className="bg-[#d9e9ff] border border-[#b2cffd] p-8 shadow-sm text-slate-800 md:p-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
          <h2 className="text-xl font-semibold md:text-2xl">
            What Fityou is{" "}
            <span className="text-sky-700 dark:text-sky-300">not</span>
          </h2>

          <ul className="mt-4 space-y-3 text-sm">
            <li>✘ Not medical treatment</li>
            <li>✘ Not extreme dieting</li>
            <li>✘ Not guaranteed rapid weight loss</li>
            <li>✘ Not medication or supplements</li>
            <li>✘ Not ignoring your medical context</li>
            <li>✘ Not pushing beyond safe limits</li>
          </ul>

          <p className="mt-4 text-xs text-slate-600 dark:text-slate-400">
            Fityou complements professional care — not replaces it.
          </p>
        </div>
      </section>

      {/* WEEKLY STRUCTURE */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-xl font-semibold text-light-primary md:text-2xl dark:text-slate-50">
          Your weekly structure inside Fityou
        </h2>

        <p className="mt-2 max-w-xl text-sm text-light-primary dark:text-slate-300">
          Each weekday has a clear, manageable purpose.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            {
              day: "Mon",
              focus: "Sleep reset",
              color: "bg-indigo-50 dark:bg-indigo-950/40",
            },
            {
              day: "Tue",
              focus: "Light movement",
              color: "bg-sky-50 dark:bg-sky-950/40",
            },
            {
              day: "Wed",
              focus: "Meal rhythm",
              color: "bg-emerald-50 dark:bg-emerald-950/40",
            },
            {
              day: "Thu",
              focus: "Evening structure",
              color: "bg-yellow-50 dark:bg-yellow-950/30",
            },
            {
              day: "Fri",
              focus: "Check-in & reflection",
              color: "bg-orange-50 dark:bg-orange-950/30",
            },
            {
              day: "Sat",
              focus: "Recovery routine",
              color: "bg-slate-100 dark:bg-slate-800",
            },
            {
              day: "Sun",
              focus: "Prep + reset",
              color: "bg-purple-50 dark:bg-purple-950/40",
            },
          ].map((w) => (
            <div
              key={w.day}
              className={`rounded-2xl border border-[#b2cffd] p-4 text-xs dark:border-slate-700 ${w.color}`}
            >
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                {w.day}
              </p>
              <p className="mt-1 text-slate-700 dark:text-slate-200">
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
              className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-6 text-sm text-slate-800 shadow-sm dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                {box.title}
              </h3>
              <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                {box.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-8 text-slate-800 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
          <h2 className="text-xl font-semibold md:text-2xl">
            The approach is guided by behavioural science
          </h2>

          <p className="mt-2 max-w-xl text-sm">
            Fityou follows principles from habit formation, circadian rhythm,
            and appetite research.
          </p>

          <ul className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-400">
            <li>• Tiny habits &amp; low-friction behavior change</li>
            <li>• Consistency over intensity</li>
            <li>• Sleep &amp; circadian alignment</li>
            <li>• Reflective check-ins, not guilt cycles</li>
          </ul>
        </div>
      </section>

      {/* SAFETY BOUNDARIES */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-red-200 bg-red-50/70 p-8 text-slate-800 shadow-sm dark:border-red-900 dark:bg-red-950/30 dark:text-slate-200">
          <h2 className="text-xl font-semibold md:text-2xl">
            Safety boundaries: when Fityou is not recommended
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-light-primary dark:text-red-200">
            <li>• Pregnancy or immediate postpartum recovery</li>
            <li>• Eating disorders or disordered patterns</li>
            <li>• Medical emergencies or heart issues</li>
            <li>• BMI below medically recommended threshold</li>
            <li>• Chest pain, fainting, dizziness</li>
            <li>• Doctor-advised restrictions</li>
          </ul>

          <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">
            The quiz screens for these and recommends medical guidance.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold text-light-primary md:text-3xl dark:text-slate-50">
          Ready to see if Fityou is a safe fit for you?
        </h2>

        <p className="mt-2 text-sm text-light-primary dark:text-slate-300">
          Start with the eligibility quiz — no pressure, just clarity.
        </p>

        <Link
          href="/quiz"
          className="mt-6 inline-block rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/40 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          Begin the free check →
        </Link>
      </section>
    </main>
  );
}
