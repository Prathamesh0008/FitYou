"use client";

import { useRef, useEffect } from "react";

export default function Milestones() {
  const scrollRef = useRef(null);
  const lineRef = useRef(null);

  /* --------------------------------------------------
    🔵 AUTO-ADJUST VERTICAL BLUE LINE HEIGHT
    This makes the line stretch through ALL cards.
  -------------------------------------------------- */
  useEffect(() => {
    if (!scrollRef.current || !lineRef.current) return;

    const contentHeight = scrollRef.current.scrollHeight;
    lineRef.current.style.height = contentHeight + "px"; // FULL content height
  }, []);

  /* --------------------------------------------------
    🔼 SCROLL TO TOP BUTTON
  -------------------------------------------------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#F7CFA7] py-20 px-4 md:px-0">
      {/* --------------------------------------------------
        🟥 MAIN CONTAINER — CHANGE max-width TO ADJUST CENTERING
        Example:
        max-w-5xl → tighter center
        max-w-6xl → wider
      -------------------------------------------------- */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-[40%_1fr] gap-14 place-items-start relative">

        {/* --------------------------------------------------
          🟡 LEFT SIDE (Heading + Button)
        -------------------------------------------------- */}
        <div className="flex flex-col justify-start pt-4">
          
          {/* Heading — adjust size here */}
          <h2 className="text-[38px] font-semibold text-[#0D2A6B] leading-tight max-w-sm">
            Unsure what to expect? These are the milestones of your journey.
          </h2>

          {/* Start now button */}
          <div
            className="mt-10 flex items-center gap-3 cursor-pointer select-none"
            onClick={scrollToTop}
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow">
              <span className="text-[#0D2A6B] text-2xl">↑</span>
            </div>
            <span className="text-[#0D2A6B] underline text-[15px]">
              Start now
            </span>
          </div>
        </div>

        {/* --------------------------------------------------
          🟢 RIGHT SIDE — SCROLLING TIMELINE
          Adjust height: h-[520px]
        -------------------------------------------------- */}
        <div
          ref={scrollRef}
          className="relative h-[520px] overflow-y-auto scrollArea pr-8 smoothScroll"
          onWheel={(e) => {
            // 🐌 Make scrolling slower: 0.35 (lower = slower)
            const el = e.currentTarget;
            el.scrollTop += e.deltaY * 0.35;
          }}
        >
          {/* --------------------------------------------------
            🔵 VERTICAL LINE — connects all dots
            Adjust left position or thickness here
          -------------------------------------------------- */}
          <div
            ref={lineRef}
            className="absolute left-[32px] top-0 border-r-[2px] border-[#0D4F8B]"
          ></div>

          {/* --------------------------------------------------
            TIMELINE CARDS
          -------------------------------------------------- */}
          <div className="flex flex-col gap-16 pt-2 pb-10">

            <MilestoneCard
              title="1st day"
              list={[
                "Congratulations, your journey starts today!",
                "Take your first tablet today.",
                "Weigh yourself so you can track your progress.",
                "Have a look at how our meal plan and fitness plan can help you.",
              ]}
            />

            <MilestoneCard
              title="1st week"
              list={[
                "You have taken 7 tablets by now.",
                "You will start to notice that you feel fuller more quickly.",
                "Make sure you listen to your body and stop eating once you're full.",
                "You should also check in on your diet. Are you making healthy choices?",
              ]}
            />

            <MilestoneCard
              title="1st month"
              list={[
                "Your next shipment includes a higher dosage.",
                "You feel improvements in your mood, sleep, and energy levels.",
                "Now that you have more energy you can intensify your exercise routine.",
              ]}
            />

            <MilestoneCard
              title="3rd month"
              list={[
                "You are on the highest dosage.",
                "You've likely noticed that your clothes feel baggy — feels great right!",
                "Your blood pressure, cholesterol, and blood sugar levels will be lower.",
              ]}
            />

            <MilestoneCard
              title="6th month"
              list={[
                "Milestone: you’ve lost up to 10% of your body weight!",
                "You've probably dropped a clothes size or two.",
                "Your body has learned to maintain a lower food intake.",
                "Your new lifestyle will have a long-lasting impact on your weight and wellbeing.",
              ]}
            />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
        STYLES — HIDE SCROLLBAR + SMOOTH SCROLLING
      -------------------------------------------------- */}
      <style jsx global>{`
        .scrollArea {
          scrollbar-width: none !important;
        }
        .scrollArea::-webkit-scrollbar {
          display: none !important;
        }
        .smoothScroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}

/* --------------------------------------------------
  🟣 MILESTONE CARD COMPONENT
  - Adjust card width
  - Adjust dot size
  - Adjust triangle pointer
-------------------------------------------------- */
function MilestoneCard({ title, list }) {
  return (
    <div className="relative pl-24">

      {/* DOT */}
      <div className="absolute left-[22px] top-8 w-6 h-6 rounded-full bg-[#0D4F8B]"></div>

      {/* WIDER, CLEAN, UNCROPPED CARD */}
      <div className="relative bg-white rounded-2xl shadow-md p-7 w-full">

        {/* TRIANGLE POINTER */}
        <div
          className="absolute left-[-24px] top-8
          w-0 h-0
          border-t-[14px] border-t-transparent
          border-b-[14px] border-b-transparent
          border-r-[24px] border-r-white"
        ></div>

        <p className="font-semibold text-[#0D2A6B] text-[17px] mb-3">{title}</p>

        <ul className="text-[#0D2A6B] text-[15px] space-y-3 leading-relaxed pl-5 list-disc">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
