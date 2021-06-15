import { FETCH_DATA, ADD_MESSAGE, DELETE_MESSAGE, LOADING } from '../action/types'

export const postState = {
  posts: [],
  loading: false
}

export const boardReducer = (state = postState, action) => 
{
  switch(action.type)
  {
    case LOADING:
      return { ...state, loading: true }
    case FETCH_DATA:
      return { ...state, posts: action.payload, loading: false }
    case ADD_MESSAGE:
      return { ...state, posts: [ action.payload, ...state.posts ] }
    case DELETE_MESSAGE:
      return {
        ...state,
        posts: state.posts.filter(res => res._id !== action.payload)
      }
    default:
      return state
  }
}