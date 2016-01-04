import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import wheel from './rWheel'
import branch from './rBranch'
const { syncReduxAndRouter, routeReducer } = require('redux-simple-router');

const rootReducer = combineReducers({
  counter,
  todos,
  wheel,
  branch,
  routing: routeReducer
})

export default rootReducer
