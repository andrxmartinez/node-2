const express = require("express");
const router = express.Router();
router.use(express.json());

const openCors = require("../middleware/openCors");
const cors = require("cors");

router.use("/", require("./swagger"));

router.use("/tasks", require("./tasks"));
router.use("/users", require("./users"));

router.all("*", (req, res, next) => {
  res.status(404).json({
    status: "404 - failed to load resource",
    message: `The requested URL ${req.originalUrl} '" was not found.`,
  });
});

//cors
router.options(
  cors({
    origin: "*",
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  })
);

router.use(openCors);

module.exports = router;
