import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, hideModal } from '../action/modalAction'
import Modal from './modal/modal'
import '../css/header.css'

const Header = () => {

  const modal = useSelector(state => state.modal.modal)
  const dispatch = useDispatch()

  const modalOpen = () => {
    dispatch(openModal())
  }

  const modalHide = () => {
    dispatch(hideModal())
  }

  return(
    <div className="header-area">
      <h1 className="title">
        Message board
      </h1>
        {modal && <Modal modalHide={  modalHide } />}
        <button 
          className="modal-button" 
          onClick={ () => modalOpen() }>
            Add Message
        </button>
    </div>
  )
}

export default Header;