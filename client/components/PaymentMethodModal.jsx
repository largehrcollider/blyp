import React from 'react';
import AmountReceived from '../containers/AmountReceived.js';
import ChangeDue from '../containers/ChangeDue.js';
import ProcessCreditCard from '../containers/ProcessCreditCard.js';

const PaymentMethodModal = ({ method, cashReceivedEnough}) => (
  <div>
    <div>
      {(method === 'cash') && !cashReceivedEnough && (
        <AmountReceived />
      )}
    </div>
    <div>
      {(method === 'cash') && cashReceivedEnough && (
        <ChangeDue />
      )}
    </div>
    <div>
      {(method === 'credit card') && (
        <ProcessCreditCard />
      )}
    </div>
  </div>
);

export default PaymentMethodModal;
