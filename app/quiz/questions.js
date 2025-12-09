//FitYou\app\quiz\questions.js
export const QUESTIONS = [
  { id: "height", type: "height", title: "Please provide your height." },
  { id: "weight", type: "weight", title: "Please provide your current weight." },
  { id: "lastWeightCheck", type: "date", title: "When did you last check your weight?" },

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
    title:
      "How many times a week do you exercise for more than 20 minutes?",
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
    title:
      "Have you been diagnosed with high blood pressure (with or without treatment)?",
    options: ["Yes", "No"],
  },

  {
    id: "diabetes",
    type: "buttons",
    title: "Have you been diagnosed with Diabetes (with or without treatment)?",
    options: ["Yes", "No"],
  },

  {
    id: "thyroid",
    type: "buttons",
    title:
      "Have you been diagnosed with an underactive thyroid, for which you take Levothyroxine?",
    options: ["Yes", "No"],
  },

  {
    id: "depression",
    type: "buttons",
    title: "Do you suffer from depression diagnosed by a psychiatrist?",
    options: ["Yes", "No"],
  },

  {
    id: "seriousThoughts",
    type: "buttons",
    title:
      "Have you ever had very sucidial thoughts about your own safety or wellbeing?",
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
    title:
      "Do you have any physical conditions that prevent you from exercising?",
    options: ["Yes", "No"],
  },

  {
    id: "otherMeds",
    type: "buttons",
    title:
      "Do you take any other medicines including prescription, over-the-counter or recreational drugs?",
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
    title:
      "Have you ever had any medical conditions or surgery not previously mentioned?",
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
