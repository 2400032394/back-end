// back-end/models/Job.js
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salaryRange: String,
  description: String,
  applyUrl: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Job", JobSchema);
