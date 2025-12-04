"use client";

import Image from "next/image";
import Link from "next/link";

export default function StepsSection() {
  
  // Your step data (unchanged — just structured cleanly)
  const steps = [
    {
      id: 1,
      title: "Step 1 — Assessment",
      description:
        "We start with your medical profile to understand weight goals and eligibility.",
      icon: "/steps/step1.png",
    },
    {
      id: 2,
      title: "Step 2 — Approval",
      description:
        "A qualified doctor reviews your profile and approves your personalised treatment.",
      icon: "/steps/step2.png",
    },
    {
      id: 3,
      title: "Step 3 — Treatment",
      description:
        "Begin your guided FitYou GLP-1 treatment with full support and tracking.",
      icon: "/steps/step3.png",
    },
    {
      id: 4,
      title: "Step 4 — Support",
      description:
        "Weekly follow-ups, lifestyle guidance and ongoing support every step of your journey.",
      icon: "/steps/step4.png",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-7 pb-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
        
        {/* LEFT TEXT CONTENT */}
        <div>
          <h2 className="text-xl font-semibold md:text-2xl text-[#0D4F8B]">
            How FitYou Works
          </h2>

          <p className="mt-2 text-sm text-[#375C7A]">
            FitYou is designed like a guided health onboarding — not just a treatment.
          </p>

          <div className="mt-5 space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-4 shadow-sm text-[#375C7A]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
                  {step.title}
                </p>
                <p className="mt-1 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/quiz"
            className="inline-block mt-6 bg-[#0D4F8B] text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-[#09355E] transition"
          >
            Start Now
          </Link>
        </div>

        {/* RIGHT SIDE IMAGES OR CONTENT */}
        <div className="flex justify-center items-center">
          <Image
            src="/steps/main-illustration.png"
            alt="Steps Illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
