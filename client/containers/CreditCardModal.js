import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CreditCardModal from '../components/CreditCardModal.jsx';
import total from '../helpers/basketTotal.js'

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    method: state.payment.method,
    changeDue: state.payment.cashReceived - total(state) >= 0
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardModal);
