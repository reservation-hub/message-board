import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/action/boardAction'
import { withRouter } from 'react-router-dom'
import '../css/postFrom.css'
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

    // console.log(error.data)

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
            onChange={ setInputs }
            placeholder="Message title" 
          />
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
        </div>
        <div className="form form-message">
          <textarea 
            name="message" 
            value={ inputs.message } 
            onChange={ setInputs } 
            placeholder="Message" 
          />
        </div>
        <div className="error-area">
          { error.data ? <span> { error.data.error } </span> : null }
        </div>
        <button className="submit-button">submit</button>
      </form>
    </>
  );
}

export default withRouter(PostForm);