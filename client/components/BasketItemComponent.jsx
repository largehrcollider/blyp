import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name} = this.props;
    return (
      <div>
        {name}
      </div>
    )
  }
}
