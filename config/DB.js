const mongoose = require('mongoose')
const dot = require('dotenv')
dot.config()

mongoose.connect("mongodb://mongo:27017",{useNewUrlParser:true},()=>{
  console.log("DB Connected");
})