import React, {Component} from 'react';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {basketItems} = this.props;
    return (
      <h1>Checkout!</h1>
    )
  }
}
