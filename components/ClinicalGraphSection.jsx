"use client";

import { useEffect, useRef } from "react";

export default function ClinicalGraphSection() {
  const graphRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          graphRef.current.classList.add("animate-graph");
        }
      },
      { threshold: 0.4 }
    );

    if (graphRef.current) obs.observe(graphRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden py-24">

      {/* WAVE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
        <svg className="absolute top-0 w-full opacity-70 dark:opacity-20" viewBox="0 0 1440 320">
          <path
            fill="#e9f3ff"
            d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,234.7C1120,256,1280,256,1360,256L1440,256V0H0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* GRAPH */}
        <div ref={graphRef} className="opacity-0 transition-all duration-[1200ms] translate-y-8">
          <div className="relative p-6 rounded-3xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.25)] dark:shadow-[0_0_60px_-10px_rgba(255,255,255,0.12)]">

            {/* Animated SVG */}
            <svg width="260" height="420" viewBox="0 0 260 420" className="mx-auto">

              {/* Grid Lines */}
              <line x1="90" y1="60" x2="90" y2="350" stroke="#e4edf6" strokeWidth="2" />
              <line x1="170" y1="60" x2="170" y2="350" stroke="#e4edf6" strokeWidth="2" />

              {/* Orange curve */}
              <path
                d="M20 80 C 90 140, 150 200, 220 260"
                stroke="#edc7a6"
                strokeWidth="3"
                fill="none"
                className="path-orange"
              />

              {/* Blue curve */}
              <path
                d="M20 80 C 70 200, 130 260, 220 330"
                stroke="#0d4f8b"
                strokeWidth="4"
                fill="none"
                className="path-blue"
              />

              {/* Dots */}
              <circle cx="20" cy="80" r="6" fill="#0d4f8b" className="dot-1" />
              <circle cx="130" cy="230" r="6" fill="#0d4f8b" className="dot-2" />
              <circle cx="220" cy="330" r="6" fill="#0d4f8b" className="dot-3" />

              {/* Labels */}
              <text x="10" y="390" fontSize="13" fill="#60738c">Day 1</text>
              <text x="95" y="390" fontSize="13" fill="#60738c">Month 6</text>
              <text x="185" y="390" fontSize="13" fill="#60738c">Month 16</text>
            </svg>

            {/* Top balloon */}
            <div className="absolute left-[70px] top-[125px] w-48 px-3 py-2 bg-[#0d4f8b] text-white text-xs font-semibold rounded-md shadow-lg">
              10% body weight<br />in 6 months²
              <div className="absolute left-6 top-full w-0 h-0 
                border-l-8 border-r-8 border-t-8 
                border-t-[#0d4f8b] border-l-transparent border-r-transparent"></div>
            </div>

            {/* Bottom balloon */}
            <div className="absolute left-[85px] top-[275px] w-48 px-3 py-2 bg-[#0d4f8b] text-white text-xs font-semibold rounded-md shadow-lg">
              21% body weight<br />in 16 months²
              <div className="absolute left-6 -top-3 w-0 h-0 
                border-l-8 border-r-8 border-b-8 
                border-b-[#0d4f8b] border-l-transparent border-r-transparent"></div>
            </div>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="opacity-0 animate-[fadeUp_1.2s_ease-out_forwards]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2d68] dark:text-white leading-snug">
            Clinical trials show that<br />
            you lose <br />

            <span className="relative inline-block">
              <span className="relative z-10 text-[#0d2d68] dark:text-white font-extrabold">
                5 times more weight
              </span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 dark:bg-orange-500/40 -z-0"></span>
            </span>

            <br />than with diet & exercise alone.
          </h2>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Based on a 2022 clinical trial with 2539 adults comparing our programme vs. diet + exercise alone.
          </p>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-graph {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .path-orange, .path-blue {
          stroke-dasharray: 650;
          stroke-dashoffset: 650;
          animation: draw 2.6s ease forwards;
        }
        .animate-graph .path-orange { animation-delay: .2s; }
        .animate-graph .path-blue { animation-delay: .5s; }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .dot-1, .dot-2, .dot-3 {
          opacity: 0;
          transform: scale(.5);
          animation: pop .5s ease forwards;
        }
        .animate-graph .dot-1 { animation-delay: 1.3s }
        .animate-graph .dot-2 { animation-delay: 1.7s }
        .animate-graph .dot-3 { animation-delay: 2.1s }

        @keyframes pop {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
