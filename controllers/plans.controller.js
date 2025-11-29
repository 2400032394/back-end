// back-end/controllers/plans.controller.js
import Plan from "../models/Plan.js";

export const listPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    next(err);
  }
};

export const createPlan = async (req, res, next) => {
  try {
    const p = await Plan.create(req.body);
    res.status(201).json(p);
  } catch (err) {
    next(err);
  }
};
