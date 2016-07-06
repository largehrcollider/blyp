import * as actions from '../actions'
import { connect } from 'react-redux';
import ProductsPane from '../components/ProductsPane.jsx'

const mapStateToProps = (state) => {
  return {
    products: state.auth.business.products,
    visibilityFilter: state.ui.visibilityFilter
  };
};

export default connect(mapStateToProps)(ProductsPane);
