// FitYou/app/quiz/page.jsx
"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { ChevronLeft, Info, Calendar as CalendarIcon } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const doctorAvatar = "/doctor/doctor.png";

// weight options 40–200 kg (single unit)
const WEIGHT_VALUES = Array.from({ length: 161 }, (_, i) => 40 + i);

// ------------------ QUESTION CONFIG WITH SUB-QUESTIONS & RULES ------------------
export const QUESTIONS = [
  // ------------------ BASIC MEASUREMENTS ------------------
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

  // ------------------ WEIGHT-LOSS MEDICATION HISTORY ------------------
 {
  id: "prevMeds",
  type: "buttons",
  title: "Have you previously taken any medicine(s) to help with weight loss?",
  options: ["Yes", "No"],
  sub: [
    {
      id: "prevMeds_recent",
      type: "select",
      placeholder: "Which medication did you use most recently?",
      required: true,
      options: [
        "Wegovy",
        "Saxenda",
        "Mounjaro",
        "Rybelsus",
        "Ozempic",
        "Other"
      ],
    },
    {
      id: "prevMeds_dose",
      type: "select",
      placeholder: "What dosage did you use?",
      required: true,
      options: [
        "0.25 mg",
        "0.5 mg",
        "1 mg",
        "1.7 mg",
        "2.4 mg",
        "5 mg",
        "10 mg",
        "15 mg",
        "Other"
      ],
    },
    {
      id: "prevMeds_lastUsed",
      type: "select",
      placeholder: "When did you last use this medicine?",
      required: true,
      options: [
        "I am currently using it",
        "In the last 3 months",
        "More than 3 months ago"
      ],
    },
    {
      id: "prevMeds_duration",
      type: "select",
      placeholder: "How long did you use it for?",
      required: true,
      options: [
        "Less than 1 month",
        "1–3 months",
        "3–6 months",
        "6–12 months",
        "More than 1 year"
      ],
    },
    {
      id: "prevMeds_weightLost",
      type: "select",
      placeholder: "How much weight did you lose?",
      required: false,
      options: [
        "No weight lost",
        "0–5 kg",
        "5–10 kg",
        "More than 10 kg"
      ],
    },
    {
      id: "prevMeds_sideEffects",
      type: "select",
      placeholder: "Did you experience any side effects?",
      required: true,
      options: ["Yes", "No"],
    },
    {
      id: "prevMeds_sideEffectsList",
      type: "textarea",
      placeholder: "If yes, please describe the side effects",
      required: false,
    },
    {
      id: "prevMeds_reasonContinue",
      type: "textarea",
      placeholder: "Why do you wish to continue treatment?",
      required: false,
    },
  ],
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

  // ------------------ BLOOD PRESSURE ------------------
  {
    id: "highBp",
    type: "buttons",
    title:
      "Have you been diagnosed with high blood pressure (with or without treatment)?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "bpMedication",
        type: "text",
        placeholder: "What medication(s) are you taking?",
        required: true,
      },
      {
        id: "bpReading",
        type: "text",
        placeholder: "What was your last BP reading?",
        required: true,
      },
    ],
  },

  // ------------------ DIABETES ------------------
  {
    id: "diabetes",
    type: "buttons",
    title: "Have you been diagnosed with Diabetes (with or without treatment)?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "diabetesType",
        type: "select",
        placeholder: "Which type of diabetes?",
        required: true,
        options: ["Type 1", "Type 2", "Gestational", "Unsure"],
      },
      {
        id: "diabetesMedication",
        type: "text",
        placeholder: "Are you taking medication? If yes, which one?",
        required: false,
      },
    ],
    eligibility: {
      notEligibleIf: (answers) =>
        answers.diabetes === "Yes" && answers.diabetesType === "Type 1",
      reason:
        "People with Type 1 Diabetes cannot use GLP-1 weight-loss medications.",
    },
  },

  // ------------------ THYROID ------------------
  {
    id: "thyroid",
    type: "buttons",
    title:
      "Have you been diagnosed with an underactive thyroid, for which you take Levothyroxine?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "thyroidDose",
        type: "text",
        placeholder: "What is your current Levothyroxine dose?",
        required: true,
      },
    ],
  },

  // ------------------ MENTAL HEALTH ------------------
  {
    id: "depression",
    type: "buttons",
    title: "Do you suffer from depression diagnosed by a psychiatrist?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "depressionMed",
        type: "text",
        placeholder: "Are you taking antidepressants?",
        required: false,
      },
    ],
  },

  {
    id: "seriousThoughts",
    type: "buttons",
    title:
      "Have you ever had very serious thoughts about your own safety or wellbeing?",
    options: ["Yes", "No"],
    eligibility: {
      notEligibleIf: (answers) => answers.seriousThoughts === "Yes",
      reason:
        "For your safety, treatment cannot proceed online. Please speak with a healthcare professional.",
    },
  },

  // ------------------ MAJOR CONDITIONS ------------------
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
    eligibility: {
      notEligibleIf: (answers) => {
        const list = answers.majorConditions || [];
        const blocked = [
          "Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
          "Thyroid carcinoma",
          "Pancreatitis",
          "An eating disorder (e.g. anorexia or bulimia)",
        ];
        return list.some((c) => blocked.includes(c));
      },
      reason:
        "Based on your medical history, online GLP-1 treatment may not be safe. Please consult your doctor.",
    },
  },

  // ------------------ FAMILY HISTORY ------------------
  {
    id: "familyMTC",
    type: "buttons",
    title: "Do you have a family history of Medullary Thyroid Carcinoma (MTC)?",
    options: ["Yes", "No"],
    eligibility: {
      notEligibleIf: (answers) => answers.familyMTC === "Yes",
      reason:
        "People with a family history of MTC cannot safely use GLP-1 medications.",
    },
  },

  // ------------------ PREGNANCY ------------------
  {
    id: "pregnancy",
    type: "buttons",
    title: "Are you pregnant, breastfeeding or planning on conceiving?",
    options: ["Yes", "No"],
    eligibility: {
      notEligibleIf: (answers) => answers.pregnancy === "Yes",
      reason:
        "GLP-1 medications are not recommended during pregnancy or breastfeeding.",
    },
  },

  // ------------------ PHYSICAL LIMITATIONS ------------------
  {
    id: "physicalCondition",
    type: "buttons",
    title: "Do you have any physical conditions that prevent you from exercising?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "physicalConditionDetails",
        type: "text",
        placeholder: "Describe your physical limitation",
        required: false,
      },
    ],
  },

  // ------------------ OTHER MEDICATIONS ------------------
  {
    id: "otherMeds",
    type: "buttons",
    title:
      "Do you take any other medicines including prescription, over-the-counter or recreational drugs?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "otherMedsList",
        type: "text",
        placeholder: "List the medicines you take",
        required: true,
      },
    ],
  },

  // ------------------ ALLERGIES ------------------
  {
    id: "allergies",
    type: "buttons",
    title: "Do you have any allergies?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "allergiesList",
        type: "text",
        placeholder: "Please list your allergies",
        required: false,
      },
    ],
  },

  // ------------------ EXTRA INFO ------------------
  {
    id: "additionalInfo",
    type: "buttons",
    title:
      "Have you ever had any medical conditions or surgery not previously mentioned in this form, or is there any further information you would like to provide the doctor?",
    options: ["Yes", "No"],
    sub: [
      {
        id: "additionalInfoDetails",
        type: "textarea",
        placeholder: "Provide additional information here",
      },
    ],
  },

  // ------------------ INJECTION PREFERENCE ------------------
  {
    id: "injectionPreference",
    type: "buttons",
    title: "Are you comfortable using an injection?",
    options: ["Yes", "No, I prefer a tablet"],
  },

  // ------------------ SUMMARY ------------------
  {
    id: "lifestyleSummary",
    type: "info",
  },
];

