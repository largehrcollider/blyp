import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index.js';
import LoginForm from '../../components/forms/LoginFormComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => {
      dispatch(actions.login(values));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'loginForm',
  fields: ['username', 'password']
}, mapStateToProps, mapDispatchToProps)(LoginForm);
