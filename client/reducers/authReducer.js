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
    notifications: [],
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
      username: action.username
    };

    case types.BUSINESS_CHECKIN_REQUEST_SUCCESFUL:
    return {...state,
      jwt: action.jwt,
      business: {
      name: action.business,
      role: action.role,
      notifications: action.notifications,
      users: action.users
    }};

    case types.NOTIFICATIONS_REQUEST_SUCCESS:
    return {...state, notifications: action.notifications};

    case types.ACCEPTANCE_REQUEST_SUCCESS:
    var notifications = state.business.notifications.filter(username => (
      username !== action.username
    ));
    var users = [...state.business.users];
    action.accept && users.push({username: action.username, role: action.role});
    return {...state, business: {... state.business, notifications, users}};

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
