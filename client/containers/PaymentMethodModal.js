import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import  from '../components/MethodCash.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCash: () => {
      dispatch(actions.paymentMethodSelected('cash'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    method: state.payment.method,
    changeDue: state.payment.cashReceived - total(state.basket) > 0
  };
}

export default connect(mapStateToProps, mapDispatchToProps)();
