const express = require("express");
const apiRouter = express.Router();
const { notAllowed } = require("../errors");
const projectsRouter = require("./projects_router");
const blogRouter = require("./blog_router");

apiRouter
  .route("/")
  .get((req, res, next) => {
    res.send({
      description: require("../api_description.json"),
    });
  })
  .all(notAllowed);

apiRouter.use("/projects", projectsRouter);
apiRouter.use("/blogs", blogRouter);

module.exports = apiRouter;
