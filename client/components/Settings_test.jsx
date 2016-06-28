import React from 'react';
import SelectBusiness from '../containers/SelectBusiness.js';
import JoinBusiness from '../containers/JoinBusiness';
import CreateBusiness from '../containers/CreateBusiness';

const Settings = ({ businesses }) => (
  <div>
    {businesses.map(b => (
      <SelectBusiness key={b} business={b} />
    ))}
    <JoinBusiness />
    <CreateBusiness />
  </div>
);

export default Settings;
