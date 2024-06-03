const mongoose = require("mongoose");
const subscriberModel = require("../models/subscribers");
const data = require("./data");

//  Connect to DATABASE for posting our data from data.js
const url ="mongodb://localhost:27017"
//POST API (For Posting Some Data To DATABASE)
async function DbConnect() {
  try {
    await mongoose.connect(url);
    console.log("db connect");
    await subscriberModel.deleteMany({});
    let dbData = await subscriberModel.create(data);
    console.log("data", dbData);
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

DbConnect();
