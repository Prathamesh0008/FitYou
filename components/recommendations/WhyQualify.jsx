//FitYou\components\recommendations\WhyQualify.jsx
"use client";

import { useEffect, useRef } from "react";

export default function WhyQualify({ bmi, weight, height }) {
  // calculate predicted weights
  const w = Number(weight);
  const sixMonth = (w * 0.88).toFixed(1);
  const sixteenMonth = (w * 0.79).toFixed(1);

  return (
    <section className="w-full bg-white pt-20 pb-40 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between min-h-[420px]">
          <div>
            <h2 className="text-[36px] font-semibold text-[#0D2A6B] mb-8">
              Why you qualify
            </h2>

            <div className="mb-10">
              <p className="text-[#B23A1F] font-semibold text-[20px]">
                Your BMI is {bmi} = you are at high risk
              </p>
              <p className="text-[#2E3D55] mt-3 leading-[1.75] text-[16px]">
                Based on your height ({height} cm) and weight ({weight} kg),
                your BMI places you at a higher risk for metabolic conditions.
              </p>
            </div>

            <div>
              <p className="text-[#B23A1F] font-semibold text-[20px]">
                Your calorie intake = high
              </p>
              <p className="text-[#2E3D55] mt-3 leading-[1.75] text-[16px]">
                You consume more calories than you burn. Treatment makes it
                easier to eat less without hunger.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="min-h-[420px] flex flex-col">

          <h3 className="text-[36px] font-semibold text-[#0D2A6B] mb-4">
            What to expect
          </h3>

          <GraphBox
            start={w}
            six={sixMonth}
            sixteen={sixteenMonth}
          />
        </div>
      </div>
    </section>
  );
}

function GraphBox({ start, six, sixteen }) {
  return (
    <div className="bg-[#E8F3FA] rounded-2xl p-6 pt-10 pb-12 overflow-visible">
      <Graph start={start} six={six} sixteen={sixteen} />
    </div>
  );
}

function Graph({ start, six, sixteen }) {
  const pathRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const bubble1 = bubble1Ref.current;
    const bubble2 = bubble2Ref.current;

    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // animate path
          path.style.transition = "stroke-dashoffset 1.8s ease";
          path.style.strokeDashoffset = "0";

          // animate bubbles
          bubble1.style.transition = "all 1s ease 0.4s";
          bubble1.style.opacity = 1;
          bubble1.style.transform = "scale(1)";

          bubble2.style.transition = "all 1s ease 0.8s";
          bubble2.style.opacity = 1;
          bubble2.style.transform = "scale(1)";

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(path);

  }, []);

  return (
    <svg width="100%" height="260" viewBox="0 0 350 260">

      {/* AXIS */}
      <line x1="20" y1="180" x2="335" y2="180" stroke="#000" strokeWidth="2" />
      <line x1="20" y1="40" x2="20" y2="180" stroke="#000" strokeWidth="2" />

      {/* ANIMATED CURVE */}
      <path
        ref={pathRef}
        d="M20 60 C 120 200, 240 160, 330 140"
        stroke="#7BB0C9"
        strokeWidth="4"
        fill="transparent"
      />

      {/* TEXT DYNAMIC VALUES */}
      <text x="25" y="50" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {start}kg
      </text>

      <text x="150" y="120" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {six}kg
      </text>

      <text x="280" y="150" fill="#0D2A6B" fontSize="16" fontWeight="bold">
        {sixteen}kg
      </text>

      {/* BUBBLE 1 */}
      <g
        ref={bubble1Ref}
        style={{ opacity: 0, transform: "scale(0.5)" }}
      >
        <circle cx="150" cy="145" r="20" fill="#0D2A6B" />
        <text x="143" y="150" fill="#FFF" fontSize="12" fontWeight="bold">
          -10%
        </text>
      </g>

      {/* BUBBLE 2 */}
      <g
        ref={bubble2Ref}
        style={{ opacity: 0, transform: "scale(0.5)" }}
      >
        <circle cx="265" cy="165" r="20" fill="#0D2A6B" />
        <text x="258" y="170" fill="#FFF" fontSize="12" fontWeight="bold">
          -21%
        </text>
      </g>

      {/* LABELS */}
      <text x="15" y="200" fontSize="14" fill="#0D2A6B">Day 1</text>
      <text x="140" y="200" fontSize="14" fill="#0D2A6B">6 Month</text>
      <text x="265" y="200" fontSize="14" fill="#0D2A6B">16 Month</text>
    </svg>
  );
}
