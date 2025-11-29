// back-end/controllers/jobs.controller.js

import Job from "../models/Job.js";

// GET ALL JOBS
export const listJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find().limit(50);
    res.json(jobs);
  } catch (err) {
    next(err);
  }
};

// CREATE NEW JOB
export const createJob = async (req, res, next) => {
  try {
    const { title, company, location, salary, description } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      salary,
      description,
    });

    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
};
