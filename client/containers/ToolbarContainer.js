import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import Toolbar from '../components/ToolbarComponent.jsx';
import {push} from 'react-router-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutClick: () => {
      dispatch(actions.checkoutClick());
      dispatch(push('/testing'));
      //router.pushroute  give new route
      //react-router-redux
    },
    inventoryClick: () => {
      dispatch(actions.inventoryClick());
      dispatch(push('/testing'));
      //router.pushroute  give new route
      //react-router-redux
    },
    checkout: () => {
      //synchronous, for instant redirect
      dispatch(push('/testing'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    checkout: state.ui.checkoutButton,
    inventory: state.ui.inventoryButton
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
