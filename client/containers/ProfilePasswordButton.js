import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ProfilePasswordButton from '../components/ProfilePasswordButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: () =>  {
      dispatch(actions.changePassword());
    }
  };
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePasswordButton);
