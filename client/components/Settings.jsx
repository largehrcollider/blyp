import React from 'react';
import FilterPane from '../containers/FilterPane.js';

const Settings = () => (
  <div className="container-fluid">
    <div className="col-md-2">
      <FilterPane />
    </div>
    <div className="col-md-10">
      <InventoryPane />
    </div>
  </div>
);

export default Settings;
