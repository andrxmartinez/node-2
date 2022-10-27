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
      message: "Unable to get all tasks",
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
      message: "Unable to get task",
    });
  }
};

exports.createTask = async (req, res) => {
  console.log(req.body);

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
      message: "Unable to create task. Please try again.",
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(204).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Unable to update task. Please try again.",
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Some error ocurred while deleting task. Please try again.",
    });
  }
};
