//FitYou\app\included\page.jsx
"use client";

export default function IncludedPage() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* ---------------- LEFT SIDE IMAGE (SMALLER LIKE AKTIVE) ---------------- */}
        <div className="flex justify-center">
          <img
            src="/included/woman1.jpg"
            alt="Woman using phone"
            className="
              rounded-3xl
              w-[420px]        /* smaller width */
              h-[460px]        /* smaller height */
              object-cover
              shadow-md
            "
          />
        </div>

        {/* ---------------- RIGHT SIDE CONTENT ---------------- */}
        <div>
          <h2 className="text-[#003087] text-3xl font-semibold leading-snug">
            What’s included with FitYou
          </h2>

          <p className="text-gray-600 mt-4 text-[15px] leading-relaxed max-w-md">
            At FitYou, we know that your weight loss journey can feel a bit
            lonely and scary at times. This is why, when you subscribe to our
            programme, we offer you all the support you need when the going
            gets tough.
          </p>

          {/* ---------------- CHECKLIST BOXES — SMALLER LIKE AKTIVE ---------------- */}
          <div className="mt-8 space-y-3">

            {/* BOX 1 */}
            <div
              className="
                border
                rounded-xl
                py-3 px-4
                flex items-center gap-3
                shadow-sm
                bg-white
                max-w-sm     /* reduced width */
              "
            >
              <span className="text-blue-600 text-lg">✔</span>
              <p className="text-[#003087] text-[15px] font-semibold">
                Treatment by partner doctors
              </p>
            </div>

            {/* BOX 2 */}
            <div
              className="
                border
                rounded-xl
                py-3 px-4
                flex items-center gap-3
                shadow-sm
                bg-white
                max-w-sm
              "
            >
              <span className="text-blue-600 text-lg">✔</span>
              <p className="text-[#003087] text-[15px] font-semibold">
                Personalised diet & fitness plans
              </p>
            </div>

            {/* BOX 3 */}
            <div
              className="
                border
                rounded-xl
                py-3 px-4
                flex items-center gap-3
                shadow-sm
                bg-white
                max-w-sm
              "
            >
              <span className="text-blue-600 text-lg">✔</span>
              <p className="text-[#003087] text-[15px] font-semibold">
                Dedicated customer support
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}