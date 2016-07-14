import React from 'react'
import {Component} from 'react'
import LoginForm from '../containers/forms/LoginFormContainer.js'

export default class InitialPrompt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
