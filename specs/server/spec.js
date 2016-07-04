
var expect = require('chai').expect;
var mongoose = require('mongoose');
var Customer = require('../../server/db/customer/customer.js');
var userController = require('../../server/db/user/userController.js');
var productController = require('../../server/db/product/productController.js');
var businessController = require('../../server/db/business/businessController.js');

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
  categories: "Sunglasses, Stylish"
},
{
  sku: "13",
  business: "Eric's Sunglass Cabana",
  price: 1000,
  quantity: 10,
  name: "Sorta Cool",
  categories: "Sunglasses"
},
{
  sku: "14",
  business: "Eric's Sunglass Cabana",
  price: 2000,
  quantity: 10,
  name: "Cool",
  categories: "Sunglasses, Cool"
},
{
  sku: "165432",
  business: "Edu's Shoe Store",
  price: 10000,
  quantity: 10,
  name: "Dress Shoes",
  categories: "Designer, Business"
},
{
  sku: "205432",
  business: "Edu's Shoe Store",
  price: 7000,
  quantity: 20,
  name: "Boat Shoes",
  categories: "Designer, Casual"
}
];

// describe('Customer Model', function () {

//   before(function(done){

//     function clearDB() {
//       for (var i in mongoose.connection.collections) {
//         mongoose.connection.collections[i].remove(function() {});
//       }
//       return done();
//     }

//     if (mongoose.connection.readyState === 0) {
//       mongoose.connect(dbURI, function (err) {
//         if (err) {
//           throw err;
//         }
//         return clearDB();
//       });
//     } else {
//       return clearDB();
//     }
//   });

//   after(function(done){
//     for (var i in mongoose.connection.collections) {
//       mongoose.connection.collections[i].remove(function() {});
//     }
//     mongoose.connection.close(done);
//   });

//   it('should save', function(done){
//     var testCustomer = {
//       name: 'Eric Smith',
//       address: '123 Street Jacksonville, FL 32250',
//       phone: '404-555-5555'
//     };

//     new Customer(testCustomer).save(function(err, user){
//       expect(user.name).to.equal(testCustomer.name);
//       done();
//     }); 
//   });

//   it('should retrieve all customers', function(done){
//     var testCustomer2 = {
//       name: 'Jenny Thompson',
//       address: '555 Some Road Chicago, IL 55555',
//       phone: '555-904-404'
//     }
//     new Customer(testCustomer2).save(function(err, user){
//       Customer.find({}, function(err, customers){
//         if(err) return err;
//         expect(customers.length).to.equal(2);
//         done();
//       });
//     });
//   });
// });

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
      console.log(newUser)
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
      expect(product.sku).to.equal(products[0].sku);
      done();
    });
  });

  it('Should setup product data', function(){
  productController.createProduct(products[1], function(err, product){
      productController.createProduct(products[2], function(err, product){
        productController.createProduct(products[3], function(err, product){
          productController.createProduct(products[4], function(err, product){
            done();
          });
        });
      });
    });
});

  it('Should get all products', function(done){
    productController.createProduct(fakeProduct, function(err, product){
      productController.getAllProducts('Test Business', function(err, products){
        expect(products.length).to.equal(2);
        done();
      });
    });
  });

  it('Should update a product by id', function(done){
    productController.getProductByName('Test Business', 'Bag', function(err, product){
      var sku= product.sku;
      productController.updateProductBySku('Test Business', sku, {price: 10.00, details: 'Green'}, function(err, product){
        expect(product.price).to.equal(10.00);
        done();
      });
    });
  });

    it('Should add a category by sku', function(done){
    productController.getProductByName('Test Business', 'Bag', function(err, product){
      var sku = product.sku;
      productController.addProductCategoryBySku('Test Business', sku, 'Fashon', function(err, product){
        expect(product.categories.length).to.equal(3);
        done();
      });
    });
  });

    it('Should delete a product by sku', function(done){
    productController.getProductByName('Test Business', 'iPhone', function(err, product){
      var sku = product.sku;
      productController.deleteProductBySku('Test Business',sku, function(err, product){
        productController.getProductBySku('Test Business', sku, function(err, product){
          expect(product).to.equal(null);
          done();
        })

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
    businessController.createBusiness(businesses[0], tokenPayload, function(err, business){
      expect(business.name).to.equal("Edu's Shoe Store");
      expect(business.users.length).to.equal(3);
      expect(business.users[0].username).to.equal('Leo');
      expect(business.users[0].role).to.equal('admin');
      done();
    });
  });

  it('Should create several bsuinesses', function(done){
    businessController.createBusiness(businesses[1], function(err, business){
      businessController.createBusiness(businesses[2], function(err, business){
        console.log(err);
        console.log(business)
        done();
      });
    });
  }); 

  it('Should be able to update an employement request correctly', function(done){
    businessController.updateEmploymentRequest('NewEmployee', 'Pawn Shop', 'accept', function(err, users){
      businessController.getBusinessByName('Pawn Shop', function(err, business){
        expect(business.requests.length).to.equal(1);
        for(var i = 0; i < business.users.length; i++){
          if(business.users[i].username === 'NewEmployee'){
            break;
          }
        }
        expect(business.users[i].username).to.equal('NewEmployee');
        done();
      });
    });
  });
});