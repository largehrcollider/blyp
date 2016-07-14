
var expect = require('chai').expect;
var mongoose = require('mongoose');
var Customer = require('../../server/db/customer/customer.js');
var userController = require('../../server/db/user/userController.js');
var productController = require('../../server/db/product/productController.js');
var businessController = require('../../server/db/business/businessController.js');
var businessModel = require('../../server/db/business/business.js');

var dbURI = 'mongodb://localhost/blypTest';
var users = [
{
  username:"Edu", 
  email:"edu@edu.com",
  password:"test",
  requests: ["Eric's Sunglass Cabana"], 
  businesses: ["Edu's Shoe Store"]
},
{
  username:"EricSmith", 
  email:"eric@eric.com",
  password:"test", 
  businesses: ["Eric's Sunglass Cabana", "Clothing Store"], 
  requests: ["Edu's Shoe Store"]
},
{
  username:"Steven", 
  email:"steven@steven.com", 
  password:"test",
  businesses: [], 
  requests: ["Edu's Shoe Store"]
},
{
  username:"Daniel", 
  password:"test",
  email:"daniel@daniel.com", 
  businesses: ["Edu's Shoe Store"], 
  requests: []
},
{
  username:"Delete", 
  email:"edu@edu.com",
  password:"test",
  requests: ["Eric's Sunglass Cabana"], 
  businesses: ["Edu's Shoe Store"]
}
];

var businesses = [
{
  name: "Edu's Shoe Store",
  users: [
  {username: "Leo", role: "cashier"}, 
  {username:"Edu", role:"admin"}, 
  {username:"Daniel", role:"admin"}
  ],
  requests: [
  "EricSmith",
  "Steven"
  ]

},
{
  name: "Eric's Sunglass Cabana",
  users: [
  {username: "Leo", role: "cashier"}, 
  {username:"Eric", role:"admin"}
  ],
  requests: []
},
{
  name: "Clothing Store",
  users: [
  {username:"EricSmith", role:"admin"}
  ],
  requests: []
}
];

var products = [
{
  sku: "12",
  business: "Eric's Sunglass Cabana",
  price: 1200,
  quantity: 10,
  name: "Wicked Cool",
  categories: ["Sunglasses", "Stylish"]
},
{
  sku: "13",
  business: "Eric's Sunglass Cabana",
  price: 1000,
  quantity: 10,
  name: "Sorta Cool",
  categories: ["Sunglasses"]
},
{
  sku: "14",
  business: "Eric's Sunglass Cabana",
  price: 2000,
  quantity: 10,
  name: "Cool",
  categories: ["Sunglasses", "Cool"]
},
{
  sku: "165432",
  business: "Edu's Shoe Store",
  price: 10000,
  quantity: 10,
  name: "Dress Shoes",
  categories: ["Designer", "Business"]
},
{
  sku: "205432",
  business: "Edu's Shoe Store",
  price: 7000,
  quantity: 20,
  name: "Boat Shoes",
  categories: ["Designer", "Casual"]
}
];

describe('User Controller', function () {

  before(function(done){
    function clearDB() {
      for (var i in mongoose.connection.collections) {
        mongoose.connection.collections[i].remove(function() {});
      }
      return done();
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(dbURI, function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      });
    } else {
      return clearDB();
    }
  });

  // after(function(done){
  //   mongoose.connection.close(done);
  // });

  it('Create a new user', function(done){
    userController.createUser(users[0], function(err, newUser){
      expect(newUser.username).to.equal(users[0].username);
      done();
    });
  });

  it('Should not allow duplicate usernames', function(done){
    userController.createUser(users[0], function(err, newUser){
      expect(err).to.exist;
      done();
    });
  });

  it('Should create several users', function(done){
    userController.createUser(users[1], function(err, user){
      userController.createUser(users[2], function(err, user){
        userController.createUser(users[3], function(err, user){
          userController.createUser(users[4], function(err, user){
            done();
          });
        });
      });
    });
  }); 

  it('Should get all users', function(done){
    userController.getAllUsers(function(err, users){
      expect(users.length).to.equal(5);
      done();
    });
  });

  it('Should delete a user by username', function(done){
    userController.deleteUserByUsername('Delete', function(err, user){
      expect(user.username).to.equal('Delete');
      userController.getUserByUsername('Delete', function(err, user){
        expect(user).to.equal(null);
        done();
      });
    });
  });
});

