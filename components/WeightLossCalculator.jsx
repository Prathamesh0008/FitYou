"use client";

import { useState } from "react";
import Link from "next/link";
import CustomSelect from "@/components/CustomSelect";

export default function WeightLossCalculator() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [sixMonthResult, setSixMonthResult] = useState("?");
  const [sixteenMonthResult, setSixteenMonthResult] = useState("?");

  const weightOptions = Array.from({ length: 131 }, (_, i) => `${70 + i} kg`);
  const feetOptions = ["4 ft", "5 ft", "6 ft", "7 ft"];
  const inchOptions = Array.from({ length: 12 }, (_, i) => `${i} in`);

  const calculate = () => {
    if (!weight || !feet || !inches) return alert("Please fill all fields");

    const numericWeight = Number(weight);
    const numericFeet = Number(feet);
    const numericInch = Number(inches);

    const heightCm = numericFeet * 30.48 + numericInch * 2.54;

    const sixMonths = (numericWeight * 0.88).toFixed(1);
    const sixteenMonths = (numericWeight * 0.79).toFixed(1);

    setSixMonthResult(sixMonths);
    setSixteenMonthResult(sixteenMonths);
  };

  return (
    <section className="relative overflow-hidden py-44">
      {/* BACKGROUND WAVE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9F3FF] to-white">
        <svg className="absolute top-0 w-full opacity-80" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,74.7C840,53,960,75,1080,112C1200,149,1320,203,1380,229.3L1440,256V0H0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl  text-[#0D4F8B] leading-snug">
            A proven result of{" "}
            <span className="font-extrabold">21% weight loss</span>{" "}
            in 16 months. Curious as to how much you could lose?
          </h2>

          <p className="mt-6 text-sm text-[#375C7A]">Take the quiz. It’s free.</p>

          <div className="mt-6 flex flex-col gap-4 w-full max-w-sm">
            <Link
              href="/quiz"
              className="w-full bg-[#0D4F8B] hover:bg-[#0A3E70] transition text-white font-semibold text-sm py-3 rounded-md text-center shadow-md"
            >
              Do I qualify for treatment?
            </Link>

            <Link
              href="/program"
              className="w-full border border-[#F7CFA0] bg-[#FFF4E6] hover:bg-[#FFE5C7] transition text-[#0D4F8B] font-semibold text-sm py-3 rounded-md text-center"
            >
              View our programme
            </Link>
          </div>
        </div>

        {/* RIGHT – CALCULATOR */}
        <div className="rounded-2xl p-8 shadow-xl bg-white border border-[#D3E1F4]">

          {/* WEIGHT SELECT */}
          <div>
            <label className="text-sm font-medium text-[#0D4F8B] ">
              Your current weight
            </label>
            <CustomSelect
              value={weight ? weight + " kg" : ""}
              onChange={(v) => setWeight(v.split(" ")[0])}
              options={weightOptions}
              placeholder="Select weight"
            />
          </div>

          {/* HEIGHT SELECT */}
          <div className="mt-4">
            <label className="text-sm font-medium text-[#0D4F8B]">
              Your height
            </label>

            <div className="flex gap-2 mt-1">

              <CustomSelect
                value={feet ? feet + " ft" : ""}
                onChange={(v) => setFeet(v.split(" ")[0])}
                options={feetOptions}
                placeholder="Feet"
              />

              <CustomSelect
                value={inches ? inches + " in" : ""}
                onChange={(v) => setInches(v.split(" ")[0])}
                options={inchOptions}
                placeholder="Inches"
              />

            </div>
          </div>

          {/* CALCULATE BUTTON */}
          <button
            onClick={calculate}
            className="mt-6 w-full bg-[#FFF4E6] border border-[#F7CFA0]
            hover:bg-[#FFE5C7] transition text-[#0D4F8B]
            font-semibold py-3 rounded-md text-sm"
          >
            Calculate
          </button>

          {/* RESULTS */}
          <div className="mt-5 flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#0D4F8B]">Your weight in 6 months:</span>
              <span className="w-16 h-9 rounded-md border border-[#F7CFA0] flex items-center justify-center text-[#0D4F8B]">
                {sixMonthResult}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#0D4F8B]">Your weight in 16 months:</span>
              <span className="w-16 h-9 rounded-md border border-[#F7CFA0] flex items-center justify-center text-[#0D4F8B]">
                {sixteenMonthResult}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
