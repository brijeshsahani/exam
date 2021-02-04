const express = require('express');
const router = express.Router();
const Stud = require('../models/StudentModel');



// ROUTE for get data
router.get('/', (req, res) => {
    Stud.find((err, docs) => {
        if (err) throw err;
        
        res.render('home', {
            student: docs
        })
    }).catch(err => {
        console.log(err);
    })
});


// ROUTE for insert data
router.post('/add', (req, res, next) => {
    const {
        name,
        address,
        email
    } = req.body;
    console.log(name, address, email);
    const stud = new Stud({
        name,
        address,
        email
    });
    stud.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });

    
});




// ROUTE to fetch old record for updation
router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    
    Stud.findOneAndUpdate({_id: req.params.id},req.body, { new: true }, (err, docs)=>{
        console.log(docs);
        
        console.log(docs.name);
        res.render('edit', {student:docs}); 
    })
});





// ROUTE to update data
router.post('/edit/:id', (req, res, next) => {
    
    Stud.findByIdAndUpdate({_id: req.params.id},req.body, (err)=>{
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.redirect('/');
        }
    })
    
});


// ROUTE for delete data
router.get('/:id',(req, res)=>{
    Stud.findByIdAndDelete({_id:req.params.id}, err=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
})

module.exports = router;