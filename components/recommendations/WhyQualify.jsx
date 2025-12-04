"use client";

import { useEffect, useRef } from "react";

export default function WhyQualify({ bmi, weight, height }) {
  const w = Number(weight);

  // GLP-1 clinical projections
  const sixMonth = (w * 0.90).toFixed(1);   // -10%
  const sixteenMonth = (w * 0.79).toFixed(1); // -21%

  const qualify = Number(bmi) >= 27; // QUALIFICATION RULE

  return (
    <section className="w-full bg-white pt-20 pb-40 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        {/* LEFT SIDE — WHY YOU QUALIFY */}
        <div className="flex flex-col justify-between min-h-[420px]">
          <div>
            <h2 className="text-[36px] font-semibold text-[#0D2A6B] mb-8">
              Why you qualify
            </h2>

            <div className="mb-10">
              <p className="text-[#B23A1F] font-semibold text-[20px]">
                Your BMI is {bmi} — {qualify ? "you qualify" : "you do not qualify"}
              </p>
              <p className="text-[#2E3D55] mt-3 leading-[1.75] text-[16px]">
                Based on your height ({height} cm) and weight ({weight} kg), 
                your BMI indicates {qualify ? "you are eligible for treatment." : "treatment cannot be prescribed online."}
              </p>
            </div>

            <div>
              <p className="text-[#B23A1F] font-semibold text-[20px]">
                Expected progress
              </p>
              <p className="text-[#2E3D55] mt-3 leading-[1.75] text-[16px]">
                If you start at {weight}kg, you may reach around {sixMonth}kg 
                in 6 months and {sixteenMonth}kg in 16 months based on typical results.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — WHAT TO EXPECT */}
        <div className="min-h-[420px] flex flex-col">
          <h3 className="text-[36px] font-semibold text-[#0D2A6B] mb-4">
            What to expect
          </h3>

          <GraphBox 
            weight={weight}
            six={sixMonth}
            sixteen={sixteenMonth}
          />
        </div>

      </div>
    </section>
  );
}

function GraphBox({ weight, six, sixteen }) {
  return (
    <div className="bg-[#E8F3FA] rounded-2xl p-6 pt-10 pb-12 overflow-visible">
      <Graph weight={weight} six={six} sixteen={sixteen} />
    </div>
  );
}

function Graph({ weight, six, sixteen }) {
  const pathRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // RESET animation each time user scrolls back
    const reset = () => {
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      bubble1Ref.current.style.opacity = 0;
      bubble1Ref.current.style.transform = "scale(0.5)";

      bubble2Ref.current.style.opacity = 0;
      bubble2Ref.current.style.transform = "scale(0.5)";
    };

    const play = () => {
      path.style.transition = "stroke-dashoffset 1.8s ease";
      path.style.strokeDashoffset = 0;

      setTimeout(() => {
        bubble1Ref.current.style.transition = "all 1s ease";
        bubble1Ref.current.style.opacity = 1;
        bubble1Ref.current.style.transform = "scale(1)";
      }, 400);

      setTimeout(() => {
        bubble2Ref.current.style.transition = "all 1s ease";
        bubble2Ref.current.style.opacity = 1;
        bubble2Ref.current.style.transform = "scale(1)";
      }, 800);
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reset();
          setTimeout(() => play(), 50);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(path);

    return () => observer.disconnect();
  }, []);

  return (
    <svg width="100%" height="260" viewBox="0 0 350 260">

      {/* AXIS */}
      <line x1="20" y1="180" x2="335" y2="180" stroke="#000" strokeWidth="2" />
      <line x1="20" y1="40" x2="20" y2="180" stroke="#000" strokeWidth="2" />

      {/* CURVE */}
      <path
        ref={pathRef}
        d="M20 60 C 120 200, 240 160, 330 140"
        stroke="#7BB0C9"
        strokeWidth="4"
        fill="transparent"
      />

      {/* WEIGHT LABELS */}
      <text x="25" y="50" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {weight}kg
      </text>
      <text x="140" y="120" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {six}kg
      </text>
      <text x="260" y="150" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {sixteen}kg
      </text>

      {/* BUBBLE 1 —10% */}
      <g ref={bubble1Ref} style={{ opacity: 0, transform: "scale(0.5)" }}>
        <circle cx="145" cy="145" r="22" fill="#0D2A6B" />
        <text x="135" y="150" fill="#FFF" fontSize="12" fontWeight="bold">
          -10%
        </text>
      </g>

      {/* BUBBLE 2 —21% */}
      <g ref={bubble2Ref} style={{ opacity: 0, transform: "scale(0.5)" }}>
        <circle cx="265" cy="165" r="22" fill="#0D2A6B" />
        <text x="255" y="170" fill="#FFF" fontSize="12" fontWeight="bold">
          -21%
        </text>
      </g>

      {/* X-AXIS labels */}
      <text x="15" y="200" fontSize="14" fill="#0D2A6B">Day 1</text>
      <text x="135" y="200" fontSize="14" fill="#0D2A6B">6 Month</text>
      <text x="255" y="200" fontSize="14" fill="#0D2A6B">16 Month</text>
    </svg>
  );
}
