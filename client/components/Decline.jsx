import React, { Component } from 'react';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

const Decline = ({ decline }) => (
  <a
    onClick={decline}
    className={c(m.right, m.red, m.lighten2, m.wavesEffect, m.wavesLight, m.btn)}
    >
    Decline
  </a>
);

export default Decline;