const getFilteredQuestions = (gender) => {
  return QUESTIONS.filter((q) => {
    // ❌ Hide pregnancy question for males
    if (q.id === "pregnancy" && gender === "Male") return false;

    return true;
  });
};

// small helper for date formatting
const formatDateYMD = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const isSameDay = (a, b) =>
  a &&
  b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

// ---- MAIN PAGE ----
export default function QuizPage() {
 
  
  const router = useRouter();
  const { user } = useAuth();
// ADD THIS STATE AT TOP:
const [quizDobOpen, setQuizDobOpen] = useState(false);
const [openDropdown, setOpen] = useState(null);

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
prevMeds_recent: "",
prevMeds_dose: "",
prevMeds_lastUsed: "",
prevMeds_duration: "",
prevMeds_weightLost: "",
prevMeds_sideEffectsList: "",
prevMeds_reasonContinue: "",

    // sub-fields
    prevMeds_name: "",
    prevMeds_sideEffects: "",

    bpMedication: "",
    bpReading: "",
    diabetesType: "",
    diabetesMedication: "",
    thyroidDose: "",
    depressionMed: "",
    physicalConditionDetails: "",
    otherMedsList: "",
    allergiesList: "",
    additionalInfoDetails: "",
  });

  const [error, setError] = useState("");
  const [marathonAnim, setMarathonAnim] = useState(null);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());

  // which button-steps user has visited via Back (for showing Continue button)
  const [backVisitedQuestions, setBackVisitedQuestions] = useState(
    () => new Set()
  );

  // used when user finishes quiz while logged out
  const [pendingSubmitAfterLogin, setPendingSubmitAfterLogin] = useState(false);

  // Load animation
    // Load animation
  useEffect(() => {
    fetch("/lottie/Marathon.json")
      .then((res) => res.json())
      .then((data) => setMarathonAnim(data));
  }, []);

  // ✅ Use filtered questions instead of raw QUESTIONS
