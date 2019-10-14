const mongoose = require ("mongoose")

const ContactSchema = new mongoose.Schema({
  name:String,
  object:String,
  email:String,
  contact:String,
  message:String
})
module.exports = mongoose.model("contact",ContactSchema);