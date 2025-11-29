// back-end/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "counsellor", "admin"],
    default: "user",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);
