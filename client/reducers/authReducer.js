import jwtDecode from 'jwt-decode';
import * as types from '../actions';

var jwt = localStorage.getItem('jwt');
var isAuthenticated = jwt ? true : false;
if (jwt) {
  var {name, username, admin} = jwtDecode(jwt);
}
// if jwt present
  // extract info about name and username
// otherwise set those values to undefined

const initialState = {
  jwt,
  name,
  username,
  // admin,
  isAuthenticated, // no need. if jwt present, then is authenticated
  isFetching: false, // move out to ui or something
  error: false, // ditto
  businesses: {}, // object with `businessName: role` pairs
  business: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.LOGIN_REQUEST_SENT:
    return {...state, fetching: true};

    case types.LOGIN_REQUEST_SUCCESS:
    case types.SIGNUP_REQUEST_SUCCESS:
    return {
      ...state,
      jwt: action.jwt,
      name: action.name,
      username: action.username,
      // admin: action.admin,
      businesses: action.businesses,
      fetching: false,
      error: false
    };

    case types.LOGIN_REQUEST_FAILURE: // possible remove from here
    return {...state, error: true};

    default:
    return state;
  }
}

export default authReducer;
