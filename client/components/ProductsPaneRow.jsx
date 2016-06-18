import React from 'react'
import {Component} from 'react'

export default class ProductsPaneRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
        <tr >
          <td>{this.props.row.name}</td>
          <td>{this.props.row.price}</td>
          <td>{this.props.row.quantity}</td>
          <td>{this.props.row.category}</td>
          <td>{this.props.row.sku}</td>
        </tr>
    );
  }
}
