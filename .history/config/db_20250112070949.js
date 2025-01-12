const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB!");
  }); // hum connect to db function banate hai taki hamara database se connectivity kar sake
}
module.exports = connectToDb;
