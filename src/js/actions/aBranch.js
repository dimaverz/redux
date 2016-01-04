import * as types from '../constants/ActionTypes'
import axios from 'axios'

export function getBranch(obj) {
  console.log('a:getBranch ', obj);
  
  return { type: types.FE_GET_BRANCH, obj: obj }
}
