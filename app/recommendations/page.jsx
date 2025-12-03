"use client";

import { useSearchParams } from "next/navigation";

import DoctorBox from "@/components/recommendations/DoctorBox";
import IncludedBox from "@/components/recommendations/IncludedBox";
import WhyQualify from "@/components/recommendations/WhyQualify";
import ActionSteps from "@/components/recommendations/ActionSteps";
import Milestones from "@/components/recommendations/Milestones";
import MiddleImage from "@/components/recommendations/MiddleImage";


export default function RecommendationsPage() {
  const params = useSearchParams();

  const weight = params.get("weight");
  const height = params.get("height");

  const bmi = weight && height
    ? +(Number(weight) / ((Number(height) / 100) ** 2)).toFixed(1)
    : null;

  return (
    <div className="bg-[#F7FAFF] text-[#0D4F8B] min-h-screen pb-20">

      {/* DOCTOR HEADER */}
      <DoctorBox />

      {/* INCLUDED IN YOUR BOX */}
      <IncludedBox />

      <WhyQualify bmi={bmi} />

<MiddleImage />

<ActionSteps />

      {/* MILESTONES */}
      <Milestones />

    </div>
  );
}
