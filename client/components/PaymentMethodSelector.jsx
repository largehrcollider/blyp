import React from 'react';
import CashSelector from '../containers/CashSelector.js';
import CreditCardSelector from '../containers/CashSelector.js';

const PaymentMethods = () => (
  <div>
    <CashSelector />
    <CreditCardSelector />
  </div>
);

export default PaymentMethods;
