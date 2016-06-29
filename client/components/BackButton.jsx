import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

export default ({ back }) => (
  <button className={index.backButton+" "+material.btn +" "+material.wavesYellow+" "+ material.wavesEffect +" "+ material.wavesLight} onClick={back}>
    Back</button>
)
