import * as actions from '../actions'
import { connect } from 'react-redux';
import Request from '../components/Request.jsx'

const mapStateToProps = (state, { username }) => {
  return {
    username
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Request);
