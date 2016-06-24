import React from 'react';
import FilterPane from '../containers/FilterPane.js';
import InventoryPane from '../containers/InventoryPane.js';
import PopulateWithFakeData from '../containers/PopulateWithFakeData.js';

const Inventory = () => (
  <div className="container-fluid">
    <PopulateWithFakeData />
    <div className="col-md-2">
      <FilterPane />
    </div>
    <div className="col-md-10">
      <InventoryPane />
    </div>
  </div>
);

export default Inventory;
