import * as actions from '../actions'
import {connect} from 'react-redux';
import BasketItem from '../components/BasketItem.jsx'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  return {
    name: state.products[id].name,
    // qty: state.products.id.qty
    // qty: (() => {
    //   state.basket.find
    // })()
    qty: state.basket.find((item) => (item.id === id)).qty
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(id));
    },
    decrementItem: () => {
      dispatch(actions.basketDecreaseCount(id));
    },
    deleteItem: () => {
      dispatch(actions.basketRemoveItem(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
