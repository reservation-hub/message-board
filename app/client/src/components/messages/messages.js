import React, { useState, useCallback } from 'react'
import moment from 'moment'
import useInput from '../../utils/useInput'
import HasError from '../common/error'
import CommentList from '../commnet/commentList'

const Messages = ({ posts, onDelete, error }) => {

  const [more, setMore] = useState(false)
  
  const [value, setvalue] = useInput({ password: '' })

  const checkActive = value.password.length < 6 && true
  
  const showMore = useCallback(
    async () => {
      posts.message.length > 50 && await setMore(more => !more) 
    },
    [posts],
  )

  return(
    <article className="message-container">
      <div className="message-info">
        <span className="message-title">
          {posts.title}
        </span>
        <div className="line"></div>
        <span className="message-name">
          name
          <div className="username">
           {posts.name}
          </div>
        </span>
        <span className="message-date">
          { moment(posts.createdAt).format('Y/M/D') }Posted
        </span>
      </div>
      <div className="message-body">
        <span className="message-dt">
          { more ? 
              posts.message :
              posts.message.substring(0, 200) }
          { posts.message.length > 50 && (
            <React.Fragment>
              <span className={ more ? "less" : "more" }>
                ...
              </span>
              <span 
                onClick={ showMore }
                className={ more ? "hide" : "show" }
              >
                { more ? "less" : "more" }
              </span>
            </React.Fragment>
          )}
        </span>
      </div>
      <div className="message-delete">
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
          className={ checkActive ? "disable" : "active" }
          onClick={ () => onDelete(posts._id, value.password) } 
          disabled={ checkActive } >
            delete
        </button>
      </div>
      { error && error.id === posts._id && 
        <p className="message-error">
          <HasError error={ error.message } />
        </p>
      }
      <CommentList 
        comments={ posts.comments } 
        postId={ posts._id }
        error={ error } 
      />
    </article>
  )
}

export default React.memo(Messages);