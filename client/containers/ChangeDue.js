import * as actions from '../actions'
import { connect } from 'react-redux';
import ChangeDue from '../containers/ChangeDue.jsx';

const mapStateToProps = (state) => {
  return {
    due: state.basket.reduce((memo, product) => {
      return memo + state.products[product.id].price * product.qty;
    }, 0) - state.payment.cashReceived
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    done: () => {
      dispatch(actions.cashCheckoutCompleted());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBar);
