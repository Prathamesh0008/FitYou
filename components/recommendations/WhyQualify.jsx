"use client";

export default function WhyQualify({ bmi }) {
  return (
    <section className="w-full bg-white pt-20 pb-40 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        {/* LEFT — TEXT SECTION */}
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
                Obesity isn’t just a cosmetic concern—it increases risk of
                diabetes, heart issues, liver disease, sleep apnea and more.
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

        {/* RIGHT — WHAT TO EXPECT SECTION */}
        <div className="min-h-[420px] flex flex-col">
          
          {/* TITLE OUTSIDE BOX — LIKE AKTIVE */}
          <h3 className="text-[36px] font-semibold text-[#0D2A6B] mb-4">
            What to expect
          </h3>

          <GraphBox />
        </div>
      </div>
    </section>
  );
}

function GraphBox() {
  return (
    <div className="bg-[#E8F3FA] rounded-2xl p-6 pt-10 pb-12 overflow-visible">
      <Graph />
    </div>
  );
}

function Graph() {
  return (
    <svg
      width="100%"
      height="260"
      viewBox="0 0 350 260"
      className="overflow-visible"
    >
      {/* AXIS */}
      <line x1="20" y1="180" x2="335" y2="180" stroke="#000" strokeWidth="2" />
      <line x1="20" y1="40" x2="20" y2="180" stroke="#000" strokeWidth="2" />

      {/* CURVE */}
      <path
        d="M20 60 C 120 200, 240 160, 330 140"
        stroke="#7BB0C9"
        strokeWidth="4"
        fill="transparent"
      />

      {/* WEIGHTS */}
      <text x="25" y="50" fill="#0D2A6B" fontSize="16" fontWeight="bold">85kg</text>
      <text x="150" y="120" fill="#0D2A6B" fontSize="16" fontWeight="bold">77kg</text>
      <text x="280" y="150" fill="#0D2A6B" fontSize="16" fontWeight="bold">67kg</text>

      {/* BUBBLES */}
      <circle cx="150" cy="145" r="20" fill="#0D2A6B" />
      <text x="143" y="150" fill="#FFF" fontSize="12" fontWeight="bold">-10%</text>

      <circle cx="265" cy="165" r="20" fill="#0D2A6B" />
      <text x="258" y="170" fill="#FFF" fontSize="12" fontWeight="bold">-21%</text>

      {/* LABELS */}
      <text x="15" y="200" fontSize="14" fill="#0D2A6B">Day 1</text>
      <text x="140" y="200" fontSize="14" fill="#0D2A6B">6 Month</text>
      <text x="265" y="200" fontSize="14" fill="#0D2A6B">16 Month</text>
    </svg>
  );
}
