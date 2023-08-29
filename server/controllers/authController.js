const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

const setCookieAndSendResponse = (user, res) => {
  const cookieOptions = {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  const token = signToken(user._id);

  res.cookie("token", token, cookieOptions).status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const {
    name,
    email,
    password,
    passwordConfirm,
    passwordChangedAt,
    location,
    photo,
  } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
    passwordChangedAt,
    location,
    photo,
  });

  setCookieAndSendResponse(newUser, res);
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

  setCookieAndSendResponse(userDoc, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new appError("You're not logged in, please log in!"));
  }

  const userData = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findById(userData.id);

  if (!user) return next(new appError("This user no longer exists!", 401));

  if (user.isPasswordChangedAfterSigningJWT(userData.iat)) {
    return next(
      new appError(
        "Password has been changed recently, please log in again!",
        401
      )
    );
  }

  req.user = user; //Attaching user data in request body, might be used somewhere
  next();
});
