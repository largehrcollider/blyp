import * as types from '../constants/actionTypes';

/**
 *  Reducer related to products
 */
 const productsReducer = (state = {}, action) => {
  switch (action.type) {

    case types.POPULATE_WITH_FAKE_DATA:
    return action.data;

    default:
    return state;
  };
};

export default productsReducer;
