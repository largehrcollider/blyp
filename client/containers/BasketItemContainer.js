import * as actions from '../actions'
import {connect} from 'react-redux';
import Basket from '../components/BasketItemComponent.jsx'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps;
  return {
    name: state.products.id;
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
