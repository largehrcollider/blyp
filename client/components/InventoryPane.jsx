import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductsPaneRow from './ProductsPaneRow.jsx';

import style from '../assets/styles/InventoryPane.css';

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
        <Link to='/create'>
          <div>CREATE NEW PRODUCT</div>
        </Link>
        {list.map(element => (
          <div className={style.row} key={element.name}>
            <Link to={`/inventory/${element.sku}`}>
              <ProductsPaneRow row={element}/>
            </Link>
          </div>
        ))}
      </div>
    );
  };
}
