// back-end/middleware/auth.middleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: token missing" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // payload can contain user id/email
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized: token invalid" });
  }
};
