// back-end/models/Plan.js
import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
  durationDays: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Plan", PlanSchema);
