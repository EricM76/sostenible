const mongoose = require("mongoose");

const campaingnSchema = new mongoose.Schema({
  name: String,
  image: String,
  description : String,
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
  },
});

module.exports = mongoose.model("Campaing", campaingnSchema);
