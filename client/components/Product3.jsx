import React, {Component} from 'react';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, incrementItem} = this.props;
    return (
      <div className="col-md-3 index-card">
        <div className="card" onClick={incrementItem} col-md-3>
          <div className="card-block">
            <h4 className="card-title">{name}</h4>
          </div>
          <img data-src="" alt={name} />
        </div>
      </div>
    );
  }
}
