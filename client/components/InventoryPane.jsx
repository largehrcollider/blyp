import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductsPaneRow from './ProductsPaneRow.jsx';
import m from '../assets/materialize/css/materialize.css';
import classNames from 'classnames';
import index from '../assets/styles/index.css';

export default class InventoryPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products, visibilityFilter } = this.props;
    // the prop `products` is object, and filter transforms to array
    const filter = (products) => {
      var results = [];
      for (var key in products) {
        if ((products[key].categories.indexOf(visibilityFilter) !== -1)  || visibilityFilter === 'all') {
          results.push(products[key]);
        }
      }
      return results;
    };


    // input of order expected to be array
    const order = (products) => {
      return products;
    };

    var list = order(filter(products));
    return (
      <div>
        <div>
        <table className={classNames(m.table, m.bordered, m.white, m.grey, m.lighten5, m.highlight)}>
          <thead>
            <tr>
              <th className={m.th}>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Sku</th>
            </tr>
          </thead>
        <tbody>
        {list.map(element => (
            <ProductsPaneRow row={element}/>
        ))}
        </tbody>
        </table>
        </div>
        <Link to='/create'>
          <div className={classNames(m.teal, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}>
          CREATE NEW PRODUCT
          </div>
        </Link>
      </div>
    );
  };
}
