// // FitYou/app/quiz/page.jsx
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import Lottie from "lottie-react";
// import { ChevronLeft, Info, Calendar as CalendarIcon } from "lucide-react";
// import CustomSelect from "@/components/CustomSelect";
// import { QUESTIONS } from "./questions";




// const doctorAvatar = "/doctor/doctor.png";

// // weight options 40–200 kg (single unit)
// const WEIGHT_VALUES = Array.from({ length: 161 }, (_, i) => 40 + i);



// // small helper for date formatting
// const formatDateYMD = (date) => {
//   const y = date.getFullYear();
//   const m = String(date.getMonth() + 1).padStart(2, "0");
//   const d = String(date.getDate()).padStart(2, "0");
//   return `${y}-${m}-${d}`;
// };

// const isSameDay = (a, b) =>
//   a &&
//   b &&
//   a.getFullYear() === b.getFullYear() &&
//   a.getMonth() === b.getMonth() &&
//   a.getDate() === b.getDate();

// // ---- MAIN PAGE ----
// export default function QuizPage() {
//   const router = useRouter();

//   const [introDone, setIntroDone] = useState(false);
//   const [stepIndex, setStepIndex] = useState(0);

//   const [answers, setAnswers] = useState({
//     heightFeet: "",
//     heightInches: "",
//     heightCm: "",
//     weightKg: "",
//     weightRaw: "",
//     lastWeightDate: "",
//     targetWeightGoal: "",
//     calories: "",
//     exercise: "",
//     alcohol: "",
//     prevMeds: "",
//     sleep: "",
//     gender: "",
//     highBp: "",
//     diabetes: "",
//     thyroid: "",
//     depression: "",
//     seriousThoughts: "",
//     familyMTC: "",
//     pregnancy: "",
//     physicalCondition: "",
//     otherMeds: "",
//     allergies: "",
//     additionalInfo: "",
//     injectionPreference: "",
//     majorConditions: [],
//   });

//   const [error, setError] = useState("");
//   const [eligibilityMessage, setEligibilityMessage] = useState("");
//   const [alcoholWarning, setAlcoholWarning] = useState("");


//   const [marathonAnim, setMarathonAnim] = useState(null);

//   // calendar UI state
//   const [calendarOpen, setCalendarOpen] = useState(false);
//   const [calendarMonth, setCalendarMonth] = useState(() => new Date());

//   // 🔵 NEW: review animation + popups
//   const [showReviewScreen, setShowReviewScreen] = useState(false);
//   const [reviewStep, setReviewStep] = useState(0); // 0–3
//   const [showPhonePopup, setShowPhonePopup] = useState(false);
//   const [showOtpPopup, setShowOtpPopup] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otpCode, setOtpCode] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [otpError, setOtpError] = useState("");
//   const [otpTimer, setOtpTimer] = useState(60);

  
//   // Track which button-questions were visited via Back
// const [backVisitedQuestions, setBackVisitedQuestions] = useState(new Set());


//   useEffect(() => {
//     fetch("/lottie/Marathon.json")
//       .then((res) => res.json())
//       .then((data) => setMarathonAnim(data));
//   }, []);

//   const totalSteps = QUESTIONS.length;

//   const progressPercent = useMemo(() => {
//     if (!introDone) return 0;
//     const current = stepIndex + 1;
//     return Math.round((current / totalSteps) * 100);
//   }, [introDone, stepIndex, totalSteps]);

//   const currentQuestion = introDone ? QUESTIONS[stepIndex] : null;

//   const today = useMemo(() => new Date(), []);
//   // eslint-disable-next-line no-unused-vars
//   const todayStr = useMemo(() => formatDateYMD(today), [today]);

//   const setField = (name, value) => {
//   setAnswers((prev) => ({ ...prev, [name]: value }));

//   // Clear all eligibility messages when user edits answer
//   setEligibilityMessage("");
  
//   // Clear alcohol warning
//   if (name === "alcohol") setAlcoholWarning("");

//   if (error) setError("");
// };


//   const canGoBack = introDone && stepIndex >= 0;

//   const handleBack = () => {
//     if (!introDone) return;
//     if (stepIndex === 0) {
//       setIntroDone(false);
//       return;
//     }
//    setBackVisitedQuestions(prev => new Set(prev).add(stepIndex - 1));
// setStepIndex(i => Math.max(0, i - 1));

//   };

//   // build URL for result page

//   const redirectToResult = () => {
//   const params = new URLSearchParams();

//   // send height, weight, and BMI
//   if (answers.heightCm) params.set("height", answers.heightCm);
//   if (answers.weightKg) params.set("weight", answers.weightKg);

//   // calculate BMI here and send it
//   const heightM = Number(answers.heightCm) / 100;
//   const bmi = (Number(answers.weightKg) / (heightM * heightM)).toFixed(1);
//   params.set("bmi", bmi);

//   // send target weight directly
//   if (answers.targetWeightGoal)
//     params.set("target", answers.targetWeightGoal);

//   // send calories (used in “you consume more calories” section)
//   if (answers.calories)
//     params.set("calories", answers.calories);

//   router.push(`/recommendations?${params.toString()}`);
// };


//   // NEW: Slower review animation - step-by-step
// const goToResult = () => {
//   setShowReviewScreen(true);
//   setReviewStep(0);

