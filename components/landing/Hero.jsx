"use client";
import React from "react";
import { Laila, Raleway } from "next/font/google";
import { Scale, Syringe, Package } from "lucide-react";
import Link from "next/link";

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
      className={`relative w-full h-screen md:h-screen max-h-[750px] flex items-center 
      ${laila.variable} ${raleway.variable} font-raleway overflow-hidden`}
    >
      {/* Single image that covers entire screen */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/landing/heroimg1.svg"
            alt="Weight loss banner mobile"
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
        </div>
        
        {/* Desktop image - full screen */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/landing/heroimg2.svg"
            alt="Weight loss banner desktop"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Dark overlay - stronger on right side where text is */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent
          md:bg-gradient-to-r md:from-transparent md:via-black/40 md:to-black/60"></div>
      </div>

      {/* Container - centered but content pushed to right on desktop */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 h-full flex items-center">
        
        {/* Empty space on left for image (on desktop) */}
        <div className="hidden md:block w-1/2"></div>
        
        {/* Content container on RIGHT side with LEFT-aligned text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-[70px] leading-[1.1] font-semibold text-white mb-8 font-laila">
            Weight loss,<br />
            made easy
          </h1>

          {/* Features list - left aligned inside container */}
          <div className="space-y-3 mb-10 max-w-[320px]">
            {[
              { icon: Scale, text: "Lose upto 21% body weight" },
              { icon: Syringe, text: "Once-weekly treatment" },
              { icon: Package, text: "Get free doorstep delivery" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-xl border border-white/40
                  backdrop-blur-[7.5px] 
                  shadow-lg   hover:shadow-xl hover:border-white/60
                  w-full "
              >
                <div className="p-1  ">
                  <item.icon className="w-6 h-6 text-white stroke-[1.5]" />
                </div>
                <span className="text-white text-base font-semibold tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button - left aligned */}
          <Link href="/quiz" className="block w-full md:w-[300px]">
            <button 
              className="w-full bg-[#002074] hover:bg-[#001a5c] text-white 
                font-bold text-lg py-3 px-8 transition-all duration-300 shadow-lg 
                hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0
                rounded-lg"
            >
              Get started
            </button>
          </Link>
          
          {/* Trust indicator - left aligned */}
          <p className="mt-6 text-white/90 text-sm font-medium max-w-[300px]">
            Trusted by over 12,000 people on their weight loss journey
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}