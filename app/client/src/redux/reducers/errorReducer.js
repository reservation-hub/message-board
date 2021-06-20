import { FAILURE } from '../action/types'

const initState = {}

export const errorReducer = (state = initState, action) => {
  switch(action.type)
  {
    case FAILURE:
      return action.payload || state
    default:
      return state
  }
}