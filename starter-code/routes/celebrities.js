var express = require('express');
var router = express.Router();

const Celebrity = require('./../models/Celebrity')




router.get('/new', (req, res, next) => {
res.render('celebrities/new');
console.log("here ya");

});

router.post('/new', (req, res, next) => {
    console.log("req", req.body); 
    const newCeleb = req.body;
    Celebrity.create({name: newCeleb.name, occupation: newCeleb.occupation, catchPhrase: newCeleb.catchPhrase})
    .then((toList)=>{   
    res.redirect('/celebrities')
    })
    });

router.get('/:id', function(req, res, next) {
    const celeb = req.params.id;    
    Celebrity.findOne({_id:celeb})
    .then((currentC)=>{
    res.render('celebrities/show', {currentC});
    })
    .catch((err)=>console.log(err));
});

router.get('/', function(req, res, next) {
    Celebrity.find()
    .then((allCelebritiesFromDB)=>{
    res.render('celebrities/index', {allCelebritiesFromDB});
    })
    .catch((err)=>console.log(err)); 
});





module.exports = router;