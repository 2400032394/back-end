// back-end/controllers/counsellors.controller.js
import Counsellor from "../models/Counsellor.js";

export const listCounsellors = async (req, res, next) => {
  try {
    const counsellors = await Counsellor.find().limit(50);
    res.json(counsellors);
  } catch (err) {
    next(err);
  }
};

export const getCounsellor = async (req, res, next) => {
  try {
    const c = await Counsellor.findById(req.params.id);
    if (!c) return res.status(404).json({ error: "Not found" });
    res.json(c);
  } catch (err) {
    next(err);
  }
};

export const createCounsellor = async (req, res, next) => {
  try {
    const c = await Counsellor.create(req.body);
    res.status(201).json(c);
  } catch (err) {
    next(err);
  }
};

export const updateCounsellor = async (req, res, next) => {
  try {
    const c = await Counsellor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(c);
  } catch (err) {
    next(err);
  }
};

export const deleteCounsellor = async (req, res, next) => {
  try {
    await Counsellor.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
