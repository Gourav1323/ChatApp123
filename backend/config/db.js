// Load environment variables from .env file
require('dotenv').config();

const mongoose = require("mongoose");

// const MONGO_URL = process.env.MONGO_URL;
 const MONGO_URL = "mongodb+srv://singlaji01:singalji201@yelpcamp.srbsfyy.mongodb.net/yelpcamp12"


async function data() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTION OPEN to mongoose");
  } catch (err) {
    console.error("Error occurred", err);
  }
}

module.exports = data;
