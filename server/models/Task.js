const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Task = new Schema({
  sessionOne_title: {
    type: String,
    required: true,
  },
  sessionOne_description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  details: {
    type: String,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  conclusion_date: {
    type: Date,
  },
  remember_me_date: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", Task);
