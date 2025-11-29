// back-end/routes/plans.routes.js
import express from "express";
import { listPlans, createPlan } from "../controllers/plans.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", listPlans);
router.post("/", protect, createPlan);

export default router;
