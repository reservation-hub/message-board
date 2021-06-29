import { FETCH_DATA, ADD_MESSAGE, DELETE_MESSAGE, LOADING, ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, EDIT_MESSAGE } from '../action/types'

export const postState = {
  posts: [],
  loading: false,
  total: 1
}

export const boardReducer = (state = postState, action) => 
{
  switch(action.type)
  {
    case LOADING:
      return { ...state, loading: true }
    case FETCH_DATA:
      return { ...state, posts: action.payload, loading: false, total: action.total }
    case ADD_MESSAGE:
      return { ...state, posts: [ action.payload, ...state.posts ] }
    case EDIT_MESSAGE:
      return {
        ...state,
        post: state.posts.map(res => res._id === action.payload)
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        post: state.posts.filter(res => res._id !== action.payload)
      }
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, commnet: action.payload }
      }
    case EDIT_COMMENT:
      return {
        ...state,
        post: action.payload
      }
    case DELETE_COMMENT:
      return {
        ...state,
        post: state.posts.filter(res => res._id !== action.payload)
      }
    default:
      return state
  }
}