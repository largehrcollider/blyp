import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import Toolbar from '../components/ToolbarComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutClick: () => {
      dispatch(actions.checkoutClick());
      //router.pushroute  give new route
      //react-router-redux
    },
    inventoryClick: () => {
      dispatch(actions.inventoryClick());
      //router.pushroute  give new route
      //react-router-redux
    }
  };
};

const mapStateToProps = (state) => {
  return {
    checkout: state.toolbar.checkoutButton,
    inventory: state.toolbar.inventoryButton
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
