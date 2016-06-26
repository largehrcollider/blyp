import * as types from '../constants/actionTypes';

/**
 *  Reducer related to products
 */
 const productsReducer = (state = {}, action) => {
  switch (action.type) {

    case types.POPULATE_WITH_FAKE_DATA:
    return action.data;

    case types.SAVE_PRODUCT_REQUEST_SUCCESS:
    return {...state, [action.product.sku]: action.product};

    // do nothing for next case, handle ui state in UI reducer
    // case types.SAVE_PRODUCT_REQUEST_FAILURE:

    // same
    // case types.SAVE_PRODUCT_REQUEST_SENT:

    case types.PRODUCT_R_REQUEST_SUCCESS:
    var newState = {...state};
    action.products.forEach((product) => {
      newState[product.sku] = product;
    });
    return newState;

    default:
    return state;
  };
};

export default productsReducer;
