import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { protect, adminOnly } from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Protected Routes
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

app.get("/api/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin route accessed" });
});

// ✅ DEFINE PORT FIRST
const PORT = process.env.PORT || 5000;

// ✅ THEN START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});