const mongoose = require('mongoose')
const express = require('express')
const app = express()
const homeroute= require("./api/empAPi")
const bodyParser = require('body-parser')


mongoose.connect("mongodb://127.0.0.1:27017/final",{ useNewUrlParser: true }, { useUnifiedTopology: true })
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("uploads"))
app.use("/",homeroute)
app.listen(2000)