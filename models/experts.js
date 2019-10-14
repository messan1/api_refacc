const mongoose = require ("mongoose")

const expertSchema = new mongoose.Schema({
  name:String,
  atelier:String,
  email:String,
  contact:String
})
module.exports = mongoose.model("expert",expertSchema);