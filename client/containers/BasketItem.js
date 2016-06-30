import * as actions from '../actions'
import { connect } from 'react-redux';
import BasketItem from '../components/BasketItem.jsx'

const mapStateToProps = (state, ownProps) => {
  const { sku } = ownProps;
  return {
    name: state.auth.business.products[sku].name,
    quantity: state.basket.find((item) => (item.sku === sku)).quantity,
    price: state.auth.business.products[sku].price
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { sku } = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(sku));
    },
    decrementItem: () => {
      dispatch(actions.basketDecreaseCount(sku));
    },
    deleteItem: () => {
      dispatch(actions.basketRemoveItem(sku));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
