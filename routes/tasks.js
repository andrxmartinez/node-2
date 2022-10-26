const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");

router.use(express.json());

router
  .route("/")
  .get(tasksController.getAllTasks)
  .post(tasksController.createTask);

router
  .route("/:id")
  .get(tasksController.getSingleTask)
  .put(tasksController.updateTask)
  .delete(tasksController.deleteTask);

module.exports = router;
