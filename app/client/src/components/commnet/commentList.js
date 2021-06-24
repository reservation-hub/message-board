import Comments from './comment'
import CommentForm from '../commnet/commentForm'


const CommentList = ({ comments, postId, error }) => {
  
  return (
    <section className="comment-area">
      <CommentForm postId={ postId } />
      { comments.map(comment => (
        <Comments 
          comment={ comment } 
          key={ comment._id } 
          postId={ postId }
          error={ error }
        />
      )) }
    </section>
  )
}

export default CommentList