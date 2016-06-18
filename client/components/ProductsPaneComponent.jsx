import React from 'react'
import {Component} from 'react'
import ProductsPaneRow from './ProductsPaneRow.jsx'

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
          {this.props.productsData.map(
            element =>
            <ProductsPaneRow key={element.name} row={element}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}
