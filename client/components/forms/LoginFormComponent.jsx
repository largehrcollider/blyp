import React from 'react'
import {Component} from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {username, password}, handleSubmit, attemptLogin} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(attemptLogin)}>
          <label>Username: <input type="text" {...username}></input></label>
          <label>Password: <input type="password" {...password}></input></label>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
