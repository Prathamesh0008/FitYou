// lib/chatStore.js
import mongoose from "mongoose";

let cached = global._fityouChatConn;

if (!cached) {
  cached = global._fityouChatConn = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn) return cached.conn;
  if (!process.env.MONGODB_URI) return null;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

let ChatModel;

function getChatModel() {
  if (!ChatModel) {
    const ChatSchema = new mongoose.Schema(
      {
        sessionId: { type: String, index: true },
        messages: [
          {
            role: String,
            content: String,
            createdAt: String,
          },
        ],
      },
      { timestamps: true }
    );

    ChatModel = mongoose.models.FitYouChat || mongoose.model("FitYouChat", ChatSchema);
  }
  return ChatModel;
}

export async function saveChatToMongo(sessionId, messages) {
  const conn = await connectMongo();
  if (!conn) return;

  const Chat = getChatModel();
  await Chat.findOneAndUpdate(
    { sessionId },
    { sessionId, messages },
    { upsert: true, new: true }
  );
}

export async function getAllChatsFromMongo() {
  const conn = await connectMongo();
  if (!conn) return [];
  const Chat = getChatModel();
  return Chat.find({}).sort({ updatedAt: -1 }).lean();
}

export async function getChatByIdFromMongo(sessionId) {
  const conn = await connectMongo();
  if (!conn) return null;
  const Chat = getChatModel();
  return Chat.findOne({ sessionId }).lean();
}
