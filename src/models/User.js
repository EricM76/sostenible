const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  pass: String,
  rol: String,
  validated: Boolean,
  token: String,
});

module.exports = mongoose.model("User", userSchema);
