import React from 'react'
import {Component} from 'react'

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div className='toolbar'>
      Toolbar
        <div className='toolbar-button'>
          <button id="settingsButton">Settings</button>
        </div>
        <div className='toolbar-button'>
          <button id="inventoryButton" onClick={this.props.inventoryClick}>Inventory</button>
          {this.props.inventory && <p>Inventory</p>}
        </div>
        <div className='toolbar-button'>
          <button id="checkoutButton" onClick={this.props.checkoutClick}>Checkout</button>
          {this.props.checkout && <p>Check out</p>}
        </div>
      </div>
    );
  }
}
