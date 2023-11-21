const { Router } = require("express");
const { check } = require("express-validator");

const { login } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/login",
  [
    check("email", "The email field is required.").isEmail(),
    check("password", "The password field is required.").notEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
