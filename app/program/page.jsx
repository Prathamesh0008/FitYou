// app/program/page.jsx
import Link from "next/link";

export default function ProgramPage() {
  return (
    <div className="min-h-screen transition-colors">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
              FITYOU PROGRAM
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
              A weekly structure that fits real life, not a perfect schedule.
            </h1>
            <p className="mt-4 text-sm md:text-[15px] text-slate-600 dark:text-slate-300 max-w-xl">
              Fityou is designed for people who want to improve their weight and
              energy without extreme diets or all-or-nothing workout phases.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Take the eligibility quiz
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
              >
                View pricing →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm text-sm dark:bg-slate-900 dark:border-slate-800">
            <h2 className="text-sm font-semibold text-light-primary dark:text-slate-50">
              What you get inside Fityou
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li>• A weekly focus you can remember</li>
              <li>• Small daily actions instead of huge checklists</li>
              <li>• Gentle tracking: sleep, movement, timing, cravings</li>
              <li>• Clear signals when you should slow down</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WEEKLY STRUCTURE GRID */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold text-light-primary dark:text-slate-50">
            Your week inside Fityou
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Each day has a single priority, so you’re never guessing what to
            focus on — even when life gets messy.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4 text-xs">
            {[
              { day: "Mon", focus: "Sleep reset", detail: "Set a realistic bedtime window and wake anchor." },
              { day: "Tue", focus: "Light movement", detail: "Short walks, mobility or low-impact activity." },
              { day: "Wed", focus: "Meal rhythm", detail: "Stabilise meal timing instead of obsessing over perfection." },
              { day: "Thu", focus: "Evening structure", detail: "Reduce chaotic late-night scrolling and snacking." },
              { day: "Fri", focus: "Check-in & reflection", detail: "Note what helped and what hurt your energy." },
              { day: "Sat", focus: "Recovery routine", detail: "De-stress with low-effort recovery, not all-out training." },
              { day: "Sun", focus: "Prep + reset", detail: "Light planning so Monday doesn’t feel like a shock." },
            ].map((w) => (
              <div
                key={w.day}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-4 dark:bg-slate-800 dark:border-slate-700"
              >
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {w.day}
                </p>
                <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                  {w.focus}
                </p>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                  {w.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-lg md:text-xl font-semibold text-light-primary dark:text-slate-50">
            What’s actually inside the program
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm">
            {[
              {
                title: "Guided weekly themes",
                text: "You’re not hit with 20 new habits at once. Each theme builds on the last.",
              },
              {
                title: "Low-friction actions",
                text: "Actions that you can complete even on bad days, so you keep momentum.",
              },
              {
                title: "Simple tracking views",
                text: "A quick view of sleep, movement and timing trends over weeks — not minute-by-minute perfection.",
              },
              {
                title: "Built-in pause points",
                text: "Prompts that remind you to slow down or get help when your inputs look worrying.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-4 dark:bg-slate-800 dark:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-light-primary dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-sky-50/80 border border-sky-200 p-6 text-sm text-slate-700 dark:bg-sky-900/30 dark:border-sky-800 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
            NOT A “PERFECT DAY” APP
          </p>
          <p className="mt-2 text-xs">
            Fityou is designed for missed workouts, late nights, stressful weeks
            and imperfect humans. The structure bends; it doesn’t break.
          </p>
          <Link
            href="/faq"
            className="mt-4 inline-flex text-xs font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
          >
            Read FAQs about the program →
          </Link>
        </div>
      </section>

      {/* SAFETY NOTE + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-lg md:text-xl font-semibold text-light-primary dark:text-slate-50">
            Safety boundaries built into the experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Some people should not start a weight-focused routine without
            professional clearance. Fityou’s quiz is designed to surface some of
            those situations.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Recent serious medical events</li>
            <li>• Pregnancy or immediate postpartum</li>
            <li>• History of eating disorders</li>
            <li>• Unexplained chest pain or fainting</li>
          </ul>
          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
            If your inputs suggest higher risk, Fityou recommends talking to a
            doctor instead of continuing into the program structure.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 text-slate-50 p-6 md:p-8 flex flex-col justify-between dark:bg-slate-950">
          <div>
            <h2 className="text-lg font-semibold">Start with clarity, not pressure.</h2>
            <p className="mt-2 text-sm text-slate-200">
              Take the free eligibility quiz. If it suggests you should pause
              and seek medical advice, that’s a win — you just avoided the wrong
              kind of program.
            </p>
          </div>
          <Link
            href="/quiz"
            className="mt-5 inline-block rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
          >
            Begin the free check →
          </Link>
        </div>
      </section>
    </div>
  );
}
