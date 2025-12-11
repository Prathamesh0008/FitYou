"use client";
import React from "react";
import Hero from "@/components/landing/Hero";
import Journey from "@/components/landing/Journey";
import HowToStart from "@/components/landing/HowToStart";
import Calculator from "@/components/landing/Calculator";
import FaqSection from "@/components/landing/FaqSection";
import Review from "@/components/landing/review";
import Science from "@/components/landing/science";
import Included from "@/components/landing/included";



const LandingPage = () => {
  return (
    <main>
      <Hero />
       <Science/>
       <Included/>
       <Calculator />
       <Journey /> 
       <HowToStart />
       <Review/>
       <FaqSection />
       
       
       
      {/* You can add more components below here */}
    </main>
  );
};

export default LandingPage;
