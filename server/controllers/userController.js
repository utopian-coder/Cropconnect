const catchAsync = require("../utils/catchAsync");

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
});
