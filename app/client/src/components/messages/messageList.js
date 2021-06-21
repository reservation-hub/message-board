import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../../redux/action/boardAction'
import EmptyMessage from './emptyMessage'
import Messages from './messages'

const MessageList = ({ error, posts }) => {
  
  const dispatch = useDispatch()
  
  const onDelete = useCallback((_id, password) => {
    dispatch(deleteMessage(_id, password))
  }, [dispatch])
  
  return(
    <main className="container">
      { posts.length >= 1 ? posts.map(post => (
        <Messages 
          posts={ post } 
          key={ post._id } 
          onDelete={ onDelete } 
          error={ error } 
        /> 
      )) : <EmptyMessage /> }
    </main>
  )

}

export default React.memo(MessageList)