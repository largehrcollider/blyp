import * as types from '../constants/actionTypes.js'

/**
* NOTE
* An item added to the basket by inserting an object into the state array that has an `id` field and a `qty` field
*/

const basketReducer = (state = [], action) => {
  switch(action.type) {

    // case types.BASKET_ADD_ITEM:
    // if item already exists in basket
      // increase count
    // else
      // add to basket, set count = 1

    case types.BASKET_DECREASE_COUNT:
    // if item already exists in basket
    if (var item = state.find((item) => (item.id === action.id))) {
      if (item.qty > 1) {
        const mapper = (item) => {
          if (item.id === action.id) return {...item, qty: item.qty - 1}
          else return item;
        }
        return state.map(mapper);
      } else {
        return state.filter((item) => !(item.id !== action.id))
      }
    } else {
      return state;
    }

    case types.BASKET_INCREASE_COUNT:
    // if item already exists in basket
      // increase count
    // else
      // add to basket, set count = 1

    case types.BASKET_REMOVE_ITEM:
    // if item already exists in basket
      // remove it

    case types.CHECKOUT:
    // ?
    case types.PAYMENT_COMPLETED:

    default:
    return state;
  }
}
