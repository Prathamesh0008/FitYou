import Link from "next/link";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-white text-[#4A4A4A] font-laila">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A86FF]">
              FITYOU PROGRAM
            </p>

            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              A weekly structure that fits real life, not a perfect schedule.
            </h1>

            <p className="mt-4 text-sm md:text-[15px] text-[#4A4A4A] max-w-xl">
              Fityou is designed for people who want to improve their weight and
              energy without extreme diets or all-or-nothing workout phases.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="rounded-full bg-[#3A86FF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2D6FD8]"
              >
                Take the eligibility quiz
              </Link>

              <Link
                href="/pricing"
                className="text-sm font-medium text-[#3A86FF] hover:text-[#265FCC]"
              >
                View pricing →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-5 shadow-sm text-sm">
            <h2 className="text-sm font-semibold text-[#1A1A1A]">
              What you get inside Fityou
            </h2>

            <ul className="mt-3 space-y-2 text-xs text-[#4A4A4A]">
              <li>• A weekly focus you can remember</li>
              <li>• Small daily actions instead of huge checklists</li>
              <li>• Gentle tracking: sleep, movement, timing, cravings</li>
              <li>• Clear signals when you should slow down</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WEEKLY STRUCTURE GRID */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">

          <h2 className="text-xl md:text-2xl font-semibold text-[#1A1A1A]">
            Your week inside Fityou
          </h2>

          <p className="mt-2 text-sm text-[#4A4A4A] max-w-xl">
            Each day has a single priority, so you’re never guessing what to
            focus on — even when life gets messy.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4 text-xs">
            {[
              { day: "Mon", focus: "Sleep reset", detail: "Set a realistic bedtime window and wake anchor." },
              { day: "Tue", focus: "Light movement", detail: "Short walks, mobility or low-impact activity." },
              { day: "Wed", focus: "Meal rhythm", detail: "Stabilise meal timing instead of obsessing over perfection." },
              { day: "Thu", focus: "Evening structure", detail: "Reduce late-night scrolling and snacking." },
              { day: "Fri", focus: "Check-in & reflection", detail: "Note what helped and what hurt your energy." },
              { day: "Sat", focus: "Recovery routine", detail: "De-stress with low-effort recovery." },
              { day: "Sun", focus: "Prep + reset", detail: "Light planning so Monday doesn’t feel like a shock." },
            ].map((w) => (
              <div
                key={w.day}
                className="rounded-2xl bg-[#EAF3FF] border border-[#D6E4FF] p-4"
              >
                <p className="text-xs font-semibold text-[#6B7280]">{w.day}</p>
                <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">{w.focus}</p>
                <p className="mt-1 text-[11px] text-[#4A4A4A]">{w.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-[1.3fr,1fr]">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            What’s actually inside the program
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm">
            {[
              {
                title: "Guided weekly themes",
                text: "You’re not hit with 20 new habits at once. Each theme builds slowly.",
              },
              {
                title: "Low-friction actions",
                text: "Tiny actions that keep momentum even on bad days.",
              },
              {
                title: "Simple tracking views",
                text: "A gentle tracking dashboard without perfection pressure.",
              },
              {
                title: "Built-in pause points",
                text: "Signals reminding you to slow down or get help if needed.",
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
        </div>

        <div className="rounded-3xl bg-[#EAF3FF] border border-[#D6E4FF] p-6 text-sm text-[#1A1A1A]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3A86FF]">
            NOT A “PERFECT DAY” APP
          </p>
          <p className="mt-2 text-xs">
            Fityou is designed for missed workouts, stressful weeks and imperfect humans.
            The structure bends; it doesn’t break.
          </p>
          <Link
            href="/faq"
            className="mt-4 inline-flex text-xs font-semibold text-[#3A86FF] hover:text-[#265FCC]"
          >
            Read FAQs about the program →
          </Link>
        </div>

      </section>

      {/* SAFETY NOTE + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-6 md:grid-cols-[1.2fr,1fr]">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            Safety boundaries built into the experience
          </h2>

          <p className="mt-2 text-sm text-[#4A4A4A]">
            Some people should not start a weight routine without professional clearance.
          </p>

          <ul className="mt-3 space-y-2 text-sm text-[#4A4A4A]">
            <li>• Recent serious medical events</li>
            <li>• Pregnancy or immediate postpartum</li>
            <li>• History of eating disorders</li>
            <li>• Unexplained chest pain or fainting</li>
          </ul>

          <p className="mt-3 text-[11px] text-[#6B7280]">
            If your inputs suggest risk, Fityou will guide you to talk to a doctor first.
          </p>
        </div>

        <div className="rounded-3xl bg-[#3A86FF] text-white p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold">Start with clarity, not pressure.</h2>
            <p className="mt-2 text-sm">
              Take the free eligibility quiz and see what’s safe for you.
            </p>
          </div>

          <Link
            href="/quiz"
            className="mt-5 inline-block rounded-full bg-white text-[#3A86FF] px-6 py-2.5 text-sm font-semibold hover:bg-[#F0F4FF]"
          >
            Begin the free check →
          </Link>
        </div>

      </section>

    </div>
  );
}
