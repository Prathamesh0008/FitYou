"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Brain, Apple, Clock, Heart, TrendingDown, Zap, Shield, Leaf } from 'lucide-react';

export default function SciencePage() {
  const [activeCard, setActiveCard] = useState(0);

  const scienceCards = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Controls appetite",
      description: "Reduces hunger signals by targeting specific brain receptors",
      color: "#002074",
      stat: "60% reduction in hunger"
    },
    {
      icon: <Apple className="w-7 h-7" />,
      title: "Reduces food cravings",
      description: "Minimizes cravings for sugary and high-fat foods",
      color: "#002074",
      stat: "75% less cravings"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Keeps you fuller longer",
      description: "Slows digestion to maintain satiety for extended periods",
      color: "#002074",
      stat: "4+ hours of fullness"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Regulates blood sugar",
      description: "Improves insulin sensitivity and glucose regulation",
      color: "#002074",
      stat: "30% better control"
    }
  ];

  const additionalBenefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Reduces fat absorption",
      description: "Limits dietary fat absorption in the digestive system"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boosts metabolism",
      description: "Increases calorie burning at rest"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Improves gut health",
      description: "Promotes beneficial gut bacteria growth"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Enhances energy",
      description: "Improves mitochondrial function for better energy"
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - AKTIVE STYLE */}
        <div className="text-center mb-16">
          <h2 className="text-[#002074] text-4xl md:text-5xl font-bold mb-6">
            The science of weight loss,<br className="hidden md:block" /> simplified
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            FitYou's weight loss programme is designed to deliver real, lasting results.
            Here's what it does:
          </p>
        </div>

        {/* MAIN CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scienceCards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`
                group bg-white rounded-2xl p-6 border border-gray-200 
                hover:border-[#002074] transition-all duration-300 cursor-pointer
                ${activeCard === index ? 'ring-2 ring-[#002074] border-[#002074]' : ''}
                hover:shadow-lg
              `}
            >
              {/* CARD HEADER */}
              <div className="flex flex-col items-center text-center">
                {/* ICON CIRCLE - AKTIVE STYLE */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ 
                    backgroundColor: card.color,
                    backgroundImage: `linear-gradient(135deg, ${card.color} 0%, #1a40b0 100%)`
                  }}
                >
                  <div className="text-white">
                    {card.icon}
                  </div>
                </div>
                
                {/* TITLE */}
                <h3 className="text-[#002074] font-bold text-xl mb-3">
                  {card.title}
                </h3>
                
                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                
                {/* STAT BADGE */}
                <div className="px-3 py-1 bg-[#f0f4ff] text-[#002074] text-sm font-semibold rounded-full">
                  {card.stat}
                </div>
              </div>
              
              {/* ACTIVE INDICATOR */}
              {activeCard === index && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-sm text-[#002074]">
                    <span className="w-2 h-2 bg-[#002074] rounded-full animate-pulse"></span>
                    Active Mechanism
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DETAILED EXPLANATION SECTION */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#f8faff] to-white rounded-3xl p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* LEFT SIDE - VISUAL */}
              <div className="lg:w-2/5">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: scienceCards[activeCard].color,
                        backgroundImage: `linear-gradient(135deg, ${scienceCards[activeCard].color} 0%, #1a40b0 100%)`
                      }}
                    >
                      <div className="text-white">
                        {scienceCards[activeCard].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#002074] font-bold text-xl">
                        {scienceCards[activeCard].title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {scienceCards[activeCard].stat}
                      </p>
                    </div>
                  </div>
                  
                  {/* SCIENCE DIAGRAM */}
                  <div className="relative h-40 bg-gradient-to-b from-[#f0f4ff] to-white rounded-xl p-4">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-[#002074] rounded-full"></div>
                    <div className="absolute top-12 left-12 w-6 h-6 bg-[#002074] rounded-full opacity-80"></div>
                    <div className="absolute bottom-8 right-8 w-8 h-8 bg-[#002074] rounded-full"></div>
                    <div className="absolute bottom-4 left-12 w-6 h-6 bg-[#002074] rounded-full opacity-60"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#002074]">
                          {scienceCards[activeCard].stat.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-600">Effectiveness</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* RIGHT SIDE - DETAILS */}
              <div className="lg:w-3/5">
                <h3 className="text-[#002074] text-2xl font-bold mb-4">
                  How it works
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The mechanism behind {scienceCards[activeCard].title.toLowerCase()} is based on 
                  proven scientific principles that target specific biological pathways to 
                  promote healthy, sustainable weight loss.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Peer-reviewed clinical studies",
                    "Multiple research trials",
                    "Published medical journals",
                    "Evidence-based approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e6efff] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#002074] rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#f8faff] rounded-xl p-5 border border-[#e6efff]">
                  <h4 className="text-[#002074] font-semibold mb-2">Scientific Evidence</h4>
                  <p className="text-gray-600 text-sm">
                    Supported by research published in The Journal of Clinical Endocrinology & 
                    Metabolism and other leading medical publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL BENEFITS */}
        {/* <div className="mb-16">
          <h3 className="text-[#002074] text-2xl font-bold text-center mb-8">
            Additional Benefits
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#002074] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center group-hover:bg-[#002074] transition-colors">
                    <div className="text-[#002074] group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#002074] font-semibold">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA SECTION - AKTIVE STYLE */}
        <div className="text-center">
          <div className="inline-block max-w-2xl mx-auto mb-8">
            <p className="text-gray-600 text-lg mb-4">
              Ready to experience science-backed weight loss?
            </p>
            <h3 className="text-[#002074] text-3xl font-bold mb-6">
              Take the quiz. It's free.
            </h3>
          </div>
          <Link href="/quiz">
          <button className="bg-[#9BCDD2] text-[#001a5c] cursor-pointer hover:bg-[#8abfc4]  font-semibold text-lg py-4 px-12 rounded-lg shadow-md transition-colors">
            Do I qualify for treatment?
          </button>
          </Link>
          
          <p className="text-gray-500 text-sm mt-6 max-w-md mx-auto">
            Our treatment should be taken alongside a healthy diet and lifestyle. Because everybody is different, individual results vary.
          </p>
        </div>
      </div>
    </div>
  );
}