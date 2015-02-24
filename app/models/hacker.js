var mongoose = require('mongoose');
var HackerSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  university: {
    type: String,
    required: false
  },
  college: {
    type: String,
    required: false
  },
  major: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  isHighSchoolStudent: {
    type: String,
    required: false
  },
  highSchool: {
    type: String,
    required: false
  },
  diet: {
    type: String,
    required: false
  },
  coming: {
    type: Boolean,
    required: false
  },
  attended: {
    type: Boolean,
    required: false
  },
  isFirstHackathon: {
    type: Boolean,
    required: false
  },
  resume: String
});


module.exports = HackerSchema;