//   // Step duration (slower)
//   const STEP_TIME = 1800; // 1.8 seconds per step

//   // Step 1
//   setTimeout(() => {
//     setReviewStep(1); // Fill line 1
//   }, STEP_TIME);

//   setTimeout(() => {
//     setReviewStep(2); // Tick 1 + Show line 2
//   }, STEP_TIME * 2);

//   // Step 2
//   setTimeout(() => {
//     setReviewStep(3); // Fill line 2
//   }, STEP_TIME * 3);

//   setTimeout(() => {
//     setReviewStep(4); // Tick 2 + Show line 3
//   }, STEP_TIME * 4);

//   // Step 3
//   setTimeout(() => {
//     setReviewStep(5); // Fill line 3
//   }, STEP_TIME * 5);

//   setTimeout(() => {
//     setReviewStep(6); // Tick 3 -> Then show phone popup
//   }, STEP_TIME * 6);

//   // After all steps — show phone popup
//   setTimeout(() => {
//     setShowPhonePopup(true);
//   }, STEP_TIME * 7);
// };


//   const ensureHeightWeight = () => {
//     const ft = Number(answers.heightFeet) || 0;
//     const inch = Number(answers.heightInches) || 0;
//     if (ft && (inch || inch === 0)) {
//       const cm = ft * 30.48 + inch * 2.54;
//       if (cm > 80 && cm < 260) {
//         setAnswers((prev) => ({ ...prev, heightCm: String(Math.round(cm)) }));
//       }
//     }
//   };

//   // tagline under the line (Aktive-style – text changes with progress)
//   const progressTagline = useMemo(() => {
//     if (!introDone) return "";
//     if (progressPercent <= 25) return "You’ll have more energy.";
//     if (progressPercent <= 60) return "You’ll sleep better.";
//     if (progressPercent < 100) return "Last few questions – keep going.";
//     return "First step to reaching your goal done!";
//   }, [introDone, progressPercent]);

//   // ---- MAJOR CONDITIONS ELIGIBILITY (for button + red box) ----
//   const isMajorConditionsStep =
//     introDone && currentQuestion?.id === "majorConditions";
//   const selectedMajor = answers.majorConditions || [];
//   const hasOthersMajor = selectedMajor.some((i) => i !== "None of the above");
//   const isNotEligibleMajor =
//     isMajorConditionsStep && (selectedMajor.length > 3 || hasOthersMajor);

//   const validateAndNext = () => {
//   const q = currentQuestion;

//   // ⭐ Start quiz when clicking "I'm ready"
//   if (!introDone) {
//     setIntroDone(true);
//     setStepIndex(0);
//     return true;
//   }

//   if (!q) return false;

  


//   // HEIGHT
//   if (q.type === "height") {
//     if (!answers.heightFeet) {
//       setError("Please select your height in feet.");
//       return false;
//     }
//     if (answers.heightInches === "") {
//       setError("Please select inches.");
//       return false;
//     }
//     ensureHeightWeight();
//   }

//   // WEIGHT
//   if (q.type === "weight") {
//     if (!answers.weightKg) {
//       setError("Please select your weight.");
//       return false;
//     }
//   }

//   // BMI BLOCK
//   if (q.id === "weight") {
//     const heightM = Number(answers.heightCm) / 100;
//     const weight = Number(answers.weightKg);
//     const bmi = weight / (heightM * heightM);

//     if (bmi < 26) {
//       setEligibilityMessage("Your BMI is too low for safe medical treatment.");
//       return false;
//     }
//     if (bmi > 50) {
//       setEligibilityMessage("Your BMI is too high. You must consult a doctor offline.");
//       return false;
//     }
//   }

//   // DATE
//   if (q.type === "date") {
//     if (!answers.lastWeightDate) {
//       setError("Please select the date.");
//       return false;
//     }
//   }

//   // SELECT
//   if (q.type === "select") {
//     if (!answers[q.id]) {
//       setError("Please choose an option.");
//       return false;
//     }
//   }

//   // CALORIES
//   if (q.id === "calories" && Number(answers.calories) > 4000) {
//     setEligibilityMessage("Your daily calorie intake is too high for safe online prescribing.");
//     return false;
//   }

//   // FAMILY MTC
//   if (q.id === "familyMTC" && answers.familyMTC === "Yes") {
//     setEligibilityMessage("This medication cannot be prescribed due to your family history.");
//     return false;
//   }

//   // GENDER → AUTO SKIP
//   if (q.id === "gender" && answers.gender === "Male") {
//     setAnswers(prev => ({ ...prev, pregnancy: "No" }));
//   }

//   // PREGNANCY
//   if (q.id === "pregnancy" && answers.gender === "Female") {
//     if (answers.pregnancy === "Yes") {
//       setEligibilityMessage("Treatment cannot be prescribed during pregnancy.");
//       return false;
//     }
//   }

//   // MAJOR CONDITIONS
//   if (q.id === "majorConditions") {
//     const selected = answers.majorConditions || [];
//     const danger = [
//       "Cardiovascular (heart) problems",
//       "A stroke",
//       "Kidney or liver problems",
//       "Thyroid carcinoma"
//     ];

//     if (selected.some(x => danger.includes(x))) {
//       setEligibilityMessage("A doctor's consultation is required.");
//       return false;
//     }

