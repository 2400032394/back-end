// back-end/models/Counsellor.js
import mongoose from "mongoose";

const CounsellorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  expertise: [String],
  rating: { type: Number, default: 0 },
  contact: String,
  avatarUrl: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Counsellor", CounsellorSchema);
