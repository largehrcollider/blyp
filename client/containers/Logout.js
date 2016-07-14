import * as actions from '../actions'
import { connect } from 'react-redux';
import Logout from '../components/Logout.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
