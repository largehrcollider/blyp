import React, { Component } from 'react';
import Accept from '../containers/Accept.js';
import Decline from '../containers/Decline.js';

const Request = ({ username }) => (
  <div>
    {username}
    <Accept username={username} />
    <Decline username={username} />
  </div>
)

export default Request;
