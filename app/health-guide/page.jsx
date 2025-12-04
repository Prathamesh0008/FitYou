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
  <section className="bg-white py-20 font-laila">
    <div className="mx-auto max-w-6xl px-4">

      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F8B] mb-14">
        Health guide
      </h1>

      {/* ARTICLE LIST */}
      <div className="space-y-20">
        {articles.slice(0, visibleCount).map((item, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden border border-[#E5EAF2] shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0D4F8B] leading-tight mb-4">
                {item.title}
              </h2>

              {/* OPTIONAL DESCRIPTION (You can customize content per article) */}
              <p className="text-[#375C7A] text-[15px] leading-[1.7] mb-6 max-w-[600px]">
                Learn more about this topic and understand it better with our
                detailed guide.
              </p>

              <Link
                href={`/health-guide/${item.title.replace(/\s+/g, "-").toLowerCase()}`}

                className="
                  bg-[#A7C5D8] text-[#0D4F8B] font-semibold px-6 py-3 
                  rounded-lg shadow hover:bg-[#94b5cb] transition
                  inline-block
                "
              >
                Read full article
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-16 flex justify-center">

        {/* VIEW MORE */}
        {visibleCount < articles.length && (
          <button
            onClick={loadMore}
            className="text-[#0D4F8B] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
          >
            View more
          </button>
        )}

        {/* VIEW LESS */}
        {visibleCount > 8 && visibleCount === articles.length && (
          <button
            onClick={loadLess}
            className="text-[#0D4F8B] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
          >
            View less
          </button>
        )}

      </div>
    </div>
  </section>
);

}
