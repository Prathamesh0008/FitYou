// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     email: { type: String, required: true, unique: true },
//     name: { type: String, default: "" },
//     phone: { type: String, default: "" },
//     address: { type: String, default: "" },
//     dob: { type: String, default: "" },

//     // IMPORTANT → STORE QUIZ DATA HERE
//     quiz: { type: Object, default: {} },

//     otpCode: String,
//     otpExpires: Date,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.User || mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  line1: { type: String, default: "" },
  line2: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  postalCode: { type: String, default: "" },
});

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },

    otpCode: String,
    otpExpires: Number,

    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    dob: { type: String, default: "" },

    // FIXED ADDRESS SCHEMA WITH DEFAULT OBJECT
    address: { type: AddressSchema, default: () => ({}) },

    quiz: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
