import expect from 'expect'
import * as actions from '../../client/actions/index.js'
import * as types from '../../client/constants/actionTypes.js'

describe('actions', () => {
  it('should create an action to select a payment method', () => {
    const method = 'Cash'
    const expectedAction = {
      type: types.PAYMENT_METHOD_SELECTED,
      method
    }
    expect(actions.paymentMethodSelected(method)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to show cash received', () => {
    const amount = 300
    const expectedAction = {
      type: types.CASH_RECEIVED,
      amount
    }
    expect(actions.cashReceived(amount)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to show checkout complete', () => {
    const expectedAction = {
      type: types.CHECKOUT_COMPLETED,
    }
    expect(actions.checkoutCompleted()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to reset payment', () => {
    const expectedAction = {
      type: types.RESET_PAYMENT,
    }
    expect(actions.resetPayment()).toEqual(expectedAction)
  })
})

//Toolbar
describe('actions', () => {
  it('should create an action for checkout click', () => {
    const expectedAction = {
      type: types.CHECKOUT_CLICK,
    }
    expect(actions.checkoutClick()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for inventory click', () => {
    const expectedAction = {
      type: types.INVENTORY_CLICK,
    }
    expect(actions.inventoryClick()).toEqual(expectedAction)
  })
})

/**
* authentication: signup, login, logout
*/
describe('actions', () => {
  it('should create an action for login request sent', () => {
    const expectedAction = {
      type: types.LOGIN_REQUEST_SENT,
    }
    expect(actions.loginRequestSent()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for login request success', () => {
    const businesses = "myBusiness"
    const jwt = "3425"
    const username = "jeffJeffries"
    const expectedAction = {
      type: types.LOGIN_REQUEST_SUCCESS,
      businesses,
      jwt,
      username
    }
    expect(actions.loginRequestSuccess({businesses, jwt, username})).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for login request failure', () => {
    const message = "This is a message"
    const expectedAction = {
      type: types.LOGIN_REQUEST_FAILURE,
      message
    }
    expect(actions.loginRequestFailure(message)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for signup request sent', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST_SENT,
    }
    expect(actions.signupRequestSent()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for signup request success', () => {
    const businesses = []
    const jwt = "243"
    const username = "JohnDenver"
    const expectedAction = {
      type: types.SIGNUP_REQUEST_SUCCESS,
      businesses,
      jwt,
      username
    }
    expect(actions.signupRequestSuccess({businesses, jwt, username})).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for signup request failure', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST_FAILURE,
    }
    expect(actions.signupRequestFailure()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for logout store', () => {
    const expectedAction = {
      type: types.USER_LOGOUT,
    }
    expect(actions.logoutStore()).toEqual(expectedAction)
  })
})

/**
* Basket interaction
*/
describe('actions', () => {
  it('should create an action for basket decrease count', () => {
    const sku = '00078'
    const expectedAction = {
      type: types.BASKET_DECREASE_COUNT,
      sku
    }
    expect(actions.basketDecreaseCount(sku)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for basket increase count', () => {
    const sku = '00078'
    const expectedAction = {
      type: types.BASKET_INCREASE_COUNT,
      sku
    }
    expect(actions.basketIncreaseCount(sku)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for basket remove item', () => {
    const sku = '00078'
    const expectedAction = {
      type: types.BASKET_REMOVE_ITEM,
      sku
    }
    expect(actions.basketRemoveItem(sku)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for clear basket', () => {
    const expectedAction = {
      type: types.CLEAR_BASKET,
    }
    expect(actions.clearBasket()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for transaction request success', () => {
    const expectedAction = {
      type: types.TRANSACTION_REQUEST_SUCCESS,
    }
    expect(actions.transactionRequestSuccess()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for transaction request failuer', () => {
    const expectedAction = {
      type: types.TRANSACTION_REQUEST_FAILURE,
    }
    expect(actions.transactionRequestFailure()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for transaction request sent', () => {
    const expectedAction = {
      type: types.TRANSACTION_REQUEST_SENT,
    }
    expect(actions.transactionRequestSent()).toEqual(expectedAction)
  })
})

/**
* Product save requests
*/
describe('actions', () => {
  it('should create an action for save product request success', () => {
    const product = 'productOne'
    const expectedAction = {
      type: types.SAVE_PRODUCT_REQUEST_SUCCESS,
      product
    }
    expect(actions.saveProductRequestSuccess(product)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for save product request failure', () => {
    const err = "Error"
    const expectedAction = {
      type: types.SAVE_PRODUCT_REQUEST_FAILURE,
      err
    }
    expect(actions.saveProductRequestFailure(err)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for save product request sent', () => {
    const expectedAction = {
      type: types.SAVE_PRODUCT_REQUEST_SENT,
    }
    expect(actions.saveProductRequestSent()).toEqual(expectedAction)
  })
})


/**
* UI action creators
*/
describe('actions', () => {
  it('should create an action for toggle checkout', () => {
    const expectedAction = {
      type: types.TOGGLE_CHECKOUT,
    }
    expect(actions.toggleCheckout()).toEqual(expectedAction)
  })
})

/**
* category filter pane
*/
describe('actions', () => {
  it('should create an action for toggle category', () => {
    const category = "shoes"
    const expectedAction = {
      type: types.TOGGLE_CATEGORY,
      category
    }
    expect(actions.toggleCategory(category)).toEqual(expectedAction)
  })
})

/**
* product request C action creators
*/
describe('actions', () => {
  it('should create an action for product C request sent', () => {
    const expectedAction = {
      type: types.PRODUCT_C_REQUEST_SENT,
    }
    expect(actions.productCRequestSent()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for product C request success', () => {
    const categories = "shoes"
    const details = "none"
    const name = "Blue Shoe"
    const price = 340
    const quantity = 30
    const sku = '0079'
    const expectedAction = {
      type: types.PRODUCT_C_REQUEST_SUCCESS,
      categories,
      details,
      name,
      price,
      quantity,
      sku
    }
    expect(actions.productCRequestSuccess({categories, details, name, price, quantity, sku})).toEqual(expectedAction)
  })
})

// export const productCRequestSuccess = ({ categories, details, name, price, quantity, sku }) => {
//   return {
//     type: types.PRODUCT_C_REQUEST_SUCCESS,
//     categories, 
//     details,
//     name,
//     price,
//     quantity,
//     sku
//   };
// };

describe('actions', () => {
  it('should create an action for product C request failure', () => {
    const expectedAction = {
      type: types.PRODUCT_C_REQUEST_FAILURE,
    }
    expect(actions.productCRequestFailure()).toEqual(expectedAction)
  })
})


/**
* product request R action creators
*/
describe('actions', () => {
  it('should create an action for product R request sent', () => {
    const expectedAction = {
      type: types.PRODUCT_R_REQUEST_FAILURE,
    }
    expect(actions.productRRequestFailure()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action for product R request success', () => {
    const products = "productOne"
    const expectedAction = {
      type: types.PRODUCT_R_REQUEST_SUCCESS,
      products
    }
    expect(actions.productRRequestSuccess(products)).toEqual(expectedAction)
  })
})
// export const productRRequestSuccess = (products) => {
//   return {
//     type: types.PRODUCT_R_REQUEST_SUCCESS,
//     products
//   };
// };

describe('actions', () => {
  it('should create an action for product R request failure', () => {
    const expectedAction = {
      type: types.PRODUCT_R_REQUEST_FAILURE,
    }
    expect(actions.productRRequestFailure()).toEqual(expectedAction)
  })
})
// export const productRRequestFailure = () => {
//   return {
//     type: types.PRODUCT_R_REQUEST_FAILURE
//   };
// };


// /**
// * product request U action creators
// */
// export const productURequestSent = () => {
//   return {
//     type: types.PRODUCT_U_REQUEST_SENT
//   };
// };
// export const productURequestSuccess = () => {
//   return {
//     type: types.PRODUCT_U_REQUEST_SUCCESS
//   };
// };
// export const productURequestFailure = () => {
//   return {
//     type: types.PRODUCT_U_REQUEST_FAILURE
//   };
// };

// /**
// * product request D action creators
// */
// export const productDRequestSent = () => {
//   return {
//     type: types.PRODUCT_D_REQUEST_SENT
//   };
// };
// export const productDRequestSuccess = () => {
//   return {
//     type: types.PRODUCT_D_REQUEST_SUCCESS
//   };
// };
// export const productDRequestFailure = () => {
//   return {
//     type: types.PRODUCT_D_REQUEST_FAILURE
//   };
// };

// /**
// * Business selector
// */
// // export const business = (business) => {
// //   return {
// //     type: types.SELECT_BUSINESS,
// //     business
// //   }
// // };
// export const businessCheckinRequestSuccesful = ({ business, jwt, role, products, requests, users }) => {
//   return {
//     type: types.BUSINESS_CHECKIN_REQUEST_SUCCESFUL,
//     business,
//     jwt,
//     products,
//     requests,
//     role,
//     users
//   };
// };
// export const businessCheckinRequestFailure = () => {
//   return {
//     type: types.BUSINESS_CHECKIN_REQUEST_FAILURE
//   };
// };
// export const businessCheckinRequestSent = () => {
//   return {
//     type: types.BUSINESS_CHECKIN_REQUEST_SENT
//   };
// };

// /**
// * Business related action creators
// */
// export const businessCRequestSuccess = (business) => {
//   return {
//     type: types.BUSINESS_C_REQUEST_SUCCESS,
//     business
//   };
// };
// export const businessCRequestFailure = () => {
//   return {
//     type: types.BUSINESS_C_REQUEST_FAILURE
//   };
// };
// export const businessCRequestSent = () => {
//   return {
//     type: types.BUSINESS_C_REQUEST_SENT
//   };
// };
// export const businessJoinRequestSuccess = () => {
//   return {
//     type: types.BUSINESS_JOIN_REQUEST_SUCCESS
//   };
// };
// export const businessJoinRequestFailure = () => {
//   return {
//     type: types.BUSINESS_JOIN_REQUEST_FAILURE
//   };
// };
// export const businessJoinRequestSent = () => {
//   return {
//     type: types.BUSINESS_JOIN_REQUEST_SENT
//   };
// };

// /**
// * requests
// */
// export const requestsRequestSuccess = (requests) => {
//   return {
//     type: types.REQUESTS_REQUEST_SUCCESS,
//     requests
//   };
// };
// export const requestsRequestFailure = () => {
//   return {
//     type: types.REQUESTS_REQUEST_FAILURE
//   };
// };
// export const requestsRequestSent = () => {
//   return {
//     type: types.REQUESTS_REQUEST_SENT
//   };
// };
// export const acceptanceRequestSuccess = ({ accept, username, role }) => {
//   return {
//     type: types.ACCEPTANCE_REQUEST_SUCCESS,
//     accept,
//     username,
//     role
//   };
// };
// export const acceptanceRequestFailure = () => {
//   return {
//       type: types.ACCEPTANCE_REQUEST_FAILURE
//   };
// };
// export const acceptanceRequestSent = () => {
//   return {
//       type: types.ACCEPTANCE_REQUEST_SENT
//   };
// };