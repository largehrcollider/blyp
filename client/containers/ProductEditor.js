import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProductEditor from '../components/ProductEditor.jsx';

const mapStateToProps = (state, { sku }) => {
  console.log(`I did receive ${sku}`);
  return {
    initialValues: state.products[sku];
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (data) => {
      dispatch(actions.cashReceived(amount));
    },
    deleteProduct: ({ sku }) => {
      dispatch(actions.deleteProduct(sku));
    }
  };
};

export default reduxForm({
  form: 'productEditor',
  fields: ['sku', 'price', 'inventory', 'name', 'categories', 'details']
}, mapStateToProps, mapDispatchToProps)(ProductEditor);
