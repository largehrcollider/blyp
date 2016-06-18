import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import Toolbar from '../components/ToolbarComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutClick: () => {
      dispatch(actions.checkoutClick());
    }
  };
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
