"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Fityou a medical program or weight loss treatment?",
    a: "No. Fityou is a structured habit and routine framework. It never replaces personal medical advice, diagnosis, or treatment.",
  },
  {
    q: "Why do I need to take a quiz before starting?",
    a: "The quiz screens for basic risk markers like recent medical events, symptoms, and certain conditions. If your answers suggest higher risk, we recommend talking to a professional before starting any structured routine.",
  },
  {
    q: "Do I have to follow intense workouts or strict diets?",
    a: "No. The program is designed around low-friction actions you can integrate with work and real life. No extreme workouts or crash diets.",
  },
  {
    q: "What if I already have a doctor or nutritionist?",
    a: "Great. Fityou can sit alongside their recommendations as a structure and reflection tool, as long as you follow their guidance first whenever there’s a conflict.",
  },
  {
    q: "Can teenagers use Fityou?",
    a: "Fityou is primarily designed for adults. Anyone under 18 should use structured health programs only under the guidance of a parent or medical professional.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen transition-colors">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
          Frequently asked questions
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-light-primary dark:text-slate-300">
          A quick overview of what Fityou is, how it works, and how it keeps
          safety and realism at the center of the experience.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-8 md:grid-cols-[1.4fr,0.8fr] items-start">
        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="font-semibold  dark:text-slate-50">
                    {item.q}
                  </span>
                  <span className="text-xl text-slate-400 dark:text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Side card */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-light-primary dark:text-slate-50">
            Still not sure if Fityou fits you?
          </h2>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
            The easiest starting point is the free eligibility quiz. It doesn’t
            commit you to a plan — it just gives you a risk-aware snapshot of
            where you stand.
          </p>
          <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
            If any of your answers suggest red flags, you’ll be nudged toward
            talking to a professional first, instead of being pushed into a
            routine that might be unsafe.
          </p>
        </div>
      </section>
    </div>
  );
}
