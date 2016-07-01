import React from 'react';

const PaymentMethodModal = ({ due, checkoutCompleted }) => (
  <div>
    <h3>Change: ${due}</h3>
    <button onClick={checkoutCompleted}>DONE</button>
  </div>
);

export default PaymentMethodModal;
