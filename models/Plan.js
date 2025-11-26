import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    pricePerMonth: Number,
    features: [String],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Plan || mongoose.model("Plan", PlanSchema);
