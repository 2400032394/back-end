// back-end/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";

import authRoutes from "./routes/auth.routes.js";
import counsellorsRoutes from "./routes/counsellors.routes.js";
import careerPathsRoutes from "./routes/careerpaths.routes.js";
import plansRoutes from "./routes/plans.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import progressRoutes from "./routes/progress.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({ origin: FRONTEND }));

// Connect to DB
await connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/counsellors", counsellorsRoutes);
app.use("/api/career-paths", careerPathsRoutes);
app.use("/api/plans", plansRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => res.send("Career platform backend is running"));

// Global error handler (simple)
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
