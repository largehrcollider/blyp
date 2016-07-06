import React from 'react';
import MakeAdmin from '../containers/MakeAdmin.js';
import Delete from '../containers/DeleteUser.js';

import classNames from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const User = ({ username }) => (
  <li className={classNames(m.collectionItem, m.avatar)}>
    <img className={m.circle} src={`/images/profile/${username}`} alt={username} />
    <div className={m.row} >
      <div className={classNames(m.col, m.s8)}>
        <span className={m.title}>{username}</span>
        <p>Cashier</p>
      </div>
      <div className={classNames(m.col, m.s4)}>
        <Delete username={username} />
        <MakeAdmin username={username} />
      </div>
    </div>
  </li>
);

export default User;
