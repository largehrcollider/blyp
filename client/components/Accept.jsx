import React, { Component } from 'react';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const Accept = ({ accept }) => (
  <a
    onClick={accept}
    className={c(m.right, m.green, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}
  >
    Accept
  </a>
);

export default Accept;
