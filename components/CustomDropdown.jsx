//FitYou\components\CustomDropdown.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({
  label = "",
  value = "",
  placeholder = "Select",
  options = [],
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="w-full relative">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-4 py-3 rounded-lg 
          border border-[#DFE8F1] bg-white 
          text-sm text-[#0D2451]
          shadow-sm hover:border-[#C7D7EC] transition
        "
      >
        {value ? (
          <span>{value}</span>
        ) : (
          <span className="text-[#8FA4C0]">{placeholder}</span>
        )}

        <ChevronDown
          size={18}
          className={`text-[#0D4F8B] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* POPUP LIST */}
      {open && (
        <div
          className="
            absolute top-[105%] left-0 right-0 z-30
            bg-white border border-[#DFE8F1]
            rounded-xl shadow-lg 
            max-h-60 overflow-y-auto
            scrollbar-thin scrollbar-thumb-[#C9D6E5]
          "
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="
                w-full text-left px-4 py-2 
                text-sm text-[#0D2451] 
                hover:bg-[#E6F0FB] transition
              "
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
