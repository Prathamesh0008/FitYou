// FitYou/app/quiz/page.jsx
"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { ChevronLeft, Info, Calendar as CalendarIcon } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const doctorAvatar = "/doctor/doctor.png";
const QUIZ_KEY_PREFIX = "fityou_quiz_";

// weight options
const WEIGHT_VALUES = Array.from({ length: 161 }, (_, i) => 40 + i);

// QUESTIONS
const QUESTIONS = [
  { id: "height", type: "height", title: "Please provide your height." },
  { id: "weight", type: "weight", title: "Please provide your current weight." },
  {
    id: "lastWeightCheck",
    type: "date",
    title: "When did you last check your weight?",
  },
  {
    id: "targetWeightGoal",
    type: "select",
    title: "What is your target weight for the next 12 months?",
    options: [
      "I have no target weight in mind",
      "Lose 0–5 kg",
      "Lose 5–10 kg",
      "Lose more than 10 kg",
      "Maintain my current weight",
    ],
  },
  {
    id: "calories",
    type: "buttons",
    title: "How many calories do you think you consume daily?",
    options: [
      "Less than 1500",
      "1500 – 2000",
      "2000 – 3000",
      "3000 – 4000",
      "More than 4000",
      "I know the exact amount",
      "I don't count calories",
    ],
  },
  {
    id: "exercise",
    type: "buttons",
    title: "How many times a week do you exercise for more than 20 minutes?",
    helper:
      "Exercise is any activity that increases your heart rate, including an active job or a brisk walk.",
    options: [
      "Little or no exercise",
      "1 to 2 times",
      "3 to 4 times",
      "5 to 6 times",
      "7 times +",
    ],
  },
  {
    id: "alcohol",
    type: "buttons",
    title: "Do you drink alcohol?",
    options: [
      "No",
      "Yes – 1–2 units/week",
      "Yes – 3–5 units/week",
      "Yes – 6 or more units/week",
    ],
  },
  {
    id: "prevMeds",
    type: "buttons",
    title: "Have you previously taken any medicine(s) to help with weight loss?",
    options: ["Yes", "No"],
  },
  {
    id: "sleep",
    type: "select",
    title: "How many hours do you usually sleep per night?",
    options: ["<5 hours", "5–7 hours", "7–9 hours", "9+ hours"],
  },
  {
    id: "gender",
    type: "buttons",
    title: "Are you male or female?",
    options: ["Male", "Female"],
  },
  {
    id: "highBp",
    type: "buttons",
    title: "Have you been diagnosed with high blood pressure?",
    options: ["Yes", "No"],
  },
  {
    id: "diabetes",
    type: "buttons",
    title: "Have you been diagnosed with Diabetes?",
    options: ["Yes", "No"],
  },
  {
    id: "thyroid",
    type: "buttons",
    title: "Have you been diagnosed with an underactive thyroid?",
    options: ["Yes", "No"],
  },
  {
    id: "depression",
    type: "buttons",
    title: "Do you suffer from depression?",
    options: ["Yes", "No"],
  },
  {
    id: "seriousThoughts",
    type: "buttons",
    title: "Have you ever had serious thoughts about your wellbeing?",
    options: ["Yes", "No"],
  },
  {
    id: "majorConditions",
    type: "checkboxes",
    title: "Have you ever been diagnosed with any of the following?",
    checkboxOptions: [
      "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
      "An eating disorder (e.g. anorexia or bulimia)",
      "Cardiovascular (heart) problems",
      "A stroke",
      "Kidney or liver problems",
      "Thyroid carcinoma",
      "Pancreatitis",
      "None of the above",
    ],
  },
  {
    id: "familyMTC",
    type: "buttons",
    title: "Do you have a family history of Medullary Thyroid Carcinoma (MTC)?",
    options: ["Yes", "No"],
  },
  {
    id: "pregnancy",
    type: "buttons",
    title: "Are you pregnant, breastfeeding or planning on conceiving?",
    options: ["Yes", "No"],
  },
  {
    id: "physicalCondition",
    type: "buttons",
    title: "Do you have physical conditions preventing exercise?",
    options: ["Yes", "No"],
  },
  {
    id: "otherMeds",
    type: "buttons",
    title: "Do you take any other medicines or drugs?",
    options: ["Yes", "No"],
  },
  {
    id: "allergies",
    type: "buttons",
    title: "Do you have any allergies?",
    options: ["Yes", "No"],
  },
  {
    id: "additionalInfo",
    type: "buttons",
    title: "Any medical conditions or surgeries not mentioned?",
    options: ["Yes", "No"],
  },
  {
    id: "injectionPreference",
    type: "buttons",
    title: "Are you comfortable using an injection?",
    options: ["Yes", "No, I prefer a tablet"],
  },
  { id: "lifestyleSummary", type: "info" },
];

