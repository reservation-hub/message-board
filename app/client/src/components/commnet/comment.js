import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../redux/action/boardAction'
import moment from 'moment'
import useInput from '../../utils/useInput'
import HasError from '../common/error'

const Comments = ({ comment, postId, setMore, setdata, error }) => {
  
  const dispatch = useDispatch()
  
  const [ value, setvalue ] = useInput({ password: '' })

  const onEdit = useCallback(
    (e) => {
      e.preventDefault()
      setMore(true)
      setdata(comment)
    }, [setMore, setdata, comment])

  const onDelete = useCallback(
    (postId, commentId, password) => {
      dispatch(deleteComment(postId, commentId, password))
    }, [dispatch])

  return (
    <div className="comment-container">
      <div className="commnet-info">
        <div className="comment-name">
          <span>
            { comment.name }
          </span>
        </div>
        <div className="comment-date">
          <span>
            { moment(comment.createdAt).format('Y/M/D') }
          </span>
        </div>
      </div>
      <div>
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
      <button onClick={ onEdit }>
        edit
      </button>
      {/* is a problem with the error message */}
      {/* reason: id value get failed */}
      { error.error && <HasError error={ error.error } /> }
    </div>
  )
}

export default Comments