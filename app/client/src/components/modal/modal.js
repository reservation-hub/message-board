import React from 'react'
import Postform from '../messages/postForm'

const Modal = ({ modalHide, error, modal }) => {
  console.log(modal)
  const data = modal.post
  console.log(modal.edit === true)
  return(
    <div className="modal-overlay" onClick={() => modalHide()}>
      <div 
        className="modal" 
        onClick={e => e.stopPropagation()}
      >
        { modal.edit ? <Postform error={ error } post={ modal.post } /> : <Postform error={ error } post={ null } /> }
        <button 
          className="modal-close" 
          onClick={() => modalHide()}
        >
          close
        </button>
      </div>
    </div>
  )
}

export default Modal