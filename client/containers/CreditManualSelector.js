import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CreditManualSelector from '../components/CreditManualSelector.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectManual: () => {
      dispatch(actions.paymentMethodSelected('manual'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'manual'
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditManualSelector);
