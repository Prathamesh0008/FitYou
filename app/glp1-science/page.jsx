



"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";


export default function Glp1SciencePage() {
  const router = useRouter();
  return (
    <>
      {/* ---------- PAGE-SPECIFIC CSS (ONLY FOR THIS PAGE) ---------- */}
      <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }

  /* Fade-up base animation */
  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease-out forwards;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Stagger delay classes */
  .fade-up-delayed-1 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.9s ease-out forwards;
  }
  .fade-up-delayed-2 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1s ease-out forwards;
  }
  .fade-up-delayed-3 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1.1s ease-out forwards;
  }
  .fade-up-delayed-4 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1.2s ease-out forwards;
  }
  .fade-up-delayed-5 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 1.3s ease-out forwards;
  }

  /* FLOATING BLOBS */
  @keyframes floatSlow {
    0%, 100% {
      transform: translate(0px, 0px) scale(1);
    }
    50% {
      transform: translate(20px, -20px) scale(1.05);
    }
  }
  .animate-float-slow {
    animation: floatSlow 14s ease-in-out infinite;
  }

  @keyframes floatMedium {
    0%, 100% {
      transform: translate(0px, 0px) scale(1);
    }
    50% {
      transform: translate(-25px, 25px) scale(1.04);
    }
  }
  .animate-float-medium {
    animation: floatMedium 18s ease-in-out infinite;
  }

  /* PARTICLE MOVEMENT */
  @keyframes particleMove {
    0% {
      transform: translateY(0px) scale(1);
      opacity: 0.5;
    }
    50% {
      opacity: 0.9;
      transform: translateY(-30px) scale(1.2);
    }
    100% {
      transform: translateY(0px) scale(1);
      opacity: 0.5;
    }
  }
  .animate-particle {
    animation: particleMove 6s ease-in-out infinite;
  }

  /* PARALLAX SCROLL EFFECT */
  .parallax {
    transform: translateY(var(--scroll-offset));
    transition: transform 0.1s linear;
  }

  /* MAGNETIC BUTTON */
  #magneticButton {
    position: relative;
    transition: transform 0.2s ease-out;
  }

  /* Floating GLP-1 molecules */
  @keyframes moleculeFloat {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.4;
    }
    50% {
      transform: translateY(-20px) rotate(8deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.4;
    }
  }
  .molecule {
    animation: moleculeFloat 6s ease-in-out infinite;
  }

  /* TOC links */
  .toc-link {
    color: #0d4f8b;
    transition: opacity 0.2s ease, text-decoration-color 0.2s ease;
  }
  .toc-link:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  /* Section scroll margin */
  [id] {
    scroll-margin-top: 120px;
  }
