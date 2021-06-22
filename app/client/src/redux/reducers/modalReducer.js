import { HIDE_MODAL, OPEN_MODAL } from '../action/types'

const initState = { 
  modal: false,
  post: {}
}

export const modalReducer = (state = initState, action) => {
  switch(action.type)
  {
    case OPEN_MODAL:
      return { ...state, modal: action.payload, post: action.post }
    case HIDE_MODAL:
      return { ...state, modal: action.payload }
    default:
      return state
  }
}