<section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12 md:flex-row md:items-center md:pt-20">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFD6F2] bg-[#E9F3FF] px-3 py-1 text-xs font-medium text-[#0D4F8B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
            Medically-aware weight management
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0D4F8B] sm:text-4xl md:text-5xl">
            Not just “weight loss.”
            <br />
            <span className="text-[#0D4F8B]">
              A safer way to start.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-[#375C7A]">
            Fityou starts with a simple health quiz to screen for basic risks,
            then unlocks structured weekly routines that are realistic and
            sustainable.
          </p>

          {/* Mini trust strip */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-[#60738C]">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm border border-[#D3E1F4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
              Risk-aware first, routine next
            </span>
            <span>• No false promises</span>
            <span>• No shortcuts</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/quiz"
              className="rounded-full bg-[#0D4F8B] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#0A3E70]"
            >
              Start eligibility quiz
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-[#0D4F8B] underline-offset-4 hover:underline"
            >
              Explore the program →
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-xs sm:text-sm text-[#375C7A]">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0D4F8B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="relative w-full md:w-1/2">
          {/* “Abstract person” / info pill */}
          <div className="mb-4 ml-auto flex max-w-xs items-center gap-3 rounded-3xl border border-[#D3E1F4] bg-white p-3 text-[11px] text-[#375C7A] shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0D4F8B] text-xs font-semibold text-white">
              FY
            </div>
            <div>
              <p className="font-semibold text-[#0D4F8B]">A safer first step</p>
              <p className="text-[10px]">
                Example profile: no emergencies flagged, cleared for light routines.
              </p>
            </div>
          </div>

          {/* MAIN SNAPSHOT CARD */}
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-5 shadow-xl border border-[#D3E1F4]">
            {/* floating top-right mini card */}
            <div className="absolute -top-8 right-4 hidden rounded-2xl border border-[#CBE9D5] bg-[#E7F6EC] px-3 py-2 text-[10px] text-[#255C3E] shadow-md md:flex">
              <div className="mr-2 h-7 w-7 rounded-xl bg-[#4CAF6A]" />
              <div>
                <p className="font-semibold">Safe to begin</p>
                <p className="text-[9px]">No red-flag symptoms reported.</p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#60738C]">
                  YOUR SNAPSHOT
                </p>
                <p className="text-sm font-semibold text-[#0D4F8B]">
                  Today&apos;s readiness
                </p>
              </div>
              <span className="rounded-full bg-[#E7F6EC] px-3 py-1 text-[11px] font-semibold text-[#255C3E]">
                Low risk
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              {[
                {
                  label: "BMI (approx.)",
                  value: "24.3",
                  status: "In range",
                  color: "text-[#2F7A4A]",
                },
                {
                  label: "Week target",
                  value: "4 / 7",
                  status: "Small, doable steps",
                  color: "text-[#0D4F8B]",
                },
                {
                  label: "Focus",
                  value: "Sleep",
                  status: "Late nights ↓",
                  color: "text-[#60738C]",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#E9F3FF] border border-[#BFD6F2] p-3"
                >
                  <p className="text-[11px] text-[#60738C]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[#0D4F8B]">
                    {item.value}
                  </p>
                  <p className={`mt-1 text-[11px] ${item.color}`}>{item.status}</p>
                </div>
              ))}
            </div>

            {/* Mini “trend line” feel using bars */}
            <div className="mt-4 rounded-2xl border border-[#D3E1F4] bg-[#F4F7FC] p-3 text-[11px] text-[#375C7A]">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#0D4F8B]">Readiness trend (preview)</p>
                <p className="text-[10px] text-[#2F7A4A]">
                  Steady ↑
                </p>
              </div>
              <div className="mt-2 flex h-16 items-end gap-2">
                {readinessTrends.map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="relative h-12 w-full overflow-hidden rounded-full bg-[#D3E1F4]">
                      <div
                        style={{ height: `${item.value}%` }}
                        className="absolute bottom-0 left-0 w-full rounded-full bg-[#0D4F8B]"
                      />
                    </div>
                    <p className="mt-1 text-[9px] text-center text-[#60738C]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#0D4F8B] bg-[#0D4F8B] px-4 py-3 text-[11px] text-white">
              <p className="font-medium">
                “Start where you are. Not where you think you should be.”
              </p>
              <p className="mt-1 text-[10px] text-[#D3E1F4]">
                Fityou focuses first on risk-awareness and consistency.
              </p>
            </div>
          </div>

          {/* Illustrative “phone UI” preview under card */}
          <div className="mt-6 hidden max-w-md rounded-3xl border border-[#D3E1F4] bg-white p-4 text-[11px] text-[#375C7A] shadow-md md:block">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[#0D4F8B]">Today at a glance</p>
              <span className="rounded-full bg-[#0D4F8B] px-2 py-0.5 text-[10px] text-white">
                Demo
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#E9F3FF] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Sleep target
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">11:00 pm</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  Wind down 30 mins earlier
                </p>
              </div>
              <div className="rounded-xl bg-[#E7F6EC] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Movement
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">Light walk</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  15–20 mins, relaxed pace
                </p>
              </div>
              <div className="rounded-xl bg-[#F5ECFF] p-3">
                <p className="text-[10px] text-[#60738C]">
                  Focus
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0D4F8B]">Evening screen</p>
                <p className="mt-1 text-[10px] text-[#60738C]">
                  30 mins no-scroll buffer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>