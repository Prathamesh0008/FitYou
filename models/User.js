import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  line1: { type: String, default: "" },
  line2: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  postalCode: { type: String, default: "" },
});

// FINAL FIXED USER MODEL (PHONE LOGIN)
const UserSchema = new mongoose.Schema(
  {
       // ❌ not required anymore
    phone: { type: String, required: true, unique: true }, // ✅ required + unique

    name: { type: String, default: "" },
    email: { type: String, default: "" }, 
    dob: { type: String, default: "" },

    otpCode: { type: String, default: "" },       // optional, harmless
    otpExpires: { type: Number, default: null },  // optional, harmless

    address: { type: AddressSchema, default: () => ({}) },

    quiz: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
