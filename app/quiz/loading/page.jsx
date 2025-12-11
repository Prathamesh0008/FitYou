//app/quiz/loading/page.jsx
"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function QuizLoadingPage() {
  const router = useRouter();
  const params = useSearchParams();
  const data = params.get("data") || "";

  const [reviewStep, setReviewStep] = useState(0);

  useEffect(() => {
    setTimeout(() => setReviewStep(1), 300);
    setTimeout(() => setReviewStep(2), 1700);
    setTimeout(() => setReviewStep(3), 2000);
    setTimeout(() => setReviewStep(4), 3400);
    setTimeout(() => setReviewStep(5), 3700);
    setTimeout(() => setReviewStep(6), 5100);

    setTimeout(() => {
     router.push(`/recommendations?data=${data}`);
    }, 6200);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#E8F4F7] flex flex-col">

      {/* HEADER */}
      <header className="py-6 px-8 bg-white border-b border-[#DDE7F0]">
        <h1 className="text-[#063363] text-xl font-semibold">
          Your personalised plan
        </h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center pt-20 text-[#063363]">

        <h2 className="text-[18px] font-semibold mb-12">
          Reviewing your medical information:
        </h2>

        {/* --- STEP GENERATOR (FINAL FIXED VERSION) --- */}
                {[
                { label: "Checking BMI qualification", fillAt: 2, tickAt: 2, showAt: 1 },
                { label: "Checking contraindications", fillAt: 4, tickAt: 4, showAt: 3 },
                { label: "Checking safety and suitability", fillAt: 6, tickAt: 6, showAt: 5 },
                ].map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center gap-4 transition-opacity duration-300 mb-10 ${
                    reviewStep >= item.showAt ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* LEFT SIDE (Label + Bar) */}
                    <div className="flex flex-col">
                    <p className="text-[15px] mb-1">{item.label}</p>

                    <div className="w-[220px] md:w-[260px] h-[16px] rounded-lg bg-[#A6CDD8] overflow-hidden shadow-sm">
                        <div
                          className={`h-full bg-[#6FA7B5] rounded-lg transition-[width] duration-[1500ms] ease-out`}
                          style={{
                            width: reviewStep >= item.fillAt ? "100%" : "0%",
                          }}
                        />
                      </div>
                    </div>

                    {/* TICK (Right Side) */}
                    {reviewStep >= item.tickAt && (
                    <span className="text-[#0D4F8B] text-[20px] font-semibold">✔</span>
                    )}
                </div>
                ))}

      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-[#6D8293] mt-auto">
        Copyright © 2025 FitYou Inc. All rights reserved.
      </footer>
    </div>
  );
}
