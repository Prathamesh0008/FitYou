"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const testimonials = [
    {
      icon: "food",
      title: '"I love food too much to diet"',
      text: "Sarah used to crave snacks constantly. Now she eats her favorite meals but stops naturally after smaller portions.",
      person: "Sarah T., Mumbai",
      delay: 0.1
    },
    {
      icon: "clock",
      title: '"No time for intense workouts"',
      text: "Rahul walks 25 mins 4x/week. Combined with our program, he lost 12kg in 4 months without gym membership.",
      person: "Rahul S., Delhi", 
      align: "right",
      delay: 0.2
    },
    {
      icon: "target",
      title: '"Motivation always fails me"',
      text: "Priya struggled with yo-yo dieting. Our medical support + weekly check-ins kept her consistent for 6+ months.",
      person: "Priya K., Bangalore",
      delay: 0.3
    },
    {
      icon: "scale",
      title: '"Tried everything, nothing worked"',
      text: "Vikram (42) failed 5 diets. Medical intervention changed his metabolism – down 18kg, keeping it off 1 year.",
      person: "Vikram M., Chennai",
      align: "right",
      delay: 0.4
    },
    {
      icon: "brain",
      title: "Why doctors recommend us",
      text: "Clinically proven GLP-1 agonists + behavioral science. 85% success rate vs 20% traditional diets.",
      person: "Dr. Anjali R., Endocrinologist",
      isDoctor: true
    }
  ];

  return (
    <section 
      ref={ref} 
      className="relative bg-gradient-to-b from-[#1E618A] via-[#255D8E] to-[#1A4D72] text-white py-16 sm:py-20 md:py-24 lg:pb-40 lg:pt-52 overflow-visible"
    >
      {/* 🌊 TOP CURVE - Fully responsive */}
      <svg
        className="absolute top-0 left-0 w-full h-[200px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A7BB5" />
            <stop offset="50%" stopColor="#1E618A" />
            <stop offset="100%" stopColor="#0D4F8B" />
          </linearGradient>
        </defs>
        <path fill="url(#topGradient)" d="M0,120 C300,260 900,0 1440,140 L1440,0 L0,0 Z" />
      </svg>

      {/* ✨ RESPONSIVE FLOATING DOTS */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-12 sm:top-20 left-4 sm:left-10 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/50 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-4 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:1s]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header - Fully responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-8 sm:py-6 md:px-12 md:py-8 border border-white/30 shadow-2xl mx-auto max-w-2xl"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse flex-shrink-0" />
            <div className="text-left sm:text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Why It Actually Works
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#D6E6EE] mt-2 sm:mt-3 font-semibold max-w-lg mx-auto leading-relaxed">
                Real results from real doctors and patients. 
                <span className="text-white font-bold block sm:inline">85% success rate.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid - Fully responsive */}
        <div className="mb-12 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 auto-rows-fr">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>

          {/* Center testimonial - responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 sm:mt-12 md:mt-16 max-w-2xl mx-auto"
          >
            <TestimonialCard {...testimonials[4]} index={4} />
          </motion.div>
        </div>

        {/* Trust Indicators - Fully responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center pb-8 sm:pb-12"
        >
          {[
            { label: "Clinically Proven" },
            { label: "Doctor Recommended" },
            { label: "85% Success Rate" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 bg-white/20 px-4 py-2.5 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl shadow-sm border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm text-center"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0" />
              <span className="font-medium text-white">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🌊 BOTTOM CURVE - Fully responsive */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[320px]"
        viewBox="0 0 1460 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bottomGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#F7FAFF" />
          </linearGradient>
        </defs>
        <path fill="url(#bottomGradient)" d="M0,0 C300,160 900,80 1440,200 L1440,240 L0,240 Z" />
      </svg>
    </section>
  );
}

/* Fully Responsive TestimonialCard */
function TestimonialCard({ icon, title, text, person, align, index, isDoctor }) {
  const renderIcon = (iconType) => {
    const size = "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14";
    switch(iconType) {
      case "food":
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM20 8V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3m12 0v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V8m12 0H12"/></svg>;
      case "clock":
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
      case "target":
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>;
      case "scale":
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
      case "brain":
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
      default:
        return <svg className={`${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: index * 0.15 }} 
      viewport={{ once: true }} 
      className="group relative w-full max-w-sm sm:max-w-md mx-auto md:mx-0"
    >
      <div className={`flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 w-full ${align === "right" ? "flex-row-reverse justify-end" : "justify-start"}`}>
        {/* Icon Container - Responsive */}
        <motion.div 
          initial={{ scale: 0, rotate: align === "right" ? 10 : -10 }} 
          whileInView={{ scale: 1, rotate: 0 }} 
          whileHover={{ scale: 1.05 }} 
          className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-1 sm:mt-2 group-hover:scale-[1.05] transition-all duration-300"
        >
          <div className="w-full h-full bg-white/20 rounded-xl sm:rounded-2xl md:rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/40 overflow-hidden group-hover:border-white/60 hover:shadow-xl transition-all duration-300">
            <div className="text-white font-bold">{renderIcon(icon)}</div>
          </div>
        </motion.div>

        {/* Content Card - Responsive */}
        <div className="relative bg-white/15 backdrop-blur-sm shadow-xl md:shadow-2xl rounded-2xl sm:rounded-3xl px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 border border-white/30 hover:shadow-3xl hover:border-white/50 transition-all duration-500 flex-1 group-hover:-translate-y-1 min-w-0">
          {/* Quote bubble */}
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            className="absolute -top-2 sm:-top-3 left-5 sm:left-6 w-6 h-6 sm:w-7 sm:h-7 bg-white/30 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md border border-white/40"
          >
            "
          </motion.div>
          
          {/* Tail */}
          <div className={`absolute top-6 sm:top-7 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 shadow-sm rounded-lg ${align === "right" ? "-right-2 sm:-right-2.5 md:-right-3 rotate-[30deg]" : "-left-2 sm:-left-2.5 md:-left-3 rotate-[-30deg]"}`} />
          
          <div className="relative z-10">
            <blockquote className="font-semibold text-base sm:text-lg md:text-xl text-white leading-tight mb-3 sm:mb-4 line-clamp-2 group-hover:line-clamp-none">
              <span className="text-white/70">"</span>{title}<span className="text-white/70">"</span>
            </blockquote>
            <p className="text-xs sm:text-sm md:text-base text-[#D6E6EE] leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2 md:line-clamp-3">
              {text}
            </p>
            <div className="flex items-center gap-2 sm:gap-3 pt-px">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-white/80 to-white/60 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-[#1A4D72] font-semibold text-xs sm:text-sm">✓</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-xs sm:text-sm font-semibold text-white truncate pr-2 ${isDoctor ? "text-white" : ""}`}>
                  {person}{isDoctor && <span className="ml-1 text-xs text-white font-medium">(MD)</span>}
                </div>
                <div className="text-xs text-white/70 hidden sm:block">Real patient result</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
