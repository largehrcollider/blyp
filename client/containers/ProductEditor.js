import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProductEditor from '../components/ProductEditor.jsx';

const mapStateToProps = (state, ownProps) => {
  const sku = ownProps.params.sku;
  return {
    initialValues: state.products[sku],
    product: state.products[sku]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const sku = ownProps.params.sku;
  return {
    updateProduct: (data) => {
      dispatch(actions.updateProduct(data));
    },
    deleteProduct: ({ sku }) => {
      dispatch(actions.deleteProduct(sku));
    }
  };
};

export default reduxForm({
  form: 'productEditor',
  fields: ['sku', 'price', 'quantity', 'name', 'categories', 'details']
}, mapStateToProps, mapDispatchToProps)(ProductEditor);
