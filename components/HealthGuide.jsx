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
    setVisibleCount((prev) => Math.min(prev + 8, articles.length));
  };

  const loadLess = () => {
    setVisibleCount(8);
  };

  return (
    <section className="bg-[#FBF6EE] py-12 md:py-20 font-laila">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2A49]">
            Your health guide
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Explore our comprehensive health articles
          </p>
        </div>

        {/* GRID - Optimized for full image visibility */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {articles.slice(0, visibleCount).map((item, index) => (
            <Link
              key={index}
              href={`/health-guide/${item.title
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/--+/g, "-")}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container - Full visibility */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 4} // Priority load first 4 images
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title - Overlay on image for mobile, below for desktop */}
              <div className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-semibold text-[#0A2A5B] line-clamp-2 leading-tight group-hover:text-[#1A2A49]/80 transition-colors">
                  {item.title}
                </h3>
                {/* Optional read time/date */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Health Guide</span>
                  <span className="text-xs text-[#0A2A5B] font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE/LESS BUTTONS */}
        {articles.length > 8 && (
          <div className="mt-12 md:mt-16 flex justify-center">
            {visibleCount < articles.length ? (
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-[#0A2A5B] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#0A2A5B]/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Load More Articles ({articles.length - visibleCount} remaining)
              </button>
            ) : (
              <button
                onClick={loadLess}
                className="px-8 py-3 bg-white text-[#0A2A5B] border border-[#0A2A5B] rounded-full text-sm md:text-base font-semibold hover:bg-[#0A2A5B] hover:text-white active:scale-95 transition-all duration-200"
              >
                Show Less
              </button>
            )}
          </div>
        )}

        {/* VISIBLE COUNT INDICATOR */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-[#0A2A5B]">{visibleCount}</span> of{" "}
            <span className="font-semibold text-[#0A2A5B]">{articles.length}</span> articles
          </p>
        </div>
      </div>
    </section>
  );
}