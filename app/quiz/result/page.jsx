//FitYou\app\quiz\result\page.jsx
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

function calculateBmi(weight, heightCm) {
  const h = Number(heightCm) / 100;
  const w = Number(weight);
  if (!h || !w) return null;
  return +(w / (h * h)).toFixed(1);
}

function getBmiLabel(bmi) {
  if (!bmi) return "Not enough data";
  if (bmi < 18.5) return "Below recommended range";
  if (bmi < 25) return "Within general range";
  if (bmi < 30) return "Above range";
  return "Well above range";
}

export default function QuizResultPage() {
  const params = useSearchParams();
  const weight = params.get("weight");
  const height = params.get("height");
  const bmi = calculateBmi(weight, height);
  const bmiLabel = getBmiLabel(bmi);

  const showCaution = !bmi || bmi < 18.5 || bmi >= 30;

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0D4F8B] font-laila">

      {/* HEADER */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
          Quiz Result
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Your eligibility snapshot.
        </h1>

        <p className="mt-3 text-sm text-[#375C7A] max-w-xl">
          This is not a diagnosis. It’s a simple risk-oriented summary based on
          the limited information you shared.
        </p>
      </section>

      {/* RESULT BLOCK */}
      <section className="mx-auto max-w-3xl px-4 pb-20 space-y-8">

        {/* BASIC INDICATORS */}
        <div className="rounded-3xl border border-[#D3E1F4] bg-white p-6 text-sm shadow-sm">
          <h2 className="text-lg font-semibold text-[#0D4F8B]">
            Basic indicators
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3 text-xs">

            {/* HEIGHT CARD */}
            <div className="rounded-2xl bg-[#F4F7FC] border border-[#D3E1F4] p-3">
              <p className="text-[11px] text-[#60738C]">Height</p>
              <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">
                {height ? `${height} cm` : "Not provided"}
              </p>
            </div>

            {/* WEIGHT CARD */}
            <div className="rounded-2xl bg-[#F4F7FC] border border-[#D3E1F4] p-3">
              <p className="text-[11px] text-[#60738C]">Weight</p>
              <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">
                {weight ? `${weight} kg` : "Not provided"}
              </p>
            </div>

            {/* BMI CARD */}
            <div className="rounded-2xl bg-[#F4F7FC] border border-[#D3E1F4] p-3">
              <p className="text-[11px] text-[#60738C]">Approx. BMI</p>
              <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">
                {bmi ?? "—"}
              </p>
              <p className="mt-1 text-[11px] text-[#60738C]">
                {bmiLabel}
              </p>
            </div>
          </div>
        </div>

        {/* SUGGESTION BLOCK */}
        <div className="rounded-3xl border border-[#D3E1F4] bg-white p-6 text-sm shadow-sm">
          <h2 className="text-lg font-semibold text-[#0D4F8B]">
            Our suggestion based on this snapshot
          </h2>

          {/* CAUTION BLOCK */}
          {showCaution ? (
            <div className="mt-3 rounded-2xl bg-[#FFECEC] border border-[#F5A8A8] p-4 text-xs text-[#8A2626]">
              <p className="font-semibold">Caution recommended.</p>
              <p className="mt-1">
                Based on your approximate BMI and the limited data provided, it’s
                safer to talk to a medical professional before starting any
                structured weight-related program — including Fityou.
              </p>
            </div>
          ) : (
            <div className="mt-3 rounded-2xl bg-[#E7F6EC] border border-[#CBE9D5] p-4 text-xs text-[#255C3E]">
              <p className="font-semibold">Low-level risk based on this data.</p>
              <p className="mt-1">
                From this limited snapshot, you appear to be in a general range
                where a gentle program like Fityou may be reasonable to explore.
                However, any concerning symptoms or medical history should always
                be discussed with a professional first.
              </p>
            </div>
          )}

          <p className="mt-3 text-[11px] text-[#60738C]">
            This tool uses very simple rules and cannot see your full medical
            picture. When in doubt, prioritise professional advice over any app
            or routine.
          </p>

          {/* BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs">

            {/* PRIMARY BUTTON */}
            <Link
              href="/program"
              className="rounded-full bg-[#0D4F8B] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#0A3E70]"
            >
              View how the program works →
            </Link>

            {/* SECONDARY */}
            <Link
              href="/pricing"
              className="rounded-full border border-[#D3E1F4] px-4 py-2 text-xs font-medium text-[#375C7A] hover:bg-[#F4F7FC]"
            >
              Continue later
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
