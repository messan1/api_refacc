const express = require("express");
const Db = require("./config/DB")
const app = express()
const JfacRoute = require("./routes/Jfac")
const cors = require("cors")
var https = require("https");
app.use(cors())


const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/api/jfac20',JfacRoute)
app.get("/",(req,res)=>{
  res.send("Infinity")
})


app.listen(PORT,()=>{
  console.log("Server running");
})

