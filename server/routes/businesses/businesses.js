var express = require('express');
var router = express.Router();
var Business = require('../../db/business/businessController.js');

router.get('/', function(req, res){
  Business.getAllBusinesses(function(err, businesss){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(businesss);
    }
  });
});

router.post('/create', function(req, res){
  Business.createBusiness(req.body, req.user, function(err, business){
    console.log(req.user)
    if(err){
      res.sendStatus(500);
    } else {
      res.status(201).json(business);
    }
  });
});

router.get('/:name', function(req, res){
  Business.getBusinessByName(req.params.name, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

router.delete('/:name', function(req, res){
  Business.deleteBusinessBySku(req.params.delete, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

module.exports = router;
