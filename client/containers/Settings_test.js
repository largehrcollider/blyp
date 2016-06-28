import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import Settings from '../components/Settings_test.jsx';
import businessesList from '../helpers/businessesList';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    businesses: businessesList(state.auth.businesses)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