//     if (selected.length > 3) {
//       setEligibilityMessage("Unable to prescribe due to multiple conditions.");
//       return false;
//     }
//   }

//   // MENTAL HEALTH
//   if (q.id === "seriousThoughts" && answers.seriousThoughts === "Yes") {
//     setEligibilityMessage("We cannot proceed due to your mental health responses.");
//     return false;
//   }

//   // THYROID
//   if (q.id === "thyroid" && answers.thyroid === "Unstable") {
//     setEligibilityMessage("Cannot prescribe due to unstable thyroid condition.");
//     return false;
//   }

//   // INFO PAGE
//   if (q.type === "info" && stepIndex === totalSteps - 1) {
//     goToResult();
//     return false;
//   }

//   // MOVE FORWARD
//   // ✔ Move ONLY if no eligibility message AND no error
// // AFTER all validation above is complete
// // FINAL VALIDATION GATE
// // If ANY validation above returned false → DO NOT move
// if (error || eligibilityMessage) {
//   return false;
// }

// // BUTTON QUESTIONS DO NOT AUTO-NEXT
// // -------- BUTTON (PEACH OPTION) LOGIC --------
// if (q.type === "buttons") {
//   // Do NOT block for 'Please select an option' — user already clicked the button

//   if (eligibilityMessage) return false;

//   // If user came from back → do not auto-next (show Continue button)
//   if (backVisitedQuestions.has(stepIndex)) return false;

//   // AUTO NEXT — WORKS LIKE AKTIVE
//   setStepIndex(i => Math.min(i + 1, totalSteps - 1));
//   return true;
// }if (q.type === "buttons") {
//   const selected = answers[q.id];

//   // 1️⃣ If validation produced an eligibility message → DO NOT move
//   if (eligibilityMessage) {
//     // Block auto-next. Stay on same question.
//     return false;
//   }

//   // 2️⃣ If user came via BACK → do not auto-next (show Continue instead)
//   if (backVisitedQuestions.has(stepIndex)) {
//     return false;
//   }

//   // 3️⃣ Otherwise user is eligible → AUTO NEXT
//   setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
//   return true;
// }



// // ---- DEFAULT AUTO-NEXT FOR ALL OTHER QUESTIONS ----
// setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
// return true;
// };




//   // ---- CHECKBOX LOGIC ----
//   const toggleCondition = (label) => {
//     setAnswers((prev) => {
//       const curr = new Set(prev.majorConditions);
//       const isSelected = curr.has(label);

//       if (label === "None of the above") {
//         if (isSelected) {
//           curr.delete(label);
//         } else {
//           curr.clear();
//           curr.add(label);
//         }
//       } else {
//         curr.delete("None of the above");
//         if (isSelected) curr.delete(label);
//         else curr.add(label);
//       }

//       return { ...prev, majorConditions: Array.from(curr) };
//     });
//     if (error) setError("");
//   };

//   // scroll to top when step changes – esp. on mobile
//   useEffect(() => {
//     if (introDone && typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [stepIndex, introDone]);

//   // ---- CALENDAR MATRIX ----
//   const monthMatrix = useMemo(() => {
//     const year = calendarMonth.getFullYear();
//     const month = calendarMonth.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const startWeekday = firstDay.getDay(); // 0-6 (Sun-Sat)
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const cells = [];
//     for (let i = 0; i < 42; i++) {
//       const dayNum = i - startWeekday + 1;
//       if (dayNum < 1 || dayNum > daysInMonth) {
//         cells.push(null);
//       } else {
//         cells.push(new Date(year, month, dayNum));
//       }
//     }
//     return cells;
//   }, [calendarMonth]);

//   const canGoNextMonth = useMemo(() => {
//     const y = calendarMonth.getFullYear();
//     const m = calendarMonth.getMonth();
//     const ty = today.getFullYear();
//     const tm = today.getMonth();
//     return y < ty || (y === ty && m < tm);
//   }, [calendarMonth, today]);

//   const handleDaySelect = (date) => {
//     if (!date) return;
//     if (date > today) return;
//     const formatted = formatDateYMD(date);
//     setField("lastWeightDate", formatted);
//     setCalendarOpen(false);
//   };

//   // selected date pieces for DD/MM/YYYY display
//   const selectedDateObj = answers.lastWeightDate
//     ? new Date(answers.lastWeightDate)
//     : null;
//   const selectedDD = selectedDateObj
//     ? String(selectedDateObj.getDate()).padStart(2, "0")
//     : "DD";
//   const selectedMM = selectedDateObj
//     ? String(selectedDateObj.getMonth() + 1).padStart(2, "0")
//     : "MM";
//   const selectedYYYY = selectedDateObj
//     ? String(selectedDateObj.getFullYear())
//     : "YYYY";

//   // ---- OTP TIMER EFFECT ----
//   useEffect(() => {
//     if (!showOtpPopup) return;
//     setOtpTimer(60);
//     const id = setInterval(() => {
//       setOtpTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(id);
//   }, [showOtpPopup]);

//   const handleSendCode = () => {
//   if (phoneNumber.length !== 10) {
//     setPhoneError("Please enter a valid 10-digit mobile number.");
//     return;
//   }

//   // ⭐ SAVE PHONE NUMBER FOR PAYMENT PAGE
//   localStorage.setItem("fityou_phone", phoneNumber);

