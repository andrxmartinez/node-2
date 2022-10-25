const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  activity: {
    type: String,
    unique: true,
  },
  duration: {
    type: String,
  },

  date: {
    type: String,
  },

  time: {
    type: String,
  },

  place: {
    type: String,
  },

  description: {
    type: String,
    maxlength: [1000, "Description cannot be more than 1000 characters"],
    minlength: [10, "Description cannot be less than 10 characters"],
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

// const testTask = new Task({
//   activity: "test",
//   duration: "test",
//   date: "test",
//   time: "test",
//   place: "test",
//   description: "test",
//   priority: "test",
//   completed: false,
// });

// testTask
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });
