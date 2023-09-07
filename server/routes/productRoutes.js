const express = require("express");
const { Router } = express;
const productController = require("../controllers/productController");
const uploadImage = require("../utils/uploadImage");

const router = Router();

router
  .route("/")
  .post(uploadImage.uploadMiddleware, productController.createProduct) //uploadMiddlware is from multer. It saves files in /tmp and makes them accesible from req.files
  .get(productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
