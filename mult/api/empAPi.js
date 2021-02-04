const express = require('express')
const multer = require('multer')
const router = express.Router()
const Emp = require("../models/emp")


const upload = multer({
    dest:"uploads/"
})
router.get("/",(req,res)=>{

    Emp.find((err,doc)=>{
        res.render("home",{employee:doc})
    })
})

router.post("/add",upload.single("image"),(req,res)=>{

    const {
        name,
        mobile
    } =req.body

    const image = req.file.filename

    const emp = new Emp({
        name,
        mobile,
        image
    })

    emp.save(()=>{
        res.redirect("/")
    })
})

module.exports=router