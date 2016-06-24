module.exports = function(req,callback,stripe){
    stripe.charges.create({
    amount: 100, //in pennies. 
    currency: "usd",
    source: req,
    description: "Blyp Charge"
    }, function(err, charge) {
      callback(err,charge);
    });
}
