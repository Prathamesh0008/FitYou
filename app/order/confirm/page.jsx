//FitYou\app\order\confirm\page.jsx
"use client";

import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        {/* BACK + STEP */}
        <button
          onClick={() => router.back()}
          className="text-sm text-[#0D4F8B] mb-6 flex items-center hover:opacity-70 transition"
        >
          &larr; Step 3 of 4
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-[#0D4F8B] mb-10">
          Confirmation
        </h1>

        {/* BLOCK 1 */}
        <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
          Do you confirm that:
        </h2>

        <ul className="list-disc pl-6 text-[#375C7A] leading-[1.9] space-y-3 mb-6">
          <li>
            You have answered all questions in full, providing accurate and 
            <span className="font-semibold text-[#0D4F8B]"> honest </span>
            information.
          </li>
          <li>
            You are using this service yourself and all medicine is for 
            <span className="font-semibold text-[#0D4F8B]"> your personal use </span>
            only.
          </li>
          <li>
            This medicine must be used 
            <span className="font-semibold text-[#0D4F8B]"> alongside a healthy diet </span>
            and exercise routine.
          </li>
          <li>
            If you experience sudden 
            <span className="font-semibold text-[#0D4F8B]"> changes to your mood </span>
            you will stop treatment and seek medical advice.
          </li>
          <li>
            You understand the benefits, risks and side effects.
          </li>
          <li>
            You agree to read the patient information leaflet before use.
          </li>
          <li>
            You accept the 
            <span className="underline text-[#0D4F8B]"> Patient Responsibility agreement. </span>
          </li>
        </ul>

        <button className="w-full border border-[#F1BE8D] text-[#0D4F8B] font-semibold py-3 rounded-lg hover:bg-[#FFF3E7] mb-10">
          I confirm
        </button>

        <hr className="my-10 border-[#E5EAF1]" />

        {/* BLOCK 2 */}
        <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
          Do you confirm that:
        </h2>

        <p className="text-[#375C7A] leading-[1.8] mb-6">
          Rybelsus (daily tablet plan) is not licensed for weight loss.  
          Do you understand the benefits and risks and consent to its off-label use?
        </p>

        <button className="w-full border border-[#F1BE8D] text-[#0D4F8B] font-semibold py-3 rounded-lg hover:bg-[#FFF3E7] mb-6">
          I confirm
        </button>

        <button
          onClick={() => router.push("/order/summary")}
          className="w-full bg-[#A3C7D9] text-[#0D4F8B] font-semibold py-3 rounded-lg hover:bg-[#8EBAD1]"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
