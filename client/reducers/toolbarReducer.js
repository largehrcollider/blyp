import * as types from '../constants/actionTypes';

/**
 *  Reducer related to UI
 */
export default (state = {
  checkoutButton: false,
  inventoryButton: false,
  viewCheckout: false
}, action) => {
  switch (action.type) {
    case types.CHECKOUT_CLICK:
    return {
      ...state,
      checkoutButton: !state.checkoutButton
    };
    case types.INVENTORY_CLICK:
    return {
      ...state,
      inventoryButton: !state.inventoryButton
    };

    case types.TOGGLE_CHECKOUT:
    return {
      ...state,
      viewCheckout: !state.viewCheckout
    }

    default:
    return state;
  };
};
