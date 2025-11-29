// back-end/models/Progress.js
import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  completedCourses: [{ title: String, completedAt: Date }],
  skills: [{ name: String, level: Number }],
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Progress", ProgressSchema);
