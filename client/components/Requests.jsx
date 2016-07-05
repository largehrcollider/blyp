import React, { Component } from 'react';
import Request from '../containers/Request.js';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

class Requests extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { usernames } = this.props;
    return (
      <ul className={c(m.collection, m.withHeader)}>
        <li className={m.collectionHeader}><h4>Requests</h4></li>
        {usernames.map(u => (
          <Request key={u} username={u} />
        ))}
      </ul>
    )
  }
}

export default Requests;
