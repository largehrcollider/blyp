import React from 'react'
import {Component} from 'react'
import material from '../assets/materialize/css/materialize.css';

export default class ProductsPaneRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className={material.collectionItem}>
        <span>{this.props.row.name}</span>
        <span>{this.props.row.price}</span>
        <span>{this.props.row.quantity}</span>
        <span>{this.props.row.category}</span>
        <span>{this.props.row.sku}</span>
      </a>
    );
  }
}
