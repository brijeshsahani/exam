const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmpSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("employee",EmpSchema)