const { findProjects, saveProject } = require("../models/projects.js");

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await findProjects();
    res.send({ returned_results: projects.length, projects });
  } catch (e) {
    next(e);
  }
};

exports.postProject = async (req, res, next) => {
  try {
    const project = await saveProject();
    res.send({ project });
  } catch (e) {
    next(e);
  }
};
