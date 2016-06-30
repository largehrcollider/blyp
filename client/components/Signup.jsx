import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fields: { name, username, email, password }, handleSubmit, signup } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(signup)}>
          <label>Name: <input type="text" {...name}></input></label>
          <label>Username: <input type="text" {...username}></input></label>
          <label>Email: <input type="text" {...email}></input></label>
          <label>Password: <input type="password" {...password}></input></label>
          <button>Sign Up</button>
        </form>
        <div>Already have an accout? <Link to='/'>Log in</Link></div>
      </div>
    );
  }
}
