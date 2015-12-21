import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as page from './containers'

import DevTools from './containers/DevTools';

const store = configureStore()
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={page.App} />
        <Route path="/w" component={page.cWheel} />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
