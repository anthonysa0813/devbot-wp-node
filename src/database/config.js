const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Connect database Ok");
  } catch (error) {
    console.log(error);
    console.log("error connecting database");
  }
};

module.exports = connectDatabase;
