"use client";

import Image from "next/image";

export default function BrainTrickSection() {
  return (
    <section className="relative bg-[#E9F4F7] pt-20 pb-40 font-laila overflow-hidden">
      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT BLOCK */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight text-[#0A2A5B] max-w-lg">
            What if you could trick<br />
            your brain, thinking<br />
            you're full?
          </h2>

          <div className="rounded-2xl overflow-hidden  bg-[#8CB7C6] w-full max-w-md mx-auto md:mx-0 shadow-2xl">
            <Image
              src="/guide/cakelady1.png"
              alt="Woman with cake"
              width={480}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="text-[#0A2A5B] text-lg leading-relaxed max-w-md">
            Weight loss is 20% about exercise and 80% about what you eat. Most
            people give up because they struggle with sticking to a diet.
            Our treatment makes it easier by tackling this issue for you.
          </p>
        </div>

        {/* RIGHT BLOCK */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl  lg:text-[40px] leading-tight text-[#0A2A5B] max-w-lg">
            The good news: Our <br />
            treatment gives your<br />
            brain the 'full' signal
          </h2>

          <div className="rounded-2xl overflow-hidden w-full  bg-[#8CB7C6] max-w-md mx-auto md:mx-0 shadow-2xl">
            <Image
              src="/guide/doctors1.png"
              alt="Doctor holding tablet"
              width={480}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="text-[#0A2A5B] text-lg leading-relaxed max-w-md">
            This clinically proven medication suppresses appetite. It makes you
            feel full much quicker. Eating less won't be a struggle, but a
            self-contained appetite will come naturally.
          </p>
        </div>
      </div>

      {/* CURVED WAVE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -rotate-1 md:rotate-0">
        <svg
          viewBox="0 0 1440 150"
          className="block w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,64 C200,160 500,0 800,64 C1100,128 1300,64 1440,80 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
