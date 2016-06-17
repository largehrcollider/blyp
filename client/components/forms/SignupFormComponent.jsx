import React from 'react'
import {Component} from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>Username: <input type="text"></input></label>
          <label>Password: <input type="password"></input></label>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
