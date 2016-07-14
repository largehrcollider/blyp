import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CoreLayout from '../components/CoreLayout.jsx';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(actions.readProduct());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
