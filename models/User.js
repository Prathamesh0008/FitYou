import mongoose from "mongoose";

/* ---------------- ADDRESS ---------------- */
const AddressSchema = new mongoose.Schema({
  line1: { type: String, default: "" },
  line2: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  postalCode: { type: String, default: "" },
});

/* ---------------- ORDER SUB-SCHEMA ---------------- */
const OrderSchema = new mongoose.Schema(
  {
    // 🔑 MUST be indexed
    orderId: { type: String, required: true, index: true },

    productType: {
      type: String,
      enum: ["tablet", "injection"],
      default: "tablet",
    },

    amount: { type: Number, default: 0 },
    riskLevel: { type: String, default: "Medium" },

    status: {
      type: String,
      default: "Pending Doctor Review",
    },

    notes: { type: String, default: "" },
    prescriptionUrl: { type: String, default: "" },

    address: { type: Object, default: {} },
    imageUploaded: { type: Boolean, default: false },
    confirmations: { type: Object, default: {} },
    quizData: { type: Object, default: {} },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, // ⭐ VERY IMPORTANT
  },
  { _id: false }
);

/* ---------------- USER SCHEMA ---------------- */
const UserSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },

    name: { type: String, default: "" },
    email: { type: String, default: "" },
    dob: { type: String, default: "" },

    role: {
      type: String,
      enum: ["user", "admin", "doctor"],
      default: "user",
    },

    otpCode: { type: String, default: "" },
    otpExpires: { type: Number, default: null },

    address: { type: AddressSchema, default: () => ({}) },

    quiz: { type: Object, default: {} },

    orders: {
      type: [OrderSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
