"use client";

export default function IncludedPage() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - IMAGE */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/included/woman1.jpg"
                alt="Woman using FitYou app"
                className="
                  rounded-3xl
                  w-full          /* CHANGED: Use w-full instead of invalid w-450 */
                  max-w-[400px]   /* This controls the maximum width */
                  h-[500px]       /* Adjusted for better proportion */
                  object-cover
                  object-center
                  shadow-xl
                "
              />
              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#002074]/5 rounded-full -z-10"></div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[#002074] text-3xl md:text-4xl font-bold leading-tight">
              What's included<br />with FitYou
            </h2>

            <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-lg">
              At FitYou, we know that your weight loss journey can feel a bit lonely 
              and scary at times. This is why, when you subscribe to our programme, 
              we offer you all the support you need when the going gets tough.
            </p>

            {/* CHECKLIST BOXES */}
            <div className="mt-10 space-y-4">
              <div className="
                border border-gray-200
                rounded-xl
                py-4 px-5
                flex items-center gap-4
                bg-white
                hover:border-[#002074]/30
                hover:shadow-md
                transition-all duration-200
                max-w-md
              ">
                <div className="w-8 h-8 rounded-full bg-[#002074]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#002074] text-lg font-bold">✓</span>
                </div>
                <p className="text-[#002074] font-semibold text-base md:text-lg">
                  Treatment by partner doctors
                </p>
              </div>

              <div className="
                border border-gray-200
                rounded-xl
                py-4 px-5
                flex items-center gap-4
                bg-white
                hover:border-[#002074]/30
                hover:shadow-md
                transition-all duration-200
                max-w-md
              ">
                <div className="w-8 h-8 rounded-full bg-[#002074]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#002074] text-lg font-bold">✓</span>
                </div>
                <p className="text-[#002074] font-semibold text-base md:text-lg">
                  Personalised diet & fitness plans
                </p>
              </div>

              <div className="
                border border-gray-200
                rounded-xl
                py-4 px-5
                flex items-center gap-4
                bg-white
                hover:border-[#002074]/30
                hover:shadow-md
                transition-all duration-200
                max-w-md
              ">
                <div className="w-8 h-8 rounded-full bg-[#002074]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#002074] text-lg font-bold">✓</span>
                </div>
                <p className="text-[#002074] font-semibold text-base md:text-lg">
                  Dedicated customer support
                </p>
              </div>
            </div>

            {/* Optional subtle note */}
            <div className="mt-10 pt-6 border-t border-gray-100 max-w-md">
              <p className="text-gray-500 text-sm">
                All included features are part of your subscription. No hidden fees or extra charges.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}