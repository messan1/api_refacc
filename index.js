const express = require("express");
const Db = require("./config/DB")
const mongoose = require('mongoose');
const app = express()
const JfacRoute = require("./routes/Jfac")
const cors = require("cors")
var https = require("https");
app.use(cors())

mongoose.connect(Db.url, {
  useNewUrlParser:true
}); 


const PORT = process.env.PORT || 8080
const HOST = 0.0.0.0
app.use(express.json())
app.use('/api/jfac20',JfacRoute)
app.get("/",(req,res)=>{
  res.send("Infinity")
})


app.listen(PORT,HOST()=>{
  console.log("Server running");
})