//   setPhoneError("");
//   setShowPhonePopup(false);
//   setShowOtpPopup(true);
// };



//   const handleOtpSubmit = () => {
//   if (otpCode.length !== 4) {
//     setOtpError("Please enter the 4-digit code.");
//     return;
//   }

//   // ⭐ SAVE ALL QUIZ ANSWERS HERE
//   localStorage.setItem("fityou_quiz_answers", JSON.stringify(answers));

//   setOtpError("");
//   setShowOtpPopup(false);

//   redirectToResult();
// };


//   // ---- RENDER HELPERS ----
//   const renderQuestionBody = () => {
//     if (!introDone || !currentQuestion) return null;
//     const q = currentQuestion;

//     if (q.type === "height") {
//       return (
//         <div className="mt-6 flex flex-col items-center gap-4">
//   <div className="flex w-full sm:w-[360px] gap-3">
    
//     {/* Feet */}
//     <CustomSelect
//       value={answers.heightFeet}
//       onChange={(v) => setField("heightFeet", v)}
//       placeholder="Feet"
//       options={["4","5","6","7","8"]}
//     />

//     {/* Inches */}
//     <CustomSelect
//       value={answers.heightInches}
//       onChange={(v) => setField("heightInches", v)}
//       placeholder="Inches"
//       options={Array.from({ length: 12 }, (_, i) => String(i))}
//     />

//   </div>
// </div>

//       );
//     }

//     if (q.type === "weight") {
//       return (
//        <div className="mt-6 flex flex-col items-center gap-4">
//   <div className="w-full sm:w-[360px]">
//     <CustomSelect
//       value={answers.weightKg}
//       onChange={(v) => {
//         setField("weightKg", v);
//         setField("weightRaw", v);
//       }}
//       placeholder="Select weight"
//       options={WEIGHT_VALUES.map((kg) => `${kg}`)}
//     />
//   </div>
// </div>

//       );
//     }

//     if (q.type === "date") {
//       return (
//         <div className="mt-6 flex flex-col items-center gap-4">
//           <div className="relative w-full sm:w-[360px] flex flex-col items-center">
//             {/* CLICKABLE BOXES + ICON */}
//             <button
//               type="button"
//               onClick={() => setCalendarOpen((prev) => !prev)}
//               className="flex items-center justify-center gap-0 w-full rounded-lg border border-[#DFE8F1] bg-white px-4 py-3 text-sm text-[#0D2451] shadow-sm hover:border-[#C7D7EC] transition"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-2">
//                   <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-[#FFFFFF]">
//                     {selectedDD}
//                   </div>
//                   <div className="w-14 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-[#FFFFFF]">
//                     {selectedMM}
//                   </div>
//                   <div className="w-20 h-9 flex items-center justify-center rounded-md border border-[#E1E7F0] text-xs font-semibold text-[#0D2451] bg-[#FFFFFF]">
//                     {selectedYYYY}
//                   </div>
//                 </div>
//               </div>

//               <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D0E6F4] border border-[#BCD6EA] ml-2">
//                 <CalendarIcon size={18} className="text-[#0D4F8B]" />
//               </span>
//             </button>

//             {/* CUSTOM CALENDAR POPUP */}
//             {calendarOpen && (
//               <div className="absolute top-[110%] left-1/2 -translate-x-1/2 mt-2 w-[280px] rounded-xl bg-white shadow-lg border border-[#DFE8F1] z-20">
//                 {/* header */}
//                 <div className="flex items-center justify-between px-4 py-3 bg-[#D0E6F4] rounded-t-xl text-xs font-semibold text-[#0D4F8B]">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setCalendarMonth(
//                         (prev) =>
//                           new Date(
//                             prev.getFullYear(),
//                             prev.getMonth() - 1,
//                             1
//                           )
//                       )
//                     }
//                     className="px-2 py-1 rounded-md hover:bg-[#BCD6EA]"
//                   >
//                     {"<"}
//                   </button>
//                   <span>
//                     {calendarMonth.toLocaleString("default", {
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </span>
//                   <button
//                     type="button"
//                     disabled={!canGoNextMonth}
//                     onClick={() =>
//                       setCalendarMonth(
//                         (prev) =>
//                           new Date(
//                             prev.getFullYear(),
//                             prev.getMonth() + 1,
//                             1
//                           )
//                       )
//                     }
//                     className={`px-2 py-1 rounded-md ${
//                       canGoNextMonth
//                         ? "hover:bg-[#BCD6EA]"
//                         : "opacity-40 cursor-not-allowed"
//                     }`}
//                   >
//                     {">"}
//                   </button>
//                 </div>

//                 {/* days of week */}
//                 <div className="grid grid-cols-7 text-[10px] text-center text-[#7A8AA5] px-3 pt-2">
//                   {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
//                     <div key={d} className="py-1">
//                       {d}
//                     </div>
//                   ))}
//                 </div>

//                 {/* date cells */}
//                 <div className="grid grid-cols-7 text-xs px-3 pb-3">
//                   {monthMatrix.map((date, idx) => {
//                     if (!date) {
//                       return <div key={idx} className="h-8" />;
//                     }

//                     const disabled = date > today;
//                     const isSelected = selectedDateObj
//                       ? isSameDay(date, selectedDateObj)
//                       : false;

