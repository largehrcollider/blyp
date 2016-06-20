import * as types from '../constants/actionTypes';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import toolbar from './toolbarReducer.js';
import auth from './authReducer';
import basket from './basketReducer';
// import reducer from './myReducerFile.js';

/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  form: formReducer, // Reducer provided by 'redux-form' module
  toolbar,
  routing,
  auth,
  basket
});

export default rootReducer;
