var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');
var SECRET = require('../../../keys/secret.js');
var Business = require('../../db/business/businessController.js');
var User = require('../../db/user/userController.js');
var Product = require('../../db/product/productController.js');
var acl = require('../../utils/helpers.js').checkPermission;

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
      console.log('There was an error creating the business!');
      console.log(err);
      res.sendStatus(500);
    } else {
      User.getUserByUsername(req.user.username, function(err, user){
        if(err){
          console.log('There was an error creating the business!');
          console.log(err);
          res.sendStatus(500);
        } else if (!user){
          console.log('There was an error creating the business!');
          console.log('The user was not found!');
          res.sendStatus(500);
        }else {
          user.businesses.push(business.name);
          user.save();
          // fs.mkdir(path.resolve(__dirname, `../../../images/${business.name}`), (err) => {
          //   if (err) {
          //     console.log(`Directory for ${business.name} could not be created.`);
          //     console.log(err);
          //     res.sendStatus(500);
          //   } else {
              res.status(201).json(business);
            // }
          // });
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
          console.log('The user was not found as being authorized for the business!');
          res.sendStatus(403);
        }
      }
    }
  });
});

router.get('/requests', acl(['admin']), function(req, res){
  Business.getProperty(req.user.business, 'requests', function(err, requests){
    if(err || requests === null){
      console.log('There was an error getting the requests!');
      requests === null ? console.log('Could not find the business!') : console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(requests);
    }
  });
});

router.post('/requests', function(req, res){
  if(!req.user){
    console.log('No token found!');
    res.sendStatus(403);
  } else {
    Business.addEmploymentRequest(req.user.username, req.body.business, function(err, business){
      if(err){
        console.log('There was an error with the employment request!');
        console.log(err);
        res.sendStatus(500);
      } else if (!business){
        console.log('There was an error with finding the business!');
        res.sendStatus(500);
      } else {
        User.addRequest(req.user.username, req.body.business, function(err, user){
          if(err){
            console.log('There was an error getting the user!');
            console.log(err);
          } else if(!user){
            console.log('The user could not be found!');
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
      }
    });
  }
});

router.post('/users/role', acl(['admin']), function(req, res){
  var newUser = {};
  newUser.username = req.body.username;
  newUser.role = req.body.role;
  Business.addUser(req.user.business, newUser, function(err, business){
    if(err){
      console.log('There was an error adding the user!');
      console.log(err);
      res.sendStatus(500);
    } else if(!business){
      console.log('There was a problem finding the business!');
      res.sendStatus(500);
    } else {
      res.status(201).send(business.users);
    }
  });
});

router.put('/users/role', acl(['admin']), function(req, res){
  var updatedUser = {};
  updatedUser.username = req.body.username;
  updatedUser.role = req.body.role;
  Business.updateUserRole(req.user.business, updatedUser, function(err, business){
    if(err){
      console.log('There was an error adding the user!');
      console.log(err);
      res.sendStatus(500);
    } else if(!business){
      console.log('There was a problem finding the business!');
      res.sendStatus(500);
    } else {
      res.status(200).send(business.users);
    }
  })
});

router.delete('/users/role', acl(['admin']), function(req, res){
  Business.removeUser(req.user.business, req.body.username, function(err, business){
    if(err){
      console.log('There was an error adding the user!');
      console.log(err);
      res.sendStatus(500);
    } else if(!business){
      console.log('There was a problem finding the business!');
      res.sendStatus(500);
    } else {
      User.deleteBusiness(req.body.username, req.user.business, function(err, user){
        if(err){
          console.log('There was an error with the user!');
          console.log(err);
        } else if(!user){
          console.log('There was an error finding the user!');
          res.sendStatus(500);
        } else {
          res.status(200).send(business.users);
        }
      })
    }
  })
});

router.get('/:name', acl(['admin', 'cashier']), function(req, res){
  Business.getBusinessByName(req.params.name, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

router.delete('/:name', acl(['admin']), function(req, res){
  Business.deleteBusinessBySku(req.params.delete, function(err, business){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(business);
    }
  });
});

router.post('/accept', acl(['admin']), function(req, res){
  Business.updateEmploymentRequest(req.body.username, req.user.business, req.body.accept,
    function(err, business){
      if(err){
        console.error(err.message);
        res.sendStatus(500);
      } else {
        User.updateUserRequests(req.body.username, req.user.business, req.body.accept,
          function(err, user){
            if(err){
              res.status(500).send(err.message);
            } else {
              var sendObj = {};
              sendObj.username = req.body.username;
              sendObj.accept = req.body.accept;
              sendObj.role = 'cashier';
              res.status(200).json(sendObj);
            }
        });
      }
    });
});

module.exports = router;
