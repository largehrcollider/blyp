import React from 'react';

import classNames from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const DeleteUser = ({ deleteUser }) => (
  <a
    onClick={deleteUser}
    className={classNames(m.right, m.red, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}
  >
    Delete
  </a>
)

export default DeleteUser;
