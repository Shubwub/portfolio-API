const express = require("express");
const blogRouter = express.Router();
const { getBlogs, postBlog } = require("../controllers/blogs.js");
const { notAllowed } = require("../errors");

blogRouter.route("/").get(getBlogs).post(postBlog).all(notAllowed);

module.exports = blogRouter;
