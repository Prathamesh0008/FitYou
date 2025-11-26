import mongoose from "mongoose";

const QuizSubmissionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    age: Number,
    heightCm: Number,
    weightKg: Number,
    bmi: Number,
    conditions: [String],
    medications: [String],
    eligible: Boolean,
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.models.QuizSubmission ||
  mongoose.model("QuizSubmission", QuizSubmissionSchema);
