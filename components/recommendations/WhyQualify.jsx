"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyQualify({ bmi, weight, height }) {
  const w = Number(weight);

  // GLP-1 clinical projections
  const sixMonth = (w * 0.90).toFixed(1);   // -10%
  const sixteenMonth = (w * 0.79).toFixed(1); // -21%

  const qualify = Number(bmi) >= 27; // QUALIFICATION RULE

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-20 md:pb-40 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">

        {/* LEFT SIDE — WHY YOU QUALIFY */}
        <div className="flex flex-col justify-between min-h-[320px] md:min-h-[420px]">
          <div>
            <h2 className="text-2xl md:text-[36px] font-semibold text-[#0D2A6B] mb-6 md:mb-8">
              Why you qualify
            </h2>

            <div className="mb-8 md:mb-10">
              <p className="text-[#B23A1F] font-semibold text-lg md:text-[20px]">
                Your BMI is {bmi} — {qualify ? "you qualify" : "you do not qualify"}
              </p>
              <p className="text-[#2E3D55] mt-2 md:mt-3 leading-relaxed text-sm md:text-[16px]">
                Based on your height ({height} cm) and weight ({weight} kg), 
                your BMI indicates {qualify ? "you are eligible for treatment." : "treatment cannot be prescribed online."}
              </p>
            </div>

            <div>
              <p className="text-[#B23A1F] font-semibold text-lg md:text-[20px]">
                Expected progress
              </p>
              <p className="text-[#2E3D55] mt-2 md:mt-3 leading-relaxed text-sm md:text-[16px]">
                If you start at {weight}kg, you may reach around {sixMonth}kg 
                in 6 months and {sixteenMonth}kg in 16 months based on typical results.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — WHAT TO EXPECT */}
        <div className="min-h-[320px] md:min-h-[420px] flex flex-col">
          <h3 className="text-2xl md:text-[36px] font-semibold text-[#0D2A6B] mb-4 md:mb-8">
            What to expect
          </h3>

          <GraphBox 
            weight={weight}
            six={sixMonth}
            sixteen={sixteenMonth}
          />
        </div>

      </div>
    </section>
  );
}

function GraphBox({ weight, six, sixteen }) {
  return (
    <div className="bg-[#E8F3FA] rounded-2xl   overflow-hidden relative min-h-[280px] md:min-h-[350px]">
      {/* Reduced padding: p-3 md:p-4 (was p-4 md:p-6) */}
      <Graph 
        weight={weight}
        six={six}
        sixteen={sixteen}
      />
    </div>
  );
}

