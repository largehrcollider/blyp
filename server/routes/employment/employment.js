var express = require('express');
var router = express.Router();
var Business = require('../../db/business/businessController.js');
var User = require('../../db/user/userController.js');


router.post('/', function(req, res){
  var token = req.params.token;
  var user = req.body.user;
  //var user = token.username;
  var isAdmin = false;
  var businessName = req.body.businessName;

  Business.getBusinessByName(businessName, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      //Ensure the user has admin permissions
      for(var m = 0; m < business.users.length; m++){
        if(business.users[m].user_id === user && business.users[m].role === 'admin'){
          isAdmin = true;
        }
      }

      if(isAdmin){
        if(req.body.status === 'accept'){
          User.getUserByUsername(req.body.username, function(err, user){
            if(err){
              res.sendStatus(500);
            } else {
              Business.getBusinessByName(businessName, function(err, business){
                if(err){
                  res.sendStatus(500);
                } else {
                  user.businesses.push(businessName);
                  user.save();
                  business.users.push({user_id: req.body.username, role: 'cashier'});
                  business.save();
                  res.status(200).json(business);
                }
              });
            }
          });
        } else {
          User.getUserByUsername(req.username, function(err, user){
            if(err){
              res.sendStatus(500);
            } else {
              Business.getBusinessByName(businessName, function(err, business){
                if(err){
                  res.sendStatus(500);
                } else {
                  //Remove the request from the business
                  for(var i = 0; i < business.requests.length; i++){
                    if(business.requests[i] === req.username){
                      business.requests.splice(i, 1);
                    }
                  }
                  //Remove the request from the user
                  for(var j = 0; j < user.requests.length; j++){
                    if(user.requests[i] === businessName){
                      user.requests.splice(i, 1);
                    }
                  }
                }
              });
            }
          });
        }
      } else {
        res.status(500).send('You are not an admin for this business!');
      }
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
  Business.deleteBusinessBySku(req.params.sku, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

module.exports = router;
