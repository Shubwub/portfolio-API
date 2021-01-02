const { selectBlogs, createBlog } = require("../models/blogs.js");

exports.getBlogs = (req, res, next) => {
  // selectBlogs(req.query)
  //   .then((blogs) => res.send({ returned_results: blogs.length, blogs }))
  //   .catch(next);
  res.send({ returned_results: 1, blogs: [{ blog: "blog" }] });
};

exports.postBlog = (req, res, next) => {
  // createBlog(req.query)
  //   .then((blog) => res.send({ blog }))
  //   .catch(next);
  res.send({ project: "project" });
};
