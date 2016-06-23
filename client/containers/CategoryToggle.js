import * as actions from '../actions'
import { connect } from 'react-redux';
import CategoryToggle from '../components/CategoryToggle.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, { category }) => {
  return {
    category,
    toggleCategory: () => {
      dispatch(actions.toggleCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryToggle);
