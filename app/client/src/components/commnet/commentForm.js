import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addComment, editComment } from '../../redux/action/boardAction'
import useInput from "../../utils/useInput"
import HasError from '../common/error'

const CommentForm = ({ postId, comment, error }) => {

  const dispatch = useDispatch()

  const [ inputs, setInputs ] = useInput({
    name: comment ? comment.name : '', 
    text: comment ? comment.text : '', 
    password: ''
  })

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (comment._id) dispatch(editComment(postId, comment._id, inputs))
      else dispatch(addComment(postId, inputs))
    },
    [dispatch, inputs, postId, comment._id],
  )

  const hasError = (param) => 
    error.details && 
      error.details.errors.map((error, index ) => 
        error.param === (param) && ( 
          <HasError key={ index } error={ error.msg } /> 
      ))

  return (
    <form className="comment-form" onSubmit={ onSubmit }>
      <div className="form ">
        <input 
          type="text" 
          name="name"
          autoComplete="off"
          value={ inputs.name || '' } 
          onChange={ setInputs }
          placeholder="your name" 
        />
        { error.details && hasError('name') }
      </div>
      <div className="form ">
        <input 
          type="password" 
          name="password" 
          autoComplete="off"
          value={ inputs.password }
          onChange={ setInputs }
          placeholder="passwrod" 
        />
        { error.details && hasError('password') }
      </div>
      <div className="form ">
        <textarea 
          name="text" 
          value={ inputs.text || '' }
          onChange={ setInputs }
          placeholder="text" 
        />
        { error.details && hasError('text') }
      </div>
      <button>
        Submit
      </button>
    </form> 
  )
}

export default CommentForm