import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CashSelector from '../components/CashSelector.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCash: () => {
      dispatch(actions.paymentMethodChange('cash'));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CashSelector);
