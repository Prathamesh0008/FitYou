//FitYou\app\order\page.jsx
"use client";

import { useRouter } from "next/navigation";

export default function OrderStart() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#F7FBFF] flex flex-col items-center pt-24 px-6">
      <h1 className="text-3xl font-semibold text-[#0D4F8B]">Start your order</h1>

      <button
        onClick={() => router.push("/order/address")}
        className="mt-10 bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold px-10 py-3 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
