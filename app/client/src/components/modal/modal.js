import React from 'react'
import Postform from '../postForm'

const Modal = ({ modalHide, error }) => {

  return(
    <div className="modal-overlay" onClick={() => modalHide()}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <Postform error={ error } />
        <button className="modal-close" onClick={() => modalHide()}>close</button>
      </div>
    </div>
  )
}

export default Modal