const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  icon: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
  },
});

module.exports = mongoose.model("Post", postSchema);
