// FitYou/components/recommendations/MiddleImage.jsx
"use client";

export default function MiddleImage() {
  return (
    <div
      className="
        relative w-full 
        flex 
        justify-center md:justify-start 
        -mt-32 
        z-[50]
      "
    >
      {/* Top half background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -z-10"></div>

      {/* Bottom half background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FFF7EA] -z-10"></div>

      {/* IMAGE */}
      <img
        src="/recommendations/productperson.jpg"
        alt="Person product"
        className="
          rounded-2xl
          object-cover
          shadow-lg

          /* ⭐ Mobile size (smaller) */
          w-full
          max-w-[260px]
          h-[180px]
          mx-auto

          /* ⭐ Desktop size (original) */
          md:max-w-[420px]
          md:h-[260px]
          md:ml-40
        "
      />
    </div>
  );
}
