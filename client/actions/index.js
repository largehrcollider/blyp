import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import total from '../helpers/basketTotal.js'

//////////////////////////////////////////////////////////////
// Synchronous Action Creators
//////////////////////////////////////////////////////////////

/**
* Payment methods
*/
export const paymentMethodSelected = (method) => {
  return {
    type: types.PAYMENT_METHOD_SELECTED,
    method
  };
};

export const cashReceived = (amount) => {
  return {
    type: types.CASH_RECEIVED,
    amount
  };
};

export const checkoutCompleted = () => {
  return {
    type: types.CHECKOUT_COMPLETED,
  };
};

export const resetPayment = () => {
  return {
    type: types.RESET_PAYMENT,
  };
};

// example action creator
export const somethingHappened = (data) => {
  return {
    type: types.DUMMY,
    color: data.color
  };
};

// Toolbar Buttons Actions
export const checkoutClick = () => {
  return {
    type: types.CHECKOUT_CLICK
  };
};

export const inventoryClick = () => {
  return {
    type: types.INVENTORY_CLICK
  };
};

// authentication state
export const loginRequestSent = () => {
  return {
    type: types.LOGIN_REQUEST_SENT
  }
}

export const loginRequestSuccess = (admin, jwt, name, username) => {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    admin,
    jwt,
    name,
    username
  }
}

export const loginRequestFailure = (message) => {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    message
  };
};

export const populateWithFakeData = (data) => {
  return {
    type: types.POPULATE_WITH_FAKE_DATA,
    data
  };
};

/**
* Basket interaction
*/
export const basketDecreaseCount = (sku) => {
  return {
    type: types.BASKET_DECREASE_COUNT,
    sku
  };
};

export const basketIncreaseCount = (sku) => {
  return {
    type: types.BASKET_INCREASE_COUNT,
    sku
  };
};

export const basketRemoveItem = (sku) => {
  return {
    type: types.BASKET_REMOVE_ITEM,
    sku
  };
};

export const clearBasket = () => {
  return {
    type: types.CLEAR_BASKET
  };
}

export const transactionRequestSuccess = () => {
  return {
    type: types.TRANSACTION_REQUEST_SUCCESS
  };
}

export const transactionRequestFailure = () => {
  return {
    type: types.TRANSACTION_REQUEST_FAILURE
  };
}

export const transactionRequestSent = () => {
  return {
    type: types.TRANSACTION_REQUEST_SENT
  };
}

/**
* Product save requests
*/
export const saveProductRequestSuccess = (product) => {
  // might have to modify later to take in array of products
  // this or the reducer
  return {
    type: types.SAVE_PRODUCT_REQUEST_SUCCESS,
    product
  }
}

export const saveProductRequestFailure = (err) => {
  return {
    type: types.SAVE_PRODUCT_REQUEST_FAILURE,
    err
  }
}

export const saveProductRequestSent = () => {
  return {
    type: types.SAVE_PRODUCT_REQUEST_SENT,
  }
}

/**
* UI action creators
*/
export const toggleCheckout = () => {
  return {
    type: types.TOGGLE_CHECKOUT
  }
}

/**
* category filter pane
*/
export const toggleCategory = (category) => {
  return {
    type: types.TOGGLE_CATEGORY,
    category
  }
}
/**
* product request C action creators
*/
export const productCRequestSent = () => {
  return {
    type: types.PRODUCT_C_REQUEST_SENT
  };
};
export const productCRequestSuccess = () => {
  return {
    type: types.PRODUCT_C_REQUEST_SUCCESS
  };
};
export const productCRequestFailure = () => {
  return {
    type: types.PRODUCT_C_REQUEST_FAILURE
  };
};

/**
* product request R action creators
*/
export const productRRequestSent = () => {
  return {
    type: types.PRODUCT_R_REQUEST_SENT
  };
};
export const productRRequestSuccess = (data) => {
  return {
    type: types.PRODUCT_R_REQUEST_SUCCESS,
    data
  };
};
export const productRRequestFailure = () => {
  return {
    type: types.PRODUCT_R_REQUEST_FAILURE
  };
};
/**
* product request U action creators
*/
export const productURequestSent = () => {
  return {
    type: types.PRODUCT_U_REQUEST_SENT
  };
};
export const productURequestSuccess = () => {
  return {
    type: types.PRODUCT_U_REQUEST_SUCCESS
  };
};
export const productURequestFailure = () => {
  return {
    type: types.PRODUCT_U_REQUEST_FAILURE
  };
};

