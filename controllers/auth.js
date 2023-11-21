const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");
const { generateJWT } = require("../helpers/generateJWT");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    //1. Verify if email exists in the DB
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: true,
        data: {
          msg: "The user or email field is wrong.",
        },
      });
    }

    //2. Verify if the password matches with the password which is saved in the DB
    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        data: {
          msg: "The user or email field is wrong. - password",
        },
      });
    }

    //3. Generate JWT
    const token = await generateJWT(user.id);

    res.json({
      msg: "Login ok",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  login,
};
