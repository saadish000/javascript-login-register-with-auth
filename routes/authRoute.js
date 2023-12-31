const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authMiddleware, authController.login);

module.exports = router;
