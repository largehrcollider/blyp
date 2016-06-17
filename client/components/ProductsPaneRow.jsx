import React from 'react'
import {Component} from 'react'

export default class ProductsPaneRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
        <tr >
          <td>{this.props.row.name}</td>
        </tr>
      </div>
    );
  }
}
