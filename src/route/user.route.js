const express = require("express");
const UserController = require("../controller/user.controller");
const passport = require("passport");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put(
  "/edit",
  passport.authenticate("jwt", { session: false }),
  UserController.update
);
router.get(
  "/view",
  passport.authenticate("jwt", { session: false }),
  UserController.viewUser
);
router.delete( 
  "/delete",
  passport.authenticate("jwt", { session: false }),
  UserController.deleteUser
);

module.exports = router;
