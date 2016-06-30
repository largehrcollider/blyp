import jwtDecode from 'jwt-decode';
import * as types from '../constants/actionTypes.js'

var jwt = localStorage.getItem('jwt');
if (jwt) {
  var { username } = jwtDecode(jwt);
} else {
  jwt = null;
}

const initialState = {
  jwt,
  username,
  businesses: [], // businesses the user belongs to
  business: {
    name: null,
    role: null,
    requests: [],
    users: []
  },
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.LOGIN_REQUEST_SUCCESS:
    case types.SIGNUP_REQUEST_SUCCESS:
    return {
      ...state,
      jwt: action.jwt,
      username: action.username,
      businesses: action.businesses
    };

    case types.BUSINESS_CHECKIN_REQUEST_SUCCESFUL:
    return {...state,
      jwt: action.jwt,
      business: {
      name: action.business,
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

    default:
    return state;
  }
}

export default authReducer;
