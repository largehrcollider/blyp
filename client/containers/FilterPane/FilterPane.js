import * as actions from '../../actions'
import { connect } from 'react-redux';
import Basket from '../../components/BasketItem.jsx'

const mapStateToProps = (state) => {
  return {
    categories: (() => {
      var categories = [];
      for (var product in state.products) {
        if (categories.indexOf(state.products[product].category) === -1) {
          categories.push(state.products[product].category);
        }
      }
      return categories;
    })()
  };
}

export default connect(mapStateToProps)(Basket);
