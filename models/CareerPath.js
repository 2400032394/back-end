// back-end/models/CareerPath.js
import mongoose from "mongoose";

const CareerPathSchema = new mongoose.Schema({
  title: String,
  description: String,
  skills: [String],
  recommendedCourses: [String],
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("CareerPath", CareerPathSchema);
