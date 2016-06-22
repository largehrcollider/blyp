import React from 'react';
import OverviewPane from "./OverviewPane.jsx"
// import PaymentPane from

const Checkout = () => (
  <div>
    <div className="col-md-3">
      <OverviewPane />
    </div>
    <div className="col-md-9">
      {/*<PaymentPane /> */}
    </div>
  </div>
);

export default Checkout;
