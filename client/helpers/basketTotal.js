export default (state) => (state.basket.reduce((memo, product) => {
  return memo + state.auth.business.products[product.sku].price * product.quantity;
}, 0))
