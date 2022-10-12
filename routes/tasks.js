const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");

router.get("/", tasksController.getTasks);

router.get("/:id", tasksController.getSingleTask);

router.post("/", tasksController.createTask);

module.exports = router;
