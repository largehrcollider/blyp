import * as actions from '../actions'
import { connect } from 'react-redux';
import Admins from '../components/Admins.jsx';

const mapStateToProps = (state) => {
  return {
    usernames: state.auth.business.users.filter(u => (u.role === 'admin')).map(u => u.username)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Admins);
