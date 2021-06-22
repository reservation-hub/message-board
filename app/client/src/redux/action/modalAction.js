import { HIDE_MODAL, OPEN_MODAL } from "./types"

export const openModal = (post) => {
  console.log('open modal post : ', post)
  return {
    type: OPEN_MODAL,
    payload: true,
    post
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: false
  }
} 