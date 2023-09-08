const express = require("express");
const { Router } = express;
const authController = require("../controllers/authController");
const productController = require("../controllers/productController");
const uploadImage = require("../utils/uploadImage");

const router = Router();

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictToSeller,
    uploadImage.uploadMiddlewareMultiple, //uploadMiddlware is from multer. It saves files in /tmp and makes them accesible from req.files
    productController.createProduct
  )
  .get(productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(authController.protect, productController.updateProduct)
  .delete(authController.protect, productController.deleteProduct);

module.exports = router;
