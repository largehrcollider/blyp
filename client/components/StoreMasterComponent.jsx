import React from 'react';
import { Component } from 'react';
import ProductsPane from './ProductsPaneComponent.jsx';
import Toolbar from './ToolbarComponent.jsx';

export default class StoreMaster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
        <ProductsPane products={this.props.products}/>
      </div>
    );
  }
}