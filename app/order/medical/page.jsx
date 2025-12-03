// FitYou/app/order/medical/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MedicalQuestions() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    diabetes: "",
    heart: "",
    bloodPressure: "",
    thyroid: "",
    pregnancy: "",
    meds: "",
  });

  function update(key, value) {
    setAnswers({ ...answers, [key]: value });
  }

  const cardClass =
    "bg-white border border-[#D6E4F2] rounded-xl p-4 md:p-5 space-y-3";

  const pillBase =
    "px-4 py-2 rounded-full text-sm border transition cursor-pointer";
  const pillActive =
    "bg-[#0D4F8B] text-white border-[#0D4F8B]";
  const pillInactive =
    "bg-white text-[#0D4F8B] border-[#C2D5EA] hover:bg-[#F1F6FC]";

  return (
    <section className="min-h-screen bg-[#F7FBFF] pt-28 pb-20">
      <div className="max-w-xl mx-auto px-6">
        {/* Step indicator */}
        <button
            onClick={() => router.back()}
            className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
            >
            &larr; Step 3 of 4
            </button>


        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#0D4F8B] mb-4">
          Medical questions
        </h1>

        <p className="text-[15px] text-[#375C7A] leading-[1.8] mb-8">
          These details help the doctor confirm that this treatment is safe for
          you. All questions marked with <span className="text-[#C94A2F]">*</span> are mandatory.
        </p>

        <div className="space-y-4">
          {/* Q1: Diabetes */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Do you have diabetes? <span className="text-[#C94A2F]">*</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("diabetes", "yes")}
                className={
                  pillBase +
                  " " +
                  (answers.diabetes === "yes" ? pillActive : pillInactive)
                }
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => update("diabetes", "no")}
                className={
                  pillBase +
                  " " +
                  (answers.diabetes === "no" ? pillActive : pillInactive)
                }
              >
                No
              </button>
            </div>
          </div>

          {/* Q2: Heart problems */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Have you ever been diagnosed with any heart condition?{" "}
              <span className="text-[#C94A2F]">*</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("heart", "yes")}
                className={
                  pillBase +
                  " " +
                  (answers.heart === "yes" ? pillActive : pillInactive)
                }
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("heart", "no")}
                className={
                  pillBase +
                  " " +
                  (answers.heart === "no" ? pillActive : pillInactive)
                }
              >
                No
              </button>
            </div>
          </div>

          {/* Q3: Blood pressure */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Do you have high blood pressure or take BP medication?{" "}
              <span className="text-[#C94A2F]">*</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("bloodPressure", "yes")}
                className={
                  pillBase +
                  " " +
                  (answers.bloodPressure === "yes" ? pillActive : pillInactive)
                }
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("bloodPressure", "no")}
                className={
                  pillBase +
                  " " +
                  (answers.bloodPressure === "no" ? pillActive : pillInactive)
                }
              >
                No
              </button>
            </div>
          </div>

          {/* Q4: Thyroid */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Have you been diagnosed with any thyroid condition?{" "}
              <span className="text-[#C94A2F]">*</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("thyroid", "yes")}
                className={
                  pillBase +
                  " " +
                  (answers.thyroid === "yes" ? pillActive : pillInactive)
                }
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("thyroid", "no")}
                className={
                  pillBase +
                  " " +
                  (answers.thyroid === "no" ? pillActive : pillInactive)
                }
              >
                No
              </button>
            </div>
          </div>

          {/* Q5: Pregnancy (optional based on gender, but UI only here) */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Are you pregnant, breastfeeding, or planning a pregnancy?{" "}
              <span className="text-[#C94A2F]">*</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => update("pregnancy", "yes")}
                className={
                  pillBase +
                  " " +
                  (answers.pregnancy === "yes" ? pillActive : pillInactive)
                }
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("pregnancy", "no")}
                className={
                  pillBase +
                  " " +
                  (answers.pregnancy === "no" ? pillActive : pillInactive)
                }
              >
                No
              </button>
              <button
                type="button"
                onClick={() => update("pregnancy", "notApplicable")}
                className={
                  pillBase +
                  " " +
                  (answers.pregnancy === "notApplicable"
                    ? pillActive
                    : pillInactive)
                }
              >
                Not applicable
              </button>
            </div>
          </div>

          {/* Q6: Medications (free text) */}
          <div className={cardClass}>
            <p className="font-semibold text-sm text-[#0D4F8B]">
              Are you currently taking any regular medicines?{" "}
              <span className="text-[#C94A2F]">*</span>
            </p>

            <textarea
              rows={3}
              className="w-full border border-[#D6E4F2] rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#A3C7D9] resize-none"
              placeholder="Please list names and doses, or write 'None'."
              value={answers.meds}
              onChange={(e) => update("meds", e.target.value)}
            />
          </div>
        </div>

        {/* Continue button (Step 4 could be summary/payment later) */}
        <button
          onClick={() => router.push("/order/confirm")}
          className="w-full mt-10 bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
