import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import axios from 'axios'

import configureStore from './store/configureStore'

import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import * as page from './containers'

import DevTools from './containers/DevTools';

import Dashboard from './containers/Dashboard';
import Branch from './containers/Branch';

//import './app.css'

const store = configureStore()
const history = browserHistory;//createHistory()

syncReduxAndRouter(history, store)
console.log('browserHistory ', browserHistory);
let obj = {
      tag: 'ww',
      module: 'branch',
      action: 'get-list',
      filter: {
         bid: 1
      }
}

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
       <Route path="/" component={page.App} >
          <IndexRoute component={Dashboard} />
          <Route path="branch" component={Branch} />
       </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

// axios({
//   method: 'post',
//   url: 'http://localhost/canabi/wwapi',
//   data: obj,
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8'
//   }
// }).then(function (response) {
//         console.log('good : ', response)
//         render(
//           <Provider store={store}>
//             <div>
//               <Router history={history}>
//                <Route path="/" component={page.App} >
//                   <IndexRoute component={Dashboard} />
//                   <Route path="branch" component={Branch} />
//                </Route>
//               </Router>
//               <DevTools />
//             </div>
//           </Provider>,
//           document.getElementById('root')
//         )
//       })
//       .catch(function (response) {
//         console.log('error : ', response)
//       })

// axios.post('http://localhost/canabi/', obj)
//       .then(function (response) {
//         console.log('good : ', response)
//         render(
//           <Provider store={store}>
//             <div>
//               <Router history={history}>
//                 <Route path="/" component={page.App} />
//                 <Route path="/w" component={page.cWheel} />
//               </Router>
//               <DevTools />
//             </div>
//           </Provider>,
//           document.getElementById('root')
//         )
//       })
//       .catch(function (response) {
//         console.log('error : ', response)
//       })
/**/
