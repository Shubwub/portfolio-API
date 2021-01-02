const mongoose = require("mongoose");
const { sampleBlog } = require("./samples");
const { Schema } = mongoose;

try {
  mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {
    useNewUrlParser: true,
  });
} catch (error) {
  console.log(error);
}

const blogSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  content: [String],
});

const Blog = mongoose.model("Blog", blogSchema);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error connecting to database: ${error}`);
});
db.once("open", () => {
  console.log("connected successfully!");
});

exports.findBlogs = async () => {
  try {
    const blogs = await Blog.find((err, blogs) => {
      if (err) throw { err };
      else return blogs;
    });
    return blogs;
  } catch (e) {
    throw e;
  }
};

exports.saveBlog = async () => {
  try {
    const blog = new Blog(sampleBlog);
    const document = await blog.save((err, doc) => {
      if (err) throw new Error(err);
      else return doc;
    });
    return blog;
  } catch (e) {
    throw e;
  }
};
