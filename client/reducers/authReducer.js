import jwtDecode from 'jwt-decode';
import * as types from '../constants/actionTypes.js'

// var jwt = localStorage.getItem('jwt');
// if (jwt) {
//   var { username } = jwtDecode(jwt);
// } else {
//   jwt = null;
// }

const initialState = {
  jwt: null,
  name: null,
  username: null,
  email: null,
  imgSrc: null,
  businesses: [], // businesses the user belongs to
  business: {
    name: null,
    products: {}, // key is sku, value is product object
    role: null,
    requests: [],
    users: []
  },
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.PRODUCT_D_REQUEST_SUCCESS:
    var newProducts = {...state.business.products};
    delete newProducts[action.sku];

    return {
      ...state,
      business: {
        ...state.business,
        products: newProducts
      }
    };

    case types.PRODUCT_U_REQUEST_SUCCESS:
    return {
      ...state,
      business: {
        ...state.business,
        products: {
          ...state.business.products,
          [action.product.sku]: action.product
        }
      }
    };

    case types.ROLE_REQUEST_SUCCESS:
    case types.DELETE_USER_REQUEST_SUCCESS:
    return {
      ...state,
      business: {
        ...(state.business),
        users: action.users
      }
    };

    case types.PRODUCT_C_REQUEST_SUCCESS:
    return {
      ...state,
      business: {
        ...(state.business),
        products: {
          ...(state.business.products),
          [action.sku]: {
            categories: action.categories,
            details: action.details,
            imgSrc: action.imgSrc,
            name: action.name,
            price: action.price,
            quantity: action.quantity,
            sku: action.sku
          }
        }
      }
    };

    case types.LOGIN_REQUEST_SUCCESS:
    case types.SIGNUP_REQUEST_SUCCESS:
    return {
      ...state,
      businesses: action.businesses,
      jwt: action.jwt,
      name: action.name,
      username: action.username,
      email: action.email,
      imgSrc: action.imgSrc
    };

    case types.BUSINESS_CHECKIN_REQUEST_SUCCESFUL:
    return {...state,
      jwt: action.jwt,
      business: {
      name: action.business,
      products: (() => {
        var products = {};
        action.products.forEach((p) => {
          products[p.sku] = p;
        });
        return products;
      })(),
      role: action.role,
      requests: action.requests,
      users: action.users
    }};

    case types.REQUESTS_REQUEST_SUCCESS:
    return {...state, requests: action.requests};

    case types.ACCEPTANCE_REQUEST_SUCCESS:
    var requests = state.business.requests.filter(username => (
      username !== action.username
    ));
    var users = [...state.business.users];
    action.accept && users.push({username: action.username, role: action.role});
    return {...state, business: {...(state.business), requests, users}};

    case types.BUSINESS_C_REQUEST_SUCCESS:
    return {
      ...state,
      businesses: [...(state.businesses), action.business]
    };

    case types.UPDATE_DETAILS_REQUEST_SUCCESS:
    return {
      ...state,
      jwt: action.jwt,
      username: action.username,
      name: action.name,
      email: action.email
    };



    default:
    return state;
  }
}

export default authReducer;