//                     return (
//                       <button
//                         key={idx}
//                         type="button"
//                         disabled={disabled}
//                         onClick={() => handleDaySelect(date)}
//                         className={`h-8 w-8 mx-auto my-[2px] rounded-md flex items-center justify-center ${
//                           disabled
//                             ? "text-[#C5CFDF] cursor-not-allowed"
//                             : isSelected
//                             ? "border-[#F7A450] bg-[#FFE6C8] shadow-sm"
//                             : "text-[#0D2451] hover:bg-[#E6F0FB]"
//                         }`}
//                       >
//                         {date.getDate()}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }

//     if (q.type === "select") {
//       return (
//         <CustomSelect
//   value={answers[q.id] || ""}
//   onChange={(v) => setField(q.id, v)}
//   placeholder="Select"
//   options={q.options}
// />

//       );
//     }

//     if (q.type === "buttons") {
//       return (
//         <div className="mt-6 flex flex-col items-center">
//           {q.helper && (
//             <p className="text-sm text-[#3E5678] max-w-xl mb-4 text-left">
//               {q.helper}
//             </p>
//           )}
//           {/* BUTTONS CENTERED */}
//           <div className="flex flex-col gap-3 w-full sm:w-[420px]">
//             {q.options.map((opt) => {
//               const selected = answers[q.id] === opt;
//               return (
//                 <button
//                   key={opt}
//                   type="button"
//                   onClick={() => {
//                     setAnswers(prev => ({ ...prev, [q.id]: opt }));
//                     setError("");          // Clear previous errors
//                     setEligibilityMessage(""); // Clear previous warnings

//                     // Delay ensures answer state is updated first
//                     setTimeout(() => {
//                       // Run validation ONCE the answer is applied
//                       validateAndNext();
//                     }, 0);
//                   }}

//                   className={`w-full rounded-lg border px-4 py-2 text-sm text-[#0D2451] transition
//                     ${
//                       selected
//                         ? "border-[#F7A450] bg-[#FFE6C8] shadow-sm"
//                         : "border-[#F7CFA5] bg-[#FFF6EA] hover:bg-[#FFEAD3]"
//                     }`}
//                 >
//                   {opt}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       );
//     }

//     if (q.type === "checkboxes") {
//       const selected = answers.majorConditions || [];
//       const hasOthers = selected.some((i) => i !== "None of the above");
//       const isNotEligible = selected.length > 3 || hasOthers;

//       return (
//         <div className="mt-6 flex flex-col items-center">
//           {/* ONLY THE LIST SCROLLS */}
//           <div className="w-full sm:w-[480px] max-h-72 overflow-y-auto pr-2 text-left">
//             {q.checkboxOptions.map((label) => {
//               const selectedItem =
//                 answers.majorConditions &&
//                 answers.majorConditions.includes(label);
//               return (
//                 <label
//                   key={label}
//                   className="flex items-start gap-2 text-sm text-[#0D2451] mb-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedItem}
//                     onChange={() => toggleCondition(label)}
//                     className="mt-[2px] h-4 w-4 rounded border border-[#9FB4D3]"
//                   />
//                   <span
//                     className={
//                       label === "None of the above" ? "font-semibold" : ""
//                     }
//                   >
//                     {label}
//                   </span>
//                 </label>
//               );
//             })}
//           </div>

//           {/* NOT ELIGIBLE ALERT */}
//           {isNotEligible && (
//             <div className="mt-6 bg-[#FDECEC] border border-[#F3C1C1] text-[#B84646] rounded-lg px-4 py-3 text-sm flex gap-3 max-w-md">
//               <span className="text-lg">❌</span>
//               <div>
//                 <p className="font-semibold">Unable to prescribe</p>
//                 <p>
//                   You cannot be prescribed this medication online. Please
//                   consult your doctor.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }

//     if (q.type === "info") {
//       return (
//         <div className="mt-6 flex flex-col items-center">
//           <div className="w-full sm:w-[520px] rounded-xl bg-[#D7EDF4] px-5 py-4 flex gap-4 items-center">
//             <img
//               src={doctorAvatar}
//               alt="Doctor"
//               className="h-20 w-20 rounded-full object-cover flex-shrink-0"
//             />
//             <div className="text-sm text-[#0D2451]">
//               <p className="font-semibold mb-1">
//                 Good news: based on your answers so far, you may be suitable for
//                 a medical weight management program.
//               </p>
//               <p className="text-xs">
//                 The next steps will help our doctors understand your health
//                 history better and confirm if a treatment is appropriate.
//               </p>
//               <p className="mt-2 text-xs font-semibold">FitYou Medical Team</p>
//             </div>
//           </div>

//           <p className="mt-4 text-xs text-[#0D2451]">
//             This is a screening tool and does not replace an in-person medical
//             consultation.
//           </p>
//         </div>
//       );
//     }

//     return null;
//   };

//   // 🔵 REVIEW SCREEN + POPUPS (AKTIVE STYLE)
//   if (showReviewScreen) {
//     const formattedTimer = `0${Math.floor(otpTimer / 60)}:${String(
//       otpTimer % 60
//     ).padStart(2, "0")}`;

//     return (
//       <div className="min-h-screen w-full bg-[#E8F4F7] flex flex-col items-center pt-24 pb-10 text-[#063363] relative">
//         {/* TITLE (EXACT AKTIVE STYLE) */}
//         <h2 className="text-[18px] font-semibold mb-12">
//           Reviewing your medical information:
//         </h2>

