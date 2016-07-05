import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

class ReceiptItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, quantity, price, sku} = this.props;
    return (
      <div className={index.receiptitem}>
        Product: <strong>{name}</strong> Sku: <strong>{sku}</strong> QTY: <strong>{quantity}</strong> Price: <strong>${price}.00</strong>
        {<br></br>}
      </div>
    )
  }
}

export default ReceiptItem;
