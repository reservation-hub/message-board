import React from 'react'
import Postform from '../messages/postForm'

const Modal = ({ modalHide, error, inputs, dataSet }) => {

  return(
    <div className="modal-overlay" onClick={() => modalHide()}>
      <div 
        className="modal" 
        onClick={e => e.stopPropagation()}
      >
        <Postform error={ error } inputs={ inputs } dataSet={ dataSet } />
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