const User = require("../models/usersModel");

exports.signup = async (req, res) => {
  const newUser = await User.create(req.body);

  try {
    res.status(201).json({
      status: "New user created successfully",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status:
        "We are unable to create a new user at this time. Please try again later.",
      message: err,
    });
  }
};

