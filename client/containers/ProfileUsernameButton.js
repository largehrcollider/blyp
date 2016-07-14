import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ProfileUsernameButton from '../components/ProfileUsernameButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: () =>  {
      dispatch(actions.changeUsername());
    }
  };
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUsernameButton);
