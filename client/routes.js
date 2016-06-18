import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import CoreLayout from './components/CoreLayoutComponent.jsx';
import InitialPrompt from './containers/InitialPromptContainer.js';
import ProductsPane from './containers/ProductsPaneContainer.js';
import Toolbar from './containers/ToolbarContainer.js';
// import ComponentOrContainer from './containers/Name';

//testing imports
import Testing from './components/Testing.jsx';
import Sample from './components/Sample.jsx'

export default (
  // main app routes
  <Route component={CoreLayout}>

    <Route path="/" component={InitialPrompt} >
    {/* for testing and debugging*/}
    </Route>
    <Route path="/products" component={ProductsPane} />
    <Route path="/toolbar" component={Toolbar} />
    <Route path="/testing" component={Testing}>
      {/*component available at /testing/sample*/}
      <Route path="/testing/sample" component={Sample} />
    </Route>
  </Route>

);
