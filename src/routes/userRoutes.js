const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");

router.get("/all", controller.getAll);
router.post("/create", controller.createUser);

router.post("/login", authController.login);

module.exports = router;
