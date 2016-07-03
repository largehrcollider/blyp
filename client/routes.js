import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import CoreLayout from './containers/CoreLayout.js';
import InitialPrompt from './containers/InitialPromptContainer.js';
import Toolbar from './containers/ToolbarContainer.js';
import StoreMaster from './containers/StoreMasterContainer.js';
import Chat from './containers/ChatContainer.js';
import Sell from './components/Sell.jsx';
import Checkout from './components/Checkout.jsx';
import Inventory from './components/Inventory.jsx';
import ProductEditor from './containers/ProductEditor.js';
import Signup from './containers/Signup.js';
import Profile from './containers/Profile_test.js';
import Settings from './containers/Settings.js';
import Auth from './containers/Auth.js';
import Receipt from './components/ReceiptPane.jsx'

//testing imports
import Testing from './components/Testing.jsx';
import CreateProduct from './containers/CreateProduct.js'

export default (
  <Route>
    <Route component={Auth}>
      <Route path="/" component={InitialPrompt} />
      <Route path='/signup' component={Signup} />
      <Route component={CoreLayout}>
        <Route path="/checkout" component={Checkout} />
        <Route path="/create" component={CreateProduct} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/inventory/:sku' component={ProductEditor} />
        <Route path="/sell" component={Sell} />
        <Route path='/profile' component={Profile} />
        <Route path='/settings' component={Settings} />
        <Route path='/receipt' component={Receipt}/>
      </Route>
    </Route>

    {/* for testing and debugging*/}
    <Route path="/testing" component={Testing}>
      {/*component available at /testing/sample*/}
      <Route path="/testing/sell" component={Sell} />
      <Route path="/testing/checkout" component={Checkout} />
    </Route>
  </Route>
);
