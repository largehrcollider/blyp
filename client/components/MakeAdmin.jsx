import React from 'react';

import classNames from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const MakeAdmin = ({ makeAdmin }) => (
  <a
    onClick={makeAdmin}
    className={classNames(m.right, m.purple, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}
  >
    Make Admin
  </a>
)

export default MakeAdmin;