//         {/* THREE CHECK LINES */}
//         <div className="flex flex-col gap-9">
//           {/* ---- LINE 1 ---- */}
// <div className={`flex items-center gap-4 transition-opacity duration-300 ${reviewStep >= 0 ? "opacity-100" : "opacity-0"}`}>
//   <div className="flex flex-col">
//     <p className="text-[15px] mb-1">Checking BMI qualification</p>

//     <div className="w-[220px] h-[22px] rounded-lg bg-[#A6CDD8] overflow-hidden shadow-sm">
//       <div
//         className="h-full bg-[#6FA7B5] transition-all duration-[1600ms] ease-out rounded-lg"
//         style={{ width: reviewStep >= 1 ? "100%" : "0%" }}
//       />
//     </div>
//   </div>

//   {reviewStep >= 2 && (
//     <span className="text-[#0D4F8B] text-[20px] font-semibold">✔</span>
//   )}
// </div>

//   {/* ---- LINE 2 ---- */}
// <div className={`flex items-center gap-4 transition-opacity duration-300 ${reviewStep >= 2 ? "opacity-100" : "opacity-0"}`}>
//   <div className="flex flex-col">
//     <p className="text-[15px] mb-1">Checking contraindications</p>

//     <div className="w-[220px] h-[22px] rounded-lg bg-[#A6CDD8] overflow-hidden shadow-sm">
//       <div
//         className="h-full bg-[#6FA7B5] transition-all duration-[1600ms] ease-out rounded-lg"
//         style={{ width: reviewStep >= 3 ? "100%" : "0%" }}
//       />
//     </div>
//   </div>

//   {reviewStep >= 4 && (
//     <span className="text-[#0D4F8B] text-[20px] font-semibold">✔</span>
//   )}
// </div>


//   {/* ---- LINE 3 ---- */}
// <div className={`flex items-center gap-4 transition-opacity duration-300 ${reviewStep >= 4 ? "opacity-100" : "opacity-0"}`}>
//   <div className="flex flex-col">
//     <p className="text-[15px] mb-1">Checking safety and suitability</p>

//     <div className="w-[220px] h-[22px] rounded-lg bg-[#A6CDD8] overflow-hidden shadow-sm">
//       <div
//         className="h-full bg-[#6FA7B5] transition-all duration-[1600ms] ease-out rounded-lg"
//         style={{ width: reviewStep >= 5 ? "100%" : "0%" }}
//       />
//     </div>
//   </div>

//   {reviewStep >= 6 && (
//     <span className="text-[#0D4F8B] text-[20px] font-semibold">✔</span>
//   )}
// </div>


//         </div>

//         {/* 📱 PHONE POPUP */}
//         {showPhonePopup && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
//         <div className="bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl text-center">
//               <h3 className="text-lg md:text-xl font-semibold text-[#0D2451] mb-6">
//                 Please enter your mobile number to see your personalised plan
//               </h3>

//               <div className="flex flex-col gap-3 items-stretch mb-5">
//                 <div className="flex w-full">
//                     <button className="px-3 sm:px-4 py-3 border border-r-0 border-[#C8D7E8] rounded-l-lg text-xs sm:text-sm bg-[#F7FAFF] text-[#0D2451] whitespace-nowrap">
//                       India(+91)
//                     </button>

//                     <input
//                       type="tel"
//                       className="flex-1 border border-l-0 border-[#C8D7E8] rounded-r-lg px-3 sm:px-4 py-3 text-sm outline-none w-full"
//                       placeholder="Mobile number"
//                       value={phoneNumber}
//                       onChange={(e) => {
//                         const val = e.target.value.replace(/\D/g, "").slice(0, 10);
//                         setPhoneNumber(val);
//                         setPhoneError("");
//                       }}
//                     />
//                   </div>


//                 {phoneError && (
//                   <p className="text-xs text-red-500 text-left">{phoneError}</p>
//                 )}
//               </div>

//               <button
//                 onClick={handleSendCode}
//                 className="w-full bg-[#8DB9C9] hover:bg-[#7AA7B8] text-white font-semibold py-3 rounded-lg text-sm transition"
//               >
//                 Send code
//               </button>
//             </div>
//           </div>
//         )}

//         {/* 🔐 OTP POPUP */}
//         {showOtpPopup && (
//           <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//             <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 shadow-2xl text-center">
//               <div className="mb-4 text-sm text-[#0D2451]">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4FAFF] border border-[#C8D7E8]">
//                   <span className="text-xs text-[#7C8CA3]">+91</span>
//                   <span className="font-semibold">
//                     {phoneNumber || "Your number"}
//                   </span>
//                 </div>
//               </div>

//               <p className="text-sm text-[#0D2451] mb-5">
//                 We have sent a passcode to the above number. Please enter your
//                 code.
//               </p>

//               <div className="mb-4 flex justify-center">
//                 <input
//                   type="text"
//                   maxLength={4}
//                   className="w-32 border border-[#C8D7E8] rounded-lg text-center px-4 py-3 tracking-[0.3em] text-lg outline-none"
//                   value={otpCode}
//                   onChange={(e) => {
//                     const val = e.target.value.replace(/\D/g, "").slice(0, 4);
//                     setOtpCode(val);
//                     setOtpError("");
//                   }}

                  

