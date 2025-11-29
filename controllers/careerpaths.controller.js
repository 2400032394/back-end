// back-end/controllers/careerpaths.controller.js
import CareerPath from "../models/CareerPath.js";

export const listPaths = async (req, res, next) => {
  try {
    const data = await CareerPath.find().limit(100);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getPath = async (req, res, next) => {
  try {
    const item = await CareerPath.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const createPath = async (req, res, next) => {
  try {
    const item = await CareerPath.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};
export const updatePath = async (req, res, next) => {
  try {
    const item = await CareerPath.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
};
export const deletePath = async (req, res, next) => {
  try {
    await CareerPath.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};
