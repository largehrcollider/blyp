import React, { Component } from 'react';
import Request from '../containers/Request.js';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.notifications();
  }
  render() {
    // pending, add array of usernames
    const { usernames } = this.props;
    return (
      <div>
        {usernames.map(u => {
          <Request key={u}, username={u} />
        })}
      </div>
    )
  }
}

export default Notifications;
