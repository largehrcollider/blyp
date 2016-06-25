import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import CreateProduct from '../components/CreateProduct.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data) => {
      dispatch(actions.createProduct(data));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'addComponentForm',
  fields: ['sku', 'price', 'quantity', 'name', 'categories', 'details', 'productPicture']
}, mapStateToProps, mapDispatchToProps)(CreateProduct);
