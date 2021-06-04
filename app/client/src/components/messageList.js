import Messages from './messages'
import '../css/message.css'

const MessageList = ({ posts, onDelete, error }) => {

  return(
    <div className="box">
      { posts.map(post => (
        <Messages posts={ post } key={ post._id } onDelete={ onDelete } error={ error } />
      )) }
    </div>
  )

}

export default MessageList