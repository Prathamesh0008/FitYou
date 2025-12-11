//app\quiz\result\page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { QUESTIONS } from "../page";
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
    <div className="min-h-screen bg-[#F6FAFF] text-[#0D4F8B] font-laila flex flex-col">
      
      {/* GRADIENT HEADER */}
      <section className="w-full bg-gradient-to-b from-[#E8F4FB] to-[#F6FAFF] py-10 shadow-sm">
        <div className="w-full max-w-xl mx-auto px-4 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="flex items-center text-[#0D4F8B] hover:text-[#0D2451]"
          >
            <ChevronLeft size={24} />
          </button>

          <h1 className="text-3xl md:text-4xl font-semibold">
            Your medical summary
          </h1>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="w-full flex justify-center py-10 px-4">
        <div className="w-full max-w-xl space-y-8">

          {/* DOCTOR NOTE CARD */}
          <div className="bg-[#E8F4FB] border border-[#C8DDED] rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#0D4F8B] mb-2">
              A quick review of your information
            </h2>
            <p className="text-sm text-[#375C7A] leading-relaxed">
              These details help our medical team assess your health profile and determine the safest, most suitable treatment options for you.
            </p>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-2xl font-semibold text-[#0D2451]">Your Answers</h2>

          {/* ANSWER CARDS */}
          <div className="space-y-5">
            {QUESTIONS.filter(q => q.type !== "info").map((q, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E3ECF4] bg-white shadow-sm p-4 hover:shadow-md transition"
              >
                <h3 className="text-sm font-semibold text-[#0D4F8B] mb-1">
                  {q.title}
                </h3>
                <p className="text-sm text-[#375C7A]">
                  {formatAnswer(q)}
                </p>
              </div>
            ))}
          </div>

          {/* EXTRA DETAILS */}
          {extra.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-[#0D2451] mt-10">
                Additional Details
              </h2>

              <div className="space-y-5">
                {extra.map((sec, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#D9E8F3] bg-[#F9FBFF] p-5 shadow-sm"
                  >
                    <h3 className="text-md font-semibold text-[#0D4F8B] mb-3">
                      {sec.title}
                    </h3>

                    <div className="space-y-2">
                      {sec.items.map(([label, value], j) => (
                        <div key={j} className="flex justify-between text-sm">
                          <span className="text-[#375C7A] font-medium">
                            {label}:
                          </span>
                          <span className="text-[#0D2451]">
                            {value || "Not specified"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* BUTTON */}
          <button
            onClick={() =>
              router.push(
                `/recommendations?data=${encodeURIComponent(JSON.stringify(quiz))}`
              )
            }
            className="w-full rounded-lg py-3 bg-[#8DB9C9] hover:bg-[#7AA7B8] text-white text-sm font-semibold shadow-md transition"
          >
            Continue to Recommendations
          </button>

          <p className="text-center text-xs text-[#7C8CA3]">
            By continuing, you confirm that all information provided is accurate.
          </p>

        </div>
      </section>
    </div>
  );
}
