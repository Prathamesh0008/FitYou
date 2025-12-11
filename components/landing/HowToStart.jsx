"use client";
import React from "react";
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

const steps = [
  {
    id: 1,
    title: "Take our quiz",
    description: "Take a quick medical quiz to see if you’re eligible for treatment",
    image: "/landing/start1.png",
  },
  {
    id: 2,
    title: "Get treatment plan",
    description: "If eligible, our partner doctor will create a treatment plan for you",
    image: "/landing/start2.png",
  },
  {
    id: 3,
    title: "Receive doorstep delivery",
    description: "Your plan will be delivered right to your doorstep. No delivery costs",
    image: "/landing/start3.png",
  },
  {
    id: 4,
    title: "See visible results",
    description: "As you continue with our programme, you will see visible weight loss",
    image: "/landing/start4.png",
  },
];

export default function HowToStart() {
  return (
    <section className={`bg-white py-12 md:py-20 ${laila.variable} ${raleway.variable} font-raleway`}>
      <div className="container mx-auto px-4 md:px-12">
        
        <h2 className="text-[#002074] text-3xl md:text-[40px] font-bold font-laila text-center mb-8 md:mb-10">
          Interested? Here’s how to start
        </h2>

        <div className="
  flex flex-nowrap
  overflow-x-auto md:overflow-visible
  snap-x snap-mandatory
  gap-4 md:gap-8
  scrollbar-hide
  md:flex-wrap md:justify-center
">
  {steps.map((step) => (
    <div 
      key={step.id}
      className="
        relative 
        min-w-[75vw]            /* MOBILE scroll width */
        h-[320px]               
        
        md:min-w-[260px]        /* DESKTOP */
        md:h-[300px]            /* DESKTOP */
        
        rounded-2xl overflow-hidden 
        snap-center 
        group shadow-md
      "
    >
      <img 
        src={step.image} 
        alt={step.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-5 text-white">
        <h3 className="text-lg md:text-base font-bold font-laila mb-1">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed opacity-90">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
