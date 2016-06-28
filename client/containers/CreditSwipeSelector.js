import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CreditSwipeSelector from '../components/CreditSwipeSelector.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectSwipe: () => {
      dispatch(actions.paymentMethodSelected('swipe'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'swipe'
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditSwipeSelector);
