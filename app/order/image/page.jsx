// FitYou/app/order/image/page.jsx
"use client";

import { useRouter } from "next/navigation";

export default function UploadImage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-xl mx-auto px-6">

        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
        >
          &larr; Step 2 of 4
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-[#0D4F8B] mb-10">
          Body image
        </h1>

        {/* INSTRUCTIONS */}
        <p className="text-[#375C7A] leading-[1.7] mb-6">
          Please upload a full body picture of yourself.
        </p>

        <ul className="text-[#375C7A] leading-[1.8] mb-8 list-disc pl-6">
          <li>We will only ask for this every 3 months.</li>
          <li>The picture will only be visible to you and the doctor.</li>
          <li>It’s to ensure your safety during treatment.</li>
        </ul>

        {/* 📸 PHOTO CORRECTION IMAGE (Aktive style) */}
        <div className="flex justify-center mb-10">
          <img
            src="/recommendations/photocorrection.png"
            alt="Photo Example"
            className="
              rounded-xl
              w-full
              max-w-[420px]
              border
              border-[#E2E8F0]
              shadow-sm
            "
          />
        </div>

        {/* TIP TEXT */}
        <p className="text-center text-sm text-[#375C7A] mb-4">
          Tip: use a full-length mirror
        </p>

        {/* UPLOAD BUTTON */}
        <button className="w-full bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg">
          Upload picture
        </button>

        {/* REMIND ME CHECKBOX */}
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="scale-110" />
          <p className="text-sm text-[#375C7A]">Remind me to upload later</p>
        </div>

        {/* CONTINUE BUTTON */}
        <button
          onClick={() => router.push("/order/medical")}
          className="w-full mt-6 bg-[#A3C7D9] text-[#0D4F8B] font-semibold py-3 rounded-lg"
        >
          Continue
        </button>

      </div>
    </section>
  );
}
