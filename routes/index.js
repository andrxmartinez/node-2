const express = require("express");
const router = express.Router();

router.use("/", require("./swagger"));
router.use("/tasks", require("./tasks"));

router.all("*", (req, res, next) => {
  res.status(404).json({
    status: "404 - failed to load resource",
    message: `The requested URL ${req.originalUrl} '" was not found.`,
  });
});

module.exports = router;
