const express = require("express");
const app = express();
const apiRouter = require("./routes/api_router");

app.use(express.json());

app.use("/api", apiRouter);
app.all("/*", (req, res, next) =>
  res.status(404).send({ msg: "Route not found" })
);

module.exports = { app };
