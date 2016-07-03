import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ChangeProfilePassword from '../components/ProfilePasswordButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfilePassword);
