// back-end/routes/jobs.routes.js
import express from "express";
import { listJobs, createJob } from "../controllers/jobs.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", listJobs);
router.post("/", protect, createJob);

export default router;
