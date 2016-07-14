import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProcessCard from '../components/ProcessCreditCard.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => {
      dispatch(actions.stripe(data));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'ccManual',
  fields: ['number', 'exp_month', 'exp_year', 'cvc']
}, mapStateToProps, mapDispatchToProps)(ProcessCard);
