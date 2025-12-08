//FitYou\components\ourpartners\PartnersSection.jsx

"use client";

export default function PartnersSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* MAIN HEADING (CENTERED) */}
        <h1 className="text-5xl font-semibold text-[#002060] text-center">
          Our partners
        </h1>

        <div className="mt-16"></div>

        {/* ------------------------------------------------ */}
        {/* PARTNER DOCTOR SECTION (BLOCK CENTER, TEXT LEFT) */}
        {/* ------------------------------------------------ */}
        <div className="mx-auto max-w-xl text-left">
          
          {/* Heading LEFT aligned */}
          <h2 className="text-2xl font-semibold text-[#002060]">
            Our partner doctor
          </h2>

          <div className="mt-4 text-[#002060]">
            <p className="font-semibold underline">
              Dr. Rajat Gusani
            </p>

            <p className="mt-2">Experience: 12+ years</p>

            <p className="mt-1">
              Qualifications: M.B.B.S, M.S (General Surgery), FMAS
            </p>

            <p className="mt-1">
              Registration Number: G-58713
            </p>
          </div>
        </div>

        <div className="mt-16"></div>

        {/* ------------------------------------------------ */}
        {/* PARTNER PHARMACY SECTION (BLOCK CENTER, TEXT LEFT) */}
        {/* ------------------------------------------------ */}
        <div className="mx-auto max-w-xl text-left">
          
          {/* Heading LEFT aligned */}
          <h2 className="text-2xl font-semibold text-[#002060]">
            Our partner pharmacy
          </h2>

          <div className="mt-4 text-[#002060]">
            <p className="font-semibold">
              Medicament Solutions Private Limited
            </p>

            <p className="mt-2">First Floor, Office No 145, Atlantis K10B</p>
            <p>Sarabhi Main Road, Near Genda Circle</p>
            <p>Opp Honest Restaurant</p>
            <p>Vadodara, 390023</p>

            <p className="mt-2">
              Drug License Number: GJ-VAD-229698, GJ-VAD-229699, 
              GJ-VAD-229700, GJ-VAD-229701
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}