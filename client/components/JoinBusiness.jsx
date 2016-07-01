import React, { Component } from 'react';
import index from '../assets/styles/index.css';

export default class JoinBusiness extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: { business }, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <label className={index.createProductLabel}>Business to join: <input className={index.createProduct} type='text' {...business}/></label>
          </div>
          <div className=''>
            <input type='submit' value='JOIN' />
          </div>
        </form>
      </div>
    );
  }
}
