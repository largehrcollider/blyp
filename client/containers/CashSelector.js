import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import MethodCash from '../components/MethodCash.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCash: () => {
      dispatch(actions.paymentMethodSelected('cash'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'cash';
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodCash);
