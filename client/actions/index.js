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

/**
* authentication: signup, login, logout
*/
export const loginRequestSent = () => {
  return {
    type: types.LOGIN_REQUEST_SENT
  }
}
export const loginRequestSuccess = ({ businesses, jwt, username }) => {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    businesses,
    jwt,
    username
  }
}
export const loginRequestFailure = (message) => {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    message
  };
};
export const signupRequestSent = () => {
  return {
    type: types.SIGNUP_REQUEST_SENT
  };
};
export const signupRequestSuccess = ({ jwt, username }) => {
  return {
    type: types.SIGNUP_REQUEST_SUCCESS,
    businesses: [],
    jwt,
    username,
  };
};
export const signupRequestFailure = () => {
  return {
    type: types.SIGNUP_REQUEST_FAILURE
  };
};
export const logoutStore = () => {
  return {
    type: types.USER_LOGOUT
  };
};

/**
* temporary solution
*/
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
export const productRRequestSuccess = (products) => {
  return {
    type: types.PRODUCT_R_REQUEST_SUCCESS,
    products
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

/**
* Business selector
*/
// export const business = (business) => {
//   return {
//     type: types.SELECT_BUSINESS,
//     business
//   }
// };
export const businessCheckinRequestSuccesful = ({ business, jwt, role, products, requests, users }) => {
  return {
    type: types.BUSINESS_CHECKIN_REQUEST_SUCCESFUL,
    business,
    jwt,
    products,
    requests,
    role,
    users
  };
};
export const businessCheckinRequestFailure = () => {
  return {
    type: types.BUSINESS_CHECKIN_REQUEST_FAILURE
  };
};
export const businessCheckinRequestSent = () => {
  return {
    type: types.BUSINESS_CHECKIN_REQUEST_SENT
  };
};

/**
* Business related action creators
*/
export const businessCRequestSuccess = (business) => {
  return {
    type: types.BUSINESS_C_REQUEST_SUCCESS,
    business
  };
};
export const businessCRequestFailure = () => {
  return {
    type: types.BUSINESS_C_REQUEST_FAILURE
  };
};
export const businessCRequestSent = () => {
  return {
    type: types.BUSINESS_C_REQUEST_SENT
  };
};
export const businessJoinRequestSuccess = () => {
  return {
    type: types.BUSINESS_JOIN_REQUEST_SUCCESS
  };
};
export const businessJoinRequestFailure = () => {
  return {
    type: types.BUSINESS_JOIN_REQUEST_FAILURE
  };
};
export const businessJoinRequestSent = () => {
  return {
    type: types.BUSINESS_JOIN_REQUEST_SENT
  };
};

/**
* requests
*/
export const requestsRequestSuccess = (requests) => {
  return {
    type: types.REQUESTS_REQUEST_SUCCESS,
    requests
  };
};
export const requestsRequestFailure = () => {
  return {
    type: types.REQUESTS_REQUEST_FAILURE
  };
};
export const requestsRequestSent = () => {
  return {
    type: types.REQUESTS_REQUEST_SENT
  };
};
export const acceptanceRequestSuccess = ({ accept, username, role }) => {
  return {
    type: types.ACCEPTANCE_REQUEST_SUCCESS,
    accept,
    username,
    role
  };
};
export const acceptanceRequestFailure = () => {
  return {
      type: types.ACCEPTANCE_REQUEST_FAILURE
  };
};
export const acceptanceRequestSent = () => {
  return {
      type: types.ACCEPTANCE_REQUEST_SENT
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

/**
* Login, Signup, Logout operations
*/
export const login = ({username, password}) => {
  return (dispatch) => {
    const config = {
      url: '/login',
      method: 'post',
      data: {username, password},
    };
    axios(config)
    .then(({ data }) => {
      localStorage.setItem('jwt', data.jwt);
      dispatch(loginRequestSuccess(data));
      dispatch(reset('loginForm'));
      dispatch(push('/profile')); // will have to be changed to '/profile'
    })
    .catch(err => {
      dispatch(loginRequestFailure(err));
    });
    dispatch(loginRequestSent());
  }
}
export const signup = (data) => {
  return (dispatch) => {
    const config = {
      url: '/signup',
      method: 'post',
      data
    }
    axios(config)
    .then(({ data: { jwt, username } }) => {
    // .then( ({ data }) => {
      localStorage.setItem('jwt', jwt);
      dispatch(signupRequestSuccess(data));
      dispatch(reset('signup'));
      dispatch(push('/profile')); // should dispatch to landing page first
    })
    .catch(err => {
      dispatch(signupRequestFailure(err));
    });
    dispatch(signupRequestSent());
  }
}
export const logout = () => {
  const jwt = localStorage.getItem('jwt');
  localStorage.removeItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/logout',
      method: 'get',
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config); // for now, don't care on server response.
    dispatch(logoutStore());
    dispatch(push('/'));
  };
};


export const saveProduct = (data) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/products',
      method: 'post',
      data,
      headers: {'Authorization': 'Bearer ' + jwt}
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
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    var transaction = {
      basket: getState().basket,
      tender: getState().payment.method
    };
    const config = {
      url: '/api/transactions',
      method: 'post',
      data: transaction,
      headers: {'Authorization': 'Bearer ' + jwt}
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

//stripe CHARGE
export const stripe = (data) => {
  return (dispatch, getState) => {
    Stripe.card.createToken(data, (status, response) => {
      if (response.error) {
        console.log("ERROR");
      }else{
        var transaction = {
          basket: getState().basket,
          tender: getState().payment.method,
          token: response.id
        };
        const config = {
          url: '/stripe',
          method: 'post',
          data: transaction
        };
        axios(config)
        .then(({ data }) => {
          //ANY UI CHANGES HAVE TO BE IN HERE.
          //AFTER OUR SERVER HAS SUCCESSFULLY CONTACTED THE STRIPE SERVERS.
          dispatch(transactionRequestSuccess());
        })
        .catch(err => {
          dispatch(transactionRequestFailure());
        });
        dispatch(transactionRequestSent());
      }
    });
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
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    var data = new FormData();
    data.append('categories', product.categories);
    data.append('details', product.details);
    data.append('quantity', product.quantity);
    data.append('name', product.name);
    data.append('price', product.price);
    data.append('sku', product.sku);
    data.append('business', getState().auth.business);
    data.append('file', product.productPicture[0]);

    const config = {
      url: '/api/products',
      method: 'post',
      data,
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productCRequestSuccess(data));
      dispatch(reset('addComponentForm'));
      dispatch(readProduct());
      dispatch(push('/inventory'));
    })
    .catch(err => {
      dispatch(productCRequestFailure());
    });
    dispatch(productCRequestSent());
  };
};
export const readProduct = (sku = '') => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    const config = {
      url: `/api/products/${sku}`,
      method: 'get',
      data: {business: getState().auth.business},
      headers: {'Authorization': 'Bearer ' + jwt}
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
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    const config = {
      url: `/api/products/${sku}`,
      method: 'put',
      data: {...product, business: getState().auth.business},
      headers: {'Authorization': 'Bearer ' + jwt}
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
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    const config = {
      url: `/api/products/${sku}`,
      method: 'delete',
      data: {business: getState().auth.business},
      headers: {'Authorization': 'Bearer ' + jwt}
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

/**
* business related thunks
*/
export const checkinBusiness = (business) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/checkin',
      method: 'post',
      data: {business},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      localStorage.setItem('jwt', data.jwt);
      dispatch(businessCheckinRequestSuccesful(data));
      dispatch(push('/sell'));
    })
    .catch(err => {
      dispatch(businessCheckinRequestFailure());
    });
    dispatch(businessCheckinRequestSent());
  };
};
export const createBusiness = (business) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/create',
      method: 'post',
      data: {business},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(businessCRequestSuccess(business));
      dispatch(reset('createBusiness'));
    })
    .catch(err => {
      dispatch(businessCRequestFailure());
    });
    dispatch(businessCRequestSent());
  };
};
export const joinBusiness = (business) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/join',
      method: 'post',
      data: {business},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(businessJoinRequestSuccess(data));
    })
    .catch(err => {
      dispatch(businessJoinRequestFailure());
    });
    dispatch(businessJoinRequestSent());
  };
};

/**
* requests, requests
*/
export const requests = () => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/requests',
      method: 'get',
      data: {business: getState().auth.business},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(requestsRequestSuccess(data));
    })
    .catch(err => {
      dispatch(requestsRequestFailure());
    });
    dispatch(requestsRequestSent());
  };
};
export const acceptance = (username, accept) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/accept',
      method: 'post',
      data: {
        business: getState().auth.business,
        username,
        accept
      },
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(acceptanceRequestSuccess(data));
    })
    .catch(err => {
      dispatch(acceptanceRequestFailure());
    });
    dispatch(acceptanceRequestSent());
  };
};
