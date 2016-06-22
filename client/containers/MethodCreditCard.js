import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import MethodCreditCard from '../components/MethodCreditCard.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCreditCard: () => {
      // dispatch(actions.paymentMethodCreditCard());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'credit card';
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodCreditCard);
