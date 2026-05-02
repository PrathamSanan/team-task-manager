import Task from "../models/Task.js";

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const totalTasks = await Task.countDocuments({ assignedTo: userId });

    const completed = await Task.countDocuments({
      assignedTo: userId,
      status: "done",
    });

    const pending = await Task.countDocuments({
      assignedTo: userId,
      status: { $ne: "done" },
    });

    const overdue = await Task.countDocuments({
      assignedTo: userId,
      dueDate: { $lt: new Date() },
      status: { $ne: "done" },
    });

    res.json({ totalTasks, completed, pending, overdue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};