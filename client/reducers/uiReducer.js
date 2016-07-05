import * as types from '../constants/actionTypes';

/**
 *  Reducer related to UI
 */
export default (state = {
  checkoutButton: false,
  inventoryButton: false,
  viewCheckout: false,
  visibilityFilter: 'all',
  changeName: false,
  changeEmail: false,
  changeUsername: false,
  changePassword: false
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

    case types.TOGGLE_CATEGORY:
    return {
      ...state,
      visibilityFilter: action.category
    }

    case types.CHANGE_NAME:
    return {
      ...state,
      changeName: !state.changeName
    }

    case types.CHANGE_EMAIL:
    return {
      ...state,
      changeEmail: !state.changeEmail
    }

    case types.CHANGE_USERNAME:
    return {
      ...state,
      changeUsername: !state.changeUsername
    }

    case types.CHANGE_PASSWORD:
    return {
      ...state,
      changePassword: !state.changePassword
    }

    default:
    return state;
  };
};
