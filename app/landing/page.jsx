// app/landing/page.jsx
import React from "react";
import Hero from "@/components/landing/Hero";
import Journey from "@/components/landing/Journey";
import HowToStart from "@/components/landing/HowToStart";
import Calculator from "@/components/landing/Calculator";
import FaqSection from "@/components/landing/FaqSection";
import Review from "@/components/landing/review";
import Science from "@/components/landing/science";
import Included from "@/components/landing/included";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Science/>
      <Included/>
      <Calculator />
      <Journey /> 
      <HowToStart />
      <Review/>
      <FaqSection />
    </div>
  );
}