const express = require('express');
const homeRoute = require('./routes/home');
const keys = require('./config/keys')
const student = require('./models/StudentModel');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(console.log("mongodb is connected successfully"))
    .catch(err=>console.log("An error is occered to connect to db"));


// MIDDLEWARE SETUP 
//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
// STATIC FOLDER SETUP
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// ROUTING 
app.use('/', homeRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log('This app is rrunning on:', PORT);
})