const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: [true, "An activity must have a name"],
    unique: true,
  },
  duration: {
    type: String,
  },

  date: {
    type: String,
    required: [true, "An activity must have a date"],
  },

  time: {
    type: String,
  },

  place: {
    type: String,
    required: [true, "An activity must have a place"],
  },

  description: {
    type: String,
    required: [true, "An activity must have a description"],
  },

  priority: {
    type: String,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
