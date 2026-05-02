import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", authRoutes);

import { protect, adminOnly } from "./middleware/authMiddleware.js";

app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

app.get("/api/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin route accessed" });
});


import projectRoutes from "./routes/projectRoutes.js";
app.use("/api/projects", projectRoutes);

import taskRoutes from "./routes/taskRoutes.js";
app.use("/api/tasks", taskRoutes);

import dashboardRoutes from "./routes/dashboardRoutes.js";
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});