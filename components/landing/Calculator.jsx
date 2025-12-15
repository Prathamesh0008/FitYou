"use client";
import React, { useState } from "react";
import Link from "next/link";
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
    <section className={`bg-white py-16 md:py-24 ${laila.variable} ${raleway.variable} font-raleway`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          {/* LEFT SIDE: Percentage Display */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[#002074] text-lg md:text-xl font-semibold block mb-1">Upto</span>
              <h2 className="text-[#002074] text-[100px] md:text-[140px] font-bold font-laila leading-none">
                21%
              </h2>
              <p className="text-[#002074] text-sm md:text-base mt-2 font-medium">
                body weight reduction
              </p>
            </div>

            <div className="w-32 md:w-40 -rotate-12 transform">
              <img 
                src="/landing/penti.svg" 
                alt="Weight loss pen" 
                className="w-full h-auto "
              />
            </div>
          </div>

          {/* RIGHT SIDE: Calculator Card */}
          <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,32,116,0.08)] p-6 md:p-8 border border-gray-100">
              
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-[#002074] text-xl md:text-2xl font-bold mb-2">
                  Weight Loss Calculator
                </h3>
                <p className="text-gray-600 text-sm">
                  See how much weight you could potentially lose
                </p>
              </div>

              {/* Weight Display */}
              <div className="flex justify-between items-center mb-6 p-4 bg-[#f8faff] rounded-xl">
                <div>
                  <label className="text-[#002074] text-sm font-medium block mb-1">
                    Current Weight
                  </label>
                  <p className="text-gray-500 text-xs">Adjust the slider below</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline">
                    <span className="text-[#002074] text-3xl md:text-4xl font-bold font-laila">{weight}</span>
                    <span className="text-[#002074] text-lg ml-1 font-medium">kg</span>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="mb-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>40kg</span>
                  <span>200kg</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="40"
                    max="200"
                    step="1"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <style jsx>{`
                    .slider::-webkit-slider-thumb {
                      appearance: none;
                      height: 24px;
                      width: 24px;
                      border-radius: 50%;
                      background: white;
                      border: 3px solid #002074;
                      cursor: pointer;
                      box-shadow: 0 2px 10px rgba(0, 32, 116, 0.3);
                      transition: all 0.2s;
                    }
                    .slider::-webkit-slider-thumb:hover {
                      transform: scale(1.1);
                      box-shadow: 0 4px 15px rgba(0, 32, 116, 0.4);
                    }
                    .slider {
                      background: linear-gradient(to right, #9BCDD2 ${((weight - 40) / 160) * 100}%, #E5E7EB ${((weight - 40) / 160) * 100}%);
                    }
                  `}</style>
                </div>
              </div>

              {/* Result Card */}
              <div className="bg-gradient-to-r from-[#f0f9fb] to-[#e6f4f6] rounded-xl p-5 border border-[#9BCDD2]/30">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#002074] text-sm font-medium mb-1">
                      Potential Weight Loss
                    </p>
                    <p className="text-[#002074]/70 text-xs">
                      Based on our clinical data
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline">
                      <span className="text-[#002074] text-3xl md:text-4xl font-bold font-laila">{loss}</span>
                      <span className="text-[#002074] text-lg ml-1 font-medium">kg</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Text */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs leading-relaxed max-w-sm mx-auto mb-4">
                Our treatment should be taken alongside a healthy diet and lifestyle. 
                Because everybody is different, individual results vary and depend on lifestyle.
              </p>

              <p className="text-[#002074] text-lg font-medium mb-4">
                Take the quiz. It's free.
              </p>

              <Link href="/quiz" className="block">
                <button className="w-full bg-[#9BCDD2] hover:bg-[#8abfc4] text-[#002074] font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition-colors duration-300 cursor-pointer">
                  Do I qualify for treatment?
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-[#002074] text-lg font-medium max-w-md mx-auto">
            Average weight loss in 16 months. Curious as to how much you could lose?
          </p>
        </div>
      </div>
    </section>
  );
}