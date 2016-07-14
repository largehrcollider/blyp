import * as actions from '../actions'
import { connect } from 'react-redux';
import Requests from '../components/Requests.jsx';

const mapStateToProps = (state) => {
  return {
    usernames: state.auth.business.requests
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
