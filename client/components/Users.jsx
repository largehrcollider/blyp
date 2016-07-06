import React from 'react';
import User from './User.jsx';

import classNames from 'classnames';
import materialize from '../assets/materialize/css/materialize.css';

const Users = ({ usernames }) => (
  <ul className={classNames(materialize.collection, materialize.withHeader)}>
    <li className={materialize.collectionHeader}><h4>Users</h4></li>
    {usernames.map(u => (
      <User key={u.username} username={u.username} />
    ))}
  </ul>
);

export default Users;
