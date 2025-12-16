import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    productType: { type: String, required: true }, // injection | tablet

    // address fields
    address: {
      name: String,
      surname: String,
      pincode: String,
      flat: String,
      area: String,
      landmark: String,
      city: String,
      state: String,
      email: String,
      billingSame: Boolean,
    },

    // Image or remind later
    imageUploaded: { type: Boolean, default: false },

    // Confirmation step
    confirmations: {
      confirm1: Boolean,
      confirm2: Boolean,
    },

    // For future use (if you want to store quiz)
    quizData: { type: Object },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
