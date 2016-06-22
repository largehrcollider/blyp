import * as actions from '../actions'
import { connect } from 'react-redux';
import Product from '../components/Product3.jsx'

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    name: state.products[id].name
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
