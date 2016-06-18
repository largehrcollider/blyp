var expect = require('chai').expect;
var mongoose = require('mongoose');
var Customer = require('../../server/db/customer/customer.js');

var dbURI = 'mongodb://localhost/blypTest';

describe('Customer Model', function () {

  beforeEach(function (done) {
    if (mongoose.connection.db) return done();

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
        return done();//clearDB();
      });
    } else {
      return done()//clearDB();
    }
  });

  afterEach(function (done) {
    mongoose.disconnect();
    return done();
  });

  it('should be a Mongoose model', function () {
    expect(new Customer()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Customer.schema).to.exist;
  });

  it('should save', function(done){
    var testCustomer = {
      name: 'Eric Smith',
      address: '123 Street Jacksonville, FL 32250',
      phone: '404-555-5555'
    };

    new Customer(testCustomer).save(function(done){
      return done();
    }); 
  });
});
