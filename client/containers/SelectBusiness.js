import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import SelectBusiness from '../components/SelectBusiness.jsx';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { business } = ownProps;
  return {
    select: () => {
      dispatch(actions.selectBusiness(business));
    },
    business
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBusiness);
