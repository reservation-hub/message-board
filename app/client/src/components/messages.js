import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../action/boardAction';

const Messages = (props) => {

  const dispatch = useDispatch()
  
  const onDelete = async (_id) => {
    dispatch(deleteMessage(props.props._id))
    window.location.href = '/'
  }

  return(
    <div className="message-box">
      <div className="message-info">
        <span className="message-title">
          title: {props.props.title}
        </span>
        <span className="message-name">
          name:  {props.props.name}
        </span>
      </div>
      <div className="message-body">
        <span className="message-dt">
          message: {props.props.message}
        </span>
      </div>
      <div>
        <button onClick={() => onDelete(props.props._id)} >delete</button>
      </div>
    </div>
  );
}

export default Messages;