import React, { Component } from 'react';
import Accept from '../containers/Accept.js';
import Decline from '../containers/Decline.js';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const Request = ({ username }) => (
  <li className={c(m.collectionItem, m.avatar)}>
    <img className={m.circle} src={`/api/avatar/${username}`} alt={username} />
    <div className={m.row} >
      <div className={c(m.col, m.s8)}>
        <span className={m.title}>{username}</span>
      </div>
      <div className={c(m.col, m.s4)}>
        <Decline username={username} />
        <Accept username={username} />
      </div>
    </div>
  </li>
);

export default Request;
