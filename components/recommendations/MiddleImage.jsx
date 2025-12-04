//FitYou\components\recommendations\MiddleImage.jsx
"use client";

export default function MiddleImage() {
  return (
    <div className="relative w-full flex justify-start -mt-32 z-[50]">

      {/* Top half background (white section) */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -z-10"></div>

      {/* Bottom half background (beige section) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FFF7EA] -z-10"></div>

      {/* IMAGE */}
      <img
        src="/recommendations/productperson.jpg"
        alt="Person product"
        className="
          rounded-2xl
          w-full
          max-w-[420px]
          h-[260px]
          object-cover
          shadow-lg
          ml-40        /* ⭐ shift image slightly left */
        "
      />
    </div>
  );
}
