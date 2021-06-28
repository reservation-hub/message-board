import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../redux/action/boardAction'
import useInput from '../../utils/useInput'
import HasError from '../common/error'

const PostForm = ({ error }) => {
  
  const dispatch = useDispatch()

  const [ inputs, setInputs ] = useInput({
    title: '',
    name: '',
    password: '',
    message: ''
  })

  const onSubmit = useCallback(e => {
    dispatch(addMessage(inputs))
    e.preventDefault()
  },
  [dispatch, inputs])
    
  const checkActive = 
    inputs.password.length < 1 ||
    inputs.title.length < 1 ||
    inputs.name.length < 1 ||
    inputs.message.length < 1 ? 
      true : false
    
  const hasError = (param) => 
    error.details && 
      error.details.map((error, index ) => 
        error.param === (param) && ( 
          <HasError key={ index } error={ error.msg } /> 
      ))

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
          { error.details && hasError('title') }
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
          { error.details && hasError('name') }
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
          { error.details && hasError('password') }
        </div>
        <div className="form form-message">
          <textarea 
            name="message" 
            value={ inputs.message } 
            onChange={ setInputs } 
            placeholder="Message" 
          />
          { error.details && hasError('message') }
        </div>
        <button 
          className={ checkActive ? 
            "submit-disable" : "submit-active" } 
          disabled={ checkActive }
        >
          submit
        </button>
      </form>
    </React.Fragment>
  )
}

export default PostForm