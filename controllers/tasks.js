const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getTasks = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("project2")
    .collection("tasks")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingleTask = async (req, res) => {
  const taskId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("project2")
    .collection("tasks")
    .find({ _id: taskId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createTask = async (req, res) => {
  const task = {
    activity: req.body.activity,
    duration: req.body.duration,
    date: req.body.date,
    time: req.body.time,
    place: req.body.place,
    description: req.body.description,
    priority: req.body.priority,
  };

  const response = await mongodb
    .getDb()
    .db("project2")
    .collection("tasks")
    .insertOne(task);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error ocurred while creating the new task."
      );
  }
};

module.exports = {
  getTasks,
  getSingleTask,
  createTask,
};
