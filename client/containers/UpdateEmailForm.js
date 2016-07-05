import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import UpdateEmailForm from '../components/UpdateEmailForm.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: ({ updateInfo }) => {
      var obj = {email: updateInfo};
      dispatch(actions.updateDetails(obj));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'updateEmail',
  fields: ['updateInfo']
}, mapStateToProps, mapDispatchToProps)(UpdateEmailForm);
