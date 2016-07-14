import * as actions from '../actions';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar.jsx';

const mapStateToProps = (state) => {
  return {
    business: state.auth.business.name ? state.auth.business.name : '',
    showSettings: state.auth.business.role === 'admin',
    showInventory: state.auth.business.role === 'admin',
    showSell: state.auth.business.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
