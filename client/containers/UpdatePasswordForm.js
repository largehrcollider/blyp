import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import UpdatePasswordForm from '../components/UpdatePasswordForm.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: ({ updateInfo }) => {
      var obj = {password: updateInfo};
      dispatch(actions.updateDetails(obj));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'updatePassword',
  fields: ['updateInfo']
}, mapStateToProps, mapDispatchToProps)(UpdatePasswordForm);
