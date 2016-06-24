import * as types from '../constants/actionTypes.js'

var initialState = {
  product: {
    C: {
      isFetching: false,
      error: false
    },
    R: {
      isFetching: false,
      error: false
    },
    U: {
      isFetching: false,
      error: false
    },
    D: {
      isFetching: false,
      error: false
    }
  }
};
const networkReducer = (state = initialState, action) => {
  switch(action.type) {

    /**
    * product CRUD operations
    */
    case types.PRODUCT_C_REQUEST_SENT:
    return {
      ...state,
      product: {
        ...state.product,
        C: {
          ...state.product.C,
          isFetching: true,
          error: false
        }
      }
    };
    case types.PRODUCT_C_REQUEST_SUCCESS:
    return {
      ...state,
      product: {
        ...state.product,
        C: {
          ...state.product.C,
          isFetching: false
        }
      }
    };
    case types.PRODUCT_C_REQUEST_FAILURE:
    return {
      ...state,
      product: {
        ...state.product,
        C: {
          ...state.product.C,
          isFetching: false,
          error: true
        }
      }
    };
    case types.PRODUCT_R_REQUEST_SENT:
    return {
      ...state,
      product: {
        ...state.product,
        R: {
          ...state.product.R,
          isFetching: true,
          error: false
        }
      }
    };
    case types.PRODUCT_R_REQUEST_SUCCESS:
    return {
      ...state,
      product: {
        ...state.product,
        R: {
          ...state.product.R,
          isFetching: false
        }
      }
    };
    case types.PRODUCT_R_REQUEST_FAILURE:
    return {
      ...state,
      product: {
        ...state.product,
        R: {
          ...state.product.R,
          isFetching: false,
          error: true
        }
      }
    };

    case types.PRODUCT_U_REQUEST_SENT:
    return {
      ...state,
      product: {
        ...state.product,
        U: {
          ...state.product.U,
          isFetching: true,
          error: false
        }
      }
    };
    case types.PRODUCT_U_REQUEST_SUCCESS:
    return {
      ...state,
      product: {
        ...state.product,
        U: {
          ...state.product.U,
          isFetching: false
        }
      }
    };
    case types.PRODUCT_U_REQUEST_FAILURE:
    return {
      ...state,
      product: {
        ...state.product,
        U: {
          ...state.product.U,
          isFetching: false,
          error: true
        }
      }
    };

    case types.PRODUCT_D_REQUEST_SENT:
    return {
      ...state,
      product: {
        ...state.product,
        D: {
          ...state.product.D,
          isFetching: true,
          error: false
        }
      }
    };
    case types.PRODUCT_D_REQUEST_SUCCESS:
    return {
      ...state,
      product: {
        ...state.product,
        D: {
          ...state.product.D,
          isFetching: false
        }
      }
    };
    case types.PRODUCT_D_REQUEST_FAILURE:
    return {
      ...state,
      product: {
        ...state.product,
        D: {
          ...state.product.D,
          isFetching: false,
          error: true
        }
      }
    };

    default:
    return state;
  }
}

export default networkReducer;
