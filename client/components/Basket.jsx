import React, { Component } from 'react';
import BasketItem from '../containers/BasketItem.js';

class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { basketItems } = this.props;
    return (
      <div>
        {basketItems.map(item => (
          <BasketItem key={item.sku} sku={item.sku} />
        ))}
      </div>
    );
  }
}

export default Basket;
