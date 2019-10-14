const mongoose = require ("mongoose")

const presseSchema = new mongoose.Schema({
  name:String,
  agence:String,
  email:String,
  contact:String
})
module.exports = mongoose.model("presse",presseSchema);