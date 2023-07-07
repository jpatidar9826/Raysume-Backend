const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactNo: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  links: [{ linksof: String, linkValue: String }],
  summary: { type: String },
  workHistory: [{
      workPeriod: String,
      workPosition: String,
      workEmployer: String,
      workDescription: String
    }],
  education: [{
      eduPeriod: String,
      eduDegree: String,
      eduInstitute: String
    }],
  project: [{
      proName: String,
      proPeriod: String,
      proLink: String,
      proDescription: String
    }],
  cpTable: [{
    platformName: String,
    accLink: String,
    probCount: Number,
    rating: String
  }],
  awardsHonours: [{
    awaname: String,
    awaDescription: String
  }],
  responsiblities: [{
    postName: String,
    period: String,
    orgName: String
  }],
  achievements: [{
    achName: String
  }],
  skills: [{skillName: String}],
  certificates: [{certName: String}],
  hobbies: [{hobbiesName: String}],
  languages: [{langName: String}],
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Resume", resumeSchema);
