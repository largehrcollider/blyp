import * as actions from '../actions';
import { connect } from 'react-redux';
import Settings from '../components/Settings.jsx';

const mapStateToProps = (state) => {
  return {
    requests: state.auth.business.requests,
    admins: (() => {
      return state.auth.business.users.filter(user => {
        return user.role === 'admin';
      })
    })(),
    users: (() => {
      return state.auth.business.users.filter(user => {
        return user.role === 'cashier';
      })
    })(),
  };
};

const mapDispatchToProps = (dispatch, { username }) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
