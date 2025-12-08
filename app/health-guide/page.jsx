//app\health-guide\page.jsx


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  { title: "Mounjaro Injection India | Buy Mounjaro Online – FitYou ", image: "/guide2/1.1.jpg", href: "/health-guide/wegovy-dosage-schedule",
    description: ["Discover how Mounjaro helps manage Type 2 Diabetes.",
      "Learn its benefits, dosage, side effects, weight-loss effects, ",
      "and safe ways to buy Mounjaro online with FitYou."] },
  { title: "Mounjaro for Type 2 Diabetes: Benefits, Dosage & Cost | FitYou", image: "/guide2/2.1.jpg", href: "/health-guide/how-to-inject-wegovy",
    description: ["  Discover how Mounjaro helps manage Type 2 Diabetes. ",
      " Learn its benefits, dosage, side effects, weight-loss effects, ",
      "and safe ways to buy Mounjaro online with FitYou."]},
  { title: "Mounjaro Injection Guide | Expert Weight Loss Tips & Safe Technique ", image: "/guide2/3.1.jpeg", href: "/health-guide/mounjaro-dosage-schedule",
    description: [" Learn how to use Mounjaro Injection safely and effectively for weight loss.",
      " FitYou explains dosage, technique, benefits, ",
      "and expert tips for the best weight-loss results."]
   },
  { title: "Why Mounjaro Is Making Headlines for Diabetes & Weight Loss | FitYou", image: "/guide2/4.1.jpg", href: "/health-guide/manage-wegovy-side-effects",
    description: ["Discover why Mounjaro is trending—from diabetes treatment to ",
      " dramatic weight-loss results. Learn its benefits, dosage, side effects,",
      " cost & how to buy safely online."]
  },
  { title: "Mounjaro Side Effects & Easy Management Tips", image: "/guide2/5.1.jpeg", href: "/health-guide/manage-mounjaro-side-effects",
    description: ["Complete guide to Mounjaro for weight loss.",
      "Learn side effects, dosage safety, management tips,",
      "hydration, diet and cost insights"]
   },
  // { title: "Wegovy weight loss injection launched in India", image: "/guide/wegovy-weight-loss-injection-banner-img.jpg", href: "/health-guide/wegovy-weight-loss-injection-launched-in-india" },
  // { title: "How to take Mounjaro injection", image: "/guide/mounjaro-updt-banner-new-v1.jpg", href: "/health-guide/how-to-take-mounjaro" },
  // { title: "11 surprising benefits of drinking hot water", image: "/guide/glass-of-hot-water-new-v1.jpg", href: "/health-guide/hot-water-benefits" },
  

  // More Article public\guide\wegovy-dosage-hero-img.jpg
  // { title: "GLP-1 vs non-GLP approaches", image: "/guide/blackcoffee-calaroies-v1.jpg", href: "/health-guide/glp1-vs-non-glp" },
  // { title: "Is fasting safe?", image: "/guide/apple-banner-image-v1.jpg", href: "/health-guide/is-fasting-safe" },
  // { title: "Daily steps impact explained", image: "/guide/mango-caloriess-v1.jpg", href: "/health-guide/daily-steps-impact" },
  // { title: "Foods that reduce cravings", image: "/guide/food-cravings-v1.jpg", href: "/health-guide/foods-that-reduce-cravings" },
  // { title: "How stress affects weight", image: "/guide/dosas-banner-v1.jpg", href: "/health-guide/stress-affects-weight" },
  // { title: "Your metabolism roadmap", image: "/guide/final-millets-bannr-v1.jpg", href: "/health-guide/metabolism-roadmap" },
  // { title: "Why protein matters", image: "/guide/mounjaro-kwikpen-injection-banner-v1.jpg", href: "/health-guide/why-protein-matters" },
  // { title: "Fix your sleep cycle", image: "/guide/five-yoga-pose-v1.jpg", href: "/health-guide/fix-your-sleep-cycle" },
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
      <h1 className="text-4xl md:text-5xl font-semibold text-[#002074] mb-14">
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
              <h2 className="text-3xl md:text-4xl  text-[#002074] leading-tight mb-4">
                {item.title}
              </h2>

              {/* OPTIONAL DESCRIPTION (You can customize content per article) */}
              <div className="text-[#375C7A] text-[17px] leading-[1.7] mb-6 max-w-[600px]">
  {Array.isArray(item.description) ? (
    item.description.map((line, index) => <p key={index}>{line}</p>)
  ) : (
    <p>{item.description}</p> // fallback if description is a single string
  )}
</div>




              <Link
                href={item.href}


                className="
                  bg-[#A7C5D8] text-[#002074] font-semibold px-6 py-3 
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
            className="text-[#002074] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
          >
            View more
          </button>
        )}

        {/* VIEW LESS */}
        {visibleCount > 8 && visibleCount === articles.length && (
          <button
            onClick={loadLess}
            className="text-[#002074] text-[16px] font-semibold hover:opacity-70 underline underline-offset-4"
          >
            View less
          </button>
        )}

      </div>
    </div>
  </section>
);

}