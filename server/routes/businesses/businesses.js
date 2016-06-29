var express = require('express');
var router = express.Router();
var Business = require('../../db/business/businessController.js');
var User = require('../../db/user/userController.js');

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
      res.status(500).send('It failed with the business!');
    } else {
      User.getUserByUsername(req.user.username, function(err, user){
        if(err){
          res.status(500).send('Something went wrong with getting the user!');
        } else if (!user){
          res.status(500).send('User not found!');
        }else {
          user.businesses.push(business.name);
          user.save();
          res.status(201).json(business);
        }
      });
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
