import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../action/boardAction'
import '../css/postFrom.css'

const PostForm = () => {
    
  const [ inputs, setInputs ] = useState({
    title: '',
    name: '',
    password: '',
    message: ''
  })
    
  const dispatch = useDispatch()

  const onChange = useCallback(
    (e) => {
      e.preventDefault()
      const { name, value } = e.target
      setInputs({ ...inputs, [name]: value })
    },
    [inputs],
  )

  const onSubmit = useCallback(
    (e) => {
        e.preventDefault()
        dispatch(addMessage(inputs))  
         window.location.href = ('/')
    },
    [dispatch, inputs],
    ) 

  return(
    <>
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
            onChange={ onChange }
            placeholder="Message title" 
          />
        </div>
        <div className="form form-username">
          <input 
            type="text" 
            name="name" 
            autoComplete="off"
            value={ inputs.name } 
            onChange={ onChange } 
            placeholder="Input your name" 
          />
        </div>
        <div className="form form-password">
          <input 
            type="password" 
            name="password" 
            autoComplete="off"
            value={ inputs.password } 
            onChange={ onChange } 
            placeholder="Message password" 
          />
        </div>
        <div className="form form-message">
          <textarea 
            name="message" 
            value={ inputs.message } 
            onChange={ onChange } 
            placeholder="Message" 
          />
        </div>
        <button 
          className="submit-button" 
          type="submit"
        >  
          submit
        </button>
      </form>
    </>
  );
}

export default PostForm;