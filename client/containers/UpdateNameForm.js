import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import UpdateNameForm from '../components/UpdateNameForm.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: ({ updateInfo }) => {
      var obj = {name: updateInfo};
      dispatch(actions.updateDetails(obj));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'updateName',
  fields: ['updateInfo']
}, mapStateToProps, mapDispatchToProps)(UpdateNameForm);
