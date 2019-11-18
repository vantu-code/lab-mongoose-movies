var express = require('express');
var router = express.Router();

const Celebrity = require('./../models/Celebrity')


router.get('/', function(req, res, next) {
    Celebrity.find()
    .then((allCelebritiesFromDB)=>{
    res.render('celebrities/index', {allCelebritiesFromDB});
    })
    .catch((err)=>console.log(err));
    
});

router.get('/:id', function(req, res, next) {
    const celeb = req.params;
    console.log('hola', req.params.id);
    
    Celebrity.findOne(celeb._id)
    .then((currentC)=>{
    res.render('celebrities/show', {currentC});
    })
    .catch((err)=>console.log(err));
});





module.exports = router;