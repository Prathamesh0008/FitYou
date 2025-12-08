"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  { title: "Wegovy Dosage Schedule", image: "/guide2/1.1.jpg" },
  { title: "How to inject Wegovy ?", image: "/guide2/2.1.jpg" },
  { title: "Mounjaro Dosage Schedule", image: "/guide2/3.1.jpeg" },
  { title: "How to manage Wegovy side effects?", image: "/guide2/4.1.jpg" },
  { title: "How to manage Mounjaro side effects?", image: "/guide2/5.1.jpeg" },
  { title: "Wegovy weight loss injection launched in India", image: "/guide/wegovy-weight-loss-injection-banner-img.jpg" },
  { title: "How to take Mounjaro injection", image: "/guide/mounjaro-updt-banner-new-v1.jpg" },
  { title: "11 surprising benefits of drinking hot water", image: "/guide/glass-of-hot-water-new-v1.jpg" },
  { title: "GLP-1 vs non-GLP approaches", image: "/guide/blackcoffee-calaroies-v1.jpg" },
  { title: "Is fasting safe?", image: "/guide/apple-banner-image-v1.jpg" },
  { title: "Daily steps impact explained", image: "/guide/mango-caloriess-v1.jpg" },
  { title: "Foods that reduce cravings", image: "/guide/food-cravings-v1.jpg" },
  { title: "How stress affects weight", image: "/guide/dosas-banner-v1.jpg" },
  { title: "Your metabolism roadmap", image: "/guide/final-millets-bannr-v1.jpg" },
  { title: "Why protein matters", image: "/guide/mounjaro-kwikpen-injection-banner-v1.jpg" },
  { title: "Fix your sleep cycle", image: "/guide/five-yoga-pose-v1.jpg" },
];

// Helper function to create clean slugs
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\?/g, '') // Remove question marks
    .replace(/[^\w\s-]/g, '') // Remove all non-word chars except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, ''); // Trim hyphens from end
};

export default function HealthGuide() {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, articles.length));
  };

  const loadLess = () => {
    setVisibleCount(8);
  };

  return (
    <section className="bg-[#FBF6EE] py-12 md:py-20 font-laila">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A2A49] text-center mb-8 md:mb-12">
          Your health guide
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {articles.slice(0, visibleCount).map((item, index) => {
            const slug = createSlug(item.title);
            console.log(`Title: "${item.title}" -> Slug: "${slug}"`); // Debug log
            
            return (
              <Link
                key={index}
                href={`/health-guide/${slug}`}
                className="group flex flex-col h-full rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: "center 20%" // Adjusts focus point if needed
                  }}
                  priority={index < 4}
                />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A5B] leading-snug line-clamp-2 mb-3">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                        <span className="text-xs text-[#0A2A5B] font-bold">A</span>
                      </div>
                      <span className="text-xs text-gray-600">Health Guide</span>
                    </div>
                    <span className="text-xs text-[#0A2A5B] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      Read
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div className="mt-12 md:mt-16 text-center">
          {visibleCount < articles.length ? (
            <button
              onClick={loadMore}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0A2A5B] text-base font-semibold rounded-full border border-[#0A2A5B] hover:bg-[#0A2A5B] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View more guides
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : visibleCount > 8 ? (
            <button
              onClick={loadLess}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0A2A5B] text-base font-semibold rounded-full border border-[#0A2A5B] hover:bg-[#0A2A5B] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Show less
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}