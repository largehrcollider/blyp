import * as actions from '../actions'
import {connect} from 'react-redux';
import Basket from '../components/BasketItemComponent.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    categories: (() => {
      var categories = [];
      for (var product of state.products) {
        if (categories.indexOf(state.products[product].category) === -1) {
          categories.push(state.products[product].category);
        }
      }
      return categories;
    })()
  };
}

const mapDispatchToProps = (dispatch, { category }) => {
  return {
    category,
    toggleCategory: () => {
      dispatch(actions.toggleCategory(category)) // need this action creator
    }
  }
}

export default connect(mapStateToProps)(Basket);