const filteredQuestions = useMemo(
  () => getFilteredQuestions(answers.gender),
  [answers.gender]
);


const totalSteps = filteredQuestions.length;
const currentQuestion = introDone ? filteredQuestions[stepIndex] : null;



  const today = useMemo(() => new Date(), []);
  // eslint-disable-next-line no-unused-vars
  const todayStr = useMemo(() => formatDateYMD(today), [today]);

  const progressPercent = useMemo(() => {
    if (!introDone) return 0;
    const current = stepIndex + 1;
    return Math.round((current / totalSteps) * 100);
  }, [introDone, stepIndex, totalSteps]);

  const setField = (name, value) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const canGoBack = introDone && stepIndex >= 0;

  const handleBack = () => {
    if (!introDone) return;
    if (stepIndex === 0) {
      setIntroDone(false);
      return;
    }
    setBackVisitedQuestions((prev) => {
      const next = new Set(prev);
      next.add(stepIndex - 1);
      return next;
    });
    setStepIndex((i) => Math.max(0, i - 1));
  };

  // Build URL for result page
  // ✅ Build URL for LOADING page with FULL QUIZ DATA
  const redirectToResult = () => {
    const data = encodeURIComponent(JSON.stringify(answers));
    router.push(`/quiz/loading?data=${data}`);
  };


  // Save quiz to MongoDB (not used directly in main flow, but kept)
  const saveQuizToServer = async (emailArg) => {
    const email = emailArg || user?.email;
    if (!email) return;
    try {
      await fetch("/api/quiz/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers }),
      });
    } catch (err) {
      console.error("Failed to save quiz:", err);
    }
  };

  const ensureHeightWeight = () => {
    const ft = Number(answers.heightFeet) || 0;
    const inch = Number(answers.heightInches) || 0;
    if (ft && (inch || inch === 0)) {
      const cm = ft * 30.48 + inch * 2.54;
      if (cm > 80 && cm < 260) {
        setAnswers((prev) => ({ ...prev, heightCm: String(Math.round(cm)) }));
      }
    }
  };

  // tagline under the line
  const progressTagline = useMemo(() => {
    if (!introDone) return "";
    if (progressPercent <= 25) return "You’ll have more energy.";
    if (progressPercent <= 60) return "You’ll sleep better.";
    if (progressPercent < 100) return "Last few questions – keep going.";
    return "First step to reaching your goal done!";
  }, [introDone, progressPercent]);

  // 👉 AFTER LOGIN COMPLETE, IF QUIZ WAS WAITING → SAVE + REDIRECT
  useEffect(() => {
    if (!pendingSubmitAfterLogin) return;
    if (!user?.email) return;

    const saveAfterLogin = async () => {
      try {
        const res = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quiz: answers }),
        });

        const data = await res.json();
        if (data.success) {
          setPendingSubmitAfterLogin(false);
          redirectToResult();
        } else {
          console.error("Quiz save failed:", data.error);
        }
      } catch (err) {
        console.error("Quiz save error:", err);
      }
    };

    saveAfterLogin();
  }, [pendingSubmitAfterLogin, user, answers]);

  // scroll to top when step changes – esp. on mobile
  useEffect(() => {
    if (introDone && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [stepIndex, introDone]);

  // CALENDAR MATRIX
  const monthMatrix = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay(); // 0-6 (Sun-Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < 42; i++) {
      const dayNum = i - startWeekday + 1;
      if (dayNum < 1 || dayNum > daysInMonth) {
        cells.push(null);
      } else {
        cells.push(new Date(year, month, dayNum));
      }
    }
    return cells;
  }, [calendarMonth]);

  const canGoNextMonth = useMemo(() => {
    const y = calendarMonth.getFullYear();
    const m = calendarMonth.getMonth();
    const ty = today.getFullYear();
    const tm = today.getMonth();
    return y < ty || (y === ty && m < tm);
  }, [calendarMonth, today]);

  const handleDaySelect = (date) => {
    if (!date) return;
    if (date > today) return;
    const formatted = formatDateYMD(date);
    setField("lastWeightDate", formatted);
    setCalendarOpen(false);
  };

  // selected date pieces for DD/MM/YYYY display
  const selectedDateObj = answers.lastWeightDate
    ? new Date(answers.lastWeightDate)
    : null;
  const selectedDD = selectedDateObj
    ? String(selectedDateObj.getDate()).padStart(2, "0")
    : "DD";
  const selectedMM = selectedDateObj
    ? String(selectedDateObj.getMonth() + 1).padStart(2, "0")
    : "MM";
  const selectedYYYY = selectedDateObj
    ? String(selectedDateObj.getFullYear())
    : "YYYY";

  // ---- ELIGIBILITY FOR CURRENT STEP ----
  const isNotEligibleStep =
    introDone &&
    currentQuestion &&
    currentQuestion.eligibility &&
    typeof currentQuestion.eligibility.notEligibleIf === "function"
      ? currentQuestion.eligibility.notEligibleIf(answers)
      : false;

  const notEligibleReason =
    currentQuestion && currentQuestion.eligibility
      ? currentQuestion.eligibility.reason
      : "";

  // ---- CONTINUE BUTTON VISIBILITY ----
  const showContinueButton = (() => {
    if (!currentQuestion) return false;
    if (currentQuestion.type !== "buttons") return true;

    // For button questions:
    // - Always show Continue if there are sub-questions or eligibility rules
    // - Otherwise show only when user came back via Back
    if (currentQuestion.sub || currentQuestion.eligibility) return true;
    return backVisitedQuestions.has(stepIndex);
  })();

  // CHECKBOX LOGIC
  const toggleCondition = (label) => {
    setAnswers((prev) => {
      const curr = new Set(prev.majorConditions || []);
      const isSelected = curr.has(label);

      if (label === "None of the above") {
        if (isSelected) {
          curr.delete(label);
        } else {
          curr.clear();
          curr.add(label);
        }
      } else {
        curr.delete("None of the above");
        if (isSelected) curr.delete(label);
        else curr.add(label);
      }

      return { ...prev, majorConditions: Array.from(curr) };
    });
    if (error) setError("");
  };
