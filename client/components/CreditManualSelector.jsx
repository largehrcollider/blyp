import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const ManualCreditCard = ({ selectManual }) => (
  <div className={index.creditButton +" "+material.wavesEffect+" "+material.wavesLight+" "+material.btn} onClick={selectManual}>
    Manual Entry
  </div>
);

export default ManualCreditCard;
