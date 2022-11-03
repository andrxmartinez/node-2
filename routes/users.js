const express = require("express");
// const usersController = require("../controllers/users");
const router = express.Router();
const authController = require("../controllers/authentication");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
