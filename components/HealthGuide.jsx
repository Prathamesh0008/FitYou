"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  { title: "Wegovy Dosage Schedule", image: "/guide/wegovy-dosage-schedule-new.jpg", href: "#" },
  { title: "How to inject Wegovy ?", image: "/guide/how-to-inject-wegovy-banner.jpg", href: "#" },
  { title: "Mounjaro Dosage Schedule", image: "/guide/mouj-dosage-schedule-new.jpg", href: "#" },
  { title: "How to manage Wegovy side effects?", image: "/guide/wegovy-flextouch-pen-new.jpg", href: "#" },
  { title: "How to manage Mounjaro side effects?", image: "/guide/mounjaro-injection-pen.jpg", href: "#" },
  { title: "Wegovy weight loss injection launched in India", image: "/guide/wegovy-weight-loss-injection-banner-img.jpg", href: "#" },
  { title: "How to take Mounjaro injection", image: "/guide/mounjaro-updt-banner-new-v1.jpg", href: "#" },
  { title: "11 surprising benefits of drinking hot water", image: "/guide/glass-of-hot-water-new-v1.jpg", href: "#" },

  // More Articles
  { title: "GLP-1 vs non-GLP approaches", image: "/guide/blackcoffee-calaroies-v1.jpg", href: "#" },
  { title: "Is fasting safe?", image: "/guide/apple-banner-image-v1.jpg", href: "#" },
  { title: "Daily steps impact explained", image: "/guide/mango-caloriess-v1.jpg", href: "#" },
  { title: "Foods that reduce cravings", image: "/guide/food-cravings-v1.jpg", href: "#" },
  { title: "How stress affects weight", image: "/guide/dosas-banner-v1.jpg", href: "#" },
  { title: "Your metabolism roadmap", image: "/guide/final-millets-bannr-v1.jpg", href: "#" },
  { title: "Why protein matters", image: "/guide/mounjaro-kwikpen-injection-banner-v1.jpg", href: "#" },
  { title: "Fix your sleep cycle", image: "/guide/five-yoga-pose-v1.jpg", href: "#" },
];

export default function HealthGuide() {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, articles.length));
  };

  const loadLess = () => {
    setVisibleCount((prev) => Math.max(prev - 4, 8));
  };

  return (
    <section className="bg-[#FBF6EE] py-20 font-laila">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A49] mb-10">
          Your health guide
        </h2>

        {/* GRID */}
      {/* GRID */}
<div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
  {articles.slice(0, visibleCount).map((item, i) => (
    <Link
      key={i}
      href={`/health-guide/${item.title.replace(/\s+/g, "-").toLowerCase()}`}

      className="group rounded-2xl bg-white p-3 shadow-sm hover:shadow-md transition"
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={260}
          className="rounded-xl w-full h-[180px] object-cover group-hover:scale-[1.03] transition"
        />
      </div>

      {/* Optional title */}
      {/* <p className="mt-4 text-[13px] font-semibold text-[#0A2A5B] leading-tight">
        {item.title}
      </p> */}
    </Link>
  ))}
</div>


        {/* BUTTON — ONLY ONE SHOWS */}
        <div className="mt-12 flex justify-center">

          {/* VIEW MORE */}
          {visibleCount < articles.length && (
            <button
              onClick={loadMore}
              className="text-[#0A2A5B] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
            >
              View more
            </button>
          )}

          {/* VIEW LESS */}
          {visibleCount > 8 && visibleCount === articles.length && (
            <button
              onClick={loadLess}
              className="text-[#0A2A5B] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
            >
              View less
            </button>
          )}

        </div>

      </div>
    </section>
  );
}