/**
* product request D action creators
*/
export const productDRequestSent = () => {
  return {
    type: types.PRODUCT_D_REQUEST_SENT
  };
};
export const productDRequestSuccess = () => {
  return {
    type: types.PRODUCT_D_REQUEST_SUCCESS
  };
};
export const productDRequestFailure = () => {
  return {
    type: types.PRODUCT_D_REQUEST_FAILURE
  };
};

//////////////////////////////////////////////////////////////
// Asynchronous Action Creator
//////////////////////////////////////////////////////////////
// export const chatSetup = () => {
//   return (dispatch) => {
//     helper.startSock((message) => {
//       dispatch(messageReceived(message));
//     });
//   }
// }

export const attemptLogin = ({username, password}) => {

  return (dispatch) => {
    const config = {
      url: '/login',
      method: 'post',
      data: {username, password},
    };
    axios(config)
    .then(({data: {jwt, name, username, admin}}) => {
      localStorage.setItem('jwt', jwt);
      dispatch(loginRequestSuccess(admin, jwt, name, username));
      dispatch(reset('loginForm'));
      dispatch(push('/sell'));

    })
    .catch(err => {
      dispatch(loginRequestFailure(err));
    });

    dispatch(loginRequestSent());
  }
}

export const saveProduct = (data) => {
  return (dispatch) => {
    const config = {
      url: '/api/products',
      method: 'post',
      data
    };
    axios(config)
    .then(({ data }) => {
      dispatch(saveProductRequestSuccess(data));
      dispatch(reset('addComponentForm'));
    })
    .catch(err => {
      dispatch(saveProductRequestFailure(err));
    });
    dispatch(saveProductRequestSent());
  }
}

export const transactionCompleted = () => {
  return (dispatch, getState) => {
    var transaction = {
      basket: getState().basket,
      tender: getState().payment.method
    };
    const config = {
      url: '/api/transactions',
      method: 'post',
      data: transaction
    };
    axios(config)
    .then(({ data }) => {
      dispatch(transactionRequestSuccess());
    })
    .catch(err => {
      dispatch(transactionRequestFailure());
    });
    dispatch(transactionRequestSent());
  };
};

export const validateCashReceived = (amount) => {
  return (dispatch, getState) => {
    if (amount - total(getState()) >= 0) {
      // send transaction request to server
      dispatch(transactionCompleted());
    } else {
      // display warning not enough
    }
    dispatch(cashReceived(amount));
  };
};

export const paymentMethodChange = (newMethod) => {
  return (dispatch) => {
    dispatch(resetPayment());
    dispatch(paymentMethodSelected(newMethod));
    // clear payment forms?
    dispatch(reset('amountReceived'));
  };
};

export const cashCheckoutCompleted = () => {
  return (dispatch) => {
    dispatch(reset('amountReceived'));
    dispatch(checkoutCompleted());
    dispatch(clearBasket());
    dispatch(push('/sell'));
  };
};

/**
* product CRUD operations
*/

/**
* the sku is optional. if not supplied, will fetch all products in database
*/
export const createProduct = (product) => {
  return (dispatch) => {
    const config = {
      url: '/api/products',
      method: 'post',
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productCRequestSuccess(data));
      dispatch(reset('addComponentForm'));
      // dispatch(push('/settings'));
    })
    .catch(err => {
      dispatch(productCRequestFailure());
    });
    dispatch(productCRequestSent());
  };
};
export const readProduct = (sku) => {
  return (dispatch) => {
    const config = {
      url: sku ? `/api/products/${sku}` : '/api/products',
      method: 'get',
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productRRequestSuccess(data));
    })
    .catch(err => {
      dispatch(productRRequestFailure());
    });
    dispatch(productRRequestSent());
  };
};
export const updateProduct = (product) => {
  return (dispatch) => {
    const config = {
      url: '/api/products',
      method: 'put',
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productURequestSuccess(data));
      // dispatch(reset('addComponentForm'));
      // maybe reset the an updateComponent form?
    })
    .catch(err => {
      dispatch(productURequestFailure());
    });
    dispatch(productURequestSent());
  };
};
export const deleteProduct = (sku) => {
  return (dispatch) => {
    const config = {
      url: `/api/products/${sku}`,
      method: 'delete',
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productDRequestSuccess(data));
    })
    .catch(err => {
      dispatch(productDRequestFailure());
    });
    dispatch(productDRequestSent());

  };
};
