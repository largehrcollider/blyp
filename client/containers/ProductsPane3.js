import * as actions from '../actions'
import {connect} from 'react-redux';
import ProductsPane from '../components/ProductsPane3.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.auth.business.products
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPane);
