import * as types from '../constants/actionTypes.js'

/**
* NOTE
* An item added to the basket by inserting an object into the state array that has an `id` field and a `qty` field
*/

const basketReducer = (state = {}, action) => {
  switch(action.type) {

    case types.BASKET_DECREASE_COUNT:
    if (state[action.id] > 1) {
      return {...state, [action.id]: state[action.id] - 1};
    } else {
      var newState = ({...state});
      delete newState[action.id];
      return newState;
    }

    case types.BASKET_INCREASE_COUNT:
    if (state[action.id]) {
      return {...state, [action.id]: state[action.id] + 1};
    } else {
      return {...state, [action.id]: 1};
    }

    case types.BASKET_REMOVE_ITEM:
    if (state[action.id]) {
      var newState = {...state};
      delete newState[action.id];
      return newState;
    } else {
      return state;
    }

    case types.PAYMENT_COMPLETED:
    return {};

    default:
    return state;
  }
}

export default basketReducer;
