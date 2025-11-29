export default function Glp1SciencePage() {
  return (
    <div className="min-h-screen bg-white text-[#4A4A4A] font-laila">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A86FF]">
            THE SCIENCE OF GLP-1
          </p>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Understanding GLP-1 — without the hype.
          </h1>

          <p className="mt-4 text-sm md:text-[15px] text-[#4A4A4A]">
            You’ve probably heard about GLP-1 medications in conversations
            about weight. This page explains, in simple terms, what they are,
            what they do, and why Fityou focuses on behaviour rather than
            prescribing or promoting any drug.
          </p>

          <p className="mt-3 text-[11px] text-[#6B7280]">
            This page is for educational purposes only and is not medical
            advice, diagnosis, or treatment.
          </p>
        </div>
      </section>

      {/* WHAT IS GLP1 */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-6 md:grid-cols-[1.4fr,1fr]">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            What is GLP-1?
          </h2>

          <p className="mt-2 text-sm text-[#4A4A4A]">
            GLP-1 (glucagon-like peptide-1) is a hormone your body naturally
            produces. It helps regulate blood sugar and influences how quickly
            your stomach empties, how full you feel, and sometimes how strong
            your cravings are.
          </p>

          <p className="mt-3 text-sm text-[#4A4A4A]">
            Some prescription medications are designed to mimic or enhance the
            effects of GLP-1. These are used in the treatment of conditions like
            type 2 diabetes, and in some cases, for medically supervised weight
            management.
          </p>
        </div>

        <div className="rounded-3xl bg-[#EAF3FF] border border-[#D6E4FF] p-6 text-sm text-[#1A1A1A]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3A86FF]">
            IMPORTANT
          </p>

          <p className="mt-2 text-xs">
            Only a qualified healthcare professional can decide whether a GLP-1
            medicine is appropriate, safe, or legal for you. Fityou never
            replaces that judgment.
          </p>
        </div>

      </section>

      {/* HOW THEY WORK */}
      <section className="mx-auto max-w-6xl px-4 pb-16">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            How GLP-1–based medicines generally work
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3 text-sm">
            {[
              {
                title: "Slower stomach emptying",
                text: "Food leaves the stomach more slowly. This can increase feelings of fullness and reduce how quickly you feel hungry again.",
              },
              {
                title: "Blood sugar support",
                text: "They help the body respond better to sugar in the blood, which is crucial in diabetes management.",
              },
              {
                title: "Appetite changes",
                text: "Some people experience reduced appetite or fewer cravings, which can influence eating behaviour.",
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
            The exact effects, side effects, dosing, and suitability depend on
            the specific medicine and your personal health profile. That’s why
            these decisions belong in a medical consultation — not on social media.
          </p>
        </div>

      </section>

      {/* WHY FITYOU IS BEHAVIOURAL */}
      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-6 md:grid-cols-[1.2fr,1fr]">

        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
            Why Fityou focuses on routines, not prescriptions
          </h2>

          <p className="mt-2 text-sm text-[#4A4A4A]">
            Whether someone is on a GLP-1 medicine or not, they still live real
            lives with sleep, stress, work, family and habits that either
            support or fight against their health.
          </p>

          <p className="mt-3 text-sm text-[#4A4A4A]">
            Fityou is built to help with the parts you control day to day:
            rhythm, consistency, and awareness. It does not provide or manage
            medication and never asks you to start or stop any drug.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-[#4A4A4A]">
            <li>• No medical prescriptions</li>
            <li>• No promises about specific medicines</li>
            <li>• No replacing your doctor’s role</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-red-50 border border-red-200 p-6 text-sm text-red-900">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">
            WHEN TO SEEK MEDICAL ADVICE
          </p>
          <p className="mt-2 text-xs">
            If you are considering GLP-1 medication, already using it, or
            experiencing side effects, talk directly to a healthcare
            professional. Do not change your dose, start, or stop medication
            based on online content — including this page.
          </p>
        </div>

      </section>

    </div>
  );
}
