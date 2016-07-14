import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import SelectBusiness from '../components/SelectBusiness.jsx';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { business } = ownProps;
  return {
    checkin: () => {
      dispatch(actions.checkinBusiness(business));
    },
    business
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBusiness);
