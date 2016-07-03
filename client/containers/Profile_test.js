import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import Profile from '../components/Profile_test.jsx';
import businessesList from '../helpers/businessesList';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    businesses: state.auth.businesses,
    changeName: state.ui.changeName,
    changeEmail: state.ui.changeEmail,
    changeUsername: state.ui.changeUsername,
    changePassword: state.ui.changePassword,
    name: state.auth.name,
    username: state.auth.username,
    email: state.auth.email
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
