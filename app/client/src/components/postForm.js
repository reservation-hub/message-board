import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/action/boardAction'
import useInput from '../utils/useInput'

const PostForm = ({ error }) => {
  
  const dispatch = useDispatch()

  const [ inputs, setInputs ] = useInput({
    title: '',
    name: '',
    password: '',
    message: ''
  })

  const onSubmit = useCallback(
    (e) => {
      dispatch(addMessage(inputs))
      e.preventDefault()
    },
    [dispatch, inputs],
    )
    
    const checkActive = inputs.password.length < 6 || inputs.length < 3 && true
    
    const hasError = error.error && 
      error.error.map(error => (
        <span key={error.param} className="has-error">
          {error.msg}
          </span> ))

    return(
      <React.Fragment>
        <h2 className="title">
          Add Message
        </h2>
        <form className="postform" onSubmit={ onSubmit }>
          <div className="form form-title">
            <input 
              type="text" 
              name="title" 
              autoComplete="off" 
              value={ inputs.title } 
              onChange={ setInputs }
              placeholder="Message title" 
            />
            { error.error && hasError[0] }
          </div>
          <div className="form form-username">
            <input 
              type="text" 
              name="name" 
              autoComplete="off"
              value={ inputs.name } 
              onChange={ setInputs } 
              placeholder="Input your name" 
            />
            { error.error && hasError[1] }
          </div>
          <div className="form form-password">
            <input 
              type="password" 
              name="password" 
              autoComplete="off"
              value={ inputs.password } 
              onChange={ setInputs } 
              placeholder="Message password" 
            />
            { error.error && hasError[2] }
          </div>
          <div className="form form-message">
            <textarea 
              name="message" 
              value={ inputs.message } 
              onChange={ setInputs } 
              placeholder="Message" 
            />
            { error.error && hasError[3] }
          </div>
          <button className="submit-button" disabled={ checkActive }>submit</button>
        </form>
      </React.Fragment>
    )
}

export default PostForm