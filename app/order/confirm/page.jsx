"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const router = useRouter();

  const [confirm1, setConfirm1] = useState(false);
  const [confirm2, setConfirm2] = useState(false);

  const canContinue = confirm1 && confirm2;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const confirmButtonBase =
    "w-full py-3 rounded-lg border font-semibold transition text-center";
  const confirmButtonActive =
    "bg-[#FFE3CC] border-[#F4B98A] text-[#0D4F8B]";
  const confirmButtonInactive =
    "bg-white border-[#F4B98A] text-[#0D4F8B] hover:bg-[#FFF3E2]";

  return (
    <section className="min-h-screen bg-white pb-20">
      {/* TOP BLUE HEADER */}
      <div className="w-full bg-[#F0F7FB] py-6 border-b border-[#E4EEF5]">
        <div className="max-w-md mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
          >
            ← Step 3 of 4
          </button>

          <h1 className="text-2xl font-semibold text-[#0D4F8B]">
            Confirmation
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT – COMPACT */}
      <div className="max-w-md mx-auto px-6 pt-14">
        <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
          Do you confirm that:
        </h2>

        <ul className="list-disc pl-6 text-[#375C7A] leading-[1.9] space-y-3 mb-6 text-[14px]">
          <li>
            You have answered all questions in full, providing accurate and
            <span className="font-semibold text-[#0D4F8B]"> honest </span>
            information.
          </li>
          <li>
            You are using this service for
            <span className="font-semibold text-[#0D4F8B]">
              {" "}
              your personal use{" "}
            </span>
            only.
          </li>
          <li>
            This medicine must be used
            <span className="font-semibold text-[#0D4F8B]">
              {" "}
              alongside a healthy diet{" "}
            </span>
            and exercise.
          </li>
          <li>
            If you experience sudden
            <span className="font-semibold text-[#0D4F8B]">
              {" "}
              changes to your mood{" "}
            </span>
            you will stop treatment and seek medical advice.
          </li>
          <li>You understand all benefits, risks, and side effects.</li>
        </ul>

        <button
          onClick={() => setConfirm1((v) => !v)}
          className={`${confirmButtonBase} ${
            confirm1 ? confirmButtonActive : confirmButtonInactive
          } mb-10`}
        >
          I confirm
        </button>

        <hr className="my-10 border-[#E5EAF1]" />

        <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
          Do you confirm that:
        </h2>

        <p className="text-[#375C7A] leading-[1.8] mb-6 text-[14px]">
          Rybelsus (daily tablet plan) is not licensed for weight loss. Do you
          understand the benefits and risks and consent to its off-label use?
        </p>

        <button
          onClick={() => setConfirm2((v) => !v)}
          className={`${confirmButtonBase} ${
            confirm2 ? confirmButtonActive : confirmButtonInactive
          } mb-10`}
        >
          I confirm
        </button>

        <button
          disabled={!canContinue}
          onClick={() => router.push("/order/summary")}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            canContinue
              ? "bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B]"
              : "bg-[#E2E8F0] text-[#8CA3B8] cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
