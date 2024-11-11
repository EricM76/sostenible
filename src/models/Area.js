const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
  name: String,
  image: String,
  description : String,
});

module.exports = mongoose.model("Area", areaSchema);
