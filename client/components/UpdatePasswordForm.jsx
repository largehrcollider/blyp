import React, { Component } from 'react';
import index from '../assets/styles/index.css';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: { updateInfo }, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <input className={index.updateinfo} type='text' {...updateInfo}/>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}
