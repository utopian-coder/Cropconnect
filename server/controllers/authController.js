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

const setCookieAndSendResponse = (user, statusCode, res) => {
  const cookieOptions = {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  const token = signToken(user._id);
  user.password = undefined;

  res.cookie("token", token, cookieOptions).status(statusCode).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm, location, role } = req.body;

  const newUser = await User.create({
    name,
    email,
    role,
    password,
    passwordConfirm,
    location,
  });

  setCookieAndSendResponse(newUser, 201, res);
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

  setCookieAndSendResponse(userDoc, 200, res);
});

exports.logout = (req, res) => {
  res
    .cookie("token", "loggedout", {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    })
    .status(200)
    .json({
      status: "success",
      message: "Successfully logged out!",
    });
};

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

  req.user = user; //Attaching user data in request body, for using in authorization
  next();
});

exports.restrictToSeller = (req, res, next) => {
  const { role: currUserRole } = req.user;

  if (currUserRole !== "seller") {
    return next(
      new appError(`You don't have permission to perform this action!`, 403)
    );
  }

  next();
};
