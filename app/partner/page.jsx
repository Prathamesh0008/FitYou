// FitYou\app\partner\page.jsx
"use client";

import { useRef } from "react";
import Hero from "@/components/partner/Hero";
import InfoSection from "@/components/partner/InfoSection";
import PartnerForm from "@/components/partner/PartnerForm";

export default function PartnerPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero scrollToForm={scrollToForm} />
      <InfoSection />
      <div ref={formRef}>
        <PartnerForm />
      </div>
    </main>
  );
}