
const mongoose = require("mongoose");

//Define Schema here
const susbcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("susbcriberSchema", susbcriberSchema);