describe('Product controller', function(){

  it('Should create a new product', function(done){
    productController.createProduct(products[0], function(err, product){
      if(product){
        expect(product.sku).to.equal(products[0].sku);
        done();
      }
    });
  });

  it('Should not allow a product to be created with a price less than zero', function(done){
    var newProduct = {
      sku: 123,
      price: Math.pow(2, 53)
    };
    productController.createProduct(newProduct, function(err, product){
      expect(product).to.equal(null);
      done();
    });
  });

  it('Should not allow a product to be created with a price less than zero', function(done){
    var newProduct = {
      sku: 123,
      price: -10
    };
    productController.createProduct(newProduct, function(err, product){
      expect(product).to.equal(null);
      done();
    });
  });

  it('Should setup product data', function(done){
    productController.createProduct(products[1], function(err, product){
      expect(product).to.exist;
      productController.createProduct(products[2], function(err, product){
        expect(product).to.exist;
        productController.createProduct(products[3], function(err, product){
          expect(product).to.exist;
          productController.createProduct(products[4], function(err, product){
            expect(product).to.exist;
            done();
          })
        });
      });
    });
  });

  it('Should get all products', function(done){
    productController.getAllProducts("Eric's Sunglass Cabana", function(err, products){
      expect(products.length).to.equal(3);
      done();
    });
  });

  it('Should update a product by sku', function(done){
    productController.updateProductBySku("Eric's Sunglass Cabana", 12, {price: 1000, details: 'Green'}, function(err, product){
      expect(product.price).to.equal(1000);
      expect(product.details).to.equal('Green');
      done();
    });
  });

  it('Should add a category by sku', function(done){
    productController.addProductCategoryBySku("Eric's Sunglass Cabana", 12, 'Fashion', function(err, product){
      expect(product.categories.length).to.equal(3);
      done();
    });
  });

  it('Should delete a product by sku', function(done){
    productController.deleteProductBySku("Eric's Sunglass Cabana",12, function(err, product){
      productController.getProductBySku("Eric's Sunglass Cabana", 12, function(err, product){
        expect(product).to.equal(null);
        done();
      });
    });
  });
});

describe('Business controller', function(){
  //   before(function(done){
  //   function clearDB() {
  //     for (var i in mongoose.connection.collections) {
  //       mongoose.connection.collections[i].remove(function() {});
  //     }
  //     return done();
  //   }

  //   if (mongoose.connection.readyState === 0) {
  //     mongoose.connect(dbURI, function (err) {
  //       if (err) {
  //         throw err;
  //       }
  //       return clearDB();
  //     });
  //   } else {
  //     return clearDB();
  //   }
  // });

  after(function(done){
    // for (var i in mongoose.connection.collections) {
    //   mongoose.connection.collections[i].remove(function() {});
    // }
    mongoose.connection.close(done);
  });

  it('Should create a new business', function(done){
    var tokenPayload = {username: "Edu"};
    var reqBody = businesses[0];
    reqBody.business = businesses[0].name;
    delete businesses[0].name;
    businessController.createBusiness(reqBody, tokenPayload, function(err, business){
      expect(business.name).to.equal("Edu's Shoe Store");
      expect(business.users.length).to.equal(1);
      expect(business.users[0].username).to.equal('Edu');
      expect(business.users[0].role).to.equal('admin');
      done();
    });
  });

  it('Should add users to a business', function(done){
    businessController.addUser("Edu's Shoe Store", {username:'Leo', role:'cashier'}, function(err, business){
      expect(business.users.length).to.equal(2);
      done();
    })
  });

  it('Should remove a user from a business', function(done){
    businessController.addUser("Edu's Shoe Store", {username:'Delete', role:'cashier'}, function(err, users){
      businessController.removeUser("Edu's Shoe Store", 'Delete', function(err, business){
        businessController.getBusinessByName("Edu's Shoe Store", function(err, business){
          for(var i = 0; i < business.users.length; i++){
            if(business.users[i].username === 'Delete'){
              break;
            }
          }
          expect(business.users[i]).to.equal(undefined);
          done();
        });
      });
    });
  });

  it('Should create several bsuinesses', function(done){
    new businessModel(businesses[1]).save(function(err, business){
      new businessModel(businesses[2]).save(function(err, business){
        done();
      })
    });
  }); 

  it('Should be able to update an employement request correctly', function(done){
    businessController.updateEmploymentRequest('EricSmith', "Edu's Shoe Store", 'accept', function(err, users){
      businessController.getBusinessByName("Edu's Shoe Store", function(err, business){
        expect(business.requests.length).to.equal(1);
        for(var i = 0; i < business.users.length; i++){
          if(business.users[i].username === 'EricSmith'){
            break;
          }
        }
        expect(business.users[i].username).to.equal('EricSmith');
        expect(business.requests.indexOf('EricSmith')).to.equal(-1);
        done();
      });
    });
  });

  it('Should update a user role', function(done){
    businessController.updateUserRole("Edu's Shoe Store", {username:'Leo', role:'admin'}, function(err, business){
      businessController.getBusinessByName("Edu's Shoe Store", function(err, business){
        for(var i = 0; i < business.users.length; i++){
          if(business.users[i].username === 'Leo'){
            break;
          }
        }
        expect(business.users[i].role).to.equal('admin');
        done();
      });
    });
  });

  it('Should add an employment request', function(done){
    businessController.addEmploymentRequest('added', "Edu's Shoe Store", function(err, business){
      businessController.getBusinessByName("Edu's Shoe Store", function(err, business){
        for(var i = 0; i < business.requests.length; i++){
          if(business.requests[i] === 'added'){
            break;
          }
        }
        expect(business.requests[i]).to.equal('added');
        done();
      });
    });
  });

  it('Should be able to get a property of a business', function(done){
    businessController.getProperty("Eric's Sunglass Cabana", 'users', function(err, property){
      expect(property.length).to.equal(2);
      done();
    });
  });
});