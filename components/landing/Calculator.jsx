"use client";
import React, { useState } from "react";
import { Laila, Raleway } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-laila",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export default function Calculator() {
  const [weight, setWeight] = useState(70);

  const calculateLoss = (w) => {
    if (w < 40) return 8;
    const extraWeight = w - 40;
    const extraLoss = Math.floor(extraWeight / 5);
    return 8 + extraLoss;
  };

  const loss = calculateLoss(weight);

  return (
    <section className={`bg-[#F4FAFD] py-16 md:py-24 ${laila.variable} ${raleway.variable} font-raleway`}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* LEFT SIDE: Text + Pen Image */}
        <div className="flex items-center gap-4 px-2 md:px-0">
          <div className="text-right">
            <span className="text-[#002074] text-xl block mb-0">Upto</span>
            <h2 className="text-[#002074] text-[120px] md:text-[160px] font-bold font-laila leading-none">
              21%
            </h2>
          </div>

          <div className="w-24 md:w-32 -rotate-12">
            <img 
              src="/landing/pen.png" 
              alt="Weight loss pen" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Calculator Card */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 border border-gray-100">
            
            {/* Input Row */}
            <div className="flex justify-between items-start mb-8">
              <label className="text-[#002074] text-lg leading-tight">
                Select your<br />current weight
              </label>
              <div className="text-right">
                <span className="text-[#002074] text-4xl font-bold font-laila">{weight}</span>
                <span className="text-[#002074] text-xl ml-1">kg</span>
              </div>
            </div>

           {/* Slider */}
<div className="relative mb-10">
  <input
    type="range"
    min="40"
    max="200"
    step="1"
    value={weight}
    onChange={(e) => setWeight(parseInt(e.target.value))}
    className="w-full h-2 pt-2 rounded-lg appearance-none slider-track"
    style={{
      background: `linear-gradient(to right, #002074 ${(weight - 40) / 1.6}%, #E5E7EB ${(weight - 40) / 1.6}%)`,
    }}
  />

  <style jsx>{`
    .slider-track::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: #ffffff;
      border: 3px solid #002074;
      cursor: pointer;
      margin-top: -10px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
    .slider-track::-moz-range-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: #ffffff;
      border: 3px solid #002074;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
  `}</style>
</div>

            {/* Result Row */}
            <div className="flex justify-between items-center pt-2 border-t border-transparent">
              <label className="text-[#002074] text-lg font-bold leading-tight">
                Weight you<br />could lose (kg):
              </label>
              <div className="text-right">
                <span className="text-[#002074] text-4xl font-bold font-laila">{loss}</span>
                <span className="text-[#002074] text-xl ml-1">kg</span>
              </div>
            </div>

          </div>

          {/* Footer Text */}
          <p className="text-gray-500 text-xs text-center mt-6 leading-relaxed max-w-xs mx-auto">
            Our treatment should be taken alongside a healthy diet and lifestyle. Because everybody is different, individual results vary and depend on lifestyle.
          </p>

          <p className="text-[#002074] text-center text-lg mt-6 mb-4">
            Take the quiz. It’s free.
          </p>

          <button href="/quiz" className="w-full bg-[#9BCDD2] hover:bg-[#8abfc4] text-[#002074] font-bold text-lg py-4 rounded-lg shadow-md transition-colors">
            Do I qualify for treatment?
          </button>

        </div>

      </div>

      <div className="container mx-auto px-4 md:px-12 mt-12 text-center md:text-left">
        <p className="text-[#002074] text-lg max-w-md md:ml-24">
          weight loss in 16 months. Curious as to how much you could lose?
        </p>
      </div>

    </section>
  );
}
