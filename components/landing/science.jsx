// FitYou\app\science\page.jsx
"use client";

export default function SciencePage() {
  return (
    <div className="w-full bg-[#F6FAFF] py-16">

      {/* ---- SECTION TITLE ---- */}
      <h2 className="text-center text-3xl font-semibold text-[#003087]">
        The science of weight loss, simplified
      </h2>

      <p className="text-center mt-3 text-gray-600 text-base">
        FitYou’s weight loss programme is designed to deliver real, lasting results.
        Here’s what it does:
      </p>

      {/* ---- CARD ROW ---- */}
      <div
        className="
          max-w-6xl        /* 🔥 increased container width */
          mx-auto 
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-7           /* 🔥 slightly more spacing */
          mt-12 
          px-4
        "
      >

        {/* ---------------- CARD 1 ---------------- */}
        <div
          className="
            bg-white 
            rounded-xl
            shadow-md 
            py-7 px-5      /* 🔥 slightly increased padding */
            text-center 
          "
        >
          <img
            src='/science/appetite1.png'
            alt='Controls Appetite'
            className='w-16 mx-auto mb-3'  /* 🔥 slightly bigger icon */
          />
          <h3 className='text-[#003087] font-semibold text-[17px]'>
            Controls appetite
          </h3>
        </div>

        {/* ---------------- CARD 2 ---------------- */}
        <div
          className="
            bg-white 
            rounded-xl
            shadow-md 
            py-7 px-5
            text-center
          "
        >
          <img
            src='/science/cravings1.png'
            alt='Reduces cravings'
            className='w-16 mx-auto mb-3'
          />
          <h3 className='text-[#003087] font-semibold text-[17px]'>
            Reduces food cravings
          </h3>
        </div>

        {/* ---------------- CARD 3 ---------------- */}
        <div
          className="
            bg-white 
            rounded-xl
            shadow-md 
            py-7 px-5
            text-center
          "
        >
          <img
            src='/science/fuller.png'
            alt='Keeps you full'
            className='w-16 mx-auto mb-3'
          />
          <h3 className='text-[#003087] font-semibold text-[17px]'>
            Keeps you fuller for longer
          </h3>
        </div>

        {/* ---------------- CARD 4 ---------------- */}
        <div
          className="
            bg-white 
            rounded-xl
            shadow-md 
            py-7 px-5
            text-center
          "
        >
          <img
            src='/science/blood.png'
            alt='Blood sugar'
            className='w-16 mx-auto mb-3'
          />
          <h3 className='text-[#003087] font-semibold text-[17px]'>
            Regulates blood sugar levels
          </h3>
        </div>

      </div>
    </div>
  );
}