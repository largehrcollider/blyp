import React, { Component } from 'react';
import Accept from '../containers/Accept.js';
import Decline from '../containers/Decline.js';

const Request = ({ username }) => (
  <div>
    <img src={`/images/profile/${username}`} alt={username} />
    {username}
    <Accept username={username} />
    <Decline username={username} />
  </div>
)

export default Request;
