import { HIDE_MODAL, OPEN_MODAL ,OPEN_EDIT_MODAL} from '../action/types'

const initState = { 
  modal: false,
  edit:　false,
  post: []
}

export const modalReducer = (state = initState, action) => {
  switch(action.type)
  {
    case OPEN_MODAL:
      return { ...state, modal: action.payload, edit:action.edit}
    case OPEN_EDIT_MODAL:
      return {...state,modal: action.payload, edit: action.edit, post: action.post }
    case HIDE_MODAL:
      return { ...state, modal: action.payload }
    default:
      return state
  }
}