import Project from "../models/Project.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      createdBy: req.user.id,
      members: [req.user.id],
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ members: req.user.id });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};