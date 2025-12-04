"use client";

import Image from "next/image";
import Link from "next/link";

export default function StepsSection() {
  // Steps list
  const steps = [
    {
      id: 1,
      title: "Tell us about yourself",
      description: "Share your height, weight, and basic health details.",
    },
    {
      id: 2,
      title: "Doctor reviews your case",
      description: "A FitYou partner doctor checks your information.",
    },
    {
      id: 3,
      title: "Get your personalised plan",
      description: "Receive your customised FitYou treatment program.",
    },
    {
      id: 4,
      title: "Start your transformation",
      description: "Begin the journey with ongoing support from our team.",
    },
  ];

  return (
    <section className="bg-[#F7FAFF] py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0D4F8B] mb-6">
            How FitYou Works
          </h2>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={`steps-section-${index}`}   // 🔥 UNIQUE FIX
                className="rounded-2xl bg-[#E9F3FF] border border-[#C7D9EE] p-4 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-[#375C7A]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/quiz"
            className="inline-block mt-6 bg-[#0D4F8B] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#09355E] transition"
          >
            Start Now
          </Link>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center items-center">
          <Image
            src="/steps/main-illustration.png"
            alt="Steps illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
