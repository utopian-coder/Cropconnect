const express = require("express");
const { Router } = express;
const uploadImage = require("../utils/uploadImage");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router
  .route("/:id")
  .get(authController.protect, userController.getUser)
  .patch(uploadImage.uploadMiddlewareSingle, userController.updateUser);

module.exports = router;
