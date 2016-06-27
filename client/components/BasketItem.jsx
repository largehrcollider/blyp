import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


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
    const {name, quantity, price, incrementItem, decrementItem, deleteItem} = this.props;
    return (
      <div className={index.basket-item}>
      <span className={index.name}>
          {name}
        </span>
      <span className={index.delete} onClick={deleteItem}>X</span>
        <div>
        {'($' + price*quantity + ')'}
        </div>
        <div className={index.quantity}>
        <span> {'Quantity: '+quantity+' '}</span>
        <span className={index.incrementUp} onClick={incrementItem}>+</span>
        <span className={index.incrementDown} onClick={decrementItem}>-</span>
        </div>
        {<br></br>}
        
      </div>
    )
  }
}
