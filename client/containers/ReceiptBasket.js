import * as actions from '../actions';
import { connect } from 'react-redux';
import ReceiptBasket from '../components/ReceiptBasket.jsx';

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    subtotal: state.basket.reduce(function(prev, curr){
      var qty = curr.quantity;
      var sku = curr.sku;
      var price = state.auth.business.products[sku].price;
      return prev + (price * qty);
    },0),
    quantity: state.basket.reduce(function(prev,curr){
      var qty = curr.quantity;
      return prev + qty;
    },0),
    total: state.basket.reduce(function(prev, curr){
      var qty = curr.quantity;
      var sku = curr.sku;
      var price = state.auth.business.products[sku].price;
      return prev + (price * qty);
    },0),
    price: state.basket.reduce(function(prev, curr){
      var qty = curr.quantity;
      var sku = curr.sku;
      var price = state.auth.business.products[sku].price;
      return prev + (price * qty);
    },0),
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCompleted: () => {
      dispatch(actions.checkoutCompleted());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptBasket);
