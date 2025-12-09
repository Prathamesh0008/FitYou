import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing from environment variables");
  // Don't throw during module evaluation, handle at runtime
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, isConnected: false };
}

export default async function dbConnect() {
  console.log("🔗 Attempting to connect to MongoDB...");
  
  // If already connected, return
  if (cached.isConnected) {
    console.log("✅ Using cached MongoDB connection");
    return cached.conn;
  }

  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined");
    throw new Error("Database connection string is missing");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
      family: 4, // Use IPv4, skip trying IPv6

       ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  
  // Connection pool
  maxPoolSize: 10,
  minPoolSize: 1,
  maxIdleTimeMS: 10000,
    };

    console.log("🔄 Creating new MongoDB connection...");
    
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("✅ MongoDB connected successfully!");
        cached.isConnected = true;
        
        // Connection event listeners
        mongooseInstance.connection.on('connected', () => {
          console.log('✅ MongoDB connection established');
          cached.isConnected = true;
        });

        mongooseInstance.connection.on('error', (err) => {
          console.error('❌ MongoDB connection error:', err.message);
          cached.isConnected = false;
          cached.conn = null;
          cached.promise = null;
        });

        mongooseInstance.connection.on('disconnected', () => {
          console.log('⚠️ MongoDB disconnected');
          cached.isConnected = false;
          cached.conn = null;
          cached.promise = null;
        });

        return mongooseInstance;
      })
      .catch((error) => {
        console.error("❌ MongoDB connection failed:", error.message);
        console.error("Connection URI:", MONGODB_URI ? "***" : "MISSING");
        
        // Reset cache on failure
        cached.promise = null;
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("💥 Failed to establish MongoDB connection:", error.message);
    throw new Error(`Database connection failed: ${error.message}`);
  }
}