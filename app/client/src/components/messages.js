import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../action/boardAction'
// import history from '../history'

const Messages = ( props ) => {

  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  
  const onChange = useCallback(
    (e) => {
      e.preventDefault()
      setPassword(e.target.value)
    },
    []
  )

  const onDelete = useCallback(
    (_id, password) => {
      dispatch(deleteMessage(_id, password))
    },
    [dispatch],
  )

  return(
    <div className="message-box">
      <div className="message-info">
        <span className="message-title">
          title: {props.props.title}
        </span>
        <span className="message-name">
          name:  {props.props.name}
        </span>
      </div>
      <div className="message-body">
        <span className="message-dt">
          message: {props.props.message}
        </span>
      </div>
      <div>
        <form>
          <input 
            type="password" 
            name="password"
            placeholder="input delete password"
            autoComplete="off"
            onChange={ onChange } 
            value={ password } 
          />
          <button onClick={ () => onDelete(props.props._id, password) }>delete</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;