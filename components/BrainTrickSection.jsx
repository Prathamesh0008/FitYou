"use client";

import Image from "next/image";

export default function BrainTrickSection() {
  return (
    <section className="relative bg-[#E9F4F7] pt-20 pb-40 font-laila overflow-hidden">

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT BLOCK */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#0A2A5B] mb-6">
            What if you could trick<br />
            your brain, thinking<br />
            you’re full?
          </h2>

          <div className="rounded-xl overflow-hidden w-[330px] md:w-[360px] h-auto mb-6">
            <Image
              src="/guide/trick-brain-01.jpg" // change to your image
              alt="Woman with cake"
              width={360}
              height={300}
              className="object-cover"
            />
          </div>

          <p className="text-[#0A2A5B] text-[15px] leading-relaxed max-w-xs">
            Weight loss is 20% about exercise and 80% about what you eat. Most
            people give up because they struggle with sticking to a diet.
            Our treatment makes it easier by tackling this issue for you.
          </p>
        </div>

        {/* RIGHT BLOCK */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#0A2A5B] mb-6">
            The good news:<br />
            Our treatment gives your<br />
            brain the ‘full’ signal
          </h2>

          <div className="rounded-xl overflow-hidden w-[330px] md:w-[360px] h-auto mb-6">
            <Image
              src="/guide/doctor-boxx.png" // change to your image
              alt="Doctor holding tablet"
              width={360}
              height={300}
              className="object-cover"
            />
          </div>

          <p className="text-[#0A2A5B] text-[15px] leading-relaxed max-w-xs">
            This clinically proven medication suppresses appetite. It makes you
            feel full much quicker. Eating less won’t be a struggle, but a
            self-contained appetite will come naturally.
          </p>
        </div>
      </div>

      {/* CURVED WAVE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-0">
        <svg
          viewBox="0 0 1440 150"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,64 C200,160 500,0 800,64 C1100,128 1300,64 1440,80 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>

    </section>
  );
}
