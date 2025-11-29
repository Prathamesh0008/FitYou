"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";

import {
  ClipboardList,
  HeartPulse,
  Activity,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const doctorAvatar = "/doctor/doctor.png"; // 👉 Add any doctor image inside /public/doctor/

const steps = [
  {
    id: "basics",
    title: "Basic details",
    icon: ClipboardList,
    doctorMessage:
      "Before I guide you safely, I need a few basic details. Could you share these with me?",
    fields: [
      {
        name: "age",
        label: "How old are you?",
        type: "number",
        placeholder: "Enter your age",
        doctorHint: "Your age helps me understand your baseline safely.",
      },
      {
        name: "height",
        label: "What is your height (cm)?",
        type: "number",
        placeholder: "e.g., 168",
        doctorHint: "This helps me calculate your BMI accurately.",
      },
      {
        name: "weight",
        label: "What is your weight (kg)?",
        type: "number",
        placeholder: "e.g., 72",
        doctorHint: "Knowing this helps me assess safe limits.",
      },
    ],
  },
  {
    id: "health",
    title: "Recent health",
    icon: HeartPulse,
    doctorMessage:
      "Thanks! Now a couple of important health-related questions. This helps me look for red flags.",
    fields: [
      {
        name: "recentEvents",
        label: "Any recent medical events?",
        type: "textarea",
        doctorHint: "Even small procedures matter — feel free to describe briefly.",
      },
      {
        name: "symptoms",
        label: "Do you experience chest pain / dizziness?",
        type: "select",
        options: ["No", "Sometimes", "Often"],
        doctorHint:
          "These symptoms are important to assess safe activity levels.",
      },
    ],
  },
  {
    id: "context",
    title: "Lifestyle & context",
    icon: Activity,
    doctorMessage:
      "Great! Now just a little about your day-to-day lifestyle so I can personalise recommendations.",
    fields: [
      {
        name: "sleep",
        label: "How much do you sleep?",
        type: "select",
        options: ["<5 hours", "5–7 hours", "7–9 hours", "9+ hours"],
        doctorHint:
          "Sleep affects appetite, hormones, recovery — everything!",
      },
      {
        name: "movement",
        label: "Your weekly activity level?",
        type: "select",
        options: ["Very low", "Some walking", "Active most days"],
        doctorHint:
          "No judgement — this just helps me set safe expectations.",
      },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState({});
  const [marathonAnim, setMarathonAnim] = useState(null);

  useEffect(() => {
    fetch("/lottie/Marathon.json")
      .then((res) => res.json())
      .then((data) => setMarathonAnim(data));
  }, []);

  const step = steps[stepIndex];
  const progress = (stepIndex + 1) / steps.length;
  const percent = Math.round(progress * 100);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      const params = new URLSearchParams();
      if (form.height && form.weight) {
        params.set("height", form.height);
        params.set("weight", form.weight);
      }
      router.push(`/quiz/result?${params.toString()}`);
    }
  };

  const back = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#1A1A1A] font-laila pb-24">

      {/* HEADER */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3A86FF]">
          Talking to your Fityou doctor
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Let’s begin your safe-start consultation.
        </h1>
      </section>

      {/* PROGRESS BAR + RUNNER */}
      <section className="mx-auto max-w-3xl mt-5 px-4 pb-10">
        <div className="relative w-full">
          <div
            className="absolute top-[2px] text-[10px] font-bold text-white px-2 py-[1px] bg-[#3A86FF] rounded-full transition-all duration-500 z-30"
            style={{ left: `calc(${percent}% - 18px)` }}
          >
            {percent}%
          </div>

          {/* Runner */}
          <div
            className="absolute -top-12 h-20 w-20 transition-all duration-500 z-20"
            style={{ left: `calc(${percent}% - 32px)` }}
          >
            {marathonAnim && (
              <Lottie
                animationData={marathonAnim}
                loop
                style={{ height: "70px", width: "70px" }}
              />
            )}
          </div>

          {/* Track */}
          <div className="relative w-full h-4 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#3A86FF] transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p className="mt-3 text-xs text-[#4A4A4A] text-right">
            Step {stepIndex + 1} of {steps.length}
          </p>
        </div>
      </section>

      {/* DOCTOR CHAT UI */}
      <section className="mx-auto max-w-3xl px-4 pb-16">

        {/* Doctor bubble */}
        <div className="flex items-start gap-3 mb-6">
          <img
            src={doctorAvatar}
            alt="doctor"
            className="h-10 w-10 rounded-full border"
          />
          <div className="bg-white px-4 py-3 rounded-2xl shadow-md text-xs border border-[#E5E7EB] max-w-[80%]">
            {step.doctorMessage}
          </div>
        </div>

        {/* FORM CARD */}
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-md">

          <div className="flex items-center gap-3 mb-3">
            <step.icon className="w-6 h-6 text-[#3A86FF]" />
            <h2 className="text-lg font-semibold">{step.title}</h2>
          </div>

          {/* FIELDS */}
          <div className="space-y-6">
            {step.fields.map((field) => (
              <div key={field.name}>

                {/* Label */}
                <p className="text-xs font-medium text-[#0D4F8B] mb-1">
                  {field.label}
                </p>

                {/* Doctor hint */}
                <p className="text-[10px] text-[#6B7280] mb-2 italic">
                  {field.doctorHint}
                </p>

                {/* Input */}
                {field.type === "textarea" && (
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-[#D6DFF5] bg-[#F8FAFF] px-3 py-2 text-xs shadow-inner"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {field.type === "select" && (
                  <select
                    className="w-full rounded-xl border border-[#D6DFF5] bg-[#F8FAFF] px-3 py-2 text-xs shadow-inner"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Choose an option</option>
                    {field.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                )}

                {field.type === "number" && (
                  <input
                    type="number"
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-[#D6DFF5] bg-[#F8FAFF] px-3 py-2 text-xs shadow-inner"
                    value={form[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {/* USER REPLY BUBBLE */}
                {form[field.name] && (
                  <div className="flex justify-end mt-2">
                    <div className="bg-[#E0F2FE] text-[#0369A1] px-3 py-2 rounded-2xl text-[11px] shadow-sm">
                      You: {form[field.name]}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={back}
              disabled={stepIndex === 0}
              className="flex items-center gap-1 rounded-full border border-[#C9DFFF] px-4 py-2 text-xs disabled:opacity-40"
            >
              <ChevronLeft size={14} /> Back
            </button>

            <button
              onClick={next}
              className="flex items-center gap-1 rounded-full bg-[#3A86FF] px-5 py-2 text-xs font-semibold text-white"
            >
              {stepIndex === steps.length ? "Finish" : "Next"}
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </section>

      {/* FOOTER WARNING */}
      <div className="fixed bottom-0 left-0 w-full bg-[#EAF3FF] border-t border-[#D6E4FF] px-4 py-3 text-center text-[11px] shadow-lg">
        Your answers help your doctor guide you safely — but this is not a diagnosis.
      </div>
    </div>
  );
}
