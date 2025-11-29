// back-end/controllers/progress.controller.js
import Progress from "../models/Progress.js";

export const getProgress = async (req, res, next) => {
  try {
    const p = await Progress.findOne({ user: req.user.id });
    res.json(p || {});
  } catch (err) {
    next(err);
  }
};

export const updateProgress = async (req, res, next) => {
  try {
    const data = req.body;
    const updated = await Progress.findOneAndUpdate(
      { user: req.user.id },
      { ...data, updatedAt: new Date() },
      { upsert: true, new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};
