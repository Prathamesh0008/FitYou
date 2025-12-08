"use client";

import { useEffect, useRef, useState } from "react";

export default function ClinicalGraphSection() {
  const graphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationTriggered = useRef(false);

  const weights = {
    initial: "85kg",
    sixMonth: "76.5kg",
    sixteenMonth: "67.2kg"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          animationTriggered.current = true;
        } else if (entry.intersectionRatio < 0.1) {
          // Only reset when almost completely out of view
          setIsVisible(false);
        }
      },
      { 
        threshold: [0, 0.1, 0.4, 0.8, 1],
        rootMargin: "-50px 0px"
      }
    );

    if (graphRef.current) observer.observe(graphRef.current);

    return () => {
      if (graphRef.current) observer.unobserve(graphRef.current);
    };
  }, []);

  // Reset animation when re-entering view
  useEffect(() => {
    if (isVisible && graphRef.current) {
      graphRef.current.classList.add("animate-graph");
    } else if (graphRef.current) {
      graphRef.current.classList.remove("animate-graph");
    }
  }, [isVisible]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 ">

      {/* WAVE BACKGROUND - More subtle */}
      <div className="absolute inset-0 z-0">
        
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* GRAPH */}
        <div 
          ref={graphRef} 
          className={`opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}
        >
          <div className="relative p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white border border-gray-100">
            
            {/* Graph Title */}
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-[#0D2D68]">Weight Loss Comparison Over Time</h3>
              <p className="text-sm text-gray-600 mt-1">GLP-1 Program vs. Diet & Exercise Alone</p>
            </div>
            
            {/* Animated Graph SVG - Improved for clarity */}
            <svg width="100%" height="380" viewBox="0 0 400 380" className="mx-auto">
              
              {/* Grid Background with subtle gradient */}
              <defs>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8FAFF" />
                  <stop offset="100%" stopColor="#F0F7FF" />
                </linearGradient>
              </defs>
              
              <rect x="50" y="50" width="300" height="250" fill="url(#gridGradient)" rx="8" />
              
              {/* Y-Axis with better labels */}
              <line x1="50" y1="50" x2="50" y2="300" stroke="#0D4F8B" strokeWidth="2" />
              <line x1="50" y1="300" x2="350" y2="300" stroke="#0D4F8B" strokeWidth="2" />
              
              {/* Grid Lines */}
              <line x1="50" y1="100" x2="350" y2="100" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
              <line x1="50" y1="150" x2="350" y2="150" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
              <line x1="50" y1="250" x2="350" y2="250" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
              
              {/* Y-Axis Labels - Clearer */}
              <text x="30" y="55" fontSize="12" fill="#60738C" fontWeight="600" textAnchor="end">Weight (kg)</text>
              <text x="35" y="105" fontSize="12" fill="#60738C" fontWeight="500" textAnchor="end">90</text>
              <text x="35" y="155" fontSize="12" fill="#60738C" fontWeight="500" textAnchor="end">85</text>
              <text x="35" y="205" fontSize="12" fill="#60738C" fontWeight="500" textAnchor="end">80</text>
              <text x="35" y="255" fontSize="12" fill="#60738C" fontWeight="500" textAnchor="end">75</text>
              <text x="35" y="305" fontSize="12" fill="#60738C" fontWeight="500" textAnchor="end">70</text>
              
              {/* X-Axis Labels */}
              <text x="100" y="330" fontSize="13" fill="#0D4F8B" fontWeight="600" textAnchor="middle">Day 1</text>
              <text x="200" y="330" fontSize="13" fill="#0D4F8B" fontWeight="600" textAnchor="middle">Month 6</text>
              <text x="300" y="330" fontSize="13" fill="#0D4F8B" fontWeight="600" textAnchor="middle">Month 16</text>
              
              {/* Dashed Lines for time points */}
              <line x1="100" y1="50" x2="100" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
              <line x1="200" y1="50" x2="200" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
              <line x1="300" y1="50" x2="300" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
              
              {/* Diet & Exercise Line (Flat) - ORANGE */}
              <line 
                x1="100" 
                y1="155"  // Start at 85kg (155)
                x2="300" 
                y2="155"  // End at 85kg (155) - flat line
                stroke="#FF8C42" 
                strokeWidth="4" 
                strokeDasharray="6"
                className="path-orange"
              />
              
              {/* GLP-1 Progress Curve - BLUE - Starting at 85kg, ending at 67.2kg */}
              <path
                d="M100,155 C150,145, 200,135, 300,130"
                stroke="#0D4F8B"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="path-blue"
              />
              
              {/* Data Points - GLP-1 */}
              <circle cx="100" cy="155" r="8" fill="#0D4F8B" className="dot-1" stroke="white" strokeWidth="2" />
              <circle cx="200" cy="145" r="8" fill="#0D4F8B" className="dot-2" stroke="white" strokeWidth="2" />
              <circle cx="300" cy="130" r="8" fill="#0D4F8B" className="dot-3" stroke="white" strokeWidth="2" />
              
              {/* Diet & Exercise Data Points */}
              <circle cx="100" cy="155" r="6" fill="#FF8C42" className="diet-dot-1" stroke="white" strokeWidth="2" />
              <circle cx="200" cy="155" r="6" fill="#FF8C42" className="diet-dot-2" stroke="white" strokeWidth="2" />
              <circle cx="300" cy="155" r="6" fill="#FF8C42" className="diet-dot-3" stroke="white" strokeWidth="2" />
              
              {/* Weight Labels - GLP-1 - Better positioned */}
              <g className="glp-labels">
                <text x="100" y="140" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle" className="weight-label-1">
                  {weights.initial}
                </text>
                <text x="200" y="130" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle" className="weight-label-2">
                  {weights.sixMonth}
                </text>
                <text x="300" y="115" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle" className="weight-label-3">
                  {weights.sixteenMonth}
                </text>
              </g>
              
              {/* Diet & Exercise Labels */}
              <g className="diet-labels">
                <text x="100" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle" className="diet-label-1">
                  85kg
                </text>
                <text x="200" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle" className="diet-label-2">
                  83kg
                </text>
                <text x="300" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle" className="diet-label-3">
                  81kg
                </text>
              </g>
              
              {/* Legend - Moved to bottom right */}
              <rect x="220" y="320" width="130" height="45" fill="white" rx="6" stroke="#E4EDF6" strokeWidth="1" />
              <circle cx="235" cy="335" r="5" fill="#0D4F8B" />
              <text x="250" y="338" fontSize="11" fill="#0D4F8B" fontWeight="600">GLP-1 Program</text>
              <circle cx="235" cy="350" r="4" fill="#FF8C42" />
              <text x="250" y="353" fontSize="11" fill="#FF8C42" fontWeight="600">Diet + Exercise</text>
              
              {/* Percentage Badges - Larger and clearer */}
              <g className="percentages">
                <rect x="170" y="80" width="60" height="25" fill="#0D4F8B" rx="12" className="percent-badge-1" />
                <text x="200" y="95" fontSize="12" fill="white" fontWeight="700" textAnchor="middle" className="percent-text-1">
                  -10%
                </text>
                
                <rect x="270" y="60" width="60" height="25" fill="#0D4F8B" rx="12" className="percent-badge-2" />
                <text x="300" y="75" fontSize="12" fill="white" fontWeight="700" textAnchor="middle" className="percent-text-2">
                  -21%
                </text>
              </g>
              
            </svg>
            
            {/* Floating Badges with text from image */}
            <div className="absolute left-1/4 top-1/4 bg-gradient-to-r from-[#0D4F8B] to-[#1A6DC2] text-white px-4 py-3 rounded-xl shadow-lg badge-1">
              <div className="text-sm font-bold">10% body weight</div>
              <div className="text-xs opacity-90">in 6 months</div>
            </div>
            
            <div className="absolute right-1/4 top-1/5 bg-gradient-to-r from-[#0D4F8B] to-[#1A6DC2] text-white px-4 py-3 rounded-xl shadow-lg badge-2">
              <div className="text-sm font-bold">21% body weight</div>
              <div className="text-xs opacity-90">in 16 months</div>
            </div>
            
            {/* Comparison Arrow */}
            <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-white border border-[#E4EDF6] px-6 py-3 rounded-xl shadow-md flex items-center gap-4 comparison-arrow">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0D4F8B] animate-pulse"></div>
                <span className="text-sm font-bold text-[#0D4F8B]">GLP-1 Program</span>
              </div>
              <span className="text-sm font-bold text-gray-500">vs</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF8C42] animate-pulse"></div>
                <span className="text-sm font-bold text-[#FF8C42]">Diet & Exercise</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className={`opacity-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-[#0D2D68] leading-tight">
            Clinical trials show <br />
           that you lose <br />

            <span className="relative inline-block">
              <span className="relative z-10 text-[#0D4F8B] font-extrabold">
                5 times more weight
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-orange-200 to-yellow-200 -z-0 rounded-lg"></span>
            </span>

            <br />than with diet & exercise alone.
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#375C7A] max-w-lg leading-relaxed">
            Based on a 2022 clinical trial with 2539 adults comparing our programme vs. diet + exercise alone over 16 months.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-br from-[#E9F3FF] to-[#F0F7FF] rounded-2xl border border-[#D3E1F4] shadow-sm">
            <h3 className="text-lg font-bold text-[#0D4F8B] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D4F8B]"></span>
              Key Clinical Findings:
            </h3>
            <ul className="space-y-4 text-base text-[#375C7A]">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="font-medium">Average <strong>10% weight loss</strong> achieved in just 6 months</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="font-medium"><strong>21% sustained weight loss</strong> maintained at 16 months</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="font-medium">Significant improvement in <strong>metabolic health markers</strong> and overall wellness</span>
              </li>
            </ul>
          </div>
          
          <button className="mt-8 bg-gradient-to-r from-[#0D4F8B] to-[#1A6DC2] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            View Full Clinical Study
          </button>
        </div>

      </div>

      {/* Animations in separate style tag */}
      <style jsx>{`
        .animate-graph .path-orange,
        .animate-graph .path-blue {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawPath 2s ease-out forwards;
        }

        .animate-graph .path-orange { 
          animation-delay: 0.3s; 
        }
        
        .animate-graph .path-blue { 
          animation-delay: 0.6s; 
        }

        @keyframes drawPath {
          to { 
            stroke-dashoffset: 0; 
          }
        }

        /* Weight labels animations */
        .weight-label-1,
        .weight-label-2,
        .weight-label-3,
        .diet-label-1,
        .diet-label-2,
        .diet-label-3 {
          opacity: 0;
          transform: translateY(10px);
        }

        .animate-graph .weight-label-1 { animation: fadeInUp 0.5s ease forwards 1.2s; }
        .animate-graph .weight-label-2 { animation: fadeInUp 0.5s ease forwards 1.6s; }
        .animate-graph .weight-label-3 { animation: fadeInUp 0.5s ease forwards 2s; }
        .animate-graph .diet-label-1 { animation: fadeInUp 0.5s ease forwards 1.4s; }
        .animate-graph .diet-label-2 { animation: fadeInUp 0.5s ease forwards 1.8s; }
        .animate-graph .diet-label-3 { animation: fadeInUp 0.5s ease forwards 2.2s; }

        /* Dot animations */
        .dot-1, .dot-2, .dot-3,
        .diet-dot-1, .diet-dot-2, .diet-dot-3 {
          opacity: 0;
          transform: scale(0);
        }

        .animate-graph .dot-1 { animation: popIn 0.6s ease forwards 1s; }
        .animate-graph .dot-2 { animation: popIn 0.6s ease forwards 1.4s; }
        .animate-graph .dot-3 { animation: popIn 0.6s ease forwards 1.8s; }
        
        .animate-graph .diet-dot-1 { animation: popIn 0.6s ease forwards 1.2s; }
        .animate-graph .diet-dot-2 { animation: popIn 0.6s ease forwards 1.6s; }
        .animate-graph .diet-dot-3 { animation: popIn 0.6s ease forwards 2s; }

        /* Percentage badges animations */
        .percent-badge-1,
        .percent-badge-2,
        .percent-text-1,
        .percent-text-2 {
          opacity: 0;
        }

        .animate-graph .percent-badge-1 { animation: slideDown 0.5s ease forwards 2s; }
        .animate-graph .percent-badge-2 { animation: slideDown 0.5s ease forwards 2.4s; }
        .animate-graph .percent-text-1 { animation: fadeIn 0.3s ease forwards 2.3s; }
        .animate-graph .percent-text-2 { animation: fadeIn 0.3s ease forwards 2.7s; }

        /* Floating badges animations */
        .badge-1,
        .badge-2 {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-graph .badge-1 { 
          animation: slideUp 0.7s ease-out forwards 2.2s; 
        }
        
        .animate-graph .badge-2 { 
          animation: slideUp 0.7s ease-out forwards 2.6s; 
        }

        /* Comparison arrow animation */
        .comparison-arrow {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-graph .comparison-arrow { 
          animation: slideUp 0.7s ease-out forwards 3s; 
        }

        /* Animation Keyframes */
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Graph container floating effect */
        .animate-graph > div {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

    </section>
  );
}