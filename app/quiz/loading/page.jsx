// app/quiz/loading/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function QuizLoadingPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { user } = useAuth();

  const rawData = params.get("data");
  const quiz = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;

  const [reviewStep, setReviewStep] = useState(0);
  const [flowStarted, setFlowStarted] = useState(false);

  /* ---------------------------------------
     LOADING ANIMATION (UNCHANGED)
  --------------------------------------- */
  useEffect(() => {
    setTimeout(() => setReviewStep(1), 300);
    setTimeout(() => setReviewStep(2), 1700);
    setTimeout(() => setReviewStep(3), 2000);
    setTimeout(() => setReviewStep(4), 3400);
    setTimeout(() => setReviewStep(5), 3700);
    setTimeout(() => setReviewStep(6), 5100);
  }, []);

  /* ---------------------------------------
     MAIN FLOW CONTROLLER
  --------------------------------------- */
useEffect(() => {
  if (!quiz) return;
  if (reviewStep < 6) return;

  // ✅ Logged in
  if (user?.phone) {
    saveQuiz(quiz).then(() => {
      router.replace(
        `/recommendations?data=${encodeURIComponent(JSON.stringify(quiz))}`
      );
    });
    return;
  }

  // ❌ Not logged in
  localStorage.setItem("fityou_pending_quiz", JSON.stringify(quiz));
  window.dispatchEvent(new Event("open-login"));
}, [reviewStep, user, quiz, router]);


  /* ---------------------------------------
     AFTER OTP SUCCESS → CONTINUE FLOW
  --------------------------------------- */
  useEffect(() => {
    const handler = async () => {
      const pending = localStorage.getItem("fityou_pending_quiz");
      if (!pending) return;

      const quizData = JSON.parse(pending);
      await saveQuiz(quizData);

      localStorage.removeItem("fityou_pending_quiz");
      router.push(`/recommendations?data=${encodeURIComponent(JSON.stringify(quizData))}`);
    };

    window.addEventListener("otp-success", handler);
    return () => window.removeEventListener("otp-success", handler);
  }, [router]);

  /* ---------------------------------------
     SAVE QUIZ TO DB
  --------------------------------------- */
  const saveQuiz = async (quizData) => {
    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quiz: quizData }),
      });
    } catch (err) {
      console.error("❌ Quiz save failed:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#E8F4F7] flex flex-col">

      {/* HEADER */}
      <header className="py-6 px-8 bg-white border-b border-[#DDE7F0]">
        <h1 className="text-[#063363] text-xl font-semibold">
          Your personalised plan
        </h1>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col items-center pt-20 text-[#063363]">
        <h2 className="text-[18px] font-semibold mb-12">
          Reviewing your medical information:
        </h2>

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
            <div className="flex flex-col">
              <p className="text-[15px] mb-1">{item.label}</p>

              <div className="w-[220px] md:w-[260px] h-[16px] rounded-lg bg-[#A6CDD8] overflow-hidden shadow-sm">
                <div
                  className="h-full bg-[#6FA7B5] rounded-lg transition-[width] duration-[1500ms] ease-out"
                  style={{
                    width: reviewStep >= item.fillAt ? "100%" : "0%",
                  }}
                />
              </div>
            </div>

            {reviewStep >= item.tickAt && (
              <span className="text-[#0D4F8B] text-[20px] font-semibold">✔</span>
            )}
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-xs text-[#6D8293] mt-auto">
        © 2025 FitYou Inc. All rights reserved.
      </footer>
    </div>
  );
}
