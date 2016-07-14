import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import JoinBusiness from '../components/JoinBusiness.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    join: ({ business }) => {
      dispatch(actions.joinBusiness(business));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'joinBusiness',
  fields: ['business']
}, mapStateToProps, mapDispatchToProps)(JoinBusiness);
