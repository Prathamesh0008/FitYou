"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ({ items }) {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16">
      <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6">FAQs</h2>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className={`rounded-xl border ${
                isOpen ? "bg-[#F4FAFD] border-[#C7DFEC]" : "bg-[#F7FBFF] border-[#D9E6EC]"
              } shadow-sm transition-all`}
            >
              {/* HEADER */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 px-5 py-5 text-left"
              >
                {/* SMOOTH ROTATING PLUS ICON */}
                <span
                  className={`
                    text-[#0D4F8B]
                    transform transition-transform duration-[450ms] ease-in-out
                    ${isOpen ? "rotate-45" : "rotate-0"}
                  `}
                >
                  <Plus className="w-10 h-10" />
                </span>

                {/* QUESTION */}
                <span
                  className={`text-[18px] transition duration-300 ${
                    isOpen ? "text-[#002074] font-semibold" : "text-[#0D4F8B] font-medium"
                  }`}
                >
                  {item.question}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[500px] px-5 pb-5" : "max-h-0 px-5 pb-0"
                }`}
              >
                <p className="text-[#375C7A] text-[16px] leading-[1.7] mt-1">
                  {item.answer}
                </p>
                {/* STRAIGHT LINE */}
<div className="w-full border-b border-[#D2E2EB] mt-4"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
