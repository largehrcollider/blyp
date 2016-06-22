import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    /**
    * TODO:
    * attach function to increment quantity
    * attach function to decrement quantity
    * attach function to delete item
    */
    const {name, qty, incrementItem, decrementItem, deleteItem} = this.props;
    return (
      <div>
        <span onClick={incrementItem}>[[+]]</span>
        <span onClick={decrementItem}>[[-]]</span>
        <span>
          {name + 'qty: ' + qty + ' '}
        </span>
        <span onClick={deleteItem}>[[X]]</span>
      </div>
    )
  }
}
