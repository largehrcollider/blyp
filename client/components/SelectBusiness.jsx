import React from 'react'

const SelectBusiness = ({ checkin, business }) => (
  <div onClick={checkin}>
    {business}
  </div>
);

export default SelectBusiness;
