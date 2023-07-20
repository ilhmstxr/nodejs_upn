const express = require("express");
const UserController = require("../controller/user.controller");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/edit/:id", UserController.update);
router.get("/view", UserController.viewUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
