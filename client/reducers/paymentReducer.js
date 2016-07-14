import * as types from '../constants/actionTypes';

/**
 *  Reducer related to payment
 * NOTE: valid payment method descriptors: 'cash', 'credit card'.
 */

var initialState = {
  method: null,
  cashReceived: 0
};

 const paymentReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.PAYMENT_METHOD_SELECTED:
    return {
      ...state,
      method: action.method,
      cashReceived: 0
    };

    case types.CASH_RECEIVED:
    return {
      ...state,
      cashReceived: action.amount
    };

    case types.RESET_PAYMENT:
    return {
      ...state,
      method: null,
      cashReceived: 0
    };

    default:
    return state;
  };
};

export default paymentReducer;
