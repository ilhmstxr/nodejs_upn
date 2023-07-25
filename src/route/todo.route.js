const express = require("express");
const TodoController = require("../controller/todo.controller");
const passport = require("passport");

const router = express.Router();

router.post(
"/create",
  passport.authenticate("jwt", { session: false }),
  TodoController.create_todo
);
router.put(
  "/update",
  passport.authenticate("jwt", { session: false }),
  TodoController.update_todo
);
router.get(
  "/view",
  passport.authenticate("jwt", { session: false }),
  TodoController.view_todo
);
router.get(
  "/view_All",
  passport.authenticate("jwt", { session: false }),
  TodoController.viewAll_todo
);
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  TodoController.delete_todo
);

module.exports = router;