`}</style>


      <div className="min-h-screen bg-[#F7FAFF] font-laila text-[#375C7A] ">
        {/* ---------------- HERO SECTION ---------------- */}
    
        <section className="max-w-6xl mx-auto px-4 pt-24 pb-20 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE TEXT */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#002074] font-semibold">
              GLP-1 info
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#002074] leading-tight">
              The science <br /> of GLP-1
            </h1>

            <p className="mt-3 text-sm text-[#375C7A]">8 min read</p>

            <p className="mt-5 text-[18px] leading-[1.65] text-[#375C7A] max-w-xl">
              Introducing GLP-1 medicines, a revolutionary path to successful and
              lasting weight loss. Available as daily tablets or weekly injections,
              scientists have found that what was once just a diabetes medication
              could in fact be a breakthrough for obesity. Keep reading to learn
              about the science of GLP-1 and why the results are so effective.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full rounded-3xl overflow-hidden shadow-md">
            <img
              src="/glp1-science/glp1-hero.png"
              alt="GLP-1 Scientific Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* ---------- FULL EDGE-TO-EDGE TOPIC NAVIGATION ---------- */}
      {/* ---------- FULL EDGE-TO-EDGE TOPIC NAVIGATION ---------- */}
<section className="pb-14 px-4"> 
  {/* px-4 ensures side padding on all screens */}

  <div className="max-w-6xl mx-auto bg-[#D9EEF5] rounded-3xl px-6 md:px-12 py-10">

    <div className="grid md:grid-cols-2 gap-10 text-[18px] font-medium leading-relaxed">

      {/* LEFT LIST */}
      <ul className="space-y-4 list-disc pl-6 md:pl-8">
        <li><a href="#what-is-glp1" className="toc-link">What are GLP-1 medications?</a></li>
        <li><a href="#science" className="toc-link">The science of GLP-1: How does it work?</a></li>
        <li><a href="#importance" className="toc-link">Importance of doses</a></li>
        <li><a href="#routine" className="toc-link">How you can make the most out of GLP-1</a></li>
      </ul>

      {/* RIGHT LIST */}
      <ul className="space-y-4 list-disc pl-6 md:pl-8">
        <li><a href="#discovery" className="toc-link">The discovery of GLP-1</a></li>
        <li><a href="#proven" className="toc-link">Is GLP-1 scientifically proven?</a></li>
        <li><a href="#how-long" className="toc-link">How long does it take to start working?</a></li>
        <li><a href="#benefits" className="toc-link">What are the benefits?</a></li>

        <li><a href="#slow-progress" className="toc-link">What if it doesn’t work?</a></li>
      </ul>

    </div>
  </div>
</section>


        {/* ---------------- SECTION 2: WHAT IS GLP-1 ---------------- */}
        <section
          id="what-is-glp1"
          className="mx-auto max-w-5xl px-4 pb-20 grid gap-8 md:grid-cols-[1.4fr,1fr]"
        >
          {/* MAIN CARD */}
          <div className="rounded-3xl bg-white border border-[#E2EAF3] shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-semibold text-[#0D4F8B]">
              What is GLP-1?
            </h2>

            <p className="mt-4 text-[18px] leading-relaxed text-[#375C7A]">
              GLP-1 (glucagon-like peptide-1) is a natural hormone your body
              produces. It helps regulate blood sugar, appetite, and how quickly
              your stomach empties. These actions together influence how full you
              feel and how much you eat.
            </p>

            <p className="mt-4 text-[18px] leading-relaxed text-[#375C7A]">
              Some prescription medicines mimic GLP-1 to support diabetes care or
              medical weight management. These medicines must be evaluated and
              monitored by qualified healthcare professionals.
            </p>
          </div>

          {/* SIDE CARD */}
          <div className="rounded-3xl bg-[#E9F3FF] border border-[#BFD6F2] shadow-sm p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4F8B]">
              IMPORTANT
            </p>
            <p className="mt-3 text-[15px] text-[#375C7A]">
              Only a licensed medical professional can determine if a GLP-1
              medicine is safe or appropriate for you. FitYou does not prescribe,
              promote, or replace medical supervision.
            </p>
          </div>
        </section>

        {/* ---------- DISCOVERY OF GLP-1 (FITYOU VERSION WITH FULL CONNECTED LINE) ---------- */}
         <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <h2 id="discovery" className="text-[40px] font-laila text-[#0D4F8B] mb-12">
        The discovery of GLP-1
      </h2>

      <div className="space-y-16 relative">
        {/* Vertical dotted line */}
        <div className="absolute left-6 top-2 bottom-0 border-l-2 border-dotted border-[#A8C4D6]"></div>

        {/* ITEM 1 */}
        <div className="flex gap-10 relative">
          {/* Dot + Year */}
          <div className="flex flex-col items-center">
            <div className="w-8 ml-2 h-8 rounded-full bg-[#0D4F8B] "></div>
            <p className="text-[#0D4F8B] text-lg font-semibold mt-2">1987</p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-[#0D4F8B] font-semibold text-lg mb-2">
              Positive side effect diabetes
            </h3>
            <p className="text-[#375C7A] leading-[1.7] text-[17px] max-w-3xl">
              Originally, GLP-1 agonists were created to treat diabetes. People with
              diabetes have too much sugar in their blood, and GLP-1 drugs help by
              increasing incretin hormone levels that stimulate insulin production.
              Insulin is required to bring blood sugar levels down, by letting sugar
              become absorbed from the blood into nearby cells.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex gap-10 relative">
          {/* Dot + Year */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 ml-1 rounded-full bg-[#0D4F8B] z-10"></div>
            <p className="text-[#0D4F8B] text-lg font-semibold mt-2">2000</p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-[#0D4F8B] font-semibold text-lg mb-2">
              Testing effect on digestion
            </h3>
            <p className="text-[#375C7A] leading-[1.7] text-[17px] max-w-3xl">
              When testing the effect of GLP-1 agonists, it was also discovered that
              they reduced the rate of digestion and slowed down stomach emptying. This
              caused a decrease in appetite and led many trialled patients to lose
              weight.
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex gap-10 relative">
          {/* Dot + Year */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 ml-2 rounded-full bg-[#0D4F8B] z-10"></div>
            <p className="text-[#0D4F8B] text-lg font-semibold mt-2">2014</p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-[#0D4F8B] font-semibold text-lg mb-2">
              Approved for weight loss
            </h3>
            <p className="text-[#375C7A] leading-[1.7] text-[17px] max-w-3xl">
              It wasn’t until many years of further testing that the first GLP-1 drug
              was approved for the treatment of weight loss in obese individuals. It
              has since worked to help thousands of people across the globe achieve
              their weight loss goals.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* ---------- THE SCIENCE OF GLP-1 (FITYOU SAFE VERSION) ---------- */}
        <section
          id="science"
          className="max-w-5xl mx-auto px-4 pt-10 pb-24"
        >
          <h2  className="text-3xl md:text-4xl  text-[#0D4F8B] mb-6">
            The science of GLP-1: What does it influence?
          </h2>

          <p className="text-[18px] text-[#375C7A] mb-10 max-w-3xl">
            GLP-1 is a naturally occurring hormone in the human body. It plays a
            role in regulating appetite, digestion rhythm, and how the body
            responds to food. Here’s what the research shows about how GLP-1
            influences hunger and fullness:
          </p>

          <div className="space-y-14">
            {/* ITEM 1 */}
            <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
              {/* ICON */}
              <img
                src="/glp1-science/icon-appetite.png"
                alt="Appetite Icon"
                className="w-14 h-14"
              />

              {/* TEXT CONTENT */}
              <div>
                <h3 className="text-lg font-semibold text-[#0D4F8B]">
                  Supporting natural appetite signals:
                </h3>
                <p className="mt-3 text-[18px] leading-[1.7] text-[#375C7A]">
                  Your body naturally produces GLP-1 after you eat. It sends
                  signals to the brain that help you feel satisfied and reduce
                  unnecessary hunger. Understanding these biological cues allows
                  FitYou to design routines that work with your natural appetite
                  rhythm, not against it.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
              <img
                src="/glp1-science/icon-stomach.png"
                alt="Digestion Icon"
                className="w-14 h-14"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#0D4F8B]">
                  Influencing digestion rhythm:
                </h3>
                <p className="mt-3 text-[18px] leading-[1.7] text-[#375C7A]">
                  GLP-1 is involved in how quickly or slowly food moves through
                  your digestive system. When digestion happens at a balanced
                  pace, it can help you feel full for longer and avoid frequent
                  snacking. This is why FitYou focuses heavily on meal timing and
                  mindful eating to support better digestion.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
              <img
                src="/glp1-science/icon-cells.png"
                alt="Blood Sugar Icon"
                className="w-14 h-14"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#0D4F8B]">
                  Helping maintain energy balance:
                </h3>
                <p className="mt-3 text-[18px] leading-[1.7] text-[#375C7A]">
                  GLP-1 plays a role in how the body manages energy from food.
                  Balanced GLP-1 activity can support more stable energy levels
                  throughout the day. FitYou helps reinforce this stability
                  naturally through routines that include sleep consistency,
                  hydration, meal structure, and stress management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-xl mx-auto text-center mt-2 space-y-4">
  <button 
      onClick={()=>router.push("/program")}
      className="w-full bg-[#A7CBD7] text-[#0A3A82] font-semibold py-3 rounded-lg text-[17px] shadow-sm">
        View programme
      </button>

  <button className="w-full bg-[#FFF7EB] border border-[#F4C892] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[17px] mb-6">
    Do I qualify?
  </button>
</div>

        {/* ---------- IS GLP-1 SCIENTIFICALLY PROVEN? (FITYOU SAFE VERSION) ---------- */}
        <section
          id="proven"
          className="max-w-5xl mx-auto px-4 pt-10 pb-24"
        >
          <h2 className="text-3xl md:text-4xl  text-[#0D4F8B] mb-6">
            Is GLP-1 scientifically proven?
          </h2>

          <p className="text-[18px] text-[#375C7A] max-w-3xl leading-[1.7] mb-6">
            GLP-1 is a naturally occurring hormone in the human body. Scientists
            have studied it for decades to understand how it influences appetite,
            digestion rhythm, and how satisfied people feel after eating. Many
            studies highlight how GLP-1 helps your body regulate fullness and
            energy balance.
          </p>

          <p className="text-[18px] text-[#375C7A] max-w-3xl leading-[1.7] mb-10">
            One well-known area of research explores how people respond when their
            hunger signals are more stable. In controlled behavioural studies,
            participants with balanced GLP-1 activity naturally reported fewer
            cravings and better appetite awareness. Below is a simplified
            representation of how participants described changes in their eating
            patterns.
          </p>

          {/* ---------- STUDY RESULTS CARD (SAFE VERSION + FIXED SIZE) ---------- */}
          <div className="bg-white rounded-3xl shadow-md border border-[#E2EAF3] p-8 mb-10">
            <h3 className="text-lg font-semibold text-[#0D4F8B] mb-6">
              Study observations
            </h3>

            <div className="w-full flex justify-center">
              <img
                src="/glp1-science/behaviour-chart.png"
                alt="Behaviour Study Chart"
                className="max-w-[650px] w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* ---------- RESEARCH FINDINGS (FITYOU SAFE VERSION) ---------- */}
          <section className="max-w-5xl mx-auto px-0 pt-10 pb-24">
            <p className="text-lg font-semibold text-[#0D4F8B] mb-4">
              Results found that:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[18px] leading-[1.7] text-[#375C7A] mb-10">
              <li>
                People with more stable hunger cues reported a noticeable
                improvement in how quickly they felt full during meals.
              </li>
              <li>
                Participants relying on structured routines alone also showed
                improvements in appetite awareness, though the changes were
                smaller compared to those with naturally balanced GLP-1
                responses.
              </li>
            </ul>

            {/* ---------- TWO-COLUMN LAYOUT (LIKE AKTIVE) ---------- */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* LEFT — STUDY CARD */}
              <div className="bg-white rounded-3xl shadow-md border border-[#E2EAF3] p-8">
                <h3 className="text-lg font-semibold text-[#0D4F8B] mb-6">
                  Study results
                </h3>

                <div className="w-full flex justify-center">
                  <img
                    src="/glp1-science/behaviour-chart-2.png"
                    alt="Behaviour Study Chart"
                    className="max-w-[450px] w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* RIGHT — TEXT CONTENT */}
              <div className="text-[18px] leading-[1.7] text-[#375C7A]">
                <p className="font-semibold text-[#0D4F8B] mb-4">
                  In practical terms:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Participants with balanced hunger rhythms consumed more
                    consistent portion sizes.
                  </li>
                  <li>
                    Those depending only on lifestyle routines still showed
                    improved awareness—but experienced more fluctuations.
                  </li>
                </ul>

                <p className="mt-4">
                  These findings highlight that biological signals like GLP-1
                  strongly influence appetite patterns—and structured routines can
                  support these signals naturally over time.
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* ---------- HOW LONG DOES IT TAKE? (FITYOU SAFE VERSION) ---------- */}
        {/* ---------- HOW LONG DOES IT TAKE? — 3 SECTIONS MATCHED ---------- */}
        <section
          id="how-long"
          className="max-w-6xl mx-auto px-4 pt-10 pb-24"
        >
          {/* ------------------ SECTION TITLE ------------------ */}
          <h2 className="text-3xl md:text-4xl  text-[#0D4F8B] mb-6">
            How long does it take to see changes?
          </h2>

          <p className="text-[18px] text-[#375C7A] max-w-3xl leading-[1.7] mb-10">
            Real, healthy progress doesn’t happen overnight. For changes in
            appetite, energy, and body rhythm to feel natural and sustainable, the
            process needs to be gradual. FitYou is designed to support steady,
            realistic improvements — not quick fixes.
          </p>

          {/* ---------- FIRST ROW (Graph 1) ---------- */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
            {/* LEFT GRAPH */}
            <div className="flex justify-center">
              <img
                src="/glp1-science/progress-curve-1.png"
                alt="Body adapting graph"
                className="max-w-[360px] w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="text-[18px] text-[#375C7A] leading-[1.7]">
              <p>
                Many people begin noticing small changes in their eating habits
                within the first few weeks of following a more structured routine.
                This may look like feeling full sooner, fewer late-night cravings,
                or having a more predictable hunger rhythm.
              </p>
              <p className="mt-4">
                These early shifts happen because your body is adapting to
                consistent meal timing, improved sleep, and reduced stress — all of
                which support natural appetite balance.
              </p>
            </div>
          </div>

          {/* ---------- SECOND ROW (Graph 2) ---------- */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
            {/* LEFT GRAPH */}
            <div className="flex justify-center">
              <img
                src="/glp1-science/progress-curve-2.png"
                alt="Progress graph"
                className="max-w-[360px] w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="text-[18px] text-[#375C7A] leading-[1.7]">
              <p>
                More noticeable changes typically appear after a few months of
                steady routine. As your eating habits, activity levels, and stress
                patterns become more consistent, your body begins responding in
                deeper, more predictable ways.
              </p>
              <p className="mt-4">
                This is why FitYou focuses on long-term behaviour rather than
                quick transformations — sustainable routines support sustainable
                results.
              </p>
            </div>
          </div>

          {/* ---------- THIRD ROW (Graph 3) — MATCHED EXACTLY ---------- */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT GRAPH */}
            <div className="flex justify-center">
              <img
                src="/glp1-science/progress-curve-3.png"
                alt="Fast progress graph"
                className="max-w-[360px] w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="text-[18px] text-[#375C7A] leading-[1.7]">
              <p>
                As your habits strengthen and become more automatic, progress often
                feels smoother and more noticeable. This happens because your
                routine finally supports your natural biological rhythm in a stable
                and consistent way.
              </p>

              <p className="mt-4">
                The more aligned your daily structure becomes — sleep, movement,
                meals, hydration, mindfulness — the faster your body adapts and
                responds.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- IMPORTANCE OF GRADUAL PROGRESS (PREMIUM VERSION) ---------- */}
        <section
          id="importance"
          className="max-w-6xl mx-auto px-4 pt-10 pb-24"
        >
          <h2 className="text-3xl md:text-4xl text-[#0D4F8B] mb-6">
            Importance of gradual progress
          </h2>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-8 max-w-3xl">
            Healthy routines grow best when they start small and increase slowly.
            Gradual progress allows your body and mind to adapt naturally, making
            your habits easier to maintain long-term.
          </p>

          {/* ---------- BOX 1: HABIT LEVELS ---------- */}
          <div className="bg-[#0D4F8B] text-white rounded-3xl p-6 w-full max-w-lg mb-12 shadow-lg relative overflow-hidden">
            {/* LIGHT GRADIENT GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <p className="font-semibold mb-4 relative z-10">Habit intensity levels</p>

            {/* Pills */}
            <div className="flex gap-3 items-center relative z-10">
              {/* Light */}
              <span className="bg-[#3B82F6] px-3 py-1 text-xs rounded-md shadow">
                Light
              </span>

              {/* Arrow */}
              <span className="text-white text-xl animate-pulse">→</span>

              {/* Moderate */}
              <span className="bg-[#2563EB] px-3 py-1 text-xs rounded-md shadow">
                Moderate
              </span>

              {/* Arrow */}
              <span className="text-white text-xl animate-pulse">→</span>

              {/* Strong */}
              <span className="bg-[#1E3A8A] px-3 py-1 text-xs rounded-md shadow">
                Strong
              </span>
            </div>
          </div>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] max-w-3xl mb-12">
            Beginning with small steps creates a foundation. As these habits feel
            more natural, gradually increasing difficulty leads to stronger, more
            reliable routines.
          </p>

          {/* ---------- BOX 2: STARTING LEVELS ---------- */}
          <div className="bg-[#0D4F8B] text-white rounded-3xl p-6 w-full max-w-lg mb-12 shadow-lg relative overflow-hidden">
            {/* SUBTLE GLOW */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>

            <p className="font-semibold mb-3 relative z-10">
              Starting habit levels
            </p>

            {/* Pills row */}
            <div className="flex gap-3 relative z-10">
              {/* Small Steps */}
              <span className="bg-[#BFDBFE] text-[#0D4F8B] px-3 py-1 text-xs rounded-md shadow">
                Small steps
              </span>

              {/* Arrow */}
              <span className="text-white text-xl animate-pulse">→</span>

              {/* Consistency */}
              <span className="bg-[#93C5FD] text-[#0D4F8B] px-3 py-1 text-xs rounded-md shadow">
                Steady consistency
              </span>

              {/* Arrow */}
              <span className="text-white text-xl animate-pulse">→</span>

              {/* Strong Routine */}
              <span className="bg-[#60A5FA] text-white px-3 py-1 text-xs rounded-md shadow">
                Strong routine
              </span>
            </div>

            <p className="mt-4 text-xs text-[#DCEAFE] relative z-10">
              Start gradually → increase when habits feel natural
            </p>
          </div>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] max-w-3xl mb-12">
            Increasing difficulty only once routines feel comfortable makes them more
            sustainable and reduces the chance of burnout.
          </p>

          {/* ---------- BOX 3: WEEKLY PROGRESSION ---------- */}
          <div className="bg-[#0D4F8B] text-white rounded-3xl p-6 w-full max-w-lg shadow-lg relative overflow-hidden">
            {/* GRADIENT HIGHLIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <p className="font-semibold mb-3 relative z-10">How routines progress</p>

            {/* Label */}
            <p className="text-xs text-[#DCEAFE] mb-4 relative z-10">
              Every few weeks
            </p>

            <div className="flex gap-3 items-center relative z-10">
              <span className="bg-[#3B82F6] px-3 py-1 text-xs rounded-md shadow">
                Light
              </span>

              {/* Flow arrows */}
              <span className="text-white text-xl animate-pulse">→</span>

              <span className="bg-[#2563EB] px-3 py-1 text-xs rounded-md shadow">
                Moderate
              </span>

              <span className="text-white text-xl animate-pulse">→</span>

              <span className="bg-[#1E3A8A] px-3 py-1 text-xs rounded-md shadow">
                Strong
              </span>
            </div>

            <p className="mt-4 text-xs text-[#DCEAFE] relative z-10">
              Progress grows with consistency — not pressure
            </p>
          </div>
        </section>

        {/* ---------- BENEFITS (AKTIVE WIDTH) ---------- */}
        <section
  id="benefits"
  className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20"
>
  {/* Title */}
  <h2 className="text-3xl md:text-4xl  text-[#0D4F8B] mb-6 max-w-[650px]">
    What are the benefits?
  </h2>

  <div className="max-w-[650px]">

    <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-4">
      When your appetite rhythm becomes more balanced, many aspects of your
      daily wellbeing can improve. These benefits come from your body
      naturally responding to consistent routines, mindful eating, and
      stabilised hunger cues.
    </p>

    <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-4">
      Improved appetite balance has been associated with:
    </p>

    {/* Bullets */}
    <ul className="list-disc pl-6 text-[18px] text-[#375C7A] leading-[1.7] space-y-2 mb-6">
      <li>better control over cravings</li>
      <li>more stable energy throughout the day</li>
      <li>healthier portion awareness</li>
      <li>improved meal timing</li>
      <li>reduced emotional or stress-driven snacking</li>
      <li>a stronger connection to natural hunger cues</li>
    </ul>

    <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-8">
      These changes help create a foundation for long-term wellbeing and can
      make sustainable progress feel much more achievable.
    </p>

  </div>

{/* CTA Button */}
  <div className="max-w-xl mx-auto text-center mt-2 space-y-4">
  <button 
  onClick={()=>router.push("program")}
  className="w-80 bg-[#A7CBD7] hover:bg-[#a5d7e7] text-[#002074] font-semibold py-3 rounded-lg text-[18px]">
    View programme
  </button>
</div>
</section>


        {/* ---------- HOW TO MAKE THE MOST OUT OF YOUR ROUTINE ---------- */}
        <section
          id="routine"
          className="max-w-5xl mx-auto px-4 pt-10 pb-24"
        >
          <h2 className="text-3xl md:text-4xl  text-[#0D4F8B] mb-6 max-w-[650px]">
            How you can make the most out of your routine
          </h2>

          <div className="max-w-[650px]">
            <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-10">
              Understanding how your hunger rhythm works is only the first step. To
              see meaningful changes, pairing this knowledge with supportive habits
              can amplify your progress and make your day-to-day routine feel
              easier.
            </p>
          </div>

          {/* ---------- HEALTHY FOOD ---------- */}
          <h3 className="text-xl font-semibold text-[#0D4F8B] mb-3 max-w-[650px]">
            Healthy food
          </h3>

          <div className="max-w-[650px]">
            <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-6">
              When your meals are balanced, your hunger signals also become more
              balanced. Choosing nutrient-rich foods helps stabilise energy and
              makes it easier to recognise genuine hunger — not emotional or
              convenience-driven hunger.
            </p>
          </div>

          {/* TABLE WITH MATCHED WIDTH */}
          <div className="max-w-[650px] overflow-x-auto mb-12">
            <table className="w-full border border-[#DDE6EE] rounded-lg overflow-hidden text-sm">
              <thead className="bg-[#F2F7FA]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#0D4F8B]">
                    Foods to choose
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0D4F8B]">
                    Foods to limit
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                <tr>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Lean proteins
                  </td>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Alcohol, sugary drinks
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Whole grains
                  </td>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Fast food
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Healthy fats
                  </td>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Refined carbs
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Vegetables
                  </td>
                  <td className="px-4 py-3 border-t text-[#375C7A]">
                    Processed meats
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* EXERCISE */}
          <h3 className="text-xl font-semibold text-[#0D4F8B] mb-3 max-w-[650px]">
            Exercise
          </h3>

          <div className="max-w-[650px]">
            <p className="text-[18px] text-[#375C7A] leading-[1.7]">
              Staying active helps regulate your hunger rhythm, improves mood, and
              supports your bodys natural energy balance. Start with light,
              enjoyable activities and gradually build up your routine.
            </p>
          </div>
        </section>

        {/* ---------- WHAT IF PROGRESS FEELS SLOW? (SAFE FITYOU VERSION) ---------- */}
        <section
          id="slow-progress"
          className="max-w-5xl mx-auto px-4 pt-10 pb-24"
        >
          <h2 className="text-3xl md:text-4xl text-[#0D4F8B] mb-6">
            What if progress feels slow?
          </h2>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-4 max-w-3xl">
            Everyone’s body responds differently to changes in routine. While many
            people notice shifts in their appetite, energy, or overall rhythm early
            on, others may take longer to adapt — which is completely normal.
          </p>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-4 max-w-3xl">
            If your progress feels slower than expected, it often means your body is
            still learning new patterns. Sleep, stress levels, activity, and eating
            timing all influence how quickly your internal signals stabilise.
          </p>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] mb-4 max-w-3xl">
            In many cases, slow progress is simply a sign that your routine needs a
            bit more consistency. Building strong habits takes time, and rushing the
            process can feel discouraging — even though your biology may still be
            adjusting quietly in the background.
          </p>

          <p className="text-[18px] text-[#375C7A] leading-[1.7] max-w-3xl">
            Some individuals experience more ups and downs along the way. That
            doesn’t mean change isn’t happening — only that their bodies respond at
            a different pace. FitYou focuses on long-term, realistic improvements
            rather than overnight transformations.
          </p>
        </section>

        

        {/* TAKE THE NEXT STEP SECTION */}
<section className="w-full bg-[#FFF8EF] py-20">
  <div className="max-w-3xl mx-auto text-center px-4">

    {/* Heading */}
    <h2 className="text-[36px] md:text-[42px]  text-[#0A3A82] mb-6 leading-tight">
      Take the next step
    </h2>

    {/* Description */}
    <p className="text-[#0A3A82] text-[18px] leading-[1.8] mb-4">
      We believe GLP-1 can really help you towards better health, more energy, and boosting
      your self-esteem.
    </p>

    <p className="text-[#0A3A82] text-[18px] leading-[1.8] mb-10">
      Find out more about our programme or take the quiz to see if you qualify.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col items-center gap-4">

      <button 
      onClick={()=>router.push("/program")}
      className="w-[260px] md:w-[300px] bg-[#A7CBD7] hover:bg-[#a5d7e7] text-[#0A3A82] font-semibold py-3 rounded-lg text-[17px] shadow-sm">
        View programme
      </button>

      <button className="w-[260px] md:w-[300px] bg-[#FFD4A8] text-[#0A3A82] font-semibold py-3 rounded-lg text-[17px] shadow-sm">
        Do I qualify
      </button>

    </div>
  </div>
</section>




      </div>
    </>
  );
}