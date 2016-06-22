import React from 'react';

const PaymentMethodModal = ({ due, done }) => (
  <div>
    <h3>${due}</h3>
    <button onClick={done}>DONE</button>
  </div>
);

export default PaymentMethodModal;
