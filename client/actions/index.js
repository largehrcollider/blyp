import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';

//////////////////////////////////////////////////////////////
// Synchronous Action Creators
//////////////////////////////////////////////////////////////

// example action creator
export const somethingHappened = (data) => {
  return {
    type: types.DUMMY,
    color: data.color
  }
}

// Toolbar Buttons Actions
export const checkoutClick = () => {
  return {
    type: types.CHECKOUT_CLICK
  }
}

export const inventoryClick = () => {
  return {
    type: types.INVENTORY_CLICK
  }
}

//////////////////////////////////////////////////////////////
// Asynchronous Action Creator combination
//////////////////////////////////////////////////////////////
