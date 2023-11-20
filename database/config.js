const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB);
    console.log("Database connection successful.");
  } catch (e) {
    console.log(e);
    throw new Error("Database connection error");
  }
};

module.exports = {
  dbConnection,
};
