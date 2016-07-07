import React from 'react'
import {Component} from 'react'
import material from '../assets/materialize/css/materialize.css';
import { Link } from 'react-router';

export default class ProducttdeRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
     
        <td><Link to={`/inventory/${this.props.row.sku}`}>{this.props.row.name}</Link></td>
        <td> {this.props.row.price} </td>
        <td>{this.props.row.quantity}</td>
        <td>{this.props.row.category}</td>
        <td>{this.props.row.sku}</td>
      
      </tr>
    );
  }
}


