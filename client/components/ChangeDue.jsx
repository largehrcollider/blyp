import React from 'react';

const PaymentMethodModal = ({ due, receiptPage }) => (
  <div>
    <h3>Change: ${due}</h3>
    <button onClick={receiptPage}>DONE</button>
  </div>
);

export default PaymentMethodModal;
