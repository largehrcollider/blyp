import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import TestProfile from '../components/TestProfile.jsx';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    businesses: state.auth.businesses
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestProfile);
