import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import Profile from '../components/Profile_test.jsx';
import businessesList from '../helpers/businessesList';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    businesses: state.auth.businesses
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
