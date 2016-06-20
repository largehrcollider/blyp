import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';
import BasketItem from '../containers/BasketItemContainer.js'

export default class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {basketItems} = this.props;
    return (
      <div>
        {basketItems.map(item => (
          <BasketItem key={item.id} id={item.id}/>
        ))}
        {/*<Checkout />*/}
      </div>
    )
  }
}