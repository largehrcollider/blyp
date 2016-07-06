import * as types from '../constants/actionTypes';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import ui from './uiReducer.js';
import auth from './authReducer.js';
import basket from './basketReducer.js';
import payment from './paymentReducer';
import network from './networkReducer.js';
import normalizePrice from './normalizePrice.js';
// import reducer from './myReducerFile.js';

/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const appReducer = combineReducers({
  form: form.normalize({
    createProduct: {
      price: normalizePrice
    },
    productEditor: {
      price: normalizePrice
    },
    amountReceived: {
      amount: normalizePrice
    }
  }), // Reducer provided by 'redux-form' module
  ui,
  routing,
  auth,
  basket,
  payment,
  network
});

/**
* Resetting solution proposed by Dan Abramov
* http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
*/
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
