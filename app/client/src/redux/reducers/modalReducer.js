import { HIDE_MODAL, OPEN_MODAL } from '../action/types'

const initState = { 
  modal: false 
}

export const modalReducer = (state = initState, action) => {
  switch(action.type)
  {
    case OPEN_MODAL:
      return { ...state, modal: true, posting: true }
    case HIDE_MODAL:
      return { ...state, modal: false }
    default:
      return state
  }
}