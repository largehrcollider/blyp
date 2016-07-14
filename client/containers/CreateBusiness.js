import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import CreateBusiness from '../components/CreateBusiness.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: ({ business }) => {
      dispatch(actions.createBusiness(business));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'createBusiness',
  fields: ['business']
}, mapStateToProps, mapDispatchToProps)(CreateBusiness);
