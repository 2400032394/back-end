// back-end/routes/counsellors.routes.js
import express from "express";
import {
  listCounsellors,
  getCounsellor,
  createCounsellor,
  updateCounsellor,
  deleteCounsellor,
} from "../controllers/counsellors.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", listCounsellors);
router.get("/:id", getCounsellor);
router.post("/", protect, createCounsellor); // protect creation
router.put("/:id", protect, updateCounsellor);
router.delete("/:id", protect, deleteCounsellor);

export default router;
