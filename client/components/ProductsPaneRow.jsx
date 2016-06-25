import React from 'react'
import {Component} from 'react'

export default class ProductsPaneRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <span>{this.props.row.name}</span>
        <span>{this.props.row.price}</span>
        <span>{this.props.row.quantity}</span>
        <span>{this.props.row.category}</span>
        <span>{this.props.row.sku}</span>
      </span>
    );
  }
}
