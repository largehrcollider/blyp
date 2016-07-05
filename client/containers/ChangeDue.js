import * as actions from '../actions'
import { connect } from 'react-redux';
import ChangeDue from '../components/ChangeDue.jsx';
import total from '../helpers/basketTotal.js'

const mapStateToProps = (state) => {
  return {
    due: state.payment.cashReceived - total(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiptPage: () => {
      dispatch(actions.receiptPage());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangeDue);
