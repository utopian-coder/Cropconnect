const User = require("../model/User");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) return next(new appError("User not found!", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, location, role } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      role,
      location,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.updateProfilePicture = catchAsync(async (req, res, next) => {});

exports.getAllProductsSoldByUser = catchAsync(async (req, res, next) => {});
