const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  try {
    res.status(201).json({
      status: "New user created successfully",
      token,
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return res.status(400).json({
      status: "Please provide email and password!",
    });
  }

  // 2) Check if user exists && password is correct

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "Incorrect email or password",
    });
  }

  // 3) If everything ok, send token to client

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};


