import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProcessCardSwipe from '../components/ProcessCreditCardSwipe.jsx';

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
  form: 'addComponentForm',
  fields: ['creditswipe']
}, mapStateToProps, mapDispatchToProps)(ProcessCardSwipe);
