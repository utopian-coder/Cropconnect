const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm, location, photo } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
    location,
    photo,
  });

  const cookieOptions = {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  const token = signToken(newUser._id);

  res
    .status(201)
    .cookie("token", token, cookieOptions)
    .json({
      status: "success",
      data: {
        user: newUser,
      },
    });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new appError("Please provide the email and password!", 400));
  }

  const userDoc = await User.findOne({ email }).select("+password");

  if (
    !userDoc ||
    !(await userDoc.checkPasswordCorrectness(password, userDoc.password))
  ) {
    return next(new appError("Incorrect email or password, try again!", 401));
  }

  const token = signToken(userDoc._id);

  res.status(200).json({
    status: "success",
    data: {
      token,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new appError("You're not logged in, please log in!"));
  }

  const userData = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findById(userData.id);

  if (!user) return next(new appError("This user no longer exists!", 401));

  next();
});
