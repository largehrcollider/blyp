import jwtDecode from 'jwt-decode';
import * as types from '../actions';
// search for jwt
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
  admin,
  isAuthenticated,
  isFetching: false,
  error: false
};

export const (state = initialState, action) => {
  switch(action.type) {

    case types.LOGIN_REQUEST_SENT:
    return {...state, fetching: true};

    case types.LOGIN_REQUEST_SUCCESS:
    return {
      ...state,
      jwt: action.jwt;
      name: action.name;
      username: action.username;
      admin: action.admin;
      fetching: false;
      error: false;
    };

    case types.LOGIN_REQUEST_FAILURE:
    return {...state, error: true};

    default:
    return state;
  }
}
