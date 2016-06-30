import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { requests, admins, users } = this.props;
    return (
      <div>
        {(requests.length > 0) && (<h1>Pending Requests</h1>)}
        {(requests.length > 0) && (
          <div>
            {requests.map(username => (
              <Request key={user} username={username} />
            ))}
          </div>
        )}
        <h1>Admins</h1>

        <h1>Users</h1>
      </div>
    )
  }
}

export default Settings;
