//FitYou/components/review/ReviewRenderer.jsx
"use client";

import CustomSelect from "@/components/CustomSelect";
import { Calendar as CalendarIcon } from "lucide-react";

export default function ReviewRenderer({ q, answers }) {
  const value = answers[q.id];

  /* ------------------------------------
      HEIGHT (ft + inches)
  ------------------------------------ */
  if (q.type === "height") {
    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[360px]">
          {q.title}
        </p>

        <div className="flex w-full max-w-[360px] gap-3">
          <CustomSelect
            disabled
            value={answers.heightFeet}
            options={["4", "5", "6", "7", "8"]}
          />

          <CustomSelect
            disabled
            value={answers.heightInches}
            options={Array.from({ length: 12 }, (_, i) => String(i))}
          />
        </div>
      </div>
    );
  }

  /* ------------------------------------
      WEIGHT SELECT
  ------------------------------------ */
  if (q.type === "weight") {
    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[360px]">
          {q.title}
        </p>

        <div className="w-full max-w-[360px]">
          <CustomSelect disabled value={answers.weightKg} options={[]} />
        </div>
      </div>
    );
  }

  /* ------------------------------------
      DATE SELECTOR (static display)
  ------------------------------------ */
  if (q.type === "date") {
    const d = answers.lastWeightDate
      ? new Date(answers.lastWeightDate)
      : null;

    const DD = d ? String(d.getDate()).padStart(2, "0") : "DD";
    const MM = d ? String(d.getMonth() + 1).padStart(2, "0") : "MM";
    const YYYY = d ? d.getFullYear() : "YYYY";

    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[360px]">
          {q.title}
        </p>

        <div className="flex items-center gap-2 w-full max-w-[360px]">
          <div className="flex gap-2">
            <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] bg-white text-xs font-semibold">
              {DD}
            </div>
            <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] bg-white text-xs font-semibold">
              {MM}
            </div>
            <div className="w-20 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] bg-white text-xs font-semibold">
              {YYYY}
            </div>
          </div>

          <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D0E6F4] border border-[#BCD6EA]">
            <CalendarIcon size={18} className="text-[#0D4F8B]" />
          </span>
        </div>
      </div>
    );
  }

  /* ------------------------------------
      SELECT QUESTIONS (dropdown)
  ------------------------------------ */
  if (q.type === "select") {
    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[360px]">
          {q.title}
        </p>

        <div className="w-full max-w-[360px]">
          <CustomSelect disabled value={value} options={q.options} />
        </div>
      </div>
    );
  }

  /* ------------------------------------
      BUTTONS TYPE (YES/NO or multiple)
  ------------------------------------ */
  if (q.type === "buttons") {
    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[420px]">
          {q.title}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[420px]">
          {q.options.map((opt) => {
            const selected = value === opt;

            return (
              <div
                key={opt}
                className={`w-full rounded-lg border px-4 py-2 text-sm text-[#0D2451] break-words
                  ${
                    selected
                      ? "border-[#F7A450] bg-[#FFE6C8]"
                      : "border-[#F7CFA5] bg-[#FFF6EA]"
                  }
                `}
              >
                {opt}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ------------------------------------
      CHECKBOXES (major conditions)
  ------------------------------------ */
  if (q.type === "checkboxes") {
    const selected = answers.majorConditions || [];

    return (
      <div className="mb-10 w-full text-left">
        <p className="text-[17px] font-semibold text-[#0D2451] mb-3 break-words max-w-[480px]">
          {q.title}
        </p>

        <div className="w-full max-w-[480px] flex flex-col gap-2">
          {q.checkboxOptions.map((label) => {
            const isSelected = selected.includes(label);

            return (
              <div key={label} className="flex gap-2 text-sm items-start break-words">
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled
                  className="h-4 w-4 rounded border border-[#9FB4D3]"
                />
                <span className={label === "None of the above" ? "font-semibold" : ""}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
