import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import Chat from '../components/ChatComponent.jsx';
import {push} from 'react-router-redux';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
