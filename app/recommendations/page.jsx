//FitYou\app\recommendations\page.jsx
"use client";
import { useSearchParams } from "next/navigation";
import DoctorBox from "@/components/recommendations/DoctorBox";
import IncludedBox from "@/components/recommendations/IncludedBox";
import WhyQualify from "@/components/recommendations/WhyQualify";
import ActionSteps from "@/components/recommendations/ActionSteps";
import Milestones from "@/components/recommendations/Milestones";
import MiddleImage from "@/components/recommendations/MiddleImage";
import NewsSection from "@/components/NewsSection";
import Semaglutide from "@/components/recommendations/semaglutide.jsx";
import Semafaq from "@/components/recommendations/semafaqs.jsx";


export default function RecommendationsPage() {
  const params = useSearchParams();

  const weight = params.get("weight");
  const height = params.get("height");
  const type=params.get("type")
  


  const bmi =
    weight && height
      ? +(Number(weight) / ((Number(height) / 100) ** 2)).toFixed(1)
      : null;

  return (
    <div className="bg-[#F7FAFF] text-[#0D4F8B] min-h-screen pb-20">
      <DoctorBox />
      <IncludedBox  type={type} prefer={params.get("prefer")} />
      <WhyQualify />
      <MiddleImage />
      <ActionSteps />
      <Milestones />
      <Semaglutide/>
      <Semafaq/>
      <NewsSection />
    </div>
  );
}