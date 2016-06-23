import * as actions from '../actions'
import { connect } from 'react-redux';
import ChangeDue from '../containers/ChangeDue.jsx';
import total from '../helpers/basketTotal.js'

const mapStateToProps = (state) => {
  return {
    due: total(state.basket) - state.payment.cashReceived
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
