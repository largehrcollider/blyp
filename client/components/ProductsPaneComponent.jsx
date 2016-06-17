import React from 'react'
import {Component} from 'react'

export default class ProductsPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
        <table>
          <tbody>
          {this.props.list.map(
            element =>
            <ProductsPaneRow row={element}/>
            )}
          
          </tbody>
        </table>
      </div>
    );
  }
}
