"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQ({ items }) {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16">
      <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0D4F8B] mb-6">
        FAQs
      </h2>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="bg-white border border-[#D9E6EC] rounded-lg shadow-sm"
            >
              {/* HEADER ROW */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
              >
                {/* LEFT ICON (PLUS / X) */}
                <span
                  className={`text-[#0D4F8B] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </span>

                {/* QUESTION TEXT */}
                <span className="text-[#0D4F8B] text-[16px] font-medium">
                  {item.question}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[500px] py-4 px-5" : "max-h-0 px-5"
                }`}
              >
                <p className="text-[#375C7A] text-[15px] leading-[1.7] pb-4">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
