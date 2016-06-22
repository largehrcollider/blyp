import React, {Component} from 'react';
// import BasketItem from '';
import BasketItem from '../containers/BasketItem.js'

const Basket = ({ basketItems }) => (
  <div>
    {basketItems.map(item => (
      <BasketItem key={item.id} id={item.id}/>
    ))}
  </div>
);

export default Basket;
