import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import CoreLayout from './components/CoreLayoutComponent.jsx';
import InitialPrompt from './containers/InitialPromptContainer.js';
import ProductsPane from './containers/ProductsPaneContainer.js';
import Toolbar from './containers/ToolbarContainer.js';
import StoreMaster from './containers/StoreMasterContainer.js';
import Chat from './containers/ChatContainer.js';
import Sell from './components/Sell.jsx';
import Checkout from './components/Checkout.jsx'
// import ComponentOrContainer from './containers/Name';

//testing imports
import Testing from './components/Testing.jsx';
import CreateProduct from './containers/CreateProduct.js'

export default (
  // main app routes
  <Route component={CoreLayout}>
    <Route path="/" component={InitialPrompt} />
    <Route path="/sell" component={Sell} />
    <Route path="/checkout" component={Checkout} />

    {/* for testing and debugging*/}
    <Route path="/testing" component={Testing}>
      {/*component available at /testing/sample*/}
      <Route path="/testing/sell" component={Sell} />
      <Route path="/testing/checkout" component={Checkout} />
      <Route path="/testing/create" component={CreateProduct}
    </Route>
  </Route>

);
