import { FE_GET_BRANCH } from '../constants/ActionTypes'

const initialState = [
  {
    branch_data: {},
    completed: false
  }
]


export default function rWheel(state = initialState, action) {
  switch (action.type) {
    case FE_GET_BRANCH:
      console.log('FE_GET_BRANCH');
      return {
        branch_data: action.obj,
        completed: false
      }
   default:
         return state
  }
}
