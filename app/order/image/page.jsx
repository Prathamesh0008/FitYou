"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function UploadImage() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [remindLater, setRemindLater] = useState(false);

  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleContinue = () => {
    router.push("/order/confirm");
  };

  return (
    <section className="min-h-screen bg-white pb-20">
      {/* TOP BLUE BAR */}
      <div className="w-full bg-[#F0F7FB] py-6 border-b border-[#E4EEF5]">
        <div className="max-w-md mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
          >
            ← Step 2 of 4
          </button>

          <h1 className="text-2xl font-semibold text-[#0D4F8B] text-left">
            Body image
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT – COMPACT */}
      <div className="max-w-md mx-auto px-6 pt-14">
        <h2 className="text-[20px] font-semibold text-[#0D4F8B] leading-relaxed mb-4">
          Please upload a full body picture of yourself.
        </h2>

        <ul className="text-[#375C7A] leading-[1.8] mb-10 list-disc pl-6 text-[14px]">
          <li>We will only ask for this every 3 months.</li>
          <li>The picture will only be visible to you and the doctor.</li>
          <li>It’s for your safety and ensures the correct evaluation.</li>
        </ul>

        <div className="flex justify-center mb-8">
          <img
            src="/recommendations/photocorrection.png"
            alt="Photo Example"
            className="rounded-xl w-full max-w-[420px] border border-[#E2E8F0] shadow-sm"
          />
        </div>

        <p className="text-center text-sm text-[#375C7A] mb-4">
          Tip: use a full-length mirror
        </p>

        {/* Upload button */}
        <button
          onClick={handleUploadClick}
          className="w-full bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg mb-3"
        >
          Upload picture
        </button>

        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {image && (
          <div className="mb-4">
            <img
              src={image}
              alt="Uploaded"
              className="w-full rounded-xl border border-[#E2E8F0]"
            />
          </div>
        )}

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={remindLater}
            onChange={() => setRemindLater(!remindLater)}
            className="scale-110 accent-[#0D4F8B]"
          />
          <p className="text-sm text-[#375C7A]">
            Remind me to upload my picture later
          </p>
        </div>

        {(image || remindLater) && (
          <button
            onClick={handleContinue}
            className="w-full bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg"
          >
            Continue
          </button>
        )}
      </div>
    </section>
  );
}
