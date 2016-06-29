import * as actions from '../../actions'
import { connect } from 'react-redux';
import Notifications from '../../components/buttons/Notifications.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    notifications: () => {
      dispatch(notifications())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
