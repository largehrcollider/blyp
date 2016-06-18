import * as types from '../constants/actionTypes';

/**
 *  Reducer related to UI
 */
export default (state = {
 
}, action) => {
  switch (action.type) {
    case types.CHECKOUT_CLICK:
    return {
      ...state,
      console.log("I've been clicked yo");
    };

    
  };
};
