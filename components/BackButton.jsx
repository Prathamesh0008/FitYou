"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // fallback to home
    }
  };

  return (
    <button
      onClick={goBack}
      className="
        flex items-center gap-2
        text-[#0D4F8B]
        text-[17px]
        font-medium
        hover:underline
        transition
        mb-6
      "
    >
      <ChevronLeft size={22} />
      Back
    </button>
  );
}
