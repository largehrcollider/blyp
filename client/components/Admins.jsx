import React from 'react';
import Admin from './Admin.jsx';

import classNames from 'classnames';
import materialize from '../assets/materialize/css/materialize.css';

const Admins = ({ usernames }) => (
  <ul className={classNames(materialize.collection, materialize.withHeader)}>
    <li className={materialize.collectionHeader}><h4>Admins</h4></li>
    {usernames.map(u => (
      <Admin key={u} username={u} />
    ))}
  </ul>
);

export default Admins;
