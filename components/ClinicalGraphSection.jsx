"use client";

import { useRef } from "react";
import { useRouter } from 'next/navigation';

export default function ClinicalGraphSection() {
  const graphRef = useRef(null);
  const router = useRouter();

  const weights = {
    initial: "85kg",
    sixMonth: "76.5kg",
    sixteenMonth: "67.2kg"
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* GRAPH SECTION */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 relative">
              
              {/* Graph Title */}
              <div className="mb-4 md:mb-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-[#0D2D68]">Weight Loss Comparison Over Time</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">GLP-1 Program vs. Diet & Exercise Alone</p>
              </div>
              
              {/* SVG Graph */}
              <div className="relative overflow-hidden">
                <svg width="100%" height="auto" viewBox="0 0 400 380" className="max-w-full mx-auto" ref={graphRef}>
                  
                  {/* Grid Background */}
                  <defs>
                    <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFF" />
                      <stop offset="100%" stopColor="#F0F7FF" />
                    </linearGradient>
                  </defs>
                  
                  <rect x="50" y="50" width="300" height="250" fill="url(#gridGradient)" rx="8" />
                  
                  {/* Y-Axis */}
                  <line x1="50" y1="50" x2="50" y2="300" stroke="#0D4F8B" strokeWidth="2" />
                  <line x1="50" y1="300" x2="350" y2="300" stroke="#0D4F8B" strokeWidth="2" />
                  
                  {/* Grid Lines */}
                  <line x1="50" y1="100" x2="350" y2="100" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
                  <line x1="50" y1="150" x2="350" y2="150" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
                  <line x1="50" y1="250" x2="350" y2="250" stroke="#D6E4FF" strokeWidth="1" strokeDasharray="3" />
                  
                  {/* Y-Axis Labels */}
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
                  
                  {/* Dashed Lines */}
                  <line x1="100" y1="50" x2="100" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
                  <line x1="200" y1="50" x2="200" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
                  <line x1="300" y1="50" x2="300" y2="300" stroke="#E4EDF6" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Diet & Exercise Line (Flat) */}
                  <line 
                    x1="100" 
                    y1="155"
                    x2="300" 
                    y2="155"
                    stroke="#FF8C42" 
                    strokeWidth="4" 
                    strokeDasharray="6"
                  />
                  
                  {/* GLP-1 Progress Curve */}
                  <path
                    d="M100,155 C150,145, 200,135, 300,130"
                    stroke="#0D4F8B"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  {/* Data Points - GLP-1 */}
                  <circle cx="100" cy="155" r="8" fill="#0D4F8B" stroke="white" strokeWidth="2" />
                  <circle cx="200" cy="145" r="8" fill="#0D4F8B" stroke="white" strokeWidth="2" />
                  <circle cx="300" cy="130" r="8" fill="#0D4F8B" stroke="white" strokeWidth="2" />
                  
                  {/* Diet & Exercise Data Points */}
                  <circle cx="100" cy="155" r="6" fill="#FF8C42" stroke="white" strokeWidth="2" />
                  <circle cx="200" cy="155" r="6" fill="#FF8C42" stroke="white" strokeWidth="2" />
                  <circle cx="300" cy="155" r="6" fill="#FF8C42" stroke="white" strokeWidth="2" />
                  
                  {/* Weight Labels - GLP-1 */}
                  <g>
                    <text x="100" y="140" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle">
                      {weights.initial}
                    </text>
                    <text x="200" y="130" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle">
                      {weights.sixMonth}
                    </text>
                    <text x="300" y="115" fontSize="12" fill="#0D4F8B" fontWeight="700" textAnchor="middle">
                      {weights.sixteenMonth}
                    </text>
                  </g>
                  
                  {/* Diet & Exercise Labels */}
                  <g>
                    <text x="100" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle">
                      85kg
                    </text>
                    <text x="200" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle">
                      83kg
                    </text>
                    <text x="300" y="175" fontSize="11" fill="#FF8C42" fontWeight="600" textAnchor="middle">
                      81kg
                    </text>
                  </g>
                  
                  {/* Legend */}
                  <rect x="220" y="320" width="130" height="45" fill="white" rx="6" stroke="#E4EDF6" strokeWidth="1" />
                  <circle cx="235" cy="335" r="5" fill="#0D4F8B" />
                  <text x="250" y="338" fontSize="11" fill="#0D4F8B" fontWeight="600">GLP-1 Program</text>
                  <circle cx="235" cy="350" r="4" fill="#FF8C42" />
                  <text x="250" y="353" fontSize="11" fill="#FF8C42" fontWeight="600">Diet + Exercise</text>
                  
                  {/* Percentage Badges */}
                  <g>
                    <rect x="170" y="80" width="60" height="25" fill="#0D4F8B" rx="12" />
                    <text x="200" y="95" fontSize="12" fill="white" fontWeight="700" textAnchor="middle">
                      -10%
                    </text>
                    
                    <rect x="270" y="60" width="60" height="25" fill="#0D4F8B" rx="12" />
                    <text x="300" y="75" fontSize="12" fill="white" fontWeight="700" textAnchor="middle">
                      -21%
                    </text>
                  </g>
                </svg>
              </div>
              
              {/* Floating Badges */}
              <div className="hidden md:block absolute left-1/4 top-1/4 bg-gradient-to-r from-[#0D4F8B] to-[#1A6DC2] text-white px-4 py-3 rounded-xl shadow-lg">
                <div className="text-sm font-bold">10% body weight</div>
                <div className="text-xs opacity-90">in 6 months</div>
              </div>
              
              <div className="hidden md:block absolute right-1/4 top-1/5 bg-gradient-to-r from-[#0D4F8B] to-[#1A6DC2] text-white px-4 py-3 rounded-xl shadow-lg">
                <div className="text-sm font-bold">21% body weight</div>
                <div className="text-xs opacity-90">in 16 months</div>
              </div>
              
              {/* Comparison Arrow */}
              <div className="mt-6 md:absolute md:left-1/2 md:bottom-6 md:transform md:-translate-x-1/2 bg-white border border-[#E4EDF6] px-4 md:px-6 py-3 rounded-xl shadow-sm flex items-center gap-4">
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

          {/* RIGHT TEXT SECTION */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#0D2D68] leading-tight mb-4 md:mb-6">
              Clinical trials show<br />
              that you lose<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0D4F8B] font-extrabold">
                  5 times more weight
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-orange-200 to-yellow-200 -z-0 rounded-lg"></span>
              </span>
              <br />than with diet & exercise alone.
            </h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-[#375C7A] leading-relaxed">
              Based on a 2022 clinical trial with 2539 adults comparing our programme vs. diet + exercise alone over 16 months.
            </p>
            
            {/* Key Findings Card */}
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-br from-[#E9F3FF] to-[#F0F7FF] rounded-xl md:rounded-2xl border border-[#D3E1F4]">
              <h3 className="text-base md:text-lg font-bold text-[#0D4F8B] mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0D4F8B]"></span>
                Key Clinical Findings:
              </h3>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#375C7A]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="font-medium">Average <strong>10% weight loss</strong> achieved in just 6 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="font-medium"><strong>21% sustained weight loss</strong> maintained at 16 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="font-medium">Significant improvement in <strong>metabolic health markers</strong> and overall wellness</span>
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={() => router.push('/program')}
              className="mt-6 md:mt-8 bg-gradient-to-r cursor-pointer from-[#0D4F8B] to-[#1A6DC2] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              View Full Clinical Study
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}