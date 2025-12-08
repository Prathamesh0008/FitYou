//component/weight-loss/goal.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Goal() {
  const bluePillsRef = useRef([]);
  const peachPillsRef = useRef([]);

  // Fade-in visibility
  useEffect(() => {
    const items = [...bluePillsRef.current, ...peachPillsRef.current].filter(Boolean);
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const index = Number(el.dataset.index || "0");

          el.style.transitionDelay = `${index * 0.12}s`;

          if (entry.isIntersecting) {
            el.classList.add("how-is-visible");
          } else {
            el.classList.remove("how-is-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Flip animation
  useEffect(() => {
    const cards = [...bluePillsRef.current, ...peachPillsRef.current].filter(Boolean);
    if (!cards.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const index = Number(el.dataset.index || "0");

          if (entry.isIntersecting) {
            el.classList.remove("flip-out-x-bottom");
            el.classList.add("flip-in-x-bottom");
            el.style.animationDelay = `${index * 0.12}s`;
          } else {
            el.classList.remove("flip-in-x-bottom");
            el.classList.add("flip-out-x-bottom");
            el.style.animationDelay = "0s";
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="mx-auto px-4 pb-32 text-[#103b7a]">

        {/* Achieving your goals */}
        <section className="mb-20 pt-10">
          <h2 className="font-normal mb-6 text-[36px] md:text-[40px] leading-snug">
            <span className="hidden md:block text-center">
              Achieving your goals is as <br /> easy as 1–2–3
            </span>

            <span className="block md:hidden w-full text-left">
              <span className="block">Achieving your</span>
              <span className="block">goals is as easy as</span>
              <span className="block">1–2–3</span>
            </span>
          </h2>

          <p className="text-2xl font-semibold text-center max-lg:text-left mb-10">
            What do you need to do?
          </p>

          <div className="space-y-4">

            {/* ITEM 1 */}
            <div
              ref={(el) => (bluePillsRef.current[0] = el)}
              data-index="0"
              className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-6 flex items-center gap-5 text-[18px] leading-relaxed bg-[#d9f0f4] opacity-0 transform [transform-style:preserve-3d]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <path d="m15 4 5 5" />
                  <path d="m17 2 3 3" />
                  <path d="M12 7 3 16l5 5 9-9" />
                  <path d="M16 11 9 4 4 9" />
                </svg>
              </div>
              <p>Take one injection weekly. It reduces appetite so you eat less without hunger.</p>
            </div>

            {/* ITEM 2 */}
            <div
              ref={(el) => (bluePillsRef.current[1] = el)}
              data-index="1"
              className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-6 flex items-center gap-5 text-[18px] leading-relaxed bg-[#d9f0f4] opacity-0 transform [transform-style:preserve-3d]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <p>Eat sensibly. No calorie counting needed — our meal plans help.</p>
            </div>

            {/* ITEM 3 */}
            <div
              ref={(el) => (bluePillsRef.current[2] = el)}
              data-index="2"
              className="how-pill-anim max-w-[980px] mx-auto rounded-[30px] px-8 py-6 flex items-center gap-5 text-[18px] leading-relaxed bg-[#d9f0f4] opacity-0 transform [transform-style:preserve-3d]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <path d="M6.5 6.5 9 9m6 6 2.5 2.5" />
                  <path d="M21 21l-2.5-2.5m0 0L15 15m-6-6L4.5 4.5M4.5 4.5 3 3" />
                </svg>
              </div>
              <p>Be active. Light exercise 3× per week is enough.</p>
            </div>
          </div>
        </section>

        {/* HOW TO START */}
        <section className="mb-20">
          <h2 className="text-[32px] font-normal text-center max-lg:text-left mb-8">
            How to start?
          </h2>

          {/* CARD 1 */}
          <div
            ref={(el) => (peachPillsRef.current[0] = el)}
            data-index="0"
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-7 text-[18px] leading-relaxed bg-[#ffd4aa]"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 3h6v4H9z" />
                  <path d="M9 11h6" />
                  <path d="M9 15h3" />
                </svg>
              </div>
              <p>Answer medical questions so our doctors can check if treatment is safe for you.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={(el) => (peachPillsRef.current[1] = el)}
            data-index="1"
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-7 text-[18px] leading-relaxed bg-[#ffd4aa]"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <circle cx="12" cy="18" r="0.8" />
                  <path d="M10 6h4" />
                  <path d="M10 9h4" />
                </svg>
              </div>
              <p>We create your personalised FitYou programme.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={(el) => (peachPillsRef.current[2] = el)}
            data-index="2"
            className="how-pill-anim max-w-[980px] mx-auto mb-4 rounded-[30px] px-8 py-7 text-[18px] leading-relaxed bg-[#ffd4aa]"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <svg width="22" height="22" fill="none" stroke="#103b7a" strokeWidth="2">
                  <path d="M3 11 12 3l9 8" />
                  <path d="M5 10v9h5v-5h4v5h5v-9" />
                </svg>
              </div>
              <p>If approved, your first month of treatment arrives at your home.</p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col items-center">
            <Link href="/quiz">
              <button className="how-btn-primary inline-block bg-[#85b7c4] text-[#103b7a] rounded-[8px] px-18 py-2 text-[20px] font-semibold tracking-[0.02em] shadow-sm hover:brightness-110 transition w-full max-w-[380px] text-center whitespace-nowrap">
                Start consultation
              </button>
            </Link>

            <p className="mt-4 text-[16px] font-normal text-center">
              See if you qualify. It's free.
            </p>
          </div>
        </section>
      </main>

      {/* ANIMATION STYLES */}
      <style jsx global>{`
        .how-pill-anim {
          opacity: 0;
          transform: perspective(800px) rotateX(-90deg) translateY(20px);
          transform-origin: bottom center;
          transition: opacity 0.3s ease-out;
        }
        .how-is-visible {
          opacity: 1;
        }
        @keyframes cardFlipInXBottom {
          0% { opacity: 0; transform: perspective(800px) rotateX(-90deg) translateY(20px); }
          60% { opacity: 1; transform: perspective(800px) rotateX(15deg) translateY(0); }
          100% { opacity: 1; transform: perspective(800px) rotateX(0) translateY(0); }
        }
        @keyframes cardFlipOutXBottom {
          0% { opacity: 1; transform: perspective(800px) rotateX(0) translateY(0); }
          100% { opacity: 0; transform: perspective(800px) rotateX(-90deg) translateY(20px); }
        }
        .flip-in-x-bottom {
          animation: cardFlipInXBottom 0.6s ease-out forwards;
        }
        .flip-out-x-bottom {
          animation: cardFlipOutXBottom 0.4s ease-in forwards;
        }
      `}</style>
    </>
  );
}