import React from 'react'
import Postform from '../postForm'
import '../../css/modal.css'

const Modal = ({ modalHide }) => {

  return(
    <div className="modal-overlay" onClick={() => modalHide()}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <Postform />
        <button className="modal-close" onClick={() => modalHide()}>close</button>
      </div>
    </div>
  )
}

export default Modal