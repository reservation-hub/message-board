import { FETCH_DATA, ADD_MESSAGE, DELETE_MESSAGE } from '../action/boardAction'

const initState = []

export const boardReducer = (state = initState, action) => 
{

  switch(action.type)
  {
    case FETCH_DATA:
      return state = action.payload
    case ADD_MESSAGE:
      return { ...state, posts: action.payload }
    case DELETE_MESSAGE:
      return state.filter((res) => res._id !== action.payload)
    default:
      return state
  }

}


export default boardReducer