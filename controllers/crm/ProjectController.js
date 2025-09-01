const Project = require('../../models/crm/Project');

const projectController = {
  // Get all projects
  getProjects: async (req, res) => {
    try {
      const { companyId, financialYear } = req.query;
      const projects = await Project.find({ companyId, financialYear }).sort({ createdAt: -1 });
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create new project
  createProject: async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get project by ID
  getProjectById: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update project
  updateProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete project
  deleteProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = projectController;