import React from 'react';
import CashSelector from '../containers/CashSelector.js';
import CreditCardSelector from '../containers/CreditCardSelector.js';

const PaymentMethodSelector = () => (
  <div>
    <CashSelector />
    <CreditCardSelector />
  </div>
);

export default PaymentMethodSelector;
