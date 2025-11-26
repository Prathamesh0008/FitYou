"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: "basics",
    title: "Basic details",
    fields: [
      { name: "age", label: "Age", type: "number", placeholder: "Years" },
      { name: "height", label: "Height (cm)", type: "number", placeholder: "e.g. 168" },
      { name: "weight", label: "Weight (kg)", type: "number", placeholder: "e.g. 72" },
    ],
  },
  {
    id: "health",
    title: "Recent health",
    fields: [
      {
        name: "recentEvents",
        label: "Any recent major medical events (surgery, heart issues, etc.)?",
        type: "textarea",
      },
      {
        name: "symptoms",
        label: "Do you currently experience chest pain, fainting, or unexplained dizziness with activity?",
        type: "select",
        options: ["No", "Sometimes", "Often"],
      },
    ],
  },
  {
    id: "context",
    title: "Lifestyle & context",
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
      // For now just push to results with query string
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
    <div className="min-h-screen transition-colors">
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
          Eligibility Quiz
        </p>
        <h1 className="mt-2 text-3xl font-bold text-light-primary dark:text-slate-50">
          Check if Fityou is a safe starting point.
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          This is not a diagnosis. It’s a basic safety filter to understand if
          structured routines are likely safe for you right now, or if you
          should talk to a professional first.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <p>
            Step {stepIndex + 1} of {steps.length}
          </p>
          <div className="flex gap-1">
            {steps.map((s, idx) => (
              <span
                key={s.id}
                className={`h-1.5 w-8 rounded-full ${
                  idx <= stepIndex
                    ? "bg-sky-500"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-light-primary dark:text-slate-50">
            {step.title}
          </h2>

          <div className="mt-4 space-y-4">
            {step.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                  {field.label}
                </label>

                {field.type === "textarea" && (
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {field.type === "select" && (
                  <select
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                )}

                {field.type === "number" && (
                  <input
                    type="number"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
                    placeholder={field.placeholder}
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={stepIndex === 0}
              className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Back
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-sky-600 px-5 py-2 text-xs font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {stepIndex === steps.length - 1 ? "View results" : "Next"}
            </button>
          </div>
        </div>

        <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
          If you are unsure about any question, answer conservatively. If in
          doubt, favour safety and talk to a professional first.
        </p>
      </section>
    </div>
  );
}
