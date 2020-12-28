const express = require("express");
const apiRouter = express.Router();
const { notAllowed } = require("../errors");

apiRouter
  .route("/")
  .get((req, res, next) => {
    res.send({
      description: require("../api_description.json"),
    });
  })
  .all(notAllowed);

module.exports = apiRouter;
