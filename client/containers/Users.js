import * as actions from '../actions'
import { connect } from 'react-redux';
import Users from '../components/Users.jsx';

const mapStateToProps = (state) => {
  return {
    usernames: state.auth.business.users.filter(u => (u.role === 'cashier'))
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
