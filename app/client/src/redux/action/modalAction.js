import { HIDE_MODAL, OPEN_MODAL } from "./types"

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    payload: true
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: false
  }
} 