import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import ProductEditor from '../components/ProductEditor.jsx';

const mapStateToProps = (state, ownProps) => {
  const sku = ownProps.params.sku;
  const product = state.auth.business.products[sku];
  if (product) {
    return {
      initialValues: {
        ...product,
        price: '' + product.price,
        categories: product.categories.join(', ')
      },
      product: state.auth.business.products[sku]
    };
  } else {
    return {
      product: {}
    };
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const sku = ownProps.params.sku;
  return {
    updateProduct: (data) => {
      var product = {...data};
      product.price = product.price.replace('.', '');
      product.categories = product.categories.split(',').map(c => c.trim());
      product.sku = sku;
      dispatch(actions.updateProduct(product));
    },
    deleteProduct: () => {
      dispatch(actions.deleteProduct(sku));
    }
  };
};

export default reduxForm({
  form: 'productEditor',
  fields: ['price', 'quantity', 'name', 'categories', 'details']
}, mapStateToProps, mapDispatchToProps)(ProductEditor);
