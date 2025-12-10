import mongoose from "mongoose";

const ChatMessageSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // customer email / guest-id
    sender: { type: String, required: true }, // user | bot | agent
    text: { type: String, required: true },
    time: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.models.ChatMessage ||
  mongoose.model("ChatMessage", ChatMessageSchema);