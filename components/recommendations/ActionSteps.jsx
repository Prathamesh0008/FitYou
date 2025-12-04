//FitYou\components\recommendations\ActionSteps.jsx
"use client";

export default function ActionSteps() {
  return (
    <section className="w-full bg-[#FFF7EA] pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE BELOW IMAGE */}
        <h2 className="text-[36px] font-semibold text-[#0D2A6B] mb-12">
          What do you need to do?
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          <Step title="Take 1 tablet daily"
            desc="It will reduce your appetite—you will eat less without hunger." />

          <Step title="Eat sensibly"
            desc="No strict calorie counting. Our meal plan helps you stay consistent." />

          <Step title="Be active"
            desc="Light exercise 3× per week—no gym required." />

          <Step title="Ask for support"
            desc="Our experts guide you with personalised advice anytime." />
        </div>
      </div>
    </section>
  );
}

function Step({ title, desc }) {
  return (
    <div className="text-left">

      {/* Heading wrapper with fixed height so all titles align horizontally */}
      <div className="h-[58px] flex flex-col justify-end">
        <p className="font-semibold text-[#0D2A6B] text-[18px] mb-2 w-max relative">
          {title}
          <span className="block h-[3px] bg-[#E6A77A] mt-1 rounded-full"></span>
        </p>
      </div>

      {/* Description */}
      <p className="text-[#52617A] text-[15px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

