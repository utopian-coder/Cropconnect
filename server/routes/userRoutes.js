const express = require("express");
const { Router } = express;
const authController = require("../controllers/authController");

const router = Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.protect, authController.login);

module.exports = router;