//                 />
//               </div>

//               {otpError && (
//                 <p className="text-xs text-red-500 mb-2">{otpError}</p>
//               )}

//               <div className="flex items-center justify-between text-xs text-[#7C8CA3] mb-4">
//                 <button
//                   type="button"
//                   className="underline underline-offset-2"
//                   onClick={() => setOtpTimer(60)}
//                 >
//                   Resend passcode
//                 </button>
//                 <span>{formattedTimer}</span>
//               </div>

//               <button
//                 onClick={handleOtpSubmit}
//                 className="w-full bg-[#8DB9C9] hover:bg-[#7AA7B8] text-white font-semibold py-3 rounded-lg text-sm transition"
//               >
//                 Submit
//               </button>

//               <p className="mt-4 text-[10px] text-[#7C8CA3]">
//                 By continuing, you accept our Terms & Conditions and Privacy
//                 Policy.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // ---- CONTINUE BUTTON VISIBILITY LOGIC ----
// // Always show continue button (even for peach buttons)
// // ---- CONTINUE BUTTON VISIBILITY LOGIC ----
// const showContinueButton = (() => {
//   if (!currentQuestion) return false;

//   // Show continue button if:
//   // 1. User NOT eligible
//   if (eligibilityMessage) return true;

//   // 2. User returned using BACK
//   if (backVisitedQuestions.has(stepIndex)) return true;

//   // 3. Non-button question (default enabled)
//   if (currentQuestion.type !== "buttons") return true;

//   // 4. Button question → show continue ONLY if non-eligible
//   return false;
// })();

// // Disable continue if any eligibility red message exists
// const disableContinue = Boolean(eligibilityMessage || error);
//   // ---- MAIN RENDER ----
//   return (
//     <div className="min-h-screen bg-[#F6FAFF] text-[#0D2451] font-laila flex flex-col">
//       {/* HEADER + PROGRESS (sticky on top) */}
//       {introDone && (
//         <header className="w-full border-b border-[#E5EEF6] bg-gradient-to-b from-[#E6F3FB] to-[#F6FAFF] sticky top-0 z-20">
//           <div className="max-w-5xl mx-auto px-4 pt-4 pb-3">
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 disabled={!canGoBack}
//                 className="flex items-center text-xs text-[#0D2451] disabled:opacity-40"
//               >
//                 <ChevronLeft size={18} className="mr-1" />
//                 Back
//               </button>

//               <button
//                 type="button"
//                 className="p-2 rounded-full border border-[#D6E4F2] bg-white"
//               >
//                 <Info size={16} className="text-[#0D2451]" />
//               </button>
//             </div>

//             {/* progress line + running girl + moving tagline */}
//             <div className="mt-4 relative h-20">
//               {/* line */}
//               <div className="absolute bottom-4 left-0 right-0">
//                 <div className="w-full h-[4px] bg-[#E3EDF7] rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-[#9AC3D8] transition-all duration-500"
//                     style={{ width: `${progressPercent}%` }}
//                   />
//                 </div>
//               </div>

//               {/* runner */}
//               <div
//                 className="absolute bottom-4 h-14 w-14 transition-all duration-500"
//                 style={{ left: `calc(${progressPercent}% - 28px)` }}
//               >
//                 {marathonAnim && (
//                   <Lottie
//                     animationData={marathonAnim}
//                     loop
//                     style={{ height: "56px", width: "56px" }}
//                   />
//                 )}
//               </div>

//               {/* percentage static in centre */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-[#0D2451]">
//                 {progressPercent}%
//               </div>

//               {/* tagline that moves with girl (responsive, not cropped) */}
//               <div
//                 className="
//                   absolute bottom-0
//                   text-[11px] text-[#60738C]
//                   transition-all duration-500
//                   whitespace-nowrap
//                   max-w-[180px]
//                   sm:max-w-[260px]
//                   overflow-hidden
//                   px-2
//                 "
//                 style={{
//                   left: `clamp(0px, calc(${progressPercent}% - 90px), calc(100% - 180px))`,
//                 }}
//               >
//                 {progressTagline}
//               </div>
//             </div>
//           </div>
//         </header>
//       )}

//       {/* CONTENT */}
//       <main className="flex-1">
//         {!introDone ? (
//   /* ----------------------------------------
//      NEW INTRO PAGE (MATCHES medical/page.jsx)
//   ---------------------------------------- */
//   <div className="min-h-screen bg-white text-[#0D2451] font-laila">

//     {/* LIGHT BLUE HEADER (same as medical page) */}
//     <div className="w-full bg-[#F2F8FD] py-10">
//       <div className="max-w-xl mx-auto px-6">
//         <h1 className="text-3xl md:text-4xl font-semibold text-[#0D4F8B] text-left">
//           Medical consultation
//         </h1>
//       </div>
//     </div>

//     {/* MAIN BODY */}
//     <div className="max-w-xl mx-auto px-6 pt-10 pb-24 text-center">

//       {/* DOCTOR CARD (same design as medical/page.jsx) */}
//       <div className="w-full bg-[#D7EDF4] rounded-2xl p-6 flex items-center gap-5 shadow-sm">
//         <img
//           src="/doctor/doctor.png"
//           alt="Doctor"
//           className="w-20 h-20 rounded-full object-cover flex-shrink-0"
//         />
//         <div className="text-sm leading-relaxed text-left">
//           <p>
//             Answer the medical questions in this online consultation and
//             we&apos;ll assess if treatment is safe for you to use. It&apos;s free.
//           </p>
//           <p className="mt-2 font-semibold">FitYou Medical Team</p>
//         </div>
//       </div>

