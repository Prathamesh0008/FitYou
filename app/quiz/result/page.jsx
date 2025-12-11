//app\quiz\result\page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {QUESTIONS}  from "../page";
import { ChevronLeft } from "lucide-react";

export default function QuizResultPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [quiz, setQuiz] = useState(null);

  // Load quiz data
  useEffect(() => {
    const raw = params.get("data");
    if (!raw) return router.push("/quiz");

    try {
      setQuiz(JSON.parse(raw));
    } catch (err) {
      router.push("/quiz");
    }
  }, []);

  const formatAnswer = (q) => {
    if (!quiz) return "Not answered";

    const value = quiz[q.id];

    switch (q.type) {
      case "height":
        return quiz.heightFeet
          ? `${quiz.heightFeet} ft ${quiz.heightInches} in (${quiz.heightCm} cm)`
          : "Not answered";
      case "weight":
        return quiz.weightKg ? `${quiz.weightKg} kg` : "Not answered";
      case "date":
        return quiz.lastWeightDate || "Not answered";
      case "checkboxes":
        return quiz.majorConditions?.length
          ? quiz.majorConditions.join(", ")
          : "None";
      default:
        return value || "Not answered";
    }
  };

  const buildExtraSections = () => {
    if (!quiz) return [];

    const sections = [];

    if (quiz.prevMeds === "Yes") {
      sections.push({
        title: "Previous Medication Details",
        items: [
          ["Medication", quiz.prevMeds_recent],
          ["Dosage", quiz.prevMeds_dose],
          ["Last Used", quiz.prevMeds_lastUsed],
          ["Duration", quiz.prevMeds_duration],
          ["Weight Lost", quiz.prevMeds_weightLost],
          ["Side Effects", quiz.prevMeds_sideEffects],
          ["Side Effects Details", quiz.prevMeds_sideEffectsList],
        ],
      });
    }

    if (quiz.highBp === "Yes") {
      sections.push({
        title: "High Blood Pressure Details",
        items: [
          ["Medication", quiz.bpMedication],
          ["Last Reading", quiz.bpReading],
        ],
      });
    }

    if (quiz.diabetes === "Yes") {
      sections.push({
        title: "Diabetes Details",
        items: [
          ["Type", quiz.diabetesType],
          ["Medication", quiz.diabetesMedication],
        ],
      });
    }

    if (quiz.thyroid === "Yes") {
      sections.push({
        title: "Thyroid Details",
        items: [["Levothyroxine Dose", quiz.thyroidDose]],
      });
    }

    return sections;
  };

  const extra = buildExtraSections();

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#0D4F8B]">
        Loading...
      </div>
    );
  }
return (
  <div className="min-h-screen bg-[#FFFDFB] text-[#0A2A5F] font-laila flex flex-col">

    {/* HEADER */}
    {/* HEADER — FITYOU BLUE GRADIENT */}
<section className="w-full bg-gradient-to-b from-[#E8F4FB] to-[#F6FAFF] border-b border-[#DDE7F0] py-6">
  <div className="max-w-md mx-auto px-4 flex items-center gap-4">
    <button
      onClick={() => router.back()}
      className="p-2 rounded-full hover:bg-[#E3EDF7] transition"
    >
      <ChevronLeft size={22} className="text-[#0D4F8B]" />
    </button>

    <h1 className="text-2xl font-bold text-[#0D4F8B]">
      Your medical summary
    </h1>
  </div>
</section>

    {/* MAIN CONTENT */}
    <section className="w-full flex justify-center py-8 px-4">
      <div className="w-full max-w-md space-y-8">

        {/* INTRO */}
        <div className="bg-[#FFF8F3] border border-[#FFE2CC] rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1 text-[#0A2A5F]">
            A quick review of your information
          </h2>
          <p className="text-xs text-[#6A4A3F] leading-relaxed">
            These details help our medical team assess your health profile and determine the safest recommendations.
          </p>
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-[#0A2A5F]">
          Your answers
        </h2>

        {/* ANSWERS */}
        <div className="space-y-6">
          {QUESTIONS.filter(q => q.type !== "info").map((q, i) => {
            const userAnswer = formatAnswer(q);
            const isYesNo = ["Yes", "No"].includes(userAnswer);

            return (
              <div key={i} className="space-y-2">

                {/* QUESTION */}
                <p className="text-[15px] font-semibold text-[#0A2A5F]">
                  {q.title}
                </p>

                {/* ANSWERS COMPACT */}
                {isYesNo ? (
                  <div className="flex gap-3">

                    {/* YES */}
                    <div
                      className={`
                        flex-1 text-center py-2 rounded-lg text-sm border
                        ${
                          userAnswer === "Yes"
                            ? "bg-[#FFC9A2] border-[#FFB88C]"
                            : "bg-white border-[#D9D9D9]"
                        }
                      `}
                    >
                      Yes
                    </div>

                    {/* NO */}
                    <div
                      className={`
                        flex-1 text-center py-2 rounded-lg text-sm border
                        ${
                          userAnswer === "No"
                            ? "bg-[#FFC9A2] border-[#FFB88C]"
                            : "bg-white border-[#D9D9D9]"
                        }
                      `}
                    >
                      No
                    </div>
                  </div>
                ) : (
                  <div className="inline-block bg-white border border-[#DADADA] py-2 px-4 rounded-lg text-sm text-[#6A4A3F]">
                    {userAnswer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* EXTRA DETAILS */}
        {extra.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[#0A2A5F] mt-6">
              Additional details
            </h2>

            <div className="space-y-4">
              {extra.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFF8F3] border border-[#FFE2CC] p-5 rounded-xl"
                >
                  <h3 className="text-md font-semibold text-[#0A2A5F] mb-2">
                    {sec.title}
                  </h3>

                  {sec.items.map(([label, value], j) => (
                    <div key={j} className="flex justify-between text-xs text-[#6A4A3F] py-1">
                      <span className="font-medium">{label}</span>
                      <span>{value || "Not specified"}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {/* BUTTON */}
        <button
          onClick={() =>
            router.push(`/recommendations?data=${encodeURIComponent(JSON.stringify(quiz))}`)
          }
          className="w-full py-3 rounded-lg bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold shadow"
        >
          Continue to Recommendations
        </button>

        <p className="text-center text-[10px] text-[#8D7668]">
          By continuing, you confirm the information is accurate.
        </p>
      </div>
    </section>
  </div>
);


}
