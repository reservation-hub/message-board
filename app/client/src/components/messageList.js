import Messages from './messages'

const MessageList = ({ posts, onDelete, error }) => {

  console.log(posts)

  return(
    <div className="box">
      { posts && posts.map(post => (
        <Messages posts={ post } key={ post._id } onDelete={ onDelete } error={ error } />
      )) }
    </div>
  )

}

export default MessageList