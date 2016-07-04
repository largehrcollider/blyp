import * as actions from '../actions'
import { connect } from 'react-redux';
import InventoryPane from '../components/InventoryPane.jsx'

const mapStateToProps = (state) => {
  return {
    products: state.auth.business.products,
    visibilityFilter: state.ui.visibilityFilter
  };
};

export default connect(mapStateToProps)(InventoryPane);
