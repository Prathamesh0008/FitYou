"use client";

import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "7 days",
    highlight: "Try the structure first.",
    features: [
      "Full eligibility quiz",
      "Sample week of routines",
      "Basic readiness dashboard",
      "Email summary of key insights",
    ],
    badge: "Most Popular",
  },
  {
    name: "Monthly",
    price: "₹799",
    period: "/ month",
    highlight: "Ongoing structure & check-ins.",
    features: [
      "All Starter features",
      "Weekly reflection prompts",
      "Track switching when needed",
      "Priority support for questions",
    ],
  },
  {
    name: "Quarterly",
    price: "₹1,999",
    period: "/ 3 months",
    highlight: "For committed, gentle progress.",
    features: [
      "All Monthly features",
      "Quarterly deep-dive review template",
      "Exportable progress summaries",
      "Early access to new routines",
    ],
  },
];

const safetyPoints = [
  "No medication, supplements, or prescriptions included.",
  "No guarantees of specific weight loss numbers.",
  "Designed to support, not replace, medical treatment.",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen transition-colors">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 text-center md:text-left">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
              Pricing
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
              Choose structure, not pressure.
            </h1>
            <p className="mt-3 max-w-xl text-sm md:text-base text-light-primary dark:text-slate-300">
              Start free, see how the flow feels, and only then decide if you
              want ongoing support. No long-term lock-ins, no aggressive upsells.
            </p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 px-5 py-4 text-xs text-light-primary dark:border-sky-900 dark:bg-sky-900/30 dark:text-sky-200">
            <p className="font-semibold">Important:</p>
            <p className="mt-1">
              Fityou is not a medical service, does not prescribe or sell any
              medicines, and does not promise a specific weight loss outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              {plan.badge && (
                <span className="absolute -top-3 left-4 rounded-full bg-sky-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold  dark:text-slate-50">
                {plan.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {plan.highlight}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold  dark:text-slate-50">
                  {plan.price}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <Link
                href="/quiz"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Start with free eligibility quiz →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & refunds */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg md:text-xl font-semibold text-light-primary dark:text-slate-50">
              Safety, transparency & what you’re actually paying for.
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Your payment supports structured content, prompts, and gentle
              accountability systems — not medical treatment or supplements.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {safetyPoints.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-800">
            <h3 className="text-sm font-semibold text-light-primary dark:text-slate-50">
              Cancellation & changes
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              You can cancel future billing at any time. Your access will
              continue until the end of the paid period.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              If the program clearly clashes with advice from your medical
              professional, you’re encouraged to follow their guidance first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
