import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const MethodCash = ({ selectCash }) => (
  <div className={index.payButton} onClick={selectCash}>
    Cash
  </div>
);

export default MethodCash;
