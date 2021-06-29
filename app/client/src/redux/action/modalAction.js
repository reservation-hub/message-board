import { HIDE_MODAL, OPEN_MODAL, OPEN_EDIT_MODAL } from "./types"

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    payload: true,
    edit:　false
  }
}

export const openEditModal = (post) => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: true,
    edit: true,
    post
  }
}



export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: false
  }
} 