import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import total from '../helpers/basketTotal.js'
import jwtDecode from 'jwt-decode';

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

// export const checkoutCompleted = () => {
//   return {
//     type: types.CHECKOUT_COMPLETED,
//   };
// };

//action creators FOR CHANGING USER INFO
export const changeName = () => {
  return {
    type: types.CHANGE_NAME
  };
}
export const changeEmail = () => {
  return {
    type: types.CHANGE_EMAIL
  };
}
export const changeUsername = () => {
  return {
    type: types.CHANGE_USERNAME
  };
}
export const changePassword = () => {
  return {
    type: types.CHANGE_PASSWORD
  };
}

export const resetPayment = () => {
  return {
    type: types.RESET_PAYMENT
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
export const loginRequestSuccess = ({ businesses, name, username, email, imgSrc, jwt }) => {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    businesses,
    name,
    username,
    email,
    imgSrc,
    jwt
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
export const signupRequestSuccess = ({ name, username, email, imgSrc, jwt }) => {
  return {
    type: types.SIGNUP_REQUEST_SUCCESS,
    businesses: [],
    name,
    username,
    email,
    imgSrc,
    jwt
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
export const productCRequestSuccess = ({ categories, details, name, price, quantity, sku, imgSrc }) => {
  return {
    type: types.PRODUCT_C_REQUEST_SUCCESS,
    categories,
    details,
    imgSrc,
    name,
    price,
    quantity,
    sku
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
export const productURequestSuccess = (product) => {
  return {
    type: types.PRODUCT_U_REQUEST_SUCCESS,
    product
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
export const productDRequestSuccess = ({ sku }) => {
  return {
    type: types.PRODUCT_D_REQUEST_SUCCESS,
    sku
  };
};
export const productDRequestFailure = () => {
  return {
    type: types.PRODUCT_D_REQUEST_FAILURE
  };
};

/*

User Update Info


*/

export const updateDetailsRequestSuccess = ({ name, username, email, jwt }) => {
  return {
    type: types.UPDATE_DETAILS_REQUEST_SUCCESS,
    name,
    username,
    email,
    jwt
  };
};
export const updateDetailsRequestFailure = () => {
  return {
    type: types.UPDATE_DETAILS_REQUEST_FAILURE
  };
};
export const updateDetailsRequestSent = () => {
  return {
    type: types.UPDATE_DETAILS_REQUEST_SENT
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

/**
* Delete user from business action creators
*/
export const deleteUserRequestSuccess = (users) => {
  return {
    type: types.DELETE_USER_REQUEST_SUCCESS,
    users
  };
};
export const deleteUserRequestFailure = () => {
  return {
    type: types.DELETE_USER_REQUEST_FAILURE
  };
};
export const deleteUserRequestSent = () => {
  return {
    type: types.DELETE_USER_REQUEST_SENT
  };
};

export const roleRequestSuccess = (users) => {
  return {
    type: types.ROLE_REQUEST_SUCCESS,
    users
  };
};
export const roleRequestFailure = () => {
  return {
    type: types.ROLE_REQUEST_FAILURE
  };
};
export const roleRequestSent = () => {
  return {
    type: types.ROLE_REQUEST_SENT
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
export const login = ({ username, password, jwt }) => {
  return (dispatch) => {
    const config = {
      url: '/login',
      method: 'post',
      data: {username, password, jwt},
    };
    axios(config)
    .then(({ data }) => {
      localStorage.setItem('jwt', data.jwt);
      dispatch(loginRequestSuccess(data));
      dispatch(reset('loginForm'));
      var { business } = jwtDecode(data.jwt);
      if (business) {
        dispatch(checkinBusiness(business));
      } else {
        dispatch(push('/profile'));
      }
    })
    .catch(err => {
      dispatch(loginRequestFailure(err));
      dispatch(push('/'));
    });
    dispatch(loginRequestSent());
  }
}
export const signup = (user) => {
  return (dispatch) => {
    var data = new FormData();
    data.append('name', user.name);
    data.append('username', user.username);
    data.append('email', user.email);
    data.append('password', user.password);
    if (user.profilePicture[0]) {
      data.append('file', user.profilePicture[0]);
    }
    const config = {
      url: '/signup',
      method: 'post',
      data
    }
    axios(config)
    .then(({ data }) => {
      console.log('########');
      console.log(data);
      localStorage.setItem('jwt', data.jwt);
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

/**
* Updates the values of the provided user details.
*/
export const updateDetails = (data) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/profile',
      method: 'put',
      headers: {'Authorization': 'Bearer ' + jwt},
      data
    };
    axios(config)
    .then(({ data }) => {
      localStorage.setItem('jwt', data.jwt);
      dispatch(updateDetailsRequestSuccess(data))
    })
    .catch(err => {
      dispatch(updateDetailsRequestFailure(err));
    });
    dispatch(updateDetailsRequestSent());
  }
}

/**
* Sets payment method to `newMethod`
*/
export const paymentMethodChange = (newMethod) => {
  return (dispatch) => {
    dispatch(resetPayment());
    /**
    * No need to reset forms after resetting payment: before the next line of
    * code is run, React will re-render and all forms will be unmounted.
    * Unmounted forms are automatically reset
    */
    dispatch(paymentMethodSelected(newMethod));
  };
};

/**
* Notifies the server that a cash transaction took place. Only necessary
* to explicitly notify the server of cash transactions due to their offline and
* physical nature.
*
* CC payments not explicitly notified b/c server interprets
* succesful response from payment servers as finalization of a CC transaction.
*/
export const cashTransaction = () => {
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

/**
* Processes cc payments with Stripe.
*/
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
          dispatch(transactionRequestSuccess());
          // dispatch(checkoutCompleted());
          dispatch(receiptPage());
        })
        .catch(err => {
          dispatch(transactionRequestFailure());
        });
        dispatch(transactionRequestSent());
      }
    });
  };
};

/**
* When cash is received, will consider that the transaction has "taken place"
* if the amount of cash received is sufficient.
*/
export const validateCashReceived = (amount) => {
  return (dispatch, getState) => {
    dispatch(cashReceived(amount));
    if (amount >= total(getState())) {
      dispatch(cashTransaction());
      // checkoutCompleted will be called as `onClick` of "Done" button of
      // `ChangeDue` component
    } else {
      // display warning not enough
    }
  };
};

/**
* Takes user to receipt page
*/
export const receiptPage = () => {
  return (dispatch) => {
    dispatch(push('/receipt'));
  };
};

/**
* Readies store and ui for next order
*/
export const checkoutCompleted = () => {
  return (dispatch) => {
    dispatch(clearBasket());
    dispatch(push('/sell'));
    dispatch(resetPayment());
  };
};

/**
* product CRUD operations
*/
export const createProduct = (product) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    var data = new FormData();
    data.append('categories', product.categories);
    data.append('details', product.details);
    data.append('quantity', product.quantity);
    data.append('name', product.name);
    data.append('price', product.price.replace('.', ''));
    data.append('sku', product.sku);
    data.append('business', getState().auth.business);
    if (product.productPicture[0]) {
      data.append('file', product.productPicture[0]);
    }

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
  // the sku is optional. if not supplied, will fetch all products in database
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
      url: `/api/products/${product.sku}`,
      method: 'put',
      data: product,
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data: { sku, price, quantity, name, categories, details, imgSrc } }) => {
      var product = {sku, price, quantity, name, categories, details, imgSrc}
      dispatch(productURequestSuccess(product));
      dispatch(reset('addComponentForm'));
      dispatch(push('/inventory'));
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
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(productDRequestSuccess(data));
      dispatch(push('/inventory'));
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
      dispatch(clearBasket());
      dispatch(toggleCategory('all'));
      dispatch(push('/sell'));
    })
    .catch(err => {
      console.error(err);
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
      url: '/api/business/requests',
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
* User management related thunks
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
  return (dispatch, getState) => {
    const config = {
      url: '/api/business/accept',
      method: 'post',
      data: {
        business: getState().auth.business.name,
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
export const role = (username, role) => {
  const jwt = localStorage.getItem('jwt');
  return (dispatch) => {
    const config = {
      url: '/api/business/users/role',
      method: 'put',
      data: {username, role},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(roleRequestSuccess(data));
    })
    .catch(err => {
      dispatch(roleRequestFailure());
    });
    dispatch(roleRequestSent());
  };
};
export const deleteUser = (username, business) => {
  // removes a user from a business
  const jwt = localStorage.getItem('jwt');
  return (dispatch, getState) => {
    business = business || getState().auth.business.name;
    const config = {
      url: '/api/business/users/role',
      method: 'delete',
      data: {username},
      headers: {'Authorization': 'Bearer ' + jwt}
    };
    axios(config)
    .then(({ data }) => {
      dispatch(deleteUserRequestSuccess(data));
    })
    .catch(err => {
      dispatch(deleteUserRequestFailure());
    });
    dispatch(deleteUserRequestSent());
  };
};
