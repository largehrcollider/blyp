import * as actions from '../actions'
import { connect } from 'react-redux';
import MakeAdmin from '../components/MakeAdmin.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    makeAdmin: () => {
      dispatch(actions.role(username, 'admin'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MakeAdmin);
