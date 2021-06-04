import React from 'react'
import Postform from '../postForm'
import '../../css/modal.css'
import Delete from '../delete'

const Modal = ({ modalHide, error }) => {

  return(
    <div className="modal-overlay" onClick={() => modalHide()}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <Postform error={ error } />
        {/* <Delete /> */}
        <button className="modal-close" onClick={() => modalHide()}>close</button>
      </div>
    </div>
  )
}

export default Modal