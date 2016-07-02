import React, { Component } from 'react';
import BasketItem from '../containers/BasketItem.js';

class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { basket } = this.props;
    // return (<div></div>);
    console.log('>>>Basket');
    console.log(basket);
    console.log('<<<End')
    return (
      <div>
        {basket.map(item => {
          console.log('>>>Item');
          console.log(item);
          console.log('<<<End')
          return (<BasketItem key={item.sku} sku={item.sku} />);
        })}
      </div>
    );
  }
}

export default Basket;
