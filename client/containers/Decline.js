import * as actions from '../actions'
import { connect } from 'react-redux';
import Decline from '../components/Decline.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    decline: () => {
      dispatch(actions.acceptance(username, false));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decline);
