// app/program/page.jsx

import React from "react";
import HeroSection from "@/components/weight-loss/HeroSection";
import SupportSection from "@/components/weight-loss/supportsection";
import FaqSection from "@/components/weight-loss/FaqSection";
import InfoAccordionSection from "@/components/weight-loss/InfoAccordionSection";
import Goal from "@/components/weight-loss/goal";

export default function ProgramPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      <HeroSection />
      <Goal />
      <InfoAccordionSection />
      <SupportSection />
      <FaqSection />
    
    </main>
  );
}