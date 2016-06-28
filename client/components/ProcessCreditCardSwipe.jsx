import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: {creditswipe}, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <input type='text' placeholder="swipe your card" {...creditswipe}/>
          </div>
          <div className=''>
            <input type='submit' value='CHARGE'/>
          </div>
        </form>
      </div>
    );
  }
}
