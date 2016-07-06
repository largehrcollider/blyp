import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const Logout = ({ logout }) => (
  <div className={index.logOut} onClick={logout}>
    <h4>Logout</h4>
  </div>
);

export default Logout;
