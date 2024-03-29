const express = require("express");
const { check } = require("express-validator");

const verifyToken = require("../middlewares/authJwt");
const router = express.Router();
const usersController = require("../controllers/users-controllers");

router.get("/all", verifyToken ,usersController.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.login
);

module.exports = router;
