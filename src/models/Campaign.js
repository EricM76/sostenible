const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: String,
  description : String,
  image: String,
});

module.exports = mongoose.model("Campaign", campaignSchema);
