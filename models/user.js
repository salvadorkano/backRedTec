const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    require: [true, "The name field is required."],
  },
  email: {
    type: String,
    required: [true, "The email field is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password field is required."],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["STUDENT", "TEACHER"],
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
