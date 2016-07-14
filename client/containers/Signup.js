import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import Signup from '../components/Signup.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (values) => {
      dispatch(actions.signup(values));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'signup',
  fields: ['name', 'username', 'email', 'password', 'profilePicture']
}, mapStateToProps, mapDispatchToProps)(Signup);
