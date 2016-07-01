import React, { Component } from 'react';
import Request from '../containers/Request.js';

class Requests extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { usernames } = this.props;
    return (
      <div>
        <h1>Pending Requests</h1>
        {usernames.map(u => {
          <Request key={u} username={u} />
        })}
      </div>
    )
  }
}

export default Requests;
