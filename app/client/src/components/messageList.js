import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Messages from './messages'
import { fetchList } from '../action/boardAction'
import '../css/message.css'

const MessageList = () => {

  const posts = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchList())
  }, [dispatch])

  return(
    <div className="box">
      { posts && posts.map(post => (
        <Messages props={ post } key={ post._id } />
      )) }
    </div>
  );

}

export default MessageList