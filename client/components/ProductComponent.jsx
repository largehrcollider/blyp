import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, incrementItem} = this.props;
    return (
      <div>
        <span onClick={incrementItem}>[[add to basket]]</span>
        <span>
          {name}
        </span>
      </div>
    )
  }
}