const calculateBMI = () => {
  const h = Number(answers.heightCm);
  const w = Number(answers.weightKg);
  if (!h || !w) return null;
  const hMeters = h / 100;
  return w / (hMeters * hMeters);
};

  // ---- VALIDATE & NEXT ----
  const validateAndNext = () => {
    if (!introDone) {
      setIntroDone(true);
      setStepIndex(0);
      return;
    }

    const q = currentQuestion;
    if (!q) return;

    // Height
    if (q.type === "height") {
      if (!answers.heightFeet) {
        setError("Please select your height in feet.");
        return;
      }
      if (answers.heightInches === "") {
        setError("Please select inches.");
        return;
      }
      ensureHeightWeight();
    }

    // Weight
if (q.type === "weight") {
  if (!answers.weightKg) {
    setError("Please select your weight.");
    return;
  }

  // calculate BMI after user selects weight
  ensureHeightWeight();
  const bmi = calculateBMI();

  if (bmi && bmi <= 26) {
    setError("Unfortunately, your BMI is below the minimum requirement (BMI must be above 26).");
    return; // ❌ DO NOT MOVE FORWARD
  }
}


    // Date
    if (q.type === "date") {
      if (!answers.lastWeightDate) {
        setError("Please select the date.");
        return;
      }
    }

    // Select
    if (q.type === "select") {
      if (!answers[q.id]) {
        setError("Please choose an option.");
        return;
      }
    }

    // Checkboxes
    if (q.type === "checkboxes") {
      if (!answers.majorConditions || answers.majorConditions.length === 0) {
        setError("Please select at least one option.");
        return;
      }
    }
          // ❌ Block Continue if question has sub-questions but user did NOT select Yes/No
    if (q.type === "buttons" && q.sub && !answers[q.id]) {
      setError("Please select an option to continue.");
      return;
    }
    // ❌ Block questions that have NO sub but DO have eligibility rules
    if (q.type === "buttons" && q.eligibility && !q.sub && !answers[q.id]) {
      setError("Please select an option to continue.");
      return;
    }
    // Sub-field validation (for buttons with YES)
    if (q.type === "buttons" && q.sub && answers[q.id] === "Yes") {
      for (const subField of q.sub) {
        if (subField.required && !answers[subField.id]) {
          setError("Please complete all required details.");
          return;
        }
      }
    }

    // If this question has medical exclusion rule and user is ineligible → DO NOT ADVANCE
    if (
      q.eligibility &&
      typeof q.eligibility.notEligibleIf === "function" &&
      q.eligibility.notEligibleIf(answers)
    ) {
      setError("");
      return;
    }

    // 🔚 FINAL INFO SCREEN → SAVE + LOGIN FLOW
    if (q.type === "info" && stepIndex === totalSteps - 1) {
      // CASE 1: USER IS LOGGED IN → SAVE QUIZ
      if (user?.email) {
        (async () => {
          try {
            const res = await fetch("/api/quiz", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ quiz: answers }),
            });

            const data = await res.json();

            if (data.success) {
              redirectToResult();
            } else {
              alert("Failed to save quiz");
            }
          } catch (err) {
            console.error("Quiz save failed:", err);
            alert("Failed to save quiz");
          }
        })();
        return;
      }

      // CASE 2 — GUEST → NOW REQUIRE LOGIN
      if (typeof window !== "undefined") {
        setPendingSubmitAfterLogin(true);
        window.dispatchEvent(new Event("open-login"));
      }

      return;
    }

    // normal next
    setStepIndex((i) => Math.min(totalSteps - 1, i + 1));
  };

  // ---- RENDER HELPERS ----
