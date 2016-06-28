import React from 'react';
import OverviewPane from './OverviewPane.jsx';
import PaymentPane from './PaymentPane.jsx';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const Checkout = () => (
  <div>
    <div className={bootstrap.colmd3}>
      <OverviewPane />
    </div>
    <div className={bootstrap.colmd9}>
      <PaymentPane />
    </div>
  </div>
);

export default Checkout;
