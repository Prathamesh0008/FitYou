"use client";

import Link from "next/link";

const pillars = [
  {
    title: "Screening first, action second",
    text: "You start with a short eligibility quiz that surfaces basic medical and lifestyle risks before you dive into routines.",
  },
  {
    title: "Weekly focus, not daily chaos",
    text: "Each week highlights 1–2 key levers (sleep, movement, timing, appetite) so you’re never trying to fix everything at once.",
  },
  {
    title: "Gentle, repeatable routines",
    text: "The program is built around realistic actions that can live next to work, family, and irregular schedules.",
  },
];

const weeklyStructure = [
  { day: "Monday", focus: "Sleep reset", detail: "Bedtime window + wake time anchor." },
  { day: "Tuesday", focus: "Light movement", detail: "Low-impact movement blocks you can actually keep." },
  { day: "Wednesday", focus: "Meal rhythm", detail: "Spacing, timing, and simple guardrails." },
  { day: "Thursday", focus: "Evening structure", detail: "Shut-down routine to avoid late-night spirals." },
  { day: "Friday", focus: "Check-in + reflection", detail: "What felt easy, what felt heavy, what to adjust." },
  { day: "Saturday", focus: "Recovery", detail: "Deload, gentle mobility, and mental reset." },
  { day: "Sunday", focus: "Prep + reset", detail: "Plan the next week without perfection pressure." },
];

const tracks = [
  {
    label: "Track A · Steady",
    level: "For beginners or restarts",
    text: "Low-friction routines focused on sleep rhythm, steps, and basic food timing.",
    bullets: ["10–15 min movement blocks", "Simple meal timing anchors", "Screen-time limits before bed"],
  },
  {
    label: "Track B · Structured",
    level: "For people already moving",
    text: "Adds slightly higher step goals, more structure on meals, and deeper reflections.",
    bullets: ["Goal-based step ranges", "Refined timing around key meals", "Weekly progress review prompts"],
  },
  {
    label: "Track C · Focused",
    level: "For stable, low-risk profiles",
    text: "Focus on optimization without crash behavior, still within clear safety boundaries.",
    bullets: ["Layered habits (stacking)", "Energy + hunger pattern tracking", "Tighter feedback loops each week"],
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen transition-colors">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-light-primary dark:text-sky-300">
              Program Overview
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
              A weekly structure that respects your health limits.
            </h1>
            <p className="mt-3 text-sm md:text-base text-light-primary dark:text-slate-300">
              Fityou doesn’t throw you into a “challenge.” It gives you a clear,
              medically-aware sequence of weeks that you can actually live with.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Take the eligibility quiz
              </Link>
              <span className="text-xs text-light-primary dark:text-slate-400">
                No payment needed to view your starting point.
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Inside a sample week
            </p>
            <ul className="mt-3 space-y-3 text-xs text-slate-700 dark:text-slate-200">
              <li>• 5–20 minute actions, not 90-minute punishments</li>
              <li>• Focus on sleep, movement, appetite, and timing</li>
              <li>• Written prompts to catch early warning signs</li>
              <li>• Hard “no-go” zones for high-risk situations</li>
            </ul>
            <div className="mt-4 rounded-2xl bg-sky-50 p-3 text-[11px] text-sky-800 dark:bg-sky-900/30 dark:text-sky-200">
              Fityou is built to complement professional care, not replace it.
            </div>
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-sm font-semibold text-light-primary dark:text-slate-50">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly structure timeline */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-light-primary dark:text-slate-50">
              Weekly rhythm, clearly defined.
            </h2>
            <p className="mt-3 text-sm text-light-primary dark:text-slate-300">
              Your week is broken into small focus blocks so your brain knows
              exactly what “success” means on each day.
            </p>
          </div>

          <div className="flex-1 grid gap-4 md:grid-cols-2">
            {weeklyStructure.map((d) => (
              <div
                key={d.day}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {d.day}
                </p>
                <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                  {d.focus}
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white  p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold  dark:text-slate-50">
                Tracks that match your current capacity.
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Fityou adjusts intensity based on your risk profile and life
                bandwidth — not on how “motivated” you feel on a random Sunday.
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              You’re never locked into a track forever. As your situation changes,
              your track can be adjusted.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tracks.map((t) => (
              <div
                key={t.label}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                  {t.label}
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{t.level}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-200">{t.text}</p>
                <ul className="mt-3 space-y-1 text-slate-600 dark:text-slate-300">
                  {t.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
            <p className="text-slate-500 dark:text-slate-400">
              Fityou is not a medical tool. Any concerns are redirected toward professional advice.
            </p>
            <Link
              href="/pricing"
              className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-100 dark:border-sky-900 dark:bg-sky-900/30 dark:text-sky-300"
            >
              See pricing & access options →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
