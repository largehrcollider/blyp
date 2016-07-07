import React from 'react';
import MakeUser from '../containers/MakeUser.js';
import Delete from '../containers/DeleteUser.js';

import classNames from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const Admin = ({ username }) => (
  <li className={classNames(m.collectionItem, m.avatar)}>
    <img className={m.circle} src={`/api/avatar/${username}`} alt={username} />
    <div className={m.row} >
      <div className={classNames(m.col, m.s8)}>
        <span className={m.title}>{username}</span>
        <p>Admin</p>
      </div>
      <div className={classNames(m.col, m.s4)}>
        <Delete username={username} />
        <MakeUser username={username} />
      </div>
    </div>
  </li>
);

export default Admin;
