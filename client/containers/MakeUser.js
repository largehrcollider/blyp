import * as actions from '../actions'
import { connect } from 'react-redux';
import MakeUser from '../components/MakeUser.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    makeUser: () => {
      dispatch(actions.role(username, 'cashier'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MakeUser);
