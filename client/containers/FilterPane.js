import { connect } from 'react-redux';
import * as actions from '../actions'
import FilterPane from '../components/FilterPane.jsx'

const mapStateToProps = (state) => {
  var products = state.auth.business.products;
  return {
    categories: (() => {
      var categories = ['all'];
      for (var productKey in products) {
        products[productKey].categories.map(category => {
          if (categories.indexOf(category) === -1) {
            categories.push(category);
          }
        });
      }
      return categories;
    })()
  };
}

export default connect(mapStateToProps)(FilterPane);
