"use client";

import Image from "next/image";

export default function WhyItWorks() {
  return (
    <section className="relative bg-[#1E618A] text-white pb-56 pt-52 overflow-hidden">

      {/* TOP CURVE */}
      <svg
        className="absolute top-0 left-0 w-full h-[260px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,120 C300,260 900,0 1440,140 L1440,0 L0,0 Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-[200px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,0 C300,160 900,80 1440,200 L1440,240 L0,240 Z"
        />
      </svg>

      {/* TITLE */}
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Simple, smart, and scientific.
          <br />
          Our weight loss programme works where others fail.
        </h2>
      </div>

      {/* FLOATING BUBBLES CONTAINER */}
      <div className="relative max-w-6xl mx-auto mt-20 h-[650px]">

        {/* 1 — Left Top */}
        <Bubble
          icon="/why/bibimbap.png"
          title="I love food too much to go on a diet"
          text="You can still enjoy the foods you love – but you’ll feel full and satisfied just after a small amount."
          pos="left-4 md:left-10 top-10 md:top-20"
        />

        {/* 2 — Right Top */}
        <Bubble
          icon="/why/clock.png"
          title="I don’t have time to exercise"
          text="Can you do light exercise, like walking, for 30 minutes a few times a week? Yes? Then that’s all you need!"
          pos="right-4 md:right-20 top-32 md:top-24"
        />

        {/* 3 — Left Middle */}
        <Bubble
          icon="/why/reach.png"
          title="It’s too difficult to stay motivated"
          text="Our injection takes away the struggle of sticking to a diet, and our team is available for support."
          pos="left-4 md:left-20 top-64 md:top-72"
        />

        {/* 4 — Right Middle */}
        <Bubble
          icon="/why/weighing-machine.png"
          title="I've tried everything… nothing works"
          text="Our injection does the hard work for you. It changes your metabolism and your body’s reaction to food."
          pos="right-4 md:right-16 top-[340px] md:top-[380px]"
        />

        {/* 5 — Center Bottom */}
        <Bubble
          icon="/why/think-different.png"
          title="Why is this different from other weight loss plans?"
          text="Because it is effective. Clinical trials say so, and so do the best doctors in the world."
          pos="left-1/2 -translate-x-1/2 top-[480px] md:top-[500px]"
        />
      </div>
    </section>
  );
}

/* BUBBLE COMPONENT */
function Bubble({ icon, title, text, pos }) {
  return (
    <div
      className={`absolute w-[320px] ${pos} transition-all`}
    >
      <div className="flex items-start gap-3">
        
        {/* ICON */}
        <div className="h-14 w-18  rounded-full bg-[#E9F3FF] flex items-center justify-center shadow-md">
          <Image
            src={icon}
            width={45}
            height={50}
            alt=""
            className="object-contain"
          />
        </div>

        {/* TEXT BUBBLE */}
        <div className="bg-white text-[#0D336A] rounded-2xl px-4 py-3 shadow-md relative">
          <p className="font-semibold text-sm leading-snug">{title}</p>

          {/* TAIL */}
          <div
  className="absolute -left-2 top-4 w-4 h-4 bg-white rounded-bl-3xl rounded-tr-3xl rotate-[-35deg] "
></div>

        </div>
      </div>

      {/* SUBTEXT */}
      <p className="mt-2 text-xs italic text-[#D6E6EE] leading-snug">
        {text}
      </p>
    </div>
  );
}
