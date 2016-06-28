import React from 'react';
import FilterPane from '../containers/FilterPane.js';
import InventoryPane from '../containers/InventoryPane.js';
import PopulateWithFakeData from '../containers/PopulateWithFakeData.js';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const Inventory = () => (
  <div className={bootstrap.containerFluid}>
    {/*
      <PopulateWithFakeData />
    */}
    <div className={bootstrap.colmd2}>
      <FilterPane />
    </div>
    <div className={bootstrap.colmd10}>
      <InventoryPane />
    </div>
  </div>
);

export default Inventory;
