import * as actions from '../actions'
import { connect } from 'react-redux';
import Accept from '../components/Accept.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    accept: () => {
      dispatch(actions.acceptance(username, true));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accept);
