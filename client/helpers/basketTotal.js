export default (basket) => (basket.reduce((memo, product) => {
  return memo + state.products[product.id].price * product.qty;
}, 0))
