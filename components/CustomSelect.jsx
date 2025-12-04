
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Select",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full border border-[#D3E1F4] rounded-md py-2 px-3 
          bg-white text-[#0D4F8B] text-left 
          flex items-center justify-between
        "
      >
        <span>{value ? value : placeholder}</span>
        <ChevronDown className="w-4 h-4 text-[#0D4F8B]" />
      </button>

      {open && (
        <div
          className="
            absolute left-0 right-0 mt-1 bg-white rounded-md shadow-md 
            border border-[#D3E1F4] max-h-56 overflow-y-auto z-50
          "
        >
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="
                px-3 py-2 text-sm text-[#0D4F8B] 
                hover:bg-[#E9F3FF] cursor-pointer
              "
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
