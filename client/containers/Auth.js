import * as actions from '../actions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Auth from '../components/Auth.jsx'
import jwtDecode from 'jwt-decode';

const mapStateToProps = (state) => {
  return {
    jwt: state.auth.jwt
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (jwt) => {
      if (jwt) {
        return;
      } else {
        if (jwt = localStorage.getItem('jwt')) {
          var { username, business } = jwtDecode(jwt);
          if (business) {
            dispatch(actions.checkinBusiness(business));
          } else if (username) {
            dispatch(actions.login({jwt}));
          } else {
            dispatch(push('/'));
          }
        } else {
          dispatch(push('/'));
        }
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
