const express = require("express");
const UserController = require("../controller/user.controller");

const router = express.Router();

router.post("/register", UserController.register);

module.exports = router;