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

  const showCaution =
    !bmi || bmi < 18.5 || bmi >= 30; // conservative boundaries

  return (
    <div className="min-h-screen transition-colors">
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
          Quiz Result
        </p>
        <h1 className="mt-2 text-3xl font-bold text-light-primary dark:text-slate-50">
          Your eligibility snapshot.
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          This is not a diagnosis. It’s a simple risk-oriented summary based on
          the limited information you shared.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-light-primary dark:text-slate-50">
            Basic indicators
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3 text-xs">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 dark:bg-slate-800 dark:border-slate-700">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Height
              </p>
              <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                {height ? `${height} cm` : "Not provided"}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 dark:bg-slate-800 dark:border-slate-700">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Weight
              </p>
              <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                {weight ? `${weight} kg` : "Not provided"}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 dark:bg-slate-800 dark:border-slate-700">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Approx. BMI
              </p>
              <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                {bmi ?? "—"}
              </p>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {bmiLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-light-primary dark:text-slate-50">
            Our suggestion based on this snapshot
          </h2>

          {showCaution ? (
            <div className="mt-3 rounded-2xl bg-red-50/70 border border-red-200 p-4 text-xs text-red-900 dark:bg-red-950/30 dark:border-red-900 dark:text-red-100">
              <p className="font-semibold">Caution recommended.</p>
              <p className="mt-1">
                Based on your approximate BMI and the limited data provided, it’s
                safer to talk to a medical professional before starting any
                structured weight-related program — including Fityou.
              </p>
            </div>
          ) : (
            <div className="mt-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 text-xs text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-100">
              <p className="font-semibold">Low-level risk based on this data.</p>
              <p className="mt-1">
                From this limited snapshot, you appear to be in a general range
                where a gentle program like Fityou may be reasonable to explore.
                However, any concerning symptoms or medical history should always
                be discussed with a professional first.
              </p>
            </div>
          )}

          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
            This tool uses very simple rules and cannot see your full medical
            picture. When in doubt, prioritise professional advice over any app
            or routine.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Link
              href="/program"
              className="rounded-full bg-sky-600 px-5 py-2 text-xs font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              View how the program works →
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Continue later
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