function Graph({ weight, six, sixteen }) {
  const pathRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Get container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        
        // Use 98% of available space to make graph even larger
        const availableWidth = width * 0.98;
        const availableHeight = height * 0.98;
        
        // Maintain aspect ratio
        const aspectRatio = 1.4; // Width to height ratio
        let graphWidth = availableWidth;
        let graphHeight = graphWidth / aspectRatio;
        
        // If height is limiting factor, adjust
        if (graphHeight > availableHeight) {
          graphHeight = availableHeight;
          graphWidth = graphHeight * aspectRatio;
        }
        
        setDimensions({ 
          width: graphWidth,
          height: graphHeight
        });
      }
    };

    updateDimensions();
    
    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    // RESET animation each time user scrolls back
    const reset = () => {
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      if (bubble1Ref.current) {
        bubble1Ref.current.style.opacity = 0;
        bubble1Ref.current.style.transform = "scale(0.5)";
      }

      if (bubble2Ref.current) {
        bubble2Ref.current.style.opacity = 0;
        bubble2Ref.current.style.transform = "scale(0.5)";
      }
    };

    const play = () => {
      path.style.transition = "stroke-dashoffset 1.8s ease";
      path.style.strokeDashoffset = 0;

      setTimeout(() => {
        if (bubble1Ref.current) {
          bubble1Ref.current.style.transition = "all 1s ease";
          bubble1Ref.current.style.opacity = 1;
          bubble1Ref.current.style.transform = "scale(1)";
        }
      }, 400);

      setTimeout(() => {
        if (bubble2Ref.current) {
          bubble2Ref.current.style.transition = "all 1s ease";
          bubble2Ref.current.style.opacity = 1;
          bubble2Ref.current.style.transform = "scale(1)";
        }
      }, 800);
    };

    reset();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reset();
          setTimeout(() => play(), 50);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, [dimensions.width, dimensions.height]);

  // Original design dimensions
  const originalWidth = 350;
  const originalHeight = 260;
  
  // Scale factor to fit our calculated dimensions
  const scaleX = dimensions.width / originalWidth;
  const scaleY = dimensions.height / originalHeight;
  const scale = Math.min(scaleX, scaleY) * 1.1; // Scale up by 20% to make it even larger

  // Base positions (original from your design)
  const basePositions = {
    // Curve control points
    p1: { x: 40, y: 40 },
    p2: { x: 140, y: 200 },
    p3: { x: 260, y: 160 },
    p4: { x: 320, y: 130 },
    
    // Axis
    axisStart: { x: 30, y: 180 },
    axisEnd: { x: 330, y: 180 },
    axisYStart: { x: 30, y: 20 },
    axisYEnd: { x: 30, y: 180 },
    
    // Labels
    weightLabel: { x: 35, y: 30 },
    sixLabel: { x: 150, y: 120 },
    sixteenLabel: { x: 270, y: 140 },
    
    // Bubbles
    bubble1: { x: 155, y: 145 },
    bubble2: { x: 275, y: 165 },
    
    // X-axis labels
    day1: { x: 25, y: 195 },
    sixMonth: { x: 145, y: 195 },
    sixteenMonth: { x: 265, y: 195 }
  };

  // Calculate centered positions
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const scaledContentWidth = originalWidth * scale;
  const scaledContentHeight = originalHeight * scale;
  
  // Calculate offset to center the scaled content
  const offsetX = centerX - (scaledContentWidth / 2);
  const offsetY = centerY - (scaledContentHeight / 2);

  // Function to calculate final position
  const calculatePosition = (baseX, baseY) => ({
    x: offsetX + (baseX * scale),
    y: offsetY + (baseY * scale)
  });

  // Calculate all positions
  const positions = {
    p1: calculatePosition(basePositions.p1.x, basePositions.p1.y),
    p2: calculatePosition(basePositions.p2.x, basePositions.p2.y),
    p3: calculatePosition(basePositions.p3.x, basePositions.p3.y),
    p4: calculatePosition(basePositions.p4.x, basePositions.p4.y),
    
    axisStart: calculatePosition(basePositions.axisStart.x, basePositions.axisStart.y),
    axisEnd: calculatePosition(basePositions.axisEnd.x, basePositions.axisEnd.y),
    axisYStart: calculatePosition(basePositions.axisYStart.x, basePositions.axisYStart.y),
    axisYEnd: calculatePosition(basePositions.axisYEnd.x, basePositions.axisYEnd.y),

    weightLabel: calculatePosition(basePositions.weightLabel.x, basePositions.weightLabel.y),
    sixLabel: calculatePosition(basePositions.sixLabel.x, basePositions.sixLabel.y),
    sixteenLabel: calculatePosition(basePositions.sixteenLabel.x, basePositions.sixteenLabel.y),

    bubble1: calculatePosition(basePositions.bubble1.x, basePositions.bubble1.y),
    bubble2: calculatePosition(basePositions.bubble2.x, basePositions.bubble2.y),

    day1: calculatePosition(basePositions.day1.x, basePositions.day1.y),
    sixMonth: calculatePosition(basePositions.sixMonth.x, basePositions.sixMonth.y),
    sixteenMonth: calculatePosition(basePositions.sixteenMonth.x, basePositions.sixteenMonth.y)
  };

  // Font sizes based on scale
  const fontSize = Math.max(14, 18 * scale);
  const bubbleFontSize = Math.max(11, 12 * scale);
  const axisFontSize = Math.max(12, 16 * scale);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <svg 
        ref={svgRef}
        width={dimensions.width} 
        height={dimensions.height} 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="mx-auto"
      >

        {/* AXIS */}
        <line 
          x1={positions.axisStart.x} 
          y1={positions.axisStart.y} 
          x2={positions.axisEnd.x} 
          y2={positions.axisEnd.y} 
          stroke="#000" 
          strokeWidth={Math.max(2, 4 * scale)}
        />
        <line 
          x1={positions.axisYStart.x} 
          y1={positions.axisYStart.y} 
          x2={positions.axisYEnd.x} 
          y2={positions.axisYEnd.y} 
          stroke="#000" 
          strokeWidth={Math.max(2, 4 * scale)}
        />

        {/* CURVE */}
        <path
          ref={pathRef}
          d={`M${positions.p1.x} ${positions.p1.y} C ${positions.p2.x} ${positions.p2.y}, ${positions.p3.x} ${positions.p3.y}, ${positions.p4.x} ${positions.p4.y}`}
          stroke="#7BB0C9"
          strokeWidth={Math.max(4, 6 * scale)}
          fill="transparent"
        />

        {/* WEIGHT LABELS */}
        <text 
          x={positions.weightLabel.x} 
          y={positions.weightLabel.y} 
          fill="#0D2A6B" 
          fontSize={fontSize} 
          fontWeight="bold"
          textAnchor="start"
        >
          {weight}kg
        </text>
        <text 
          x={positions.sixLabel.x} 
          y={positions.sixLabel.y} 
          fill="#0D2A6B" 
          fontSize={fontSize} 
          fontWeight="bold"
          textAnchor="start"
        >
          {six}kg
        </text>
        <text 
          x={positions.sixteenLabel.x} 
          y={positions.sixteenLabel.y} 
          fill="#0D2A6B" 
          fontSize={fontSize} 
          fontWeight="bold"
          textAnchor="start"
        >
          {sixteen}kg
        </text>

        {/* BUBBLE 1 —10% */}
        <g ref={bubble1Ref} style={{ opacity: 0, transform: "scale(0.5)" }}>
          <circle 
            cx={positions.bubble1.x} 
            cy={positions.bubble1.y} 
            r={Math.max(15, 20 * scale)} 
            fill="#0D2A6B" 
          />
          <text 
            x={positions.bubble1.x} 
            y={positions.bubble1.y} 
            fill="#FFF" 
            fontSize={bubbleFontSize} 
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            -10%
          </text>
        </g>

        {/* BUBBLE 2 —21% */}
        <g ref={bubble2Ref} style={{ opacity: 0, transform: "scale(0.5)" }}>
          <circle 
            cx={positions.bubble2.x} 
            cy={positions.bubble2.y} 
            r={Math.max(15, 20 * scale)} 
            fill="#0D2A6B" 
          />
          <text 
            x={positions.bubble2.x} 
            y={positions.bubble2.y} 
            fill="#FFF" 
            fontSize={bubbleFontSize} 
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            -21%
          </text>
        </g>

        {/* X-AXIS labels */}
        <text 
          x={positions.day1.x} 
          y={positions.day1.y} 
          fontSize={axisFontSize} 
          fill="#0D2A6B"
          textAnchor="start"
        >
          Day 1
        </text>
        <text 
          x={positions.sixMonth.x} 
          y={positions.sixMonth.y} 
          fontSize={axisFontSize} 
          fill="#0D2A6B"
          textAnchor="start"
        >
          6 Month
        </text>
        <text 
          x={positions.sixteenMonth.x} 
          y={positions.sixteenMonth.y} 
          fontSize={axisFontSize} 
          fill="#0D2A6B"
          textAnchor="start"
        >
          16 Month
        </text>
      </svg>
    </div>
  );
}