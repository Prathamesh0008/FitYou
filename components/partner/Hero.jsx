//FitYou\components\partner\Hero.jsx
"use client";

import Image from "next/image";

export default function Hero({ scrollToForm }) {
  return (
    <section className="w-full bg-[#F7FBFF] px-6 pt-16 pb-12">
      <div
        className="
          max-w-[1150px]
          mx-auto
          grid md:grid-cols-2
          gap-10
          items-center      /* 👈 This centers both sides */
        "
      >
        {/* LEFT COLUMN (Center aligned vertically) */}
        <div className="flex flex-col justify-center m-0 p-0">
          <h1
            className="
              text-[#002060]
              font-normal
              leading-[1.15]
              text-[44px] md:text-[52px]
              tracking-tight
              m-0 p-0
            "
          >
            How to become a<br />
            partner doctor or<br />
            pharmacy
          </h1>

          {/* BUTTON */}
          <button
            onClick={scrollToForm}
            className="
              mt-6
              px-8 py-3
              bg-[#002060]
              text-white
              rounded-md
              text-lg
              hover:bg-[#001a4d]
              transition
              w-fit
            "
          >
            Apply now
          </button>
        </div>

        {/* RIGHT COLUMN — 4 Images, No Vertical Gap */}
        <div className="grid grid-cols-2 gap-4">
          {/* IMAGE 1 */}
          <div className="h-[180px] rounded-lg overflow-hidden">
            <Image
              src="/ambassdor/drimage.jpg"
              alt="Doctor"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="h-[180px] rounded-lg overflow-hidden">
            <Image
              src="/ambassdor/drimage1.jpg"
              alt="Doctor 2"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 3 */}
          <div className="h-[180px] rounded-lg overflow-hidden">
            <Image
              src="/ambassdor/drimage2.jpg"
              alt="Pharmacy"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 4 */}
          <div className="h-[180px] rounded-lg overflow-hidden">
            <Image
              src="/ambassdor/drimage4.jpg"
              alt="System"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}