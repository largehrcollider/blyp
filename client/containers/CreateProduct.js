import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import CreateProduct from '../components/CreateProduct.jsx';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => {
      data.categories = data.categories.split(',').map(c => c.trim());
      dispatch(actions.createProduct(data));
    }
  };
};

export default reduxForm({
  form: 'createProduct',
  fields: ['sku', 'price', 'quantity', 'name', 'categories', 'details', 'productPicture']
}, mapStateToProps, mapDispatchToProps)(CreateProduct);
