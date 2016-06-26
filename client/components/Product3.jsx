import React, { Component } from 'react';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { incrementItem, product: { name, sku } } = this.props;
    return (
      <div className="col-md-3 index-card">
        <div className="my-card" onClick={incrementItem} col-md-3>
          <div className="my-card-block">
            <h3 className="my-card-title">{name}</h3>
          </div>
          <div className="my-card-image">
          <img src={`/images/${sku}`} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}
