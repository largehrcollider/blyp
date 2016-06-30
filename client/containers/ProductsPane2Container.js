import * as actions from '../actions'
import {connect} from 'react-redux';
import ProductPane2Component from '../components/ProductsPane2Component.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.auth.business.products
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPane2Component);
