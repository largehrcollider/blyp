import React from 'react';
import ProcessCreditCardSwipe from '../containers/ProcessCreditCardSwipe.js';
import ProcessCreditCard from '../containers/ProcessCreditCard.js';
import CreditManual from '../containers/CreditManualSelector.js';
import CreditSwipe from '../containers/CreditSwipeSelector.js';

const CreditCardModal = ({ method }) => (
  <div>
    <CreditManual />
    <CreditSwipe />
    <div>
      {(method === 'swipe') && (
        <ProcessCreditCardSwipe />
      )}
    </div>

    <div>
      {(method === 'manual') && (
        <ProcessCreditCard />
      )}
    </div>

  </div>
);

export default CreditCardModal;
