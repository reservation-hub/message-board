export const OPEN_MODAL = 'OPEN_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    payload: { modal:true }
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: { modal: false }
  }
} 