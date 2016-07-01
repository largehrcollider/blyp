import React from 'react'
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

const SelectBusiness = ({ checkin, business }) => (
  <button className={index.selectBusiness+" "+material.btn +" "+material.wavesYellow+" "+ material.wavesEffect +" "+ material.wavesLight} onClick={checkin}>
    {business}
  </button>
);

export default SelectBusiness;
