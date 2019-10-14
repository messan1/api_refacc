const mongoose = require ("mongoose")

const exposantSchema = new mongoose.Schema({
  name:String,
  structure:String,
  email:String,
  contact:String
})
module.exports = mongoose.model("exposant",exposantSchema);