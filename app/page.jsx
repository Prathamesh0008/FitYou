"use client";
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

export default function HomePage() {
  return (
    <div className="min-h-screen transition-colors">

      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 md:flex-row md:items-center md:pt-20">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-3 py-1
            text-xs font-medium text-light-primary dark:border-sky-900 dark:bg-sky-900/30 dark:text-sky-300">
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
            then unlocks structured weekly routines that are realistic and sustainable.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/quiz"
              className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 
              dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Start eligibility quiz
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 
              dark:text-slate-200 dark:hover:text-slate-50"
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

        {/* SNAPSHOT CARD */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-5 shadow-xl border border-slate-200 
          dark:border-slate-800 dark:bg-slate-900">

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                  YOUR SNAPSHOT
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Today's readiness
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 
              dark:bg-emerald-900/40 dark:text-emerald-300">
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
                  className="rounded-2xl bg-[#d9e9ff] border border-[#b2cffd] p-3
                    dark:bg-slate-800 dark:border-slate-700"
                >
                  <p className="text-[11px] text-slate-600 dark:text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {item.value}
                  </p>
                  <p className={`mt-1 text-[11px] ${item.color}`}>
                    {item.status}
                  </p>
                </div>
              ))}
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
              Fityou is designed more like an onboarding process than a challenge —
              with health screening built in.
            </p>

            <div className="mt-5 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl bg-[#d9e9ff] border border-[#b2cffd] p-4 shadow-sm
                    text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHO IT'S FOR */}
          <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-5 text-sm 
            text-slate-800 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
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

            <p className="mt-4 text-[11px] text-slate-600 dark:text-slate-400">
              Fityou does not replace medical advice.
            </p>
          </div>

        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-6 md:p-8 shadow-sm
          text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                What the Fityou program focuses on
              </h2>
              <p className="mt-2 max-w-xl text-sm">
                Instead of chasing everything at once, we stack small, high-impact behaviours.
              </p>
            </div>

            <Link
              href="/program"
              className="rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-xs 
                font-medium text-sky-700 hover:bg-sky-200
                dark:border-sky-900 dark:bg-slate-800 dark:text-sky-300 dark:hover:bg-slate-700"
            >
              View sample week plan →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h}
                className="flex gap-3 rounded-2xl bg-white/60 border border-[#b2cffd] p-4 text-xs
                  text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <p>{h}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between">
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
            className="text-xs font-medium text-sky-700 hover:text-sky-900 
              dark:text-sky-300 dark:hover:text-sky-200"
          >
            Check pricing →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-4 shadow-sm
                text-slate-800 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
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
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-6 md:p-10 shadow-sm
          text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">

          <h2 className="text-xl md:text-2xl font-semibold">
            Why medical awareness matters before starting any weight program
          </h2>

          <p className="mt-3 text-sm max-w-3xl">
            Many people begin weight journeys without knowing their risk zones.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
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
                className="rounded-2xl bg-white/60 border border-[#b2cffd] p-5 text-sm
                  text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
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

      {/* WHAT FITYOU IS NOT */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-8 md:p-10 shadow-sm
          text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">

          <h2 className="text-xl md:text-2xl font-semibold">
            What Fityou is <span className="text-sky-700 dark:text-sky-300">not</span>
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

        <h2 className="text-xl md:text-2xl font-semibold text-light-primary dark:text-slate-50">
          Your weekly structure inside Fityou
        </h2>

        <p className="mt-2 text-sm text-light-primary max-w-xl dark:text-slate-300">
          Each weekday has a clear, manageable purpose.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { day: "Mon", focus: "Sleep reset", color: "bg-indigo-50 dark:bg-indigo-950/40" },
            { day: "Tue", focus: "Light movement", color: "bg-sky-50 dark:bg-sky-950/40" },
            { day: "Wed", focus: "Meal rhythm", color: "bg-emerald-50 dark:bg-emerald-950/40" },
            { day: "Thu", focus: "Evening structure", color: "bg-yellow-50 dark:bg-yellow-950/30" },
            { day: "Fri", focus: "Check-in & reflection", color: "bg-orange-50 dark:bg-orange-950/30" },
            { day: "Sat", focus: "Recovery routine", color: "bg-slate-100 dark:bg-slate-800" },
            { day: "Sun", focus: "Prep + reset", color: "bg-purple-50 dark:bg-purple-950/40" },
          ].map((w) => (
            <div
              key={w.day}
              className={`rounded-2xl p-4 border border-[#b2cffd] text-xs 
                dark:border-slate-700 ${w.color}`}
            >
              <p className="font-semibold text-slate-900 dark:text-slate-50">{w.day}</p>
              <p className="mt-1 text-slate-700 dark:text-slate-200">{w.focus}</p>
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
              className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-6 shadow-sm
                text-sm text-slate-800 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
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
        <div className="rounded-3xl bg-[#d9e9ff] border border-[#b2cffd] p-8 shadow-sm
          text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">

          <h2 className="text-xl md:text-2xl font-semibold">
            The approach is guided by behavioural science
          </h2>

          <p className="mt-2 text-sm max-w-xl">
            Fityou follows principles from habit formation, circadian rhythm, and appetite research.
          </p>

          <ul className="mt-4 text-xs text-slate-700 space-y-2 dark:text-slate-400">
            <li>• Tiny habits & low-friction behavior change</li>
            <li>• Consistency over intensity</li>
            <li>• Sleep & circadian alignment</li>
            <li>• Reflective check-ins, not guilt cycles</li>
          </ul>

        </div>
      </section>

      {/* SAFETY BOUNDARIES */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-red-50/70 border border-red-200 p-8 shadow-sm
          text-slate-800 dark:bg-red-950/30 dark:border-red-900 dark:text-slate-200">

          <h2 className="text-xl md:text-2xl font-semibold">
            Safety boundaries: when Fityou is not recommended
          </h2>

          <ul className="mt-4 text-sm text-red-800 dark:text-red-200 space-y-2">
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

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
          Ready to see if Fityou is a safe fit for you?
        </h2>

        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Start with the eligibility quiz — no pressure, just clarity.
        </p>

        <Link
          href="/quiz"
          className="mt-6 inline-block rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white
            hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          Begin the free check →
        </Link>

      </section>
    </div>
  );
}
