const mongoose = require('mongoose')

const contacts = new mongoose.Schema
({
  Name: {
    type: String,
    required: true
  },
  Lastname: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique:true,
  },
  Age: {
    type: Number,
    required:true
  },
})
module.exports = mongoose.model('Contact', contacts)