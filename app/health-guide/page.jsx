// app/health-guide/page.jsx

export default function HealthGuidePage() {
  return (
    <div className="min-h-screen transition-colors">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
            HEALTH GUIDE
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
            A calmer way to think about weight, energy and health.
          </h1>
          <p className="mt-4 text-sm md:text-[15px] text-slate-600 dark:text-slate-300">
            This guide is not medical advice. It’s a simple framework to help
            you think more clearly about your body, your routines, and when it’s
            time to talk to a professional.
          </p>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Awareness first",
              text: "Notice your patterns: sleep, hunger, fatigue, motivation, and stress. You can’t change what you don’t see clearly.",
            },
            {
              title: "Small, repeatable steps",
              text: "If you can’t repeat it on a stressful week, it’s too intense. Fityou favours low-friction changes.",
            },
            {
              title: "Safety over speed",
              text: "The goal is not the quickest drop on the scale. It’s better energy and stability that actually lasts.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-base font-semibold text-light-primary dark:text-slate-50">
                {card.title}
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE YOU START */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-lg md:text-xl font-semibold text-light-primary dark:text-slate-50">
            Before you start any weight program
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Ask yourself these questions. If any of them worry you, your next
            step should be a conversation with a doctor — not a new diet.
          </p>

          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="font-semibold text-light-primary dark:text-slate-50">
                1. Has your weight changed very fast?
              </p>
              <p className="text-xs mt-1">
                Sudden gain or loss without clear reason can be a medical flag.
              </p>
            </div>
            <div>
              <p className="font-semibold text-light-primary dark:text-slate-50">
                2. Do you feel chest pain, dizziness, or fainting?
              </p>
              <p className="text-xs mt-1">
                These are not “push harder” signals. They’re “slow down and
                check” signals.
              </p>
            </div>
            <div>
              <p className="font-semibold text-light-primary dark:text-slate-50">
                3. Are you on long-term medication?
              </p>
              <p className="text-xs mt-1">
                Some medicines affect appetite, weight, heart rate and sleep.
                Your doctor should know what you plan to change.
              </p>
            </div>
            <div>
              <p className="font-semibold text-light-primary dark:text-slate-50">
                4. Is your relationship with food already stressful?
              </p>
              <p className="text-xs mt-1">
                If guilt, secrecy or extreme restriction are involved, you may
                need specialised support, not another “plan”.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-slate-500 dark:text-slate-400">
            Fityou’s quiz includes some of these questions to help you pause if
            starting a program might not be the right move yet.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 text-sm text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300">
            GREEN LIGHT VS RED LIGHT
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            <li>✅ Mild tiredness, but no worrying symptoms</li>
            <li>✅ Stable weight over months</li>
            <li>✅ You can describe why you want change without panic</li>
            <li>⚠️ Sudden, large weight changes</li>
            <li>⚠️ Chest pain, fainting, racing heartbeat</li>
            <li>⚠️ Obsession, shame, or secrecy around food</li>
          </ul>
        </div>
      </section>

      {/* DAILY FOUNDATIONS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <h2 className="text-lg md:text-xl font-semibold text-light-primary dark:text-slate-50">
            Daily foundations that matter more than any “hack”
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3 text-sm">
            {[
              {
                title: "Sleep window",
                text: "Aim for a roughly stable sleep and wake time, even if the duration isn’t perfect yet.",
              },
              {
                title: "Meal rhythm",
                text: "Chaotic timing often leads to high cravings and overeating later, even with “healthy” food.",
              },
              {
                title: "Light movement",
                text: "Short walks, stretching, light mobility sessions matter more than one intense workout per week.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-4 dark:bg-slate-800 dark:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-light-primary dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500 dark:text-slate-400 max-w-2xl">
            Fityou’s weekly structure is built around these foundations, not
            just calories and workouts.
          </p>
        </div>
      </section>
    </div>
  );
}
