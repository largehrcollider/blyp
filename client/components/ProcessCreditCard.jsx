import React, { Component } from 'react'
import {asyncLoad} from 'react-async-loader';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: {number, exp_month, exp_year, cvc}, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <input type='text' placeholder="credit card number" {...number}/>
          </div>
          <div>
            <input type='text' placeholder="expiration month"{...exp_month}/>
          </div>
          <div>
            <input type='text' placeholder="expiration year"{...exp_year}/>
          </div>
          <div>
            <input type='text' placeholder="cvc"{...cvc}/>
          </div>
          <div className=''>
            <input type='submit' value='CHARGE'/>
          </div>
        </form>
      </div>
    );
  }
}
