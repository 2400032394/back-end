// back-end/routes/careerpaths.routes.js
import express from "express";
import {
  listPaths,
  getPath,
  createPath,
  updatePath,
  deletePath,
} from "../controllers/careerpaths.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/", listPaths);
router.get("/:id", getPath);
router.post("/", protect, createPath);
router.put("/:id", protect, updatePath);
router.delete("/:id", protect, deletePath);

export default router;
