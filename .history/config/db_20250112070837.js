const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(process.env.MONGO_URI); // hum connect to db function banate hai taki hamara database se connectivity kar sake
}
