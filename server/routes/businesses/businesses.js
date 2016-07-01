var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var SECRET = require('../../../keys/secret.js');
var Business = require('../../db/business/businessController.js');
var User = require('../../db/user/userController.js');
var Product = require('../../db/product/productController.js');

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

router.post('/checkin', function(req, res){
  var data = {};
  Business.getBusinessByName(req.body.business, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      if(!business){
        res.status(404).send('Business not found!');
      } else {
        for(var i = 0; i < business.users.length; i++){
          if(business.users[i].username === req.user.username){
            data.jwt = jwt.sign({username: req.user.username, name: req.user.name, 
              email: req.user.email, business: business.name, role: business.users[i].role}, SECRET);
            data.username = req.user.username;
            data.name = req.user.name;
            data.business = business.name;
            data.email = req.user.email;
            data.role = business.users[i].role;
            if(business.users[i].role === 'admin'){
              data.users = business.users;
              data.requests = business.requests;
            }
            Product.getAllProducts(business.name, function(err, products){
              if(err){
                res.sendStatus(500);
              } else if (!products){
                res.status(404).send('No products found for this business!');
              } else {
                data.products = products;
                res.status(200).json(data);
              }
            });
          } 
        }
        if(!('username' in data)){
          res.status(500).send('There was an error with this business record!');
        }
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
  Business.deleteBusinessBySku(req.params.delete, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

module.exports = router;
