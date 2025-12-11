"use client";
import React from "react";
import { Laila, Raleway } from "next/font/google";
import { Scale, Syringe, Package } from "lucide-react";

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

export default function Hero() {
  return (
    <section
      className={`relative w-full h-screen md:h-screen max-h-[900px] flex items-center 
      bg-cover bg-[left_center] md:bg-[center_top]
      ${laila.variable} ${raleway.variable} font-raleway
      bg-[url('/landing/heroimg2.svg')] md:bg-[url('/landing/heroimg1.svg')]`}
    >
      <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        
        {/* WRAPPER NOW CENTERED */}
        <div className="max-w-lg w-full ml-auto mr-4 text-center md:mr-15">

          <h1 className="text-5xl md:text-[70px] leading-[1.1] font-semibold text-white mb-8 font-laila">
            Weight loss,<br />
            made easy
          </h1>

          {/* Center list + button block */}
          <div className="space-y-3 mb-10 md:max-w-[380px] mx-auto">

            {/* Feature 1 */}
            <div className="flex items-center gap-3 p-2 rounded-xl border border-white/40
              backdrop-blur-[7.5px] bg-gradient-to-tr from-black/10 to-white/30 shadow-sm
              transition-transform hover:scale-105 mx-auto w-full">
              <div className="p-1">
                <Scale className="w-6 h-6 text-white stroke-[1.5]" />
              </div>
              <span className="text-white text-base font-semibold tracking-wide">
                Lose upto 21% body weight
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 p-2 rounded-xl border border-white/40
              backdrop-blur-[7.5px] bg-gradient-to-tr from-black/10 to-white/30 shadow-sm
              transition-transform hover:scale-105 mx-auto w-full">
              <div className="p-1">
                <Syringe className="w-6 h-6 text-white stroke-[1.5]" />
              </div>
              <span className="text-white text-base font-semibold tracking-wide">
                Once-weekly treatment
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 p-2 rounded-xl border border-white/40
              backdrop-blur-[7.5px] bg-gradient-to-tr from-black/10 to-white/30 shadow-sm
              transition-transform hover:scale-105 mx-auto w-full">
              <div className="p-1">
                <Package className="w-6 h-6 text-white stroke-[1.5]" />
              </div>
              <span className="text-white text-base font-semibold tracking-wide">
                Get free doorstep delivery
              </span>
            </div>

          </div>

          {/* BUTTON CENTERED EXACTLY BELOW LIST */}
          <button className="w-full md:w-[280px] bg-[#9BCDD2] hover:bg-[#8abfc4] text-[#002074] 
            font-bold text-lg py-3 px-20 transition-colors shadow-lg mx-auto block">
            Get started
          </button>

        </div>
      </div>
    </section>
  );
}