// Helpers
const formatDateYMD = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

const isSameDay = (a, b) =>
  a &&
  b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function QuizPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [introDone, setIntroDone] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const [answers, setAnswers] = useState({
    heightFeet: "",
    heightInches: "",
    heightCm: "",
    weightKg: "",
    weightRaw: "",
    lastWeightDate: "",
    targetWeightGoal: "",
    calories: "",
    exercise: "",
    alcohol: "",
    prevMeds: "",
    sleep: "",
    gender: "",
    highBp: "",
    diabetes: "",
    thyroid: "",
    depression: "",
    seriousThoughts: "",
    familyMTC: "",
    pregnancy: "",
    physicalCondition: "",
    otherMeds: "",
    allergies: "",
    additionalInfo: "",
    injectionPreference: "",
    majorConditions: [],
  });

  const [storageKey, setStorageKey] = useState(null);
  const [error, setError] = useState("");
  const [marathonAnim, setMarathonAnim] = useState(null);

  // CALENDAR
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());

  // Load animation
  useEffect(() => {
    fetch("/lottie/Marathon.json")
      .then((res) => res.json())
      .then(setMarathonAnim);
  }, []);

  // localStorage key
  useEffect(() => {
    const email = localStorage.getItem("fityou_email") || "guest";
    const key = QUIZ_KEY_PREFIX + email;
    setStorageKey(key);

    const saved = localStorage.getItem(key);
    if (saved) setAnswers((a) => ({ ...a, ...JSON.parse(saved) }));
  }, []);

  useEffect(() => {
    if (storageKey)
      localStorage.setItem(storageKey, JSON.stringify(answers));
  }, [answers, storageKey]);

  const totalSteps = QUESTIONS.length;
  const currentQuestion = introDone ? QUESTIONS[stepIndex] : null;

  const today = new Date();

  const progressPercent = useMemo(() => {
    if (!introDone) return 0;
    return Math.round(((stepIndex + 1) / totalSteps) * 100);
  }, [introDone, stepIndex]);

  const progressTagline = useMemo(() => {
    if (!introDone) return "";
    if (progressPercent <= 25) return "You’ll have more energy.";
    if (progressPercent <= 60) return "You’ll sleep better.";
    if (progressPercent < 100) return "Last few questions – keep going.";
    return "First step to reaching your goal done!";
  }, [progressPercent]);

  // Back logic
  const canGoBack = introDone && stepIndex >= 0;

  const handleBack = () => {
    if (!introDone) return;
    if (stepIndex === 0) return setIntroDone(false);
    setStepIndex((i) => i - 1);
  };

  // FINAL NAVIGATION (after last question)
  const redirectToResult = () => {
    const params = new URLSearchParams();
    if (answers.heightCm) params.set("height", answers.heightCm);
    if (answers.weightKg) params.set("weight", answers.weightKg);
    router.push(`/recommendations?${params.toString()}`);
  };

  const nextStepOrLogin = () => {
    if (user) {
      redirectToResult();
    } else {
      window.dispatchEvent(new Event("open-login"));

      const handler = () => {
        window.removeEventListener("otp-success", handler);
        redirectToResult();
      };

      window.addEventListener("otp-success", handler);
    }
  };

  // Validation
  const ensureHeightWeight = () => {
    const ft = Number(answers.heightFeet);
    const inch = Number(answers.heightInches);
    if (ft && inch >= 0) {
      const cm = ft * 30.48 + inch * 2.54;
      if (cm > 80 && cm < 260)
        setAnswers((p) => ({ ...p, heightCm: String(Math.round(cm)) }));
    }
  };

  const validateAndNext = () => {
    if (!introDone) {
      setIntroDone(true);
      return;
    }

    const q = currentQuestion;
    if (!q) return;

    if (q.type === "height") {
      if (!answers.heightFeet) return setError("Select feet.");
      if (answers.heightInches === "") return setError("Select inches.");
      ensureHeightWeight();
    }

    if (q.type === "weight" && !answers.weightKg)
      return setError("Select your weight.");

    if (q.type === "date" && !answers.lastWeightDate)
      return setError("Please select a date.");

    if (q.type === "select" && !answers[q.id])
      return setError("Please choose an option.");

    if (q.type === "checkboxes") {
      if (!answers.majorConditions.length)
        return setError("Select at least one option.");
    }

    // last screen → login or result
    if (q.type === "info" && stepIndex === totalSteps - 1)
      return nextStepOrLogin();

    setError("");
    setStepIndex((i) => i + 1);
  };

  // Calendar matrix
  const monthMatrix = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const days = new Date(year, month + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < 42; i++) {
      const num = i - startDay + 1;
      cells.push(num < 1 || num > days ? null : new Date(year, month, num));
    }
    return cells;
  }, [calendarMonth]);

  const handleDaySelect = (d) => {
    if (!d || d > today) return;
    setAnswers((p) => ({ ...p, lastWeightDate: formatDateYMD(d) }));
    setCalendarOpen(false);
  };

  // Selected date display
  const sel = answers.lastWeightDate
    ? new Date(answers.lastWeightDate)
    : null;

  // Continue button visibility
  const showContinueButton = currentQuestion?.type !== "buttons";

  // ---- RENDER QUESTION BODY ----
  const renderQuestionBody = () => {
    if (!introDone || !currentQuestion) return null;
    const q = currentQuestion;

    /** HEIGHT **/
    if (q.type === "height") {
      return (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex w-full sm:w-[360px] gap-3">
            <CustomSelect
              value={answers.heightFeet}
              onChange={(v) => setAnswers((p) => ({ ...p, heightFeet: v }))}
              placeholder="Feet"
              options={["4", "5", "6", "7", "8"]}
            />
            <CustomSelect
              value={answers.heightInches}
              onChange={(v) => setAnswers((p) => ({ ...p, heightInches: v }))}
              placeholder="Inches"
              options={Array.from({ length: 12 }, (_, i) => String(i))}
            />
          </div>
        </div>
      );
    }

    /** WEIGHT **/
    if (q.type === "weight") {
      return (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="w-full sm:w-[360px]">
            <CustomSelect
              value={answers.weightKg}
              onChange={(v) =>
                setAnswers((p) => ({ ...p, weightKg: v, weightRaw: v }))
              }
              placeholder="Select weight"
              options={WEIGHT_VALUES.map(String)}
            />
          </div>
        </div>
      );
    }

    /** DATE **/
    if (q.type === "date") {
      return (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="relative w-full sm:w-[360px]">
            <button
              onClick={() => setCalendarOpen((s) => !s)}
              className="flex items-center justify-between w-full rounded-lg border border-[#DFE8F1] bg-white px-4 py-3 text-sm shadow-sm"
            >
              <div className="flex gap-2">
                <div className="w-14 h-9 flex items-center justify-center border rounded-md">
                  {sel ? String(sel.getDate()).padStart(2, "0") : "DD"}
                </div>
                <div className="w-14 h-9 flex items-center justify-center border rounded-md">
                  {sel ? String(sel.getMonth() + 1).padStart(2, "0") : "MM"}
                </div>
                <div className="w-20 h-9 flex items-center justify-center border rounded-md">
                  {sel ? sel.getFullYear() : "YYYY"}
                </div>
              </div>

              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D0E6F4] border ml-2">
                <CalendarIcon size={18} className="text-[#0D4F8B]" />
              </span>
            </button>

            {calendarOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white border rounded-xl shadow z-20">
                <div className="flex items-center justify-between px-4 py-3 bg-[#D0E6F4] rounded-t-xl text-xs font-semibold">
                  <button
                    onClick={() =>
                      setCalendarMonth(
                        (p) => new Date(p.getFullYear(), p.getMonth() - 1, 1)
                      )
                    }
                  >
                    {"<"}
                  </button>
                  <span>
                    {calendarMonth.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    onClick={() =>
                      setCalendarMonth(
                        (p) => new Date(p.getFullYear(), p.getMonth() + 1, 1)
                      )
                    }
                  >
                    {">"}
                  </button>
                </div>

                <div className="grid grid-cols-7 text-[10px] text-center px-3 pt-2 text-[#7A8AA5]">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 px-3 pb-3 text-xs">
                  {monthMatrix.map((d, i) =>
                    !d ? (
                      <div key={i} className="h-8" />
                    ) : (
                      <button
                        key={i}
                        onClick={() => handleDaySelect(d)}
                        disabled={d > today}
                        className={`h-8 w-8 mx-auto my-[2px] rounded-md ${
                          isSameDay(d, sel)
                            ? "bg-[#FFE6C8] border-[#F7A450]"
                            : "hover:bg-[#E6F0FB]"
                        }`}
                      >
                        {d.getDate()}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    /** SELECT **/
    if (q.type === "select") {
      return (
        <CustomSelect
          value={answers[q.id] || ""}
          onChange={(v) => setAnswers((p) => ({ ...p, [q.id]: v }))}
          placeholder="Select"
          options={q.options}
        />
      );
    }

    /** BUTTON QUESTIONS **/
    if (q.type === "buttons") {
      return (
        <div className="mt-6 flex flex-col items-center">
          {q.helper && <p className="mb-4 text-sm">{q.helper}</p>}

          <div className="flex flex-col gap-3 w-full sm:w-[420px]">
            {q.options.map((opt) => {
              const selected = answers[q.id] === opt;
              return (
                <button
                  key={opt}
                  onClick={() => {
                    setAnswers((p) => ({ ...p, [q.id]: opt }));
                    setTimeout(validateAndNext, 0);
                  }}
                  className={`w-full rounded-lg border px-4 py-2 text-sm transition ${
                    selected
                      ? "border-[#F7A450] bg-[#FFE6C8]"
                      : "border-[#F7CFA5] bg-[#FFF6EA]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    /** CHECKBOXES **/
    if (q.type === "checkboxes") {
      return (
        <div className="mt-6 flex flex-col items-center">
          <div className="w-full sm:w-[480px] max-h-72 overflow-y-auto pr-2">
            {q.checkboxOptions.map((label) => (
              <label key={label} className="flex items-start gap-2 mb-2 text-sm">
                <input
                  type="checkbox"
                  checked={answers.majorConditions.includes(label)}
                  onChange={() => {
                    setAnswers((p) => {
                      const set = new Set(p.majorConditions);
                      if (label === "None of the above") {
                        set.clear();
                        set.add(label);
                      } else {
                        set.delete("None of the above");
                        set.has(label) ? set.delete(label) : set.add(label);
                      }
                      return { ...p, majorConditions: [...set] };
                    });
                    setError("");
                  }}
                />
                <span className={label === "None of the above" ? "font-semibold" : ""}>
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      );
    }

    /** INFO SCREEN **/
    if (q.type === "info") {
      return (
        <div className="mt-6 flex flex-col items-center">
          <div className="w-full sm:w-[520px] bg-[#D7EDF4] px-5 py-4 rounded-xl flex gap-4">
            <img src={doctorAvatar} className="h-20 w-20 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-semibold mb-1">
                Good news: based on your answers you may be suitable for treatment.
              </p>
              <p className="text-xs">
                The next steps help our doctors understand your health better.
              </p>
              <p className="mt-2 text-xs font-semibold">FitYou Medical Team</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#F6FAFF] text-[#0D2451] font-laila flex flex-col">
      
      {/* HEADER PROGRESS */}
      {introDone && (
        <header className="sticky top-0 bg-gradient-to-b from-[#E6F3FB] to-[#F6FAFF] border-b z-20">
          <div className="max-w-5xl mx-auto px-4 pt-4 pb-3">
            <div className="flex justify-between">
              <button onClick={handleBack} className="text-xs flex items-center">
                <ChevronLeft size={18} className="mr-1" /> Back
              </button>
              <button className="p-2 border rounded-full">
                <Info size={16} />
              </button>
            </div>

            <div className="mt-4 relative h-20">
              <div className="absolute bottom-4 left-0 right-0">
                <div className="w-full h-[4px] bg-[#E3EDF7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#9AC3D8] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div
                className="absolute bottom-4 h-14 w-14 transition-all"
                style={{ left: `calc(${progressPercent}% - 28px)` }}
              >
                {marathonAnim && (
                  <Lottie animationData={marathonAnim} loop style={{ width: 56, height: 56 }} />
                )}
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[11px] font-semibold">
                {progressPercent}%
              </div>

              <div
                className="absolute bottom-0 text-[11px] text-[#60738C] transition-all max-w-[180px] px-2"
                style={{
                  left: `clamp(0px, calc(${progressPercent}% - 90px), calc(100% - 180px))`,
                }}
              >
                {progressTagline}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* MAIN */}
      <main className="flex-1">
        {!introDone ? (
          <section className="max-w-3xl mx-auto px-4 pt-16 pb-20">
            <h1 className="text-3xl font-semibold">Medical consultation</h1>

            <div className="mt-8 flex justify-center">
              <div className="flex gap-4 bg-[#D7EDF4] px-6 py-4 rounded-xl">
                <img src={doctorAvatar} className="h-24 w-24 rounded-full object-cover" />
                <div className="text-sm">
                  <p>
                    Answer these medical questions and we'll assess if treatment is safe for you.
                  </p>
                  <p className="mt-2 font-semibold">FitYou Medical Team</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm max-w-xl mx-auto">
              This takes a few minutes and helps doctors determine if the program is appropriate.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={validateAndNext}
                className="w-full sm:w-[340px] bg-[#8DB9C9] text-white py-3 rounded-md font-semibold"
              >
                I'm ready
              </button>
            </div>

            <p className="mt-6 text-xs text-center">
              Already have a personalised plan?{" "}
              <span className="underline cursor-pointer">Login with your mobile number</span>
            </p>

            <p className="mt-10 text-[10px] text-center text-[#8CA0C0]">
              This consultation does not replace a medical evaluation.
            </p>
          </section>
        ) : (
          <section className="px-4 pt-14 pb-20 flex justify-center">
            <div className="w-full max-w-xl mx-auto">
              
              {currentQuestion?.type !== "info" && (
                <h2 className="text-[20px] font-semibold mb-6">{currentQuestion.title}</h2>
              )}

              {renderQuestionBody()}

              {error && <p className="mt-4 text-xs text-red-500">{error}</p>}

              {showContinueButton && (
                <button
                  onClick={validateAndNext}
                  className="mt-8 w-full bg-[#8DB9C9] text-white py-3 rounded-md font-semibold"
                >
                  Continue
                </button>
              )}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-[#F6FAFF]">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-[10px] text-[#8CA0C0]">
          Your answers help our doctors guide you safely — this is not a diagnosis.
        </div>
      </footer>
    </div>
  );
}
