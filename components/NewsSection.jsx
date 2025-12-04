"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function NewsSection() {
  const scrollRef = useRef(null);

  const articles = [
    {
      title: "Ground-breaking weight loss injection gets approved in India",
      date: "15 April 2025",
      logo: "/news/reuters-logo.jpg",
    },
    {
      title: "Revolutionary weight loss injection hits India; good news for obese people",
      date: "15 April 2025",
      logo: "/news/business-standard-logo.jpg",
    },
    {
      title: "Hansal Mehta praises newly-launched weight loss injection",
      date: "1 May 2025",
      logo: "/news/india-today.jpg",
    },
    {
      title: "Has this injection finally cracked the weight loss code?",
      date: "31 March 2025",
      logo: "/news/indian-express.jpg",
    },
    {
      title: "Weight loss injection launches in India: Is it the answer to obesity?",
      date: "21 March 2025",
      logo: "/news/firstpost-logo.jpg",
    },
  ];

  // SEAMLESS AUTO SCROLL FOR DESKTOP
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    let speed = 0.7;

    const scroll = () => {
      container.scrollLeft += speed;

      // When reached middle → reset back
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    const pause = () => (speed = 0);
    const resume = () => (speed = 0.7);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    scroll();
  }, []);

  return (
    <section className="bg-[#FBF6EE] py-20 font-laila">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[40px] text-[#0D336A] font-bold leading-tight mb-12">
          The breakthrough in weight loss medication <br />
          has hit the news big time.
        </h2>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 
            overflow-x-auto 
            scrollbar-none 
            md:overflow-x-hidden
            pb-4 
            snap-x
          "
        >
          {/* DUPLICATED LIST FOR INFINITE LOOP */}
          {[...articles, ...articles].map((item, i) => (
            <div
              key={i}
              className="
                bg-white 
                rounded-2xl 
                border border-[#E4E8EE]
                shadow-sm
                p-6
                min-w-[300px]
                max-w-[300px]
                h-[240px]
                flex flex-col justify-between
                snap-start
              "
            >
              <p className="text-[#0D336A] text-[17px] font-medium leading-snug">
                {item.title}
              </p>

              <p className="text-[13px] text-[#375C7A] mt-4">
                {item.date}
              </p>

              <div className="relative w-[130px] h-[32px] mt-4">
                <Image
                  src={item.logo}
                  alt="Publisher Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
