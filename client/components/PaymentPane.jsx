import React from 'react';
import PaymentMathods from './PaymentMethods.jsx';
import PaymentMethodModal from '../containers/PaymentMethodModal.js';

const PaymentPane = () => (
  <div>
    <PaymentMethods />
    <PaymentMethodModal />
  </div>
);

export default PaymentPane;
