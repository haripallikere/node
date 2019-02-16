var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Card = mongoose.model('Card');

/* GET card listing. */
router.get('/', function(req, res, next) {
  // if(err) console.log(err);
  res.render('pages/cards');
});

// GET card form
router.get('/new',function(req, res, next) {
  // if(err) console.log(err);
  res.render('pages/newcard')
})

// POST card new
router.post('/',function(req, res, next) {
  console.log(req.body);
  var newCard = new Card(req.body);
  newCard.save((err,card) => {
    console.log(err, card);
    res.redirect('/cards')
  });
})

module.exports = router;