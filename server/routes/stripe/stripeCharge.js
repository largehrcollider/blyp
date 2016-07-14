module.exports = function(req, callback, stripe){
  stripe.charges.create({
  amount: 100, //in pennies. calculatePrice(basket)
  currency: "usd",
  source: req,
  description: "Blyp Charge" //calculateItems(basket)
  }, function(err, charge) {
    callback(err,charge);
  });
}
