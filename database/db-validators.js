const Role = require("../models/role");
const User = require("../models/user");

const isValidRole = async (role) => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error(`${role} does not exist in the database.`);
  }
};

const emailExists = async (email) => {
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    throw new Error(`The email ${email} is already in used.`);
  }
};

module.exports = {
  isValidRole,
  emailExists,
};
