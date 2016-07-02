import React, { Component } from 'react';
import BasketItem from '../containers/BasketItem.js';

class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { basket } = this.props;
    // return (<div></div>);
    return (
      <div>
        {basket.map(item => {
          return (<BasketItem key={item.sku} sku={item.sku} />);
        })}
      </div>
    );
  }
}

export default Basket;
