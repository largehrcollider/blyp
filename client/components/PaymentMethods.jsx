import React from 'react';
import MetodCash from '../containers/MethodCash.js';
import MetodCreditCard from '../containers/MethodCreditCard.js';

const PaymentMethods = () => (
  <div>
    <MethodCash />
    <MethodCreditCard />
  </div>
);

export default PaymentMethods;
