import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import UpdateUsernameForm from '../components/UpdateUsernameForm.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: ({ updateInfo }) => {
      var obj = {username: updateInfo};
      dispatch(actions.updateDetails(obj));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'updateUsername',
  fields: ['updateInfo']
}, mapStateToProps, mapDispatchToProps)(UpdateUsernameForm);
