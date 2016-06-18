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
          <button id="inventoryButton">Inventory</button>
        </div>
        <div className='toolbar-button'>
          <button id="checkoutButton" onClick={this.props.checkoutClick}>Checkout</button>
        </div>
      </div>
    );
  }
}
