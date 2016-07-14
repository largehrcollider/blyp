import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProcessCardSwipe from '../components/ProcessCreditCardSwipe.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => {
      var insert = function(data){
        //split up the creditcard swipe string into properties
        //specified by Stripe
        var stripeObj = {};
        var info = data.creditswipe.split(";");
        stripeObj.number = Number(info[info.length-1].slice(0,16));
        stripeObj.exp_year = Number(info[info.length-1].slice(17,19));
        stripeObj.exp_month = Number(info[info.length-1].slice(19,21));
        return stripeObj;
      };
      dispatch(actions.stripe(insert(data)));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'ccSwipe',
  fields: ['creditswipe']
}, mapStateToProps, mapDispatchToProps)(ProcessCardSwipe);
