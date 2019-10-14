const mongoose = require ("mongoose")

const participantSchema = new mongoose.Schema({
  name:String,
  pays:String,
  ville:String,
  participation:String,
  email:String,
  contact:String
})
module.exports = mongoose.model("participant",participantSchema);