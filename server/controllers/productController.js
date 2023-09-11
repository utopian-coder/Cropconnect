const Product = require("../model/Product");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const { uploadToS3 } = require("../utils/uploadImage");

exports.createProduct = catchAsync(async (req, res, next) => {
  const { title, description, catagory, price, soldStatus } = req.body; //Get product data

  //Get product photos upload them to s3 and get the urls
  const photos = req.files;
  const photoURLs = [];

  for (const photo of photos) {
    const { originalname, path, mimetype } = photo;
    const photoURL = await uploadToS3(originalname, path, mimetype);
    photoURLs.push(photoURL);
  }

  //Get seller's id
  const { id: seller } = req.user;

  const newProduct = await Product.create({
    seller,
    title,
    description,
    catagory,
    price,
    photos: photoURLs,
    soldStatus,
  });

  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, catagory, price, photo, soldStatus } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      title,
      description,
      catagory,
      price,
      photo,
      soldStatus,
    },
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    return next(new appError("Product not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product: updatedProduct,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    return next(new appError("Product not found", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return next(new appError("Product not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});
