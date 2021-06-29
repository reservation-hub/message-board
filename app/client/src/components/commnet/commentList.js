import React, { useState, useCallback } from 'react'
import Comments from './comment'
import CommentForm from '../commnet/commentForm'
import Pagination from '../common/pagination'

const CommentList = ({ comments, postId, error }) => {

  const [offset, setOffset] = useState(0)
  const perPage = 5

  const [more, setMore] = useState(false)
  const [data, setdata] = useState([])
  
  const showHide = useCallback(() => {
      setMore(more => !more)
    },
    [],
  )

  return (
    <section className="comment-area">
      <div className="add-comment">
        <span onClick={ showHide }>Add Commnet</span>
        { more && <CommentForm postId={ postId } 
          comment={ data } error={ error } /> }
      </div>
      <div>
        <div>
          <span>
            totalComment({ comments.length })
          </span>
        </div>
        { comments.slice(offset, offset + perPage).map(comment => (
            <Comments 
              comment={ comment } 
              key={ comment._id } 
              postId={ postId }
              setMore={ setMore }
              setdata={ setdata }
              error={ error }
            />
        )) }
      </div>
      { comments.length > 5 && 
        <Pagination 
          totalPage={ Math.ceil( comments.length / perPage ) }
          perPage={ perPage }
          paginate={ setOffset }
        /> }
    </section>
  )
}

export default CommentList