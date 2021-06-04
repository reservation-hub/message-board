import React, { useState, useCallback } from 'react'
import moment from 'moment'

const Messages = ({ posts, onDelete, error }) => {

  const [password, setPassword] = useState('')
  
  const onChange = useCallback(
    (e) => {
      e.preventDefault()
      setPassword(e.target.value)
    },
    [setPassword]
  )
  
  return(
    <div className="message-box">
      <div className="message-info">
        <span className="message-title">
          {posts.title}
        </span>
        <div className="line"></div>
        <span className="message-name">
          name
          <div className="indata">
           {posts.name}
          </div>
        </span>
        <span className="date">
          { moment(posts.createdAt).format('Y/M/D') }Posted
        </span>
      </div>
      <div className="message-body">
        <span className="message-dt">
          {posts.message}
        </span>
      </div>
      <div className="delete-area">
        <form>
          <input 
            type="password" 
            name="password"
            placeholder="input delete password"
            autoComplete="off"
            onChange={ onChange } 
            value={ password } 
          />
        </form>
        <button onClick={ () => onDelete(posts._id, password) }>delete</button>
      </div>
      { error.data ?
          <span className="err-msg"> {error.data.message} </span> : null
        }
    </div>
  )
}

export default Messages;