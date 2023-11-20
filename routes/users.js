const { Router } = require("express");
const { check } = require("express-validator");

const { userPost } = require("../controllers/users");
const { isValidRole, emailExists } = require("../database/db-validators");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/",
  [
    check("name", "The name field is required."),
    check(
      "password",
      "The password field must have 6 characters at least."
    ).isLength({ min: 6 }),
    check("email", "The email field is not valid.").isEmail(),
    check("email").custom(emailExists),
    // check("role", "The role field must contain STUDENT or TEACHER as value.").isIn([
    //   "STUDENT",
    //   "TEACHER",
    // ]),
    check("role").custom(isValidRole),
    validateFields,
  ],
  userPost
);

module.exports = router;
