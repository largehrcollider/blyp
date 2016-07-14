import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Root from './containers/RootContainer.js';
import configureStore from './store/configureStore';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import jQuery from 'jquery';
import $ from 'jquery';
import hammerjs from 'hammerjs';

// import './assets/styles/index.css';
// import './assets/styles/bootstrap.css';
// import './assets/css/materialize.css';
// import './assets/materialize/js/materialize.js';


// injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
