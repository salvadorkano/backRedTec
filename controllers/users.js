const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const userPost = async (req = request, res = response) => {
  const { name, email, password, role } = req.body;

  const user = new User({ name, email, password, role });
  console.log(req.body);
  //Check if the email exist

  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  try {
    await user.save();

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
};

module.exports = {
  userPost,
};
