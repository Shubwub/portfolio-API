const { findBlogs, saveBlog } = require("../models/blogs.js");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await findBlogs();
    res.send({ returned_results: blogs.length, blogs });
  } catch (e) {
    next(e);
  }
};

exports.postBlog = async (req, res, next) => {
  try {
    const blog = await saveBlog();
    res.send({ blog });
  } catch (e) {
    console.log(e, "error");
    next(e);
  }
};
