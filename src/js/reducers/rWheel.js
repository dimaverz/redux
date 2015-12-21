import { FE_GET_WHEEL } from '../constants/ActionTypes'

const initialState = [
  {
    wheel_data: {},
    completed: false
  }
]


export default function rWheel(state = initialState, action) {
  switch (action.type) {
    case FE_GET_WHEEL:
      return {
        wheel_data: action.obj,
        completed: false
      }
   default:
         return state
  }
}
