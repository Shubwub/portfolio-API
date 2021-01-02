const mongoose = require("mongoose");
const sampleProject = require("./sample_project");
const { Schema } = mongoose;

try {
  mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {
    useNewUrlParser: true,
  });
} catch (error) {
  console.log(error);
}

const projectSchema = new Schema({
  title: String,
  description: String,
  svg: String,
  frontEndRepo: {
    type: String,
    required: false,
  },
  backEndRepo: {
    type: String,
    required: false,
  },
  GeneralRepo: {
    type: String,
    required: false,
  },
  date: Date,
});

const Project = mongoose.model("Project", projectSchema);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error connecting to database: ${error}`);
});
db.once("open", () => {
  console.log("connected successfully!");
});

exports.findProjects = async () => {
  try {
    const projects = await Project.find((err, projects) => {
      if (err) throw { err };
      else return projects;
    });
    return projects;
  } catch (e) {
    throw e;
  }
};

exports.saveProject = async () => {
  try {
    const project = new Project(sampleProject);
    const document = await project.save((err, doc) => {
      if (err) throw new Error({ err });
      else return doc;
    });
    return project;
  } catch (e) {
    throw e;
  }
};
