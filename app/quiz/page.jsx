"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipboardList, HeartPulse, Activity, ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    id: "basics",
    title: "Basic details",
    icon: ClipboardList,
    description: "We start with simple inputs to estimate readiness and baseline safety.",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "Years" },
      { name: "height", label: "Height (cm)", type: "number", placeholder: "e.g. 168" },
      { name: "weight", label: "Weight (kg)", type: "number", placeholder: "e.g. 72" },
    ],
  },
  {
    id: "health",
    title: "Recent health",
    icon: HeartPulse,
    description: "These questions help us filter any red flags related to activity risk.",
    fields: [
      {
        name: "recentEvents",
        label: "Any recent major medical events (surgery, heart issues, etc.)?",
        type: "textarea",
      },
      {
        name: "symptoms",
        label: "Do you currently experience chest pain, fainting, or dizziness with activity?",
        type: "select",
        options: ["No", "Sometimes", "Often"],
      },
    ],
  },
  {
    id: "context",
    title: "Lifestyle & context",
    icon: Activity,
    description: "Your habits give us a good picture of your daily load and stress.",
    fields: [
      {
        name: "sleep",
        label: "Average sleep per night",
        type: "select",
        options: ["Less than 5 hours", "5–7 hours", "7–9 hours", "More than 9 hours"],
      },
      {
        name: "movement",
        label: "Current weekly movement level",
        type: "select",
        options: ["Very low", "Some walking", "Active most days"],
      },
    ],
  },
];

export default function QuizPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState({});
  const router = useRouter();

  const step = steps[stepIndex];

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      const params = new URLSearchParams();
      if (form.height && form.weight) {
        params.set("height", String(form.height));
        params.set("weight", String(form.weight));
      }
      router.push(`/quiz/result?${params.toString()}`);
    }
  };

  const back = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  return (
    <div className="min-h-screen transition-colors pb-24">

      {/* TOP INTRO SECTION */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
          Eligibility Quiz
        </p>
        <h1 className="mt-2 text-3xl font-bold text-light-primary dark:text-slate-50">
          Check if Fityou is a safe starting point.
        </h1>
        <p className="mt-3 text-sm text-light-primary dark:text-slate-300 max-w-2xl">
          These questions help us understand whether structured routines are likely safe for you,
          or if you may benefit from consulting a medical professional first.
        </p>
      </section>

      {/* PROGRESS BAR */}
      <section className="mx-auto max-w-3xl px-4 pb-4">
        <div className="relative w-full h-2 bg-slate-200/60 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-sky-500 dark:bg-sky-400 transition-all duration-500"
            style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-light-primary dark:text-slate-400">
          Step {stepIndex + 1} of {steps.length}
        </p>
      </section>

      {/* MAIN CARD */}
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">

          {/* ICON + TITLE */}
          <div className="flex items-center gap-3">
            <step.icon className="w-6 h-6 text-sky-600 dark:text-sky-300" />
            <h2 className="text-lg font-semibold text-light-primary dark:text-slate-50">
              {step.title}
            </h2>
          </div>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            {step.description}
          </p>

          <div className="mt-6 space-y-5">
            {step.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                  {field.label}
                </label>

                {field.type === "textarea" && (
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs
                    text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700
                    dark:bg-slate-800 dark:text-slate-50"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {field.type === "select" && (
                  <select
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs
                    text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700
                    dark:bg-slate-800 dark:text-slate-50"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}

                {field.type === "number" && (
                  <input
                    type="number"
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs
                    text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700
                    dark:bg-slate-800 dark:text-slate-50"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={stepIndex === 0}
              className="flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-xs 
              font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 
              dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ChevronLeft size={14} /> Back
            </button>

            <button
              type="button"
              onClick={next}
              className="flex items-center gap-1 rounded-full bg-sky-600 px-5 py-2 text-xs 
              font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {stepIndex === steps.length - 1 ? "View results" : "Next"}
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <p className="mt-5 text-[11px] text-slate-500 dark:text-slate-400">
          If you're unsure about any question, answer conservatively.  
          When in doubt, always prioritise safety.
        </p>
      </section>

      {/* STICKY SAFETY BANNER */}
      <div className="fixed bottom-0 left-0 w-full bg-sky-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-4 py-3 text-center text-[11px] text-slate-600 dark:text-slate-300 shadow-lg">
        This quiz is not a medical diagnosis. If you feel unwell, seek professional help.
      </div>

    </div>
  );
}
