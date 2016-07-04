var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_POErNj4c0RKPiEkBtdBgtAn4');
var stripeCharge = require('./stripeCharge');

router.post('/', (req, res) => {
  stripeCharge(req.body.token,function(err, charge){
    if(err) {
      console.log('Payment Declined');
       var response = {
        status  : 400,
        error : 'Payment Declined'
      }
      res.end(JSON.stringify(response));
    } else {
      console.log('Payment Received');
      var response = {
        status  : 200,
        success : 'Payment Received'
      }
      res.end(JSON.stringify(response));
    }
  }, stripe);
});

module.exports = router;
