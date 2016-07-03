import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ChangeProfileUsername from '../components/ProfileUsernameButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'credit card'
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfileUsername);
