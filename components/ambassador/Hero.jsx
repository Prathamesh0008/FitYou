//FitYou\components\ambassador\Hero.jsx
"use client";

export default function Hero({ scrollToForm }) {
  return (
    <section className="relative w-full bg-[#F7FBFF] py-16 sm:py-24 font-laila overflow-hidden">
      
      {/* Background Soft Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#E6F3FF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#FFEEDD] rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#EAF4FF] text-[#2A4B68] rounded-full text-sm">
            Ambassador Program
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-[#12355B] font-normal">
            Become a FitYou Ambassador
          </h1>

          <p className="text-[#456B85] text-base sm:text-lg max-w-md leading-relaxed">
            Inspire others, share your journey, and be a part of our growing FitYou community. 
            Collaborate with us and make a real difference.
          </p>

          <button
            onClick={scrollToForm}
            className="px-8 py-3 bg-[#6FA8DC] text-white text-base rounded-lg font-normal transition-all hover:bg-[#5C99CC] active:scale-95"
          >
            Apply Now
          </button>
        </div>

        {/* RIGHT SIDE - SINGLE IMAGE (NO ROUNDED EDGES) */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-[320px] sm:w-[450px] md:w-[520px] overflow-hidden shadow-xl">
            <img
              src="/ambassdor/ambassador-collage.jpg"
              alt="FitYou Ambassador Collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}