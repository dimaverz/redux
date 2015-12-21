import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import wheel from './rWheel'
const { syncReduxAndRouter, routeReducer } = require('redux-simple-router');

const rootReducer = combineReducers({
  counter,
  todos,
  wheel,
  routing: routeReducer
})

export default rootReducer