//       {/* DESCRIPTION */}
//       <p className="mt-10 text-sm text-[#3E5678] leading-relaxed">
//         This consultation is a set of online questions about your health and
//         lifestyle. It takes a few minutes and it’s free.
//       </p>

//       {/* I'M READY BUTTON (same width as doctor card) */}
//       <button
//         onClick={validateAndNext}    // <-- SAME FUNCTIONALITY
//         className="mt-10 w-full bg-[#8DB9C9] hover:bg-[#7AA7B8]
//                    text-white font-semibold py-3 rounded-md text-sm transition"
//       >
//         I'm ready
//       </button>

//       {/* LOGIN LINK */}
//       <p className="mt-6 text-xs text-[#3E5678]">
//         Already have a personalised plan?{" "}
//         <span className="underline cursor-pointer">Login with your mobile number</span>
//       </p>

//       {/* FOOTER */}
//       <p className="mt-16 text-[10px] text-[#8CA0C0]">
//         This consultation does not replace an in-person medical evaluation.
//       </p>
//     </div>
//   </div>

// ) : (

//           /* ---------------- QUESTION / INFO SCREEN ---------------- */
//           <section className="px-4 pt-14 pb-20 flex justify-center">
//             <div className="w-full max-w-xl mx-auto">
//               {/* QUESTION HEADING */}
//               {currentQuestion?.type !== "info" && (
//                 <h2 className="text-[17px] md:text-[22px] font-semibold text-[#0D2451] leading-snug text-left mb-6 max-w-xl mx-auto">
//                   {currentQuestion.title}
//                 </h2>
//               )}

//              {renderQuestionBody()}

//           {/* ERROR MESSAGE */}
//           {error && (
//             <p className="mt-4 text-xs text-red-500 font-medium">{error}</p>
//           )}

//           {/* ELIGIBILITY MESSAGE */}
//           {eligibilityMessage && (
//             <div className="mt-6 bg-[#FDECEC] border border-[#F5C2C2] text-[#B84646] rounded-lg px-4 py-4 text-sm leading-relaxed">
//               <div className="font-semibold mb-1">Unable to prescribe</div>
//               <div>{eligibilityMessage}</div>
//             </div>
//           )}
//           {/* ALCOHOL WARNING BOX (non-blocking, friendly) */}
//         {alcoholWarning && currentQuestion?.id === "alcohol" && (
//           <div className="mt-6 bg-[#FFF8E5] border border-[#F7DFA3] text-[#8A6D1A] rounded-lg px-4 py-4 text-sm leading-relaxed">
//             <div className="font-semibold mb-1">Just a quick note</div>
//             <div>{alcoholWarning}</div>
//           </div>
//         )}
//               {/* CONTINUE BUTTON – show for everything except peach buttons,
//                   but DO show for buttons when user has navigated back */}
//               {showContinueButton && (
//                 <div className="mt-8">
//                   <button
//                     type="button"
//                     onClick={!disableContinue ? validateAndNext : undefined}
//                     disabled={disableContinue}
//                     className={`w-full rounded-md px-6 py-3 text-sm font-semibold transition
//                       ${
//                         disableContinue
//                           ? "bg-[#C7D7DE] text-white opacity-60 cursor-not-allowed"
//                           : "bg-[#8DB9C9] text-white hover:bg-[#7AA7B8]"
//                       }
//                     `}
//                   >
//                     Continue
//                   </button>

//                 </div>
//               )}
//             </div>
//           </section>
//         )}
//       </main>

//       {/* FOOTER */}
//       <footer className="w-full border-t border-[#E5EEF6] bg-[#F6FAFF]">
//         <div className="max-w-5xl mx-auto px-4 py-4 text-center">
//           <p className="text-[10px] text-[#8CA0C0]">
//             Your answers help our doctors guide you safely — this is not a
//             diagnosis.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }


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
const QUESTIONS = [
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
        id: "prevMeds_name",
        type: "text",
        placeholder: "Which medicine(s) did you take?",
        required: true,
      },
      {
        id: "prevMeds_sideEffects",
        type: "text",
        placeholder: "Did you face any side effects?",
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
  useEffect(() => {
    fetch("/lottie/Marathon.json")
      .then((res) => res.json())
      .then((data) => setMarathonAnim(data));
  }, []);

  const totalSteps = QUESTIONS.length;
  const currentQuestion = introDone ? QUESTIONS[stepIndex] : null;

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
  const redirectToResult = () => {
    const params = new URLSearchParams();
    if (answers.heightCm) params.set("height", answers.heightCm);
    if (answers.weightKg) params.set("weight", answers.weightKg);
    router.push(`/recommendations?${params.toString()}`);
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
              <select
                value={value}
                onChange={(e) => setField(field.id, e.target.value)}
                className={`w-full px-3 py-3 rounded-lg text-[14px]
                  border ${
                    hasError
                      ? "border-red-500 bg-red-50"
                      : "border-[#D0D7E2] bg-white"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40`}
              >
                <option value="">Select</option>
                {field.options?.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
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
