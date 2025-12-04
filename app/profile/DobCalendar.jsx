function DobCalendar({ currentDate, onSelect, onClose }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const selectDate = (day) => {
    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    onSelect(formatted);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Calendar Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => {
                if (month === 0) {
                  setMonth(11);
                  setYear((y) => y - 1);
                } else setMonth((m) => m - 1);
              }}
              className="px-3 py-1 rounded-lg bg-[#EAF4FF] text-[#0D4F8B]"
            >
              ←
            </button>

            <h3 className="text-lg font-semibold text-[#0D4F8B]">
              {today.toLocaleString("default", { month: "long" })} {year}
            </h3>

            <button
              onClick={() => {
                if (month === 11) {
                  setMonth(0);
                  setYear((y) => y + 1);
                } else setMonth((m) => m + 1);
              }}
              className="px-3 py-1 rounded-lg bg-[#EAF4FF] text-[#0D4F8B]"
            >
              →
            </button>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 text-center text-sm text-[#7A8BA4] mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={i}></div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                onClick={() => selectDate(day)}
                className={`py-2 rounded-lg transition
                  ${
                    currentDate ===
                    `${year}-${String(month + 1).padStart(2, "0")}-${String(
                      day
                    ).padStart(2, "0")}`
                      ? "bg-[#0D4F8B] text-white"
                      : "bg-[#F2F7FA] text-[#0D4F8B] hover:bg-[#D8EAF8]"
                  }
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
