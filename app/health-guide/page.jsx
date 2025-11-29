export default function HealthGuidePage() {
  return (
    <div className="min-h-screen bg-white text-[#4A4A4A] font-laila">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A86FF]">
            HEALTH GUIDE
          </p>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            A calmer way to think about weight, energy and health.
          </h1>

          <p className="mt-4 text-sm md:text-[15px] text-[#4A4A4A]">
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
              className="rounded-3xl border border-[#E5E7EB] bg-white p-5 text-sm shadow-sm"
            >
              <h2 className="text-base font-semibold text-[#1A1A1A]">
                {card.title}
              </h2>
              <p className="mt-2 text-[#4A4A4A]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE YOU START */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-[1.3fr,1fr]">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            Before you start any weight program
          </h2>

          <p className="mt-2 text-sm text-[#4A4A4A]">
            Ask yourself these questions. If any of them worry you, your next
            step should be a conversation with a doctor — not a new diet.
          </p>

          <div className="mt-4 grid gap-3 text-sm text-[#4A4A4A]">
            <div>
              <p className="font-semibold text-[#1A1A1A]">
                1. Has your weight changed very fast?
              </p>
              <p className="text-xs mt-1">
                Sudden gain or loss without clear reason can be a medical flag.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1A1A1A]">
                2. Do you feel chest pain, dizziness, or fainting?
              </p>
              <p className="text-xs mt-1">
                These are not “push harder” signals. They’re “slow down and
                check” signals.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1A1A1A]">
                3. Are you on long-term medication?
              </p>
              <p className="text-xs mt-1">
                Some medicines affect appetite, weight, heart rate and sleep.
                Your doctor should know what you plan to change.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1A1A1A]">
                4. Is your relationship with food already stressful?
              </p>
              <p className="text-xs mt-1">
                If guilt, secrecy or extreme restriction are involved, you may
                need specialised support, not another “plan”.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-[#6B7280]">
            Fityou’s quiz includes some of these questions to help you pause if
            starting a program might not be the right move yet.
          </p>
        </div>

        <div className="rounded-3xl bg-[#EAF3FF] border border-[#D6E4FF] p-6 text-sm text-[#1A1A1A]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3A86FF]">
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

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
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
                className="rounded-2xl bg-[#EAF3FF] border border-[#D6E4FF] p-4"
              >
                <h3 className="text-sm font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#4A4A4A]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-[#6B7280] max-w-2xl">
            Fityou’s weekly structure is built around these foundations, not
            just calories and workouts.
          </p>
        </div>

      </section>

    </div>
  );
}
