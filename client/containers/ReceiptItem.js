import * as actions from '../actions';
import { connect } from 'react-redux';
import ReceiptItem from '../components/ReceiptItem.jsx';

const mapStateToProps = (state, ownProps) => {
  const { sku } = ownProps;
  return {
    name: state.auth.business.products[sku].name,
    quantity: (() => {
      var item = state.basket.find((item) => (item.sku === sku));
      return item ? item.quantity : 0;
    })(),
    price: state.auth.business.products[sku].price,
    sku,
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    checkoutCompleted: () => {
      dispatch(actions.checkoutCompleted());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptItem);
