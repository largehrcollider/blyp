import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.auth(this.props.jwt)
  }
  render() {
    return (<div>{this.props.children}</div>);
  }
}

export default Auth;
