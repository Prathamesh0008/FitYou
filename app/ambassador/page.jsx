
"use client";

import { useRef } from "react";
import Hero from "@/components/ambassador/Hero";
import CanBeAmbassador from "@/components/ambassador/CanBeAmbassador";
import Roles from "@/components/ambassador/Roles";
import HowToBecome from "@/components/ambassador/HowToBecome";
import ApplicationForm from "@/components/ambassador/ApplicationForm";

export default function AmbassadorPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white min-h-screen w-full">
      <Hero scrollToForm={scrollToForm} />
      <CanBeAmbassador scrollToForm={scrollToForm} />
      <Roles scrollToForm={scrollToForm} />
      <HowToBecome />
      <div ref={formRef}>
        <ApplicationForm />
      </div>
    </main>
  );
}