import * as actions from '../actions'
import { connect } from 'react-redux';
import DeleteUser from '../components/DeleteUser.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    deleteUser: () => {
      dispatch(actions.deleteUser(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
