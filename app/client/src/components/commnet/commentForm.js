import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addComment, editComment } from '../../redux/action/boardAction'
import useInput from "../../utils/useInput"

const CommentForm = ({ postId, comment }) => {

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

  return (
    <form className="comment-form" onSubmit={ onSubmit }>
      <div className="form ">
        <input 
          type="text" 
          name="name"
          autoComplete="off"
          value={ inputs.name || '' } 
          onChange={ setInputs }
          placeholder="username" 
        />
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
      </div>
      <div className="form ">
        <textarea 
          name="text" 
          value={ inputs.text || '' }
          onChange={ setInputs }
          placeholder="text" 
        />
      </div>
      <button>
        Submit
      </button>
    </form> 
  )
}

export default CommentForm