// ------------------ NEW SUB QUESTION UI (Aktive Style) ------------------
const renderSubQuestions = (q) => {
  const showSub = q.sub && answers[q.id] === "Yes";
  if (!showSub) return null;

  return (
    <div className="mt-6 w-full max-w-[560px] mx-auto px-1">

      {q.sub.map((field) => {
        const value = answers[field.id] || "";
        const hasError = error && field.required && !value;

        return (
          <div key={field.id} className="mb-6">
            {/* LABEL */}
            <label
              className={`block mb-2 text-[14px] font-semibold ${
                hasError ? "text-red-600" : "text-[#0D2451]"
              }`}
            >
              {field.placeholder}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {/* TEXT INPUT */}
            {(!field.type || field.type === "text") && (
              <input
                type="text"
                value={value}
                onChange={(e) => setField(field.id, e.target.value)}
                className={`w-full px-3 py-3 rounded-lg text-[14px] 
                  border ${
                    hasError
                      ? "border-red-500 bg-red-50"
                      : "border-[#D0D7E2] bg-white"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40`}
              />
            )}

            {/* TEXTAREA */}
            {field.type === "textarea" && (
              <textarea
                rows={3}
                value={value}
                onChange={(e) => setField(field.id, e.target.value)}
                className={`w-full px-3 py-3 rounded-lg text-[14px]
                  border ${
                    hasError
                      ? "border-red-500 bg-red-50"
                      : "border-[#D0D7E2] bg-white"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40`}
              />
            )}
            

            {/* SELECT DROPDOWN */}
{field.type === "select" && (
  <div className="relative">
    {/* Trigger Button */}
    <button
      type="button"
      onClick={() => setOpen(field.id)}
      className={`
        w-full px-3 py-3 rounded-lg text-[14px] flex justify-between items-center
        border
        ${hasError ? "border-red-500 bg-red-50" : "border-[#D0D7E2] bg-white"}
        text-[#0D4F8B]
        focus:outline-none
      `}
    >
      <span>{value || "Select"}</span>

      {/* Custom Arrow */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#0D4F8B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7l5 5 5-5" />
      </svg>
    </button>

    {/* Dropdown menu */}
    {openDropdown === field.id && (
      <div
        className="
          absolute z-50 mt-1 w-full 
          bg-white border border-[#D0D7E2] rounded-lg shadow-md
          max-h-52 overflow-y-auto
        "
      >
        {field.options.map((op) => (
          <div
            key={op}
            onClick={() => {
              setField(field.id, op);
              setOpen(null);
            }}
            className="
              px-3 py-2 text-[14px] cursor-pointer 
              hover:bg-[#EAF4FF] text-[#0D4F8B]
            "
          >
            {op}
          </div>
        ))}
      </div>
    )}
  </div>
)}


          </div>
        );
      })}
    </div>
  );
};


  const renderQuestionBody = () => {
    if (!introDone || !currentQuestion) return null;
    const q = currentQuestion;

    // HEIGHT
    if (q.type === "height") {
      return (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex w-full sm:w-[360px] gap-3">
            <CustomSelect
              value={answers.heightFeet}
              onChange={(v) => setField("heightFeet", v)}
              placeholder="Feet"
              options={["4", "5", "6", "7", "8"]}
            />
            <CustomSelect
              value={answers.heightInches}
              onChange={(v) => setField("heightInches", v)}
              placeholder="Inches"
              options={Array.from({ length: 12 }, (_, i) => String(i))}
            />
          </div>
        </div>
      );
    }

    // WEIGHT
    if (q.type === "weight") {
      return (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="w-full sm:w-[360px]">
            <CustomSelect
              value={answers.weightKg}
              onChange={(v) => {
                setField("weightKg", v);
                setField("weightRaw", v);
              }}
              placeholder="Select weight"
              options={WEIGHT_VALUES.map((kg) => `${kg}`)}
            />
          </div>
        </div>
      );
    }

    // DATE
   if (q.type === "date") {
  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="relative w-full sm:w-[360px] flex flex-col items-center">

        {/* CLICK → OPEN DOB POPUP CALENDAR */}
        <button
          type="button"
          onClick={() => setQuizDobOpen(true)}
          className="flex items-center justify-center gap-0 w-full rounded-lg border border-[#DFE8F1] bg-white px-4 py-3 text-sm text-[#0D2451] shadow-sm hover:border-[#C7D7EC] transition"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-white">
                {selectedDD}
              </div>
              <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-white">
                {selectedMM}
              </div>
              <div className="w-20 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-white">
                {selectedYYYY}
              </div>
            </div>
          </div>

          <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D0E6F4] border border-[#BCD6EA] ml-2">
            <CalendarIcon size={18} className="text-[#0D4F8B]" />
          </span>
        </button>

        {/* ✔ USE YOUR PROFILE DOB CALENDAR COMPONENT */}
        {quizDobOpen && (
          <DobCalendar
            currentDate={answers.lastWeightDate}
            onSelect={(date) => {
              setField("lastWeightDate", date);
              setQuizDobOpen(false);
            }}
            onClose={() => setQuizDobOpen(false)}
          />
        )}
      </div>
    </div>
  );
}


    // SELECT
    if (q.type === "select") {
      return (
        <CustomSelect
          value={answers[q.id] || ""}
          onChange={(v) => setField(q.id, v)}
          placeholder="Select"
          options={q.options}
        />
      );
    }

    // BUTTONS
    if (q.type === "buttons") {
      return (
        <div className="mt-6 flex flex-col items-center">
          {q.helper && (
            <p className="text-sm text-[#3E5678] max-w-xl mb-4 text-left">
              {q.helper}
            </p>
          )}
          <div className="flex flex-col gap-3 w-full sm:w-[420px]">
            {q.options.map((opt) => {
              const selected = answers[q.id] === opt;
              const hasSub = !!q.sub || !!q.eligibility;

              const handleClick = () => {
                setAnswers((prev) => ({ ...prev, [q.id]: opt }));
                if (error) setError("");
                // Auto-next only if NO sub questions & NO eligibility
                if (!hasSub) {
                  setTimeout(() => validateAndNext(), 0);
                }
              };

              return (
                <button
                  key={opt}
                  type="button"
                  onClick={handleClick}
                  className={`w-full rounded-lg border px-4 py-2 text-sm text-[#0D2451] transition
                    ${
                      selected
                        ? "border-[#F7A450] bg-[#FFE6C8] shadow-sm"
                        : "border-[#F7CFA5] bg-[#FFF6EA] hover:bg-[#FFEAD3]"
                    }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Inline sub-questions (Aktive-style card) */}
          {renderSubQuestions(q)}

          {/* Medical ineligibility message (for this step) */}
          {isNotEligibleStep && notEligibleReason && (
            <div className="mt-6 bg-[#FDECEC] border border-[#F3C1C1] text-[#B84646] rounded-lg px-4 py-3 text-sm flex gap-3 max-w-md">
              <span className="text-lg">❌</span>
              <div>
                <p className="font-semibold mb-1">Unable to prescribe online</p>
                <p>{notEligibleReason}</p>
              </div>
            </div>
          )}
        </div>
      );
    }

    // CHECKBOXES
    if (q.type === "checkboxes") {
      const selected = answers.majorConditions || [];

      return (
        <div className="mt-6 flex flex-col items-center">
          <div className="w-full sm:w-[480px] max-h-72 overflow-y-auto pr-2 text-left">
            {q.checkboxOptions.map((label) => {
              const selectedItem =
                answers.majorConditions &&
                answers.majorConditions.includes(label);
              return (
                <label
                  key={label}
                  className="flex items-start gap-2 text-sm text-[#0D2451] mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedItem}
                    onChange={() => toggleCondition(label)}
                    className="mt-[2px] h-4 w-4 rounded border border-[#9FB4D3]"
                  />
                  <span
                    className={
                      label === "None of the above" ? "font-semibold" : ""
                    }
                  >
                    {label}
                  </span>
                </label>
              );
            })}
          </div>

          {isNotEligibleStep && notEligibleReason && (
            <div className="mt-6 bg-[#FDECEC] border border-[#F3C1C1] text-[#B84646] rounded-lg px-4 py-3 text-sm flex gap-3 max-w-md">
              <span className="text-lg">❌</span>
              <div>
                <p className="font-semibold mb-1">Unable to prescribe online</p>
                <p>{notEligibleReason}</p>
              </div>
            </div>
          )}
        </div>
      );
    }

    // INFO / SUMMARY
    if (q.type === "info") {
      return (
        <div className="mt-6 flex flex-col items-center">
          <div className="w-full sm:w-[520px] rounded-xl bg-[#D7EDF4] px-5 py-4 flex gap-4 items-center">
            <img
              src={doctorAvatar}
              alt="Doctor"
              className="h-20 w-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="text-sm text-[#0D2451]">
              <p className="font-semibold mb-1">
                Good news: based on your answers so far, you may be suitable for
                a medical weight management program.
              </p>
              <p className="text-xs">
                The next steps will help our doctors understand your health
                history better and confirm if a treatment is appropriate.
              </p>
              <p className="mt-2 text-xs font-semibold">FitYou Medical Team</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#0D2451]">
            This is a screening tool and does not replace an in-person medical
            consultation.
          </p>
        </div>
      );
    }

    return null;
  };

  // ---- MAIN RENDER ----
  return (
    <div className="min-h-screen bg-[#F6FAFF] text-[#0D2451] font-laila flex flex-col">
      {introDone && (
        <header className="w-full border-b border-[#E5EEF6] bg-gradient-to-b from-[#E6F3FB] to-[#F6FAFF] sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 pt-4 pb-3">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={!canGoBack}
                className="flex items-center text-xs text-[#0D2451] disabled:opacity-40"
              >
                <ChevronLeft size={18} className="mr-1" />
                Back
              </button>

              <button
                type="button"
                className="p-2 rounded-full border border-[#D6E4F2] bg-white"
              >
                <Info size={16} className="text-[#0D2451]" />
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
                className="absolute bottom-4 h-14 w-14 transition-all duration-500"
                style={{ left: `calc(${progressPercent}% - 28px)` }}
              >
                {marathonAnim && (
                  <Lottie
                    animationData={marathonAnim}
                    loop
                    style={{ height: "56px", width: "56px" }}
                  />
                )}
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-[#0D2451]">
                {progressPercent}%
              </div>

              <div
                className="
                  absolute bottom-0
                  text-[11px] text-[#60738C]
                  transition-all duration-500
                  whitespace-nowrap
                  max-w-[180px]
                  sm:max-w-[260px]
                  overflow-hidden
                  px-2
                "
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

      <main className="flex-1">
        {!introDone ? (
          <section className="max-w-3xl mx-auto px-4 pt-16 pb-20 text-left">
            <h1 className="text-3xl font-semibold text-[#0D2451]">
              Medical consultation
            </h1>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-4 rounded-xl bg-[#D7EDF4] px-6 py-4 max-w-xl text-left">
                <img
                  src={doctorAvatar}
                  alt="Doctor"
                  className="h-24 w-24 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-sm text-[#0D2451]">
                  <p>
                    Answer the medical questions in this online consultation and
                    we&apos;ll assess if treatment is safe for you to use.
                    It&apos;s free.
                  </p>
                  <p className="mt-2 font-semibold">FitYou Medical Team</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-[#3E5678] max-w-xl mx-auto">
              This consultation is a set of online questions about your health
              and lifestyle. It takes a few minutes and helps our doctors
              understand whether a medical program is appropriate for you.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={validateAndNext}
                className="w-full sm:w-[340px] rounded-md bg-[#8DB9C9] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7AA7B8] transition"
              >
                I&apos;m ready
              </button>
            </div>

            <p className="mt-6 text-xs text-[#3E5678] text-center">
              Already have a personalised plan?{" "}
              <span className="underline cursor-pointer">
                Login with your mobile number
              </span>
            </p>

            <p className="mt-10 text-[10px] text-[#8CA0C0] text-center">
              This consultation does not replace an in-person medical
              evaluation.
            </p>
          </section>
        ) : (
          <section className="px-4 pt-14 pb-20 flex justify-center">
            <div className="w-full max-w-xl mx-auto">
              {currentQuestion?.type !== "info" && (
                <h2 className="text-[17px] md:text-[22px] font-semibold text-[#0D2451] leading-snug text-left mb-6 max-w-xl mx-auto">
                  {currentQuestion.title}
                </h2>
              )}

              {renderQuestionBody()}

              {error && (
                <p className="mt-4 text-xs text-red-500 font-medium">{error}</p>
              )}

              {showContinueButton && (
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={isNotEligibleStep ? undefined : validateAndNext}
                    disabled={isNotEligibleStep}
                    className={`w-full rounded-md px-6 py-3 text-sm font-semibold transition
                      ${
                        isNotEligibleStep
                          ? "bg-[#C7D7DE] text-white opacity-60 cursor-not-allowed"
                          : "bg-[#8DB9C9] text-white hover:bg-[#7AA7B8]"
                      }
                    `}
                  >
                    {isNotEligibleStep ? "You are not eligible" : "Continue"}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className="w-full border-t border-[#E5EEF6] bg-[#F6FAFF]">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center">
          <p className="text-[10px] text-[#8CA0C0]">
            Your answers help our doctors guide you safely — this is not a
            diagnosis.
          </p>
        </div>
      </footer>
    </div>
  );
}


function DobCalendar({ currentDate, onSelect, onClose }) {
  const today = new Date();
const initial = currentDate ? new Date(currentDate) : today;


  const [month, setMonth] = useState(initial.getMonth());
  const [year, setYear] = useState(initial.getFullYear());
  const [monthOpen, setMonthOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  const months = [
    "January",   
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 120 }, (_, i) => today.getFullYear() - i);

  const days = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const handleSelect = (day) => {
    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    onSelect(formatted);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* CALENDAR MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-xs rounded-2xl shadow-lg p-4">
          {/* HEADER: Month + Year Dropdown */}
          <div className="flex items-center justify-between mb-4 relative">
            {/* MONTH DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setMonthOpen(!monthOpen);
                  setYearOpen(false);
                }}
                className="px-3 py-2 border border-[#D0D7E2] rounded-lg bg-white flex items-center gap-2 text-[#0D4F8B]"
              >
                {months[month]}
                <span className="text-xs">▼</span>
              </button>

              {monthOpen && (
                <div className="absolute z-10 bg-white border border-[#E5EDF5] rounded-lg shadow-md mt-1 w-40 max-h-60 overflow-y-auto">
                  {months.map((m, i) => (
                    <button
                      key={i}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-[#F5FAFD] ${
                        i === month ? "bg-[#E5F2FF] text-[#0D4F8B]" : ""
                      }`}
                      onClick={() => {
                        setMonth(i);
                        setMonthOpen(false);
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* YEAR DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setYearOpen(!yearOpen);
                  setMonthOpen(false);
                }}
                className="px-3 py-2 border border-[#D0D7E2] rounded-lg bg-white flex items-center gap-2 text-[#0D4F8B]"
              >
                {year}
                <span className="text-xs">▼</span>
              </button>

              {yearOpen && (
                <div className="absolute z-10 bg-white border border-[#E5EDF5] rounded-lg shadow-md mt-1 w-28 max-h-60 overflow-y-auto">
                  {years.map((y) => (
                    <button
                      key={y}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-[#F5FAFD] ${
                        y === year ? "bg-[#E5F2FF] text-[#0D4F8B]" : ""
                      }`}
                      onClick={() => {
                        setYear(y);
                        setYearOpen(false);
                      }}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DAYS HEADER */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold text-[#0D4F8B]">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
              <div key={index} className="py-1">
                {d}
              </div>
            ))}
          </div>

          {/* DAYS GRID */}
          <div className="grid grid-cols-7 text-center text-sm">
            {Array(firstDay)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

           {Array.from({ length: days }, (_, i) => i + 1).map((day) => {
  const selectedDate = new Date(year, month, day);
  const isFuture = selectedDate > today;

  return (
    <button
      key={day}
      disabled={isFuture}
      onClick={() => handleSelect(day)}
      className={`
        py-2 rounded-lg 
        ${isFuture
          ? "text-[#C5CFDF] cursor-not-allowed"
          : "hover:bg-[#E3F2FD] text-[#0D4F8B]"
        }
      `}
    >
      {day}
    </button>
  );
})}

          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 py-2 rounded-lg bg-[#0D4F8B] text-white"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
