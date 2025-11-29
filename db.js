// back-end/db.js
import mongoose from "mongoose";

export const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, {
      // options are not necessary for mongoose v6+, but included for compatibility
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
