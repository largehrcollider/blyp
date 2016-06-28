import React, { Component } from 'react';

export default class CreateBusiness extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: { business }, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <label>Business to create: <input type='text' {...business}/></label>
          </div>
          <div className=''>
            <input type='submit' value='CREATE' />
          </div>
        </form>
      </div>
    );
  }
}
