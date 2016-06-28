import React from 'react';
import SelectBusiness from '../containers/SelectBusiness.js';

const TestProfile = ({ businesses }) => (
  <div>
    {businesses.map(b => (
      <SelectBusiness key={b} business={b} />
    ))}
  </div>
);

export default TestProfile;
