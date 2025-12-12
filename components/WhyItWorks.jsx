"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyItWorks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const testimonials = [
    {
      icon: "food",
      title: '"I can still enjoy my favorite foods"',
      text: "Sarah learned portion control strategies and lost 8kg while still enjoying meals she loves.",
      person: "Sarah T., Mumbai",
      delay: 0.1,
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: "clock",
      title: '"Fits into my busy schedule"',
      text: "Rahul walks 25 mins 4x/week and uses our meal plans. Lost 12kg in 4 months.",
      person: "Rahul S., Delhi", 
      align: "right",
      delay: 0.2,
      color: "from-emerald-50 to-emerald-100"
    },
    {
      icon: "target",
      title: '"Finally found consistency"',
      text: "Weekly check-ins helped Priya stay on track for 6+ months without yo-yo dieting.",
      person: "Priya K., Bangalore",
      delay: 0.3,
      color: "from-amber-50 to-amber-100"
    },
    {
      icon: "scale",
      title: '"What actually works long-term"',
      text: "After 5 failed diets, Vikram found success with our approach - down 18kg and keeping it off.",
      person: "Vikram M., Chennai",
      align: "right",
      delay: 0.4,
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: "brain",
      title: "Doctors trust our approach",
      text: "Combining proven methods with medical supervision leads to 85% success at 12 months.",
      person: "Dr. Anjali R., Endocrinologist",
      isDoctor: true,
      color: "from-cyan-50 to-cyan-100"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-20 md:py-24 overflow-visible"
    >
      {/* Light decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      {/* Soft top wave */}
      <svg
        className="absolute top-0 left-0 w-full h-24 sm:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path fill="white" d="M0,60 C300,120 900,0 1440,60 L1440,0 L0,0 Z" />
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        {/* Header - Light and clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-6">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Real Stories, Real Results
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2972] leading-tight mb-4">
              Why People Succeed Here
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our approach combines medical expertise with practical lifestyle changes
            </p>
          </div>

          {/* UPDATED: Stats with animated counters */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-8">
            {[
              { 
                start: 0, 
                end: 85, 
                suffix: "%", 
                label: "Success Rate",
                duration: 2.5
              },
              { 
                start: 0, 
                end: 12, 
                suffix: "K+", 
                label: "People Helped",
                duration: 2
              },
              { 
                start: 0, 
                end: 94, 
                suffix: "%", 
                label: "Stay On Track",
                duration: 2.5
              }
            ].map((stat, index) => (
              <CounterStat 
                key={index}
                index={index}
                stat={stat}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>

          {/* Center testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <TestimonialCard {...testimonials[4]} index={4} />
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50/50 to-emerald-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100"
        >
          <p className="text-center text-sm font-medium text-blue-700 mb-4">
            Trusted Approaches
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Medical Supervision",
              "Evidence-Based Methods",
              "Sustainable Habits",
              "Personalized Plans"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Soft bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path fill="white" d="M0,0 C300,0 900,120 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}

/* CounterStat Component */
function CounterStat({ index, stat }) {
  const [count, setCount] = useState(stat.start);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const duration = stat.duration * 1000; // Convert to milliseconds
      const startValue = stat.start;
      const endValue = stat.end;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
        
        setCount(currentValue);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, stat.start, stat.end, stat.duration]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center min-w-[100px]"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* Clean TestimonialCard */
function TestimonialCard({ icon, title, text, person, align, index, isDoctor, color }) {
  const renderIcon = (iconType) => {
    const size = "w-5 h-5";
    switch(iconType) {
      case "food":
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        );
      case "clock":
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "target":
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "scale":
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case "brain":
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: index * 0.1 }} 
      viewport={{ once: true }} 
      className="group"
    >
      <div className={`flex items-start gap-4 ${align === "right" ? "flex-row-reverse" : ""}`}>
        {/* Icon Container */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-white to-gray-50 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
          <div className="text-blue-600">
            {renderIcon(icon)}
          </div>
        </div>

        {/* Content Card */}
        <div className={`flex-1 bg-gradient-to-br ${color || "from-gray-50 to-white"} rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-gray-300`}>
          <blockquote className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed mb-3">
            {title}
          </blockquote>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {text}
          </p>
          
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <span className="text-blue-600 text-xs font-bold">✓</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-semibold text-gray-800 truncate ${isDoctor ? "text-blue-700" : ""}`}>
                {person}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {isDoctor ? "Medical Professional" : "Real Member"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}