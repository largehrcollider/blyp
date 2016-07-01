import React from 'react';

import classNames from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const MakeUser = ({ makeUser }) => (
  <a
    onClick={makeUser}
    className={classNames(m.right, m.teal, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}
  >
    Make User
  </a>
);

export default MakeUser;
