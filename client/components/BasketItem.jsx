import React, { Component } from 'react';
import centsNumberToString from '../helpers/centsNumberToString';

import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, quantity, price, incrementItem, decrementItem, deleteItem } = this.props;
    return (
      <div className={index.basketItem}>
      <span className={index.name}>
          {name}
        </span>
      <span className={index.delete+" "+material.btnFloating+" "+material.materialIcons+" "+material.wavesEffect+" "+material.wavesLight+" "+material.red} onClick={incrementItem} onClick={deleteItem}>X</span>
        <div>
        {`$ ${centsNumberToString(price*quantity)}`}
        </div>
        <div className={index.quantity}>
        <span> {'Quantity: '+quantity+' '}</span>
        <span className={index.incrementUp+" "+material.btnFloating+" "+material.materialIcons+" "+material.wavesEffect+" "+material.wavesLight+" "+material.green} onClick={incrementItem}>+</span>
        <span className={index.incrementDown+" "+material.btnFloating+" "+material.materialIcons+" "+material.wavesEffect+" "+material.wavesLight+" "+material.green} onClick={incrementItem} onClick={decrementItem}>-</span>
        </div>
        {<br></br>}
      </div>
    )
  }
}

export default BasketItem;
