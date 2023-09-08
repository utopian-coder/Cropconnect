const User = require("../model/User");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { uploadToS3 } = require("../utils/uploadImage");

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

  const profilePhoto = req.file;
  let profilePhotoURL;

  if (profilePhoto) {
    const { originalname, path, mimetype } = profilePhoto;
    profilePhotoURL = await uploadToS3(originalname, path, mimetype);
  }

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      role,
      location,
      photo: profilePhotoURL,
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
