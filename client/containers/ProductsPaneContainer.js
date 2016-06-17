import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index.js';
import ProductsPane from '../../components/forms/ProductsPaneComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'productsPane',
  fields: ['username', 'password']
}, mapStateToProps, mapDispatchToProps)(ProductsPane);
