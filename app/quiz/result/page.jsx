"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "../questions";   
import ReviewRenderer from "@/components/review/ReviewRenderer";

export default function QuizResultPage() {
  const [quiz, setQuiz] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("fityou_quiz_answers");
    if (data) setQuiz(JSON.parse(data));
  }, []);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#0D4F8B]">
        Loading your results...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0D4F8B] font-laila">

      {/* HEADER (BLUE) */}
      <section className="w-full bg-[#F2F8FD] py-10">
        <div className="w-full max-w-xl mx-auto px-4 flex items-center gap-3">

          {/* TEXT ARROW  <—  */}
          <button
            onClick={() => router.push("/recommendations")}
            className="text-[28px] font-bold leading-none hover:opacity-70"
          >
            &larr;
          </button>

          <h1 className="text-3xl md:text-4xl font-semibold">
            Your medical summary
          </h1>

        </div>
      </section>

      {/* FULL WHITE FORM BACKGROUND */}
      <section className="w-full bg-white min-h-screen">
        
        {/* Content wrapper */}
        <div className="w-full max-w-xl mx-auto px-4 pt-12 pb-20 space-y-10">

          {/* GAP ADDED BELOW TITLE */}
          <h2 className="text-xl font-semibold">Your Answers</h2>

          {/* All Questions */}
          <div className="space-y-6">
            {QUESTIONS.filter(q => q.type !== "info").map((q, i) => (
              <ReviewRenderer key={i} q={q} answers={quiz} />
            ))}
          </div>

          {/* Continue Button */}
          <div className="pt-4 w-full max-w-[420px]">
            <button
              onClick={() => router.push("/recommendations")}
              className="w-full bg-[#8DB9C9] hover:bg-[#7AA7B8] text-white font-semibold py-3 rounded-md text-sm transition"
            >
              Continue
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
