import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ProfileEmailButton from '../components/ProfileEmailButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: () =>  {
      dispatch(actions.changeEmail());
    }
  }
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmailButton);
