const Task = require("./../models/tasksModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: tasks.map((task) => {
        return {
          task,
        };
      }),
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

////////////////////////

// const mongodb = require("../db/connect");
// const ObjectId = require("mongodb").ObjectId;

// const getTasks = async (req, res) => {
//   const result = await mongodb
//     .getDb()
//     .db("project2")
//     .collection("tasks")
//     .find();
//   result.toArray().then((lists) => {
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json(lists);
//   });
// };

// const getSingleTask = async (req, res) => {
//   const taskId = new ObjectId(req.params.id);
//   const result = await mongodb
//     .getDb()
//     .db("project2")
//     .collection("tasks")
//     .find({ _id: taskId });
//   result.toArray().then((lists) => {
//     res.setHeader("Content-Type", "application/json");
//     res.status(200).json(lists[0]);
//   });
// };

// const createTask = async (req, res) => {
//   const task = {
//     activity: req.body.activity,
//     duration: req.body.duration,
//     date: req.body.date,
//     time: req.body.time,
//     place: req.body.place,
//     description: req.body.description,
//     priority: req.body.priority,
//   };

//   const response = await mongodb
//     .getDb()
//     .db("project2")
//     .collection("tasks")
//     .insertOne(task);
//   if (response.acknowledged) {
//     res.status(201).json(response);
//   } else {
//     res
//       .status(500)
//       .json(
//         response.error || "Some error ocurred while creating the new task."
//       );
//   }
// };

// const updateTask = async (req, res) => {
//   const userId = new ObjectId(req.params.id);
//   const task = {
//     activity: req.body.activity,
//     duration: req.body.duration,
//     date: req.body.date,
//     time: req.body.time,
//     place: req.body.place,
//     description: req.body.description,
//     priority: req.body.priority,
//   };
//   const response = await mongodb
//     .getDb()
//     .db("project2")
//     .collection("tasks")
//     .replaceOne({ _id: userId }, task);
//   console.log(response);
//   if (response.modifiedCount > 0) {
//     res.status(204).send();
//   } else {
//     res
//       .status(500)
//       .json(response.error || "Some error occurred while updating the task.");
//   }
// };

// const deleteTask = async (req, res) => {
//   const userId = new ObjectId(req.params.id);
//   const response = await mongodb
//     .getDb()
//     .db("project2")
//     .collection("tasks")
//     .remove({ _id: userId }, true);
//   console.log(response);
//   if (response.deletedCount > 0) {
//     res.status(204).send();
//   } else {
//     res
//       .status(500)
//       .json(
//         response.error ||
//           "We weren't unable to remove the task. Please try again."
//       );
//   }
// };
// module.exports = {
//   getTasks,
//   getSingleTask,
//   createTask,
//   updateTask,
//   deleteTask,
// };
