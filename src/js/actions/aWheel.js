import * as types from '../constants/ActionTypes'
import axios from 'axios'



export function getWheel(obj) {
  console.log('a:getWheel ', obj);
  return { type: types.FE_GET_WHEEL, obj: obj }
}
