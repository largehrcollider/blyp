import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import {push} from 'react-router-redux';
import {reset} from 'redux-form';
import axios from 'axios';

//////////////////////////////////////////////////////////////
// Synchronous Action Creators
//////////////////////////////////////////////////////////////

// example action creator
export const somethingHappened = (data) => {
  return {
    type: types.DUMMY,
    color: data.color
  }
}

// Toolbar Buttons Actions
export const checkoutClick = () => {
  return {
    type: types.CHECKOUT_CLICK
  }
}

export const inventoryClick = () => {
  return {
    type: types.INVENTORY_CLICK
  }
}

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
  }
}

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
  // prepare request

  return (dispatch) => {
    const config = {
      url: '/login',
      method: 'post',
      data: {username, password},
    };
    axios(config)
    .then(({jwt, name, username, admin}) => {
      localStorage.setItem('jwt', jwt);
      dispatch(loginRequestSuccess(admin, jwt, name, username));
      dispatch(reset('loginForm'));
      dispatch(push('/store'));

    })
    .catch(err => {
      dispatch(loginRequestFailure(err));
    });

    dispatch(loginRequestSent());
  }
}
