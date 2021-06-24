import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../redux/action/boardAction'
import useInput from '../../utils/useInput'

const Comments = ({ comment, postId }) => {
  
  const dispatch = useDispatch()

  const [ value, setvalue ] = useInput({ password: '' })

  const onDelete = useCallback(
    (postId, commentId, password) => {
      dispatch(deleteComment(postId, commentId, password))
    },
    [dispatch],
  )

  return (
    <div className="comment-container">
      <div className="commnet-info">
        <div className="comment-name">
          <span>
            { comment.name }
          </span>
        </div>
        <div className="comment-text">
          <span>
            { comment.text }
          </span>
        </div>
      </div>
      <div className="comment-delete">
        <form>
          <input 
            type="password" 
            name="password"
            placeholder="input delete password"
            autoComplete="off"
            onChange={ setvalue } 
            value={ value.password } 
          />
        </form>
        <button 
          onClick={ () => 
            onDelete(
              postId, comment._id, value.password
            ) }
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default Comments