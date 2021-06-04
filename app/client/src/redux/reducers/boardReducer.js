import { FETCH_DATA, ADD_MESSAGE, DELETE_MESSAGE } from '../action/types'

export const postState = {
  posts: null,
  loading: true,
  error: null
}

export const boardReducer = (state = postState, action) => 
{
  switch(action.type)
  {
    case FETCH_DATA:
      return { ...state, posts: action.payload, loading: false, error: null }
    case ADD_MESSAGE:
      return [ ...state, action.payload ]
    case DELETE_MESSAGE:
      return state.filter((res) => res._id !== action.payload)
    default:
      return state
  }
}


export default boardReducer