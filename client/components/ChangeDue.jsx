import React from 'react';
import centsNumberToString from '../helpers/centsNumberToString.js';

const PaymentMethodModal = ({ due, receiptPage }) => (
  <div>
    <h3>Change: ${centsNumberToString(due)}</h3>
    <button onClick={receiptPage}>DONE</button>
  </div>
);

export default PaymentMethodModal;
