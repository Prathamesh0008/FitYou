"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSnapshotSection({ benefits = [], readinessTrends = [] }) {
  const [quizData, setQuizData] = useState(null);
  const [snapshot, setSnapshot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();

        if (data?.user?.quiz) {
          const q = data.user.quiz;
          setQuizData(q);
          buildSnapshot(q);
        }
      } catch (err) {
        console.log("Snapshot fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, []);

  function buildSnapshot(q) {
    const height = Number(q.heightCm || q.height || 0);
    const weight = Number(q.weightKg || q.weight || 0);

    let bmi = 0;
    if (height > 0) bmi = Number((weight / (height / 100) ** 2).toFixed(1));

    let bmiStatus = "—";
    let bmiColor = "text-[#0D4F8B]";

    if (bmi > 0) {
      if (bmi < 18.5) {
        bmiStatus = "Underweight";
        bmiColor = "text-[#E88B00]";
      } else if (bmi < 25) {
        bmiStatus = "Normal";
        bmiColor = "text-[#2F7A4A]";
      } else if (bmi < 30) {
        bmiStatus = "Overweight";
        bmiColor = "text-[#E88B00]";
      } else {
        bmiStatus = "Obese";
        bmiColor = "text-[#D62828]";
      }
    }

    const weeklyTarget =
      bmi > 30 ? "1 kg/week" : bmi > 25 ? "0.5 kg/week" : "Maintain";

    let focusArea = "General improvement";
    if (q.exercise === "Little or no exercise") focusArea = "Movement routine";
    if (q.calories?.includes("3000")) focusArea = "Calorie reduction";

    let riskLevel = "Low";
    let riskNotes = [];

    if (q.highBp === "Yes" || q.diabetes === "Yes") {
      riskLevel = "Medium";
      riskNotes.push("Metabolic risks require monitoring.");
    }

    if (
      q.depression === "Yes" ||
      q.seriousThoughts === "Yes" ||
      (q.majorConditions && q.majorConditions[0] !== "None of the above")
    ) {
      riskLevel = "High";
      riskNotes.push("Doctor will require additional review.");
    }

    if (riskNotes.length === 0) {
      riskNotes.push("No major risks detected.");
    }

    setSnapshot({
      bmi,
      bmiStatus,
      bmiColor,
      weeklyTarget,
      focusArea,
      riskLevel,
      riskNotes,
    });
  }

  function getRiskBadgeClasses(level) {
    if (level === "High") {
      return "bg-[#FCE8E6] text-[#D62828]";
    }
    if (level === "Medium") {
      return "bg-[#FFF8E0] text-[#D48A00]";
    }
    return "bg-[#E7F6EC] text-[#2F7A4A]";
  }

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <section className="py-16 text-center text-[#0D4F8B] text-sm">
        Loading your health snapshot…
      </section>
    );
  }

  /* ---------------- NO QUIZ ---------------- */
  if (!quizData) {
    return (
      <section className="py-16 px-4 text-center text-[#0D4F8B]">
        <p className="text-sm">No quiz found. Complete the quiz first.</p>
        <Link
          href="/quiz"
          className="underline text-blue-600 inline-block mt-3 text-sm"
        >
          Start quiz →
        </Link>
      </section>
    );
  }

  /* ---------------- MAIN UI ---------------- */
  return (
    <section className="relative mx-auto max-w-6xl flex flex-col-reverse md:flex-row md:items-center gap-10 px-4 pb-20 pt-10 md:pt-20">

      {/* RIGHT SIDE: SNAPSHOT CARD */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-md rounded-3xl bg-white p-5 shadow-xl shadow-slate-900/5 border border-[#D3E1F4]">

          {/* Floating badge */}
          <div className="absolute -top-7 right-4 hidden md:flex items-center gap-2 rounded-2xl border border-[#CBE9D5] bg-[#E7F6EC] px-3 py-2 text-[10px] text-[#255C3E] shadow-md">
            <div className="h-7 w-7 rounded-xl bg-[#4CAF6A]" />
            <div className="space-y-0.5 max-w-[140px]">
              <p className="font-semibold leading-snug truncate">Safe to begin</p>
              <p className="text-[9px] leading-snug line-clamp-2">
                {snapshot?.riskNotes[0]}
              </p>
            </div>
          </div>

          {/* Snapshot Header */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="shrink-0">
              <p className="text-[10px] font-medium uppercase tracking-wider text-[#60738C]">
                YOUR SNAPSHOT
              </p>
              <p className="text-sm font-semibold text-[#0D4F8B]">
                Today’s readiness
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold whitespace-nowrap ${getRiskBadgeClasses(
                snapshot?.riskLevel
              )}`}
            >
              {snapshot?.riskLevel}
            </span>
          </div>

          {/* 3 Stats Cards */}
          <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
            {/* BMI */}
            <div className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-3 text-center">
              <p className="text-[11px] text-[#60738C] whitespace-nowrap">BMI</p>
              <p className={`mt-1 text-xl font-semibold ${snapshot.bmiColor}`}>
                {snapshot.bmi}
              </p>
              <p className="mt-1 text-[11px] text-[#375C7A]">{snapshot.bmiStatus}</p>
            </div>

            {/* Weekly Target */}
            <div className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-3 text-center">
              <p className="text-[11px] text-[#60738C] whitespace-nowrap">
                Week target
              </p>
              <p className="mt-1 text-xl font-semibold text-[#0D4F8B]">
                {snapshot.weeklyTarget}
              </p>
              <p className="mt-1 text-[11px] text-[#375C7A]">Safe pacing</p>
            </div>

            {/* Focus Area */}
            <div className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-3 text-center">
              <p className="text-[11px] text-[#60738C] whitespace-nowrap">Focus</p>
              <p className="mt-1 text-sm font-semibold text-[#0D4F8B] leading-snug">
                {snapshot.focusArea}
              </p>
              <p className="mt-1 text-[11px] text-[#375C7A]">From your quiz</p>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mt-5 rounded-2xl border border-[#FFDDC0] bg-[#FFF4EC] p-4 text-[11px] sm:text-[12px] text-[#8A5A2E]">
            <p className="font-semibold text-[12px]">Notes</p>
            {snapshot.riskNotes.map((n, i) => (
              <p key={i} className="mt-1 leading-relaxed">
                • {n}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* LEFT SIDE: TEXT CONTENT */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#BFD6F2] bg-[#E9F3FF] px-3 py-1 text-[11px] font-medium text-[#0D4F8B] shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
          Medically-aware weight management
        </div>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0D4F8B]">
          Not just “weight loss.”
          <br />
          <span className="text-[#0D4F8B]">A safer way to start.</span>
        </h1>

        <p className="mt-4 max-w-xl mx-auto md:mx-0 text-sm md:text-base text-[#375C7A] leading-relaxed">
          Fityou starts with a simple health quiz to screen for basic risks,
          then unlocks structured weekly routines that are realistic and safe.
        </p>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
          <Link
            href="/quiz"
            className="rounded-full bg-[#0D4F8B] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#0A3E70] transition"
          >
            Start eligibility quiz
          </Link>

          <Link
            href="/program"
            className="text-sm font-medium text-[#0D4F8B] underline-offset-4 hover:underline"
          >
            Explore the program →
          </Link>
        </div>
      </div>

    </section>
  );
}
