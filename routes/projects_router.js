const express = require("express");
const projectsRouter = express.Router();
const { getProjects, postProject } = require("../controllers/projects.js");
const { notAllowed } = require("../errors");

projectsRouter.route("/").get(getProjects).post(postProject).all(notAllowed);

module.exports = projectsRouter;
