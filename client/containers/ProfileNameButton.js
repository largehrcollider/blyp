import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import ProfileNameButton from '../components/ProfileNameButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () =>  {
      dispatch(actions.changeName());
    }
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNameButton);
