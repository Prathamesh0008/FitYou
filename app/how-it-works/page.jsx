// app/how-it-works/page.jsx
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen transition-colors">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
              HOW FITYOU WORKS
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
              Simple, structured, and medically aware from day one.
            </h1>
            <p className="mt-4 text-sm md:text-[15px] text-light-primary dark:text-slate-300 max-w-xl">
              Fityou isn’t a crash transformation program. It’s a guided system
              that screens basic health risks, then walks you into better routines
              one week at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Start the free health quiz
              </Link>
              <Link
                href="/program"
                className="text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
              >
                See inside the program →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <h2 className="text-sm font-semibold  dark:text-slate-50">
              In 3 guided phases
            </h2>
            <ol className="mt-3 space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                  1
                </span>
                <div>
                  <p className="font-semibold text-light-primary dark:text-slate-50">
                    Screen risks first
                  </p>
                  <p>
                    Quick questions on symptoms, medication, energy and recent
                    changes — to decide whether you should even start.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                  2
                </span>
                <div>
                  <p className="font-semibold text-light-primary dark:text-slate-50">
                    Build “safety-first” routines
                  </p>
                  <p>
                    Light, realistic targets across sleep, movement and food
                    rhythm. No overtraining, no crash diets.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                  3
                </span>
                <div>
                  <p className="font-semibold text-light-primary dark:text-slate-50">
                    Adjust based on your signals
                  </p>
                  <p>
                    You log what you can. The system nudges adjustments instead
                    of punishing you for missed days.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-xl md:text-2xl font-semibold  dark:text-slate-50">
            Your first 4 weeks inside Fityou
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            The program is built so that even a busy, imperfect week can still
            move you forward, instead of resetting you to zero.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4 text-xs">
            {[
              {
                label: "Week 1",
                focus: "Risk screen & baseline",
                points: [
                  "Complete health quiz",
                  "Understand your flags",
                  "Get simple non-intense targets",
                ],
              },
              {
                label: "Week 2",
                focus: "Sleep & timing",
                points: [
                  "Set wake/sleep anchors",
                  "Adjust late-night habits",
                  "Start tracking 1–2 signals",
                ],
              },
              {
                label: "Week 3",
                focus: "Movement & meals",
                points: [
                  "Light, low-pressure movement",
                  "Stabilise meal rhythm",
                  "Notice energy dips",
                ],
              },
              {
                label: "Week 4",
                focus: "Reflection & tweaks",
                points: [
                  "Review fatigue & cravings",
                  "Dial up or down intensity",
                  "Plan the next 4 weeks",
                ],
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-light-primary dark:text-slate-50">
                  {item.focus}
                </p>
                <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & LIMITS */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-lg md:text-xl font-semibold  dark:text-slate-50">
            Built with boundaries, not just ambition
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Many programs only focus on how fast you can push. Fityou also cares
            about when you should pause.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• If your answers suggest high risk, we recommend medical advice first.</li>
            <li>• If you report worrying changes, the program suggests slowing down.</li>
            <li>• If you feel worse, not better, you’re encouraged to stop and seek help.</li>
          </ul>

          <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
            Fityou is an educational and behavioural support experience. It does
            not diagnose, treat, or replace medical care.
          </p>
        </div>

        <div className="rounded-3xl bg-sky-50/80 border border-sky-200 p-6 text-sm text-slate-700 dark:bg-sky-900/30 dark:border-sky-800 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
            QUICK SUMMARY
          </p>
          <ul className="mt-3 space-y-2 text-xs text-light-primary">
            <li>✓ Start only after a simple health screen</li>
            <li>✓ Weekly themes that don’t overwhelm you</li>
            <li>✓ Designed around real-life constraints</li>
            <li>✓ Clear messaging when you should slow down</li>
          </ul>

          <Link
            href="/register"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            Create your account →
          </Link>
        </div>
      </section>
    </div>
  );
}
