import React from 'react';
// import axios from 'axios';

const Messages = ({ post }) => {

  const { title, name, message } = post

  return(
    <div className="message-box">
      <div className="message-info">
        <span className="message-title">
          title: { title }
        </span>
        <span className="message-name">
          name: { name } 
        </span>
      </div>
      <div className="message-body">
        <span className="message-dt">
          message: { message } 
        </span>
      </div>
    </div>
  );
}

export default Messages;