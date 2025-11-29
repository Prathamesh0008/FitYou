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
    <div className="min-h-screen bg-white text-[#4A4A4A] font-laila">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          Frequently asked questions
        </h1>

        <p className="mt-3 max-w-2xl text-sm md:text-base text-[#4A4A4A]">
          A quick overview of what Fityou is, how it works, and how it keeps
          safety and realism at the center of the experience.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-8 md:grid-cols-[1.4fr,0.8fr] items-start">

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm shadow-sm"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="font-semibold text-[#1A1A1A]">
                    {item.q}
                  </span>

                  <span className="text-xl text-[#9CA3AF]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2 text-xs text-[#4A4A4A]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Side Info Card */}
        <div className="rounded-3xl border border-[#D6E4FF] bg-[#EAF3FF] p-6 text-sm shadow-sm">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Still not sure if Fityou fits you?
          </h2>

          <p className="mt-2 text-xs text-[#4A4A4A]">
            The easiest starting point is the free eligibility quiz. It doesn’t
            commit you to a plan — it simply gives you a risk-aware snapshot of
            where you stand.
          </p>

          <p className="mt-3 text-xs text-[#4A4A4A]">
            If any of your answers suggest red flags, you’ll be nudged toward
            talking to a professional first, instead of being pushed into a
            routine that might be unsafe.
          </p>
        </div>

      </section>

    </div>
  );
}